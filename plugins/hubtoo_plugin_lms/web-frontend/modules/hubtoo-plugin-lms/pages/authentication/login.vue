<template>
  <div class="auth-container">
    <div class="auth-box">
      <!-- Toggle between Login and Register -->
      <div class="auth-toggle">
        <button
          @click="showRegister = false"
          :class="{ active: !showRegister }"
        >
          Login
        </button>
        <button
          @click="showRegister = true"
          :class="{ active: showRegister }"
        >
          Register
        </button>
      </div>

      <!-- Login Form -->
      <div v-if="!showRegister" class="auth-form">
        <h2>Login to Continue</h2>

        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <input
              type="text"
              v-model="loginData.username"
              placeholder="Enter your username"
              required
              :class="{'input-error': formErrors.username}"
            />
            <p v-if="formErrors.username" class="error-text">{{ formErrors.username }}</p>
          </div>
          <div class="form-group">
            <input
              type="password"
              v-model="loginData.password"
              placeholder="Enter your password"
              required
              :class="{'input-error': formErrors.password}"
            />
            <p v-if="formErrors.password" class="error-text">{{ formErrors.password }}</p>
          </div>
          <button type="submit" class="auth-button" :disabled="loading">
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </form>
      </div>

      <!-- Registration Form -->
      <div v-else class="auth-form">
        <h2>Create an Account</h2>

        <form @submit.prevent="handleRegister">
          <div class="form-group">
            <input
              type="text"
              v-model="registerData.username"
              placeholder="Choose a username"
              required
              :class="{'input-error': formErrors.username}"
            />
            <p v-if="formErrors.username" class="error-text">{{ formErrors.username }}</p>
          </div>
          <div class="form-group">
            <input
              type="email"
              v-model="registerData.email"
              placeholder="Enter your email"
              required
              :class="{'input-error': formErrors.email}"
            />
            <p v-if="formErrors.email" class="error-text">{{ formErrors.email }}</p>
          </div>
          <div class="form-group">
            <input
              type="password"
              v-model="registerData.password"
              placeholder="Create a password"
              required
              :class="{'input-error': formErrors.password}"
            />
            <p v-if="formErrors.password" class="error-text">{{ formErrors.password }}</p>
          </div>
          <div class="form-group">
            <input
              type="text"
              v-model="registerData.first_name"
              placeholder="First name (optional)"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              v-model="registerData.last_name"
              placeholder="Last name (optional)"
            />
          </div>
          <button type="submit" class="auth-button" :disabled="loading">
            {{ loading ? 'Registering...' : 'Register' }}
          </button>
        </form>
      </div>

      <!-- Success Message -->
      <div v-if="successMessage" class="success-message">
        <svg width="20" height="20" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        {{ successMessage }}
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="error-message">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showRegister: false,
      loading: false,
      successMessage: '',
      errorMessage: '',
      formErrors: {},
      loginData: {
        username: '',
        password: ''
      },
      registerData: {
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: ''
      }
    }
  },
  methods: {
    validateLoginForm() {
      this.formErrors = {}
      let valid = true

      if (!this.loginData.username.trim()) {
        this.formErrors.username = 'Username is required'
        valid = false
      }

      if (!this.loginData.password) {
        this.formErrors.password = 'Password is required'
        valid = false
      }

      return valid
    },
    validateRegisterForm() {
      this.formErrors = {}
      let valid = true

      if (!this.registerData.username.trim()) {
        this.formErrors.username = 'Username is required'
        valid = false
      }

      if (!this.registerData.email.trim()) {
        this.formErrors.email = 'Email is required'
        valid = false
      } else if (!/^\S+@\S+\.\S+$/.test(this.registerData.email)) {
        this.formErrors.email = 'Please enter a valid email'
        valid = false
      }

      if (!this.registerData.password) {
        this.formErrors.password = 'Password is required'
        valid = false
      } else if (this.registerData.password.length < 6) {
        this.formErrors.password = 'Password must be at least 6 characters'
        valid = false
      }

      return valid
    },
    async handleLogin() {
      if (!this.validateLoginForm()) return

      this.loading = true
      this.errorMessage = ''
      this.successMessage = ''

      try {
        const response = await this.$client.post('teople1/users/login/', {
          username: this.loginData.username,
          password: this.loginData.password
        })

        if (response.data && response.data.status === 'success') {
          // Store login status and user data
          localStorage.setItem('isLoggedIn', true)
          if (response.data.user) {
            localStorage.setItem('user', JSON.stringify(response.data.user))
          }

          this.successMessage = 'Login successful! Redirecting...'

          // Redirect to demo/index after short delay
          setTimeout(() => {
            this.$router.push('/demo/index')
          }, 1500)
        } else {
          this.errorMessage = response.data?.message || 'Login failed'
        }
      } catch (error) {
        console.error('Login error:', error)
        this.handleApiError(error)
      } finally {
        this.loading = false
      }
    },
    async handleRegister() {
      if (!this.validateRegisterForm()) return

      this.loading = true
      this.errorMessage = ''
      this.successMessage = ''

      try {
        const response = await this.$client.post('teople1/users/register/', {
          username: this.registerData.username,
          email: this.registerData.email,
          password: this.registerData.password,
          first_name: this.registerData.first_name,
          last_name: this.registerData.last_name
        })

        if (response.data && response.data.status === 'success') {
          this.successMessage = 'Registration successful! Please login.'
          this.registerData = {
            username: '',
            email: '',
            password: '',
            first_name: '',
            last_name: ''
          }
          this.showRegister = false
          this.loginData.username = this.registerData.username
        } else {
          this.errorMessage = response.data?.message || 'Registration failed'
        }
      } catch (error) {
        console.error('Registration error:', error)
        this.handleApiError(error)
      } finally {
        this.loading = false
      }
    },
    handleApiError(error) {
      if (error.response) {
        if (error.response.data?.errors) {
          this.formErrors = { ...this.formErrors, ...error.response.data.errors }
        }
        this.errorMessage = error.response.data?.message || 'Request failed'
      } else {
        this.errorMessage = 'Network error. Please try again.'
      }
    }
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8fafc;
  padding: 20px;
}

.auth-box {
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.auth-toggle {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #e2e8f0;
}

.auth-toggle button {
  flex: 1;
  padding: 12px;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  position: relative;
}

.auth-toggle button.active {
  color: #2563eb;
}

.auth-toggle button.active:after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #2563eb;
}

h2 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #1e293b;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.2s;
}

input:focus {
  outline: none;
  border-color: #2563eb;
}

.input-error {
  border-color: #fca5a5;
}

.error-text {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #ef4444;
}

.auth-button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.auth-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
}

.auth-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  margin-top: 20px;
  padding: 12px;
  background-color: #ecfdf5;
  color: #065f46;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.error-message {
  margin-top: 20px;
  padding: 12px;
  background-color: #fef2f2;
  color: #b91c1c;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}
</style>
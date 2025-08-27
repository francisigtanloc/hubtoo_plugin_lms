<template>
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <nuxt-link to="/niceadmin" class="logo d-flex align-items-center">
        <span class="d-none d-lg-block">NiceAdmin</span>
      </nuxt-link>
      <i class="bi bi-list toggle-sidebar-btn" @click="toggleSidebar"></i>
    </div><!-- End Logo -->

    <div class="search-bar">
      <form class="search-form d-flex align-items-center" @submit.prevent="search">
        <input type="text" v-model="searchQuery" placeholder="Search" title="Enter search keyword">
        <button type="submit" title="Search"><i class="bi bi-search"></i></button>
      </form>
    </div><!-- End Search Bar -->

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none">
          <a class="nav-link nav-icon search-bar-toggle" href="#" @click.prevent="toggleSearchBar">
            <i class="bi bi-search"></i>
          </a>
        </li><!-- End Search Icon-->

        <li class="nav-item dropdown">

          <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown" @click.prevent="toggleNotifications">
            <i class="bi bi-bell"></i>
            <span class="badge bg-primary badge-number">{{ notifications.length }}</span>
          </a><!-- End Notification Icon -->

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications" :class="{ show: showNotifications }">
            <li class="dropdown-header">
              You have {{ notifications.length }} new notifications
              <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li v-for="notification in notifications" :key="notification.id" class="notification-item">
              <i :class="notification.icon"></i>
              <div>
                <h4>{{ notification.title }}</h4>
                <p>{{ notification.message }}</p>
                <p>{{ notification.time }}</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider">
            </li>
            <li class="dropdown-footer">
              <a href="#">Show all notifications</a>
            </li>

          </ul><!-- End Notification Dropdown Items -->

        </li><!-- End Notification Nav -->

        <li class="nav-item dropdown">

          <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown" @click.prevent="toggleMessages">
            <i class="bi bi-chat-left-text"></i>
            <span class="badge bg-success badge-number">{{ messages.length }}</span>
          </a><!-- End Messages Icon -->

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages" :class="{ show: showMessages }">
            <li class="dropdown-header">
              You have {{ messages.length }} new messages
              <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li v-for="message in messages" :key="message.id" class="message-item">
              <a href="#">
                <img :src="message.avatar" alt="" class="rounded-circle">
                <div>
                  <h4>{{ message.name }}</h4>
                  <p>{{ message.message }}</p>
                  <p>{{ message.time }}</p>
                </div>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li class="dropdown-footer">
              <a href="#">Show all messages</a>
            </li>

          </ul><!-- End Messages Dropdown Items -->

        </li><!-- End Messages Nav -->

        <li class="nav-item dropdown pe-3">

          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" @click.prevent="toggleProfile">
            <span class="d-none d-md-block dropdown-toggle ps-2">{{ user.name }}</span>
          </a><!-- End Profile Image Icon -->

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile" :class="{ show: showProfile }">
            <li class="dropdown-header">
              <h6>{{ user.name }}</h6>
              <span>{{ user.role }}</span>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#" @click="goToProfile">
                <i class="bi bi-person"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#" @click="goToSettings">
                <i class="bi bi-gear"></i>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#" @click="goToHelp">
                <i class="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#" @click="logout">
                <i class="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
            </li>

          </ul><!-- End Profile Dropdown Items -->
        </li><!-- End Profile Nav -->

      </ul>
    </nav><!-- End Icons Navigation -->

  </header><!-- End Header -->
</template>

<script>
export default {
  name: 'NiceAdminNavbarNew',
  data() {
    return {
      searchQuery: '',
      showNotifications: false,
      showMessages: false,
      showProfile: false,
      user: {
        name: 'K. Anderson',
        role: 'Web Designer'
      },
      notifications: [
        {
          id: 1,
          icon: 'bi bi-exclamation-circle text-warning',
          title: 'Lorem Ipsum',
          message: 'Quae dolorem earum veritatis oditseno',
          time: '30 min. ago'
        },
        {
          id: 2,
          icon: 'bi bi-x-circle text-danger',
          title: 'Atque rerum nesciunt',
          message: 'Quae dolorem earum veritatis oditseno',
          time: '1 hr. ago'
        },
        {
          id: 3,
          icon: 'bi bi-check-circle text-success',
          title: 'Sit rerum fuga',
          message: 'Quae dolorem earum veritatis oditseno',
          time: '2 hrs. ago'
        },
        {
          id: 4,
          icon: 'bi bi-info-circle text-primary',
          title: 'Dicta reprehenderit',
          message: 'Quae dolorem earum veritatis oditseno',
          time: '4 hrs. ago'
        }
      ],
      messages: [
        {
          id: 1,
          name: 'Maria Hudson',
          message: 'Velit asperiores et ducimus soluta repudiandae labore officia est ut...',
          time: '4 hrs. ago',
          avatar: require('@hubtoo-plugin-lms/assets/img/messages-1.jpg')
        },
        {
          id: 2,
          name: 'Anna Nelson',
          message: 'Velit asperiores et ducimus soluta repudiandae labore officia est ut...',
          time: '6 hrs. ago',
          avatar: require('@hubtoo-plugin-lms/assets/img/messages-2.jpg')
        },
        {
          id: 3,
          name: 'David Muldon',
          message: 'Velit asperiores et ducimus soluta repudiandae labore officia est ut...',
          time: '8 hrs. ago',
          avatar: require('@hubtoo-plugin-lms/assets/img/messages-3.jpg')
        }
      ]
    }
  },
  mounted() {
    document.addEventListener('click', this.closeDropdowns)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeDropdowns)
  },
  methods: {
    toggleSidebar() {
      document.body.classList.toggle('toggle-sidebar')
    },
    toggleSearchBar() {
      const searchBar = document.querySelector('.search-bar')
      if (searchBar) {
        searchBar.classList.toggle('search-bar-show')
      }
    },
    search() {
      if (this.searchQuery.trim()) {
        console.log('Searching for:', this.searchQuery)
        this.$emit('search', this.searchQuery)
      }
    },
    toggleNotifications() {
      this.showNotifications = !this.showNotifications
      this.showMessages = false
      this.showProfile = false
    },
    toggleMessages() {
      this.showMessages = !this.showMessages
      this.showNotifications = false
      this.showProfile = false
    },
    toggleProfile() {
      this.showProfile = !this.showProfile
      this.showNotifications = false
      this.showMessages = false
    },
    closeDropdowns(event) {
      const target = event.target
      if (!target.closest('.nav-item.dropdown')) {
        this.showNotifications = false
        this.showMessages = false
        this.showProfile = false
      }
    },
    goToProfile() {
      this.$router.push('/niceadmin/profile')
      this.showProfile = false
    },
    goToSettings() {
      this.$router.push('/niceadmin/settings')
      this.showProfile = false
    },
    goToHelp() {
      this.$router.push('/niceadmin/help')
      this.showProfile = false
    },
    logout() {
      console.log('Logging out...')
      this.$emit('logout')
      this.showProfile = false
    }
  }
}
</script>

<style>
/* Remove scoped to ensure NiceAdmin CSS applies */
</style>
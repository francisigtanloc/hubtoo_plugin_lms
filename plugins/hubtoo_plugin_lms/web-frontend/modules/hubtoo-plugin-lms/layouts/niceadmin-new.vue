<template>
  <div>
    <!-- Header -->
    <NiceAdminNavbarNew />
    
    <!-- Sidebar -->
    <NiceAdminSidebarNew />
    
    <!-- Main Content -->
    <main id="main" class="main">
      <Nuxt />
    </main>
    
    <!-- Footer -->
    <NiceAdminFooterNew />
  </div>
</template>

<script>
import NiceAdminSidebarNew from '@hubtoo-plugin-lms/components/niceadmin/NiceAdminSidebarNew.vue'
import NiceAdminNavbarNew from '@hubtoo-plugin-lms/components/niceadmin/NiceAdminNavbarNew.vue'  
import NiceAdminFooterNew from '@hubtoo-plugin-lms/components/niceadmin/NiceAdminFooterNew.vue'

export default {
  name: 'NiceAdminNewLayout',
  components: {
    NiceAdminSidebarNew,
    NiceAdminNavbarNew,
    NiceAdminFooterNew
  },
  head() {
    return {
      title: 'LMS Admin - NiceAdmin Dashboard',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' }
      ]
    }
  },
  mounted() {
    // Client-side only: Load NiceAdmin assets like basetest layout
    if (process.client) {
      this.loadNiceAdminCSS()
      this.loadNiceAdminAssets()
    }
  },
  methods: {
    async loadNiceAdminCSS() {
      try {
        console.log('Loading NiceAdmin CSS assets...')
        // Load CSS files using dynamic imports exactly like basetest 
        await import('@hubtoo-plugin-lms/assets/bootstrap.min.css')
        await import('@hubtoo-plugin-lms/assets/vendor/bootstrap-icons/bootstrap-icons.css')
        await import('@hubtoo-plugin-lms/assets/css/niceadmin-style.css')
        console.log('NiceAdmin CSS loaded successfully')
      } catch (error) {
        console.error('Failed to load NiceAdmin CSS:', error)
      }
    },
    
    async loadNiceAdminAssets() {
      try {
        console.log('Loading NiceAdmin JavaScript assets...')
        
        // Load core JS libraries in sequence exactly like basetest
        await this.loadScript('@hubtoo-plugin-lms/assets/bootstrap.bundle.min.js')
        await this.loadScript('@hubtoo-plugin-lms/assets/js/niceadmin-main.js')
        
        console.log('NiceAdmin JS loaded successfully')
        
        // Initialize NiceAdmin after all scripts loaded exactly like basetest
        this.$nextTick(() => {
          this.initializeNiceAdmin()
        })
        
      } catch (error) {
        console.error('Failed to load NiceAdmin JavaScript assets:', error)
        // Initialize basic functionality even if some assets fail
        this.$nextTick(() => {
          this.initializeNiceAdmin()
        })
      }
    },
    
    loadScript(src) {
      return new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`)
        if (existing) {
          resolve()
          return
        }
        
        const script = document.createElement('script')
        script.src = src
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })
    },
    
    initializeNiceAdmin() {
      console.log('Initializing NiceAdmin components')
      
      // Initialize sidebar toggle functionality
      const toggleSidebarBtn = document.querySelector('.toggle-sidebar-btn')
      const body = document.querySelector('body')

      if (toggleSidebarBtn) {
        toggleSidebarBtn.addEventListener('click', (e) => {
          e.preventDefault()
          body.classList.toggle('toggle-sidebar')
        })
      }
      
      // Initialize search bar toggle
      const searchBarToggle = document.querySelector('.search-bar-toggle')
      const searchBar = document.querySelector('.search-bar')

      if (searchBarToggle && searchBar) {
        searchBarToggle.addEventListener('click', (e) => {
          e.preventDefault()
          searchBar.classList.toggle('search-bar-show')
        })
      }
      
      // Initialize collapsible sidebar items
      const navItems = document.querySelectorAll('.sidebar-nav .nav-link[data-bs-toggle="collapse"]')
      
      navItems.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault()
          const target = document.querySelector(item.getAttribute('data-bs-target'))
          if (target) {
            target.classList.toggle('show')
            item.classList.toggle('collapsed')
          }
        })
      })
      
      // Initialize Bootstrap components if available
      if (window.bootstrap) {
        // Initialize tooltips
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new window.bootstrap.Tooltip(tooltipTriggerEl)
        })
        
        // Initialize dropdowns
        const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
        dropdownElementList.map(function (dropdownToggleEl) {
          return new window.bootstrap.Dropdown(dropdownToggleEl)
        })
      }
    }
  }
}
</script>

<style>
/* Remove scoped to ensure NiceAdmin CSS applies */
</style>
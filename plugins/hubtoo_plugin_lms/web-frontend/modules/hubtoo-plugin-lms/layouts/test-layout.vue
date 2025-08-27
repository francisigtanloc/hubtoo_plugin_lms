<template>
    <div>
      <div class="wrapper">
        <NiceAdminSidebar />
        <div class="main-panel">
          <NiceAdminNavbar />
          <div class="container">
            <div class="page-inner">
                
              <Nuxt />
            </div>
          </div>
          <NiceAdminFooter />
        </div>
        
        <!-- Custom template | don't include it in your project! -->
        <div class="custom-template">
          <div class="title">Settings</div>
          <div class="custom-content">
            <div class="switcher">
              <div class="switch-block">
                <h4>Logo Header</h4>
                <div class="btnSwitch">
                  <button
                    type="button"
                    class="selected changeLogoHeaderColor"
                    data-color="dark"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="blue"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="purple"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="light-blue"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="green"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="orange"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="red"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="white"
                  ></button>
                  <br />
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="dark2"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="blue2"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="purple2"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="light-blue2"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="green2"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="orange2"
                  ></button>
                  <button
                    type="button"
                    class="changeLogoHeaderColor"
                    data-color="red2"
                  ></button>
                </div>
              </div>
              <div class="switch-block">
                <h4>Navbar Header</h4>
                <div class="btnSwitch">
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="dark"
                  ></button>
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="blue"
                  ></button>
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="purple"
                  ></button>
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="light-blue"
                  ></button>
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="green"
                  ></button>
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="orange"
                  ></button>
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="red"
                  ></button>
                  <button
                    type="button"
                    class="selected changeTopBarColor"
                    data-color="white"
                  ></button>
                  <br />
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="dark2"
                  ></button>
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="blue2"
                  ></button>
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="purple2"
                  ></button>
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="light-blue2"
                  ></button>
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="green2"
                  ></button>
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="orange2"
                  ></button>
                  <button
                    type="button"
                    class="changeTopBarColor"
                    data-color="red2"
                  ></button>
                </div>
              </div>
              <div class="switch-block">
                <h4>Sidebar</h4>
                <div class="btnSwitch">
                  <button
                    type="button"
                    class="changeSideBarColor"
                    data-color="white"
                  ></button>
                  <button
                    type="button"
                    class="selected changeSideBarColor"
                    data-color="dark"
                  ></button>
                  <button
                    type="button"
                    class="changeSideBarColor"
                    data-color="dark2"
                  ></button>
                </div>
              </div>
            </div>
          </div>
          <div class="custom-toggle">
            <i class="icon-settings"></i>
          </div>
        </div>
        <!-- End Custom template -->
      </div>
    </div>
  </template>
  
  <script>
  import NiceAdminSidebar from '@hubtoo-plugin-lms/components/niceadmin/NiceAdminSidebarNew.vue'
  import NiceAdminNavbar from '@hubtoo-plugin-lms/components/niceadmin/NiceAdminNavbarNew.vue'  
  import NiceAdminFooter from '@hubtoo-plugin-lms/components/niceadmin/NiceAdminFooterNew.vue'
  
  export default {
    name: 'NiceAdminLayout',
    components: {
      NiceAdminSidebar,
      NiceAdminNavbar,
      NiceAdminFooter
    },
    head() {
      return {
        title: 'Nice Admin - Bootstrap 5 Admin Dashboard',
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no' },
          { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
        ],
        link: [
        //   { rel: 'icon', href: '/static/@basetest/assets/img/kaiadmin/favicon.ico', type: 'image/x-icon' },
          // Load critical CSS immediately to prevent layout issues
          // CSS loaded via dynamic imports in mounted() method
        ],
        script: [
          // JavaScript loaded via dynamic imports in mounted() method
        ]
      }
    },
    mounted() {
      // Client-side only: Load NiceAdmin assets
      if (process.client) {
        this.loadNiceAdminCSS()
        this.loadNiceAdminAssets()
      }
    },
    methods: {
        

  
      async loadNiceAdminCSS() {
        try {
          console.log('Loading NiceAdmin CSS assets...')
          // Load CSS files using dynamic imports like other working pages
          await import('@hubtoo-plugin-lms/assets/niceadmin/vendor/bootstrap/css/bootstrap.min.css')
          await import('@hubtoo-plugin-lms/assets/niceadmin/vendor/bootstrap-icons/bootstrap-icons.css')
          await import('@hubtoo-plugin-lms/assets/niceadmin/vendor/boxicons/css/boxicons.min.css')
          await import('@hubtoo-plugin-lms/assets/niceadmin/vendor/quill/quill.snow.css')
          await import('@hubtoo-plugin-lms/assets/niceadmin/vendor/quill/quill.bubble.css')
          await import('@hubtoo-plugin-lms/assets/niceadmin/vendor/remixicon/remixicon.css')
          await import('@hubtoo-plugin-lms/assets/niceadmin/vendor/simple-datatables/style.css')
          await import('@hubtoo-plugin-lms/assets/niceadmin/css/style.css')
          console.log('KAI Admin CSS loaded successfully')
        } catch (error) {
          console.error('Failed to load KAI Admin CSS:', error)
        }
      },
    
    // <!-- Template Main JS File -->
      async loadNiceAdminAssets() {
        try {
          console.log('Loading NiceAdmin JavaScript assets...')
          
        //   // Load WebFont first (if not already loaded via head)
        //   if (!document.querySelector('script[src="@hubtoo-plugin-lms/assets/niceadmin/vendor/apexcharts/webfont.min.js"]')) {
        //     await this.loadScript('@hubtoo-plugin-lms/assets/niceadmin/vendor/webfont/webfont.min.js')
        //   }
          
          // Initialize WebFont (if not already initialized)
        //   if (window.WebFont && !sessionStorage.fonts) {
        //     window.WebFont.load({
        //       google: { families: ["Public Sans:300,400,500,600,700"] },
        //       custom: {
        //         families: [
        //           "Font Awesome 5 Solid",
        //           "Font Awesome 5 Regular", 
        //           "Font Awesome 5 Brands",
        //           "simple-line-icons",
        //         ],
        //         urls: ["@basetest/assets/styles/fonts.min.css"],
        //       },
        //       active: function () {
        //         sessionStorage.fonts = true
        //       },
        //     })
        //   }


          // Load core JS libraries in sequence
          // Load vendor scripts in parallel for better performance
          await Promise.all([
            import('@hubtoo-plugin-lms/assets/niceadmin/vendor/apexcharts/apexcharts.min.js').then(module => {
              // ApexCharts exports as default or named export
              window.ApexCharts = module.default || module.ApexCharts || module;
            }),
            import('@hubtoo-plugin-lms/assets/niceadmin/vendor/bootstrap/js/bootstrap.bundle.min.js'),
            import('@hubtoo-plugin-lms/assets/niceadmin/vendor/chart.js/chart.umd.js'),
            import('@hubtoo-plugin-lms/assets/niceadmin/vendor/echarts/echarts.js').then(module => { 
              // ECharts exports as default or named export
              window.echarts = module.default || module;
            }),
            import('@hubtoo-plugin-lms/assets/niceadmin/vendor/quill/quill.js'),
            import('@hubtoo-plugin-lms/assets/niceadmin/vendor/tinymce/tinymce.js'),
            import('@hubtoo-plugin-lms/assets/niceadmin/vendor/php-email-form/validate.js'),
            // simple-datatables needs to be attached to the window for main.js
            import('@hubtoo-plugin-lms/assets/niceadmin/vendor/simple-datatables/simple-datatables.js').then(module => {
              window.simpleDatatables = module;
            })
          ]);

          // Now, load the main script after all vendors are loaded.
          // The main.js script is not a module and expects to be run in the global scope.
          // We fetch it and then execute it to simulate a classic script tag.
          const mainScript = await import('@hubtoo-plugin-lms/assets/niceadmin/js/main.js?raw');
          // eslint-disable-next-line no-eval
          eval(mainScript.default);
          
          console.log('NiceAdmin JS loaded successfully')
          
          // Initialize NiceAdmin after all scripts loaded
          
          
        } catch (error) {
          console.error('Failed to load Nice Admin JavaScript assets:', error)
          // Initialize basic functionality even if some assets fail
         
        }
      },
      
      loadCSS(href) {
        return new Promise((resolve, reject) => {
          const existing = document.querySelector(`link[href="${href}"]`)
          if (existing) {
            resolve()
            return
          }
          
          const link = document.createElement('link')
          link.rel = 'stylesheet'
          link.href = href
          link.onload = resolve
          link.onerror = reject
          document.head.appendChild(link)
        })
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
    }
  }
  </script>
  
  
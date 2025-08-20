<template>
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <nuxt-link class="nav-link" to="/niceadmin" :class="{ collapsed: !isActive('/niceadmin') }">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </nuxt-link>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#" @click.prevent="toggleSection('components')">
          <i class="bi bi-menu-button-wide"></i><span>Components</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse" :class="{ show: openSections.components }" data-bs-parent="#sidebar-nav">
          <li>
            <nuxt-link to="/niceadmin/alerts">
              <i class="bi bi-circle"></i><span>Alerts</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/accordion">
              <i class="bi bi-circle"></i><span>Accordion</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/badges">
              <i class="bi bi-circle"></i><span>Badges</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/breadcrumbs">
              <i class="bi bi-circle"></i><span>Breadcrumbs</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/buttons">
              <i class="bi bi-circle"></i><span>Buttons</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/cards">
              <i class="bi bi-circle"></i><span>Cards</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/carousel">
              <i class="bi bi-circle"></i><span>Carousel</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/list-group">
              <i class="bi bi-circle"></i><span>List group</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/modal">
              <i class="bi bi-circle"></i><span>Modal</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/tabs">
              <i class="bi bi-circle"></i><span>Tabs</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/pagination">
              <i class="bi bi-circle"></i><span>Pagination</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/progress">
              <i class="bi bi-circle"></i><span>Progress</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/spinners">
              <i class="bi bi-circle"></i><span>Spinners</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/tooltips">
              <i class="bi bi-circle"></i><span>Tooltips</span>
            </nuxt-link>
          </li>
        </ul>
      </li><!-- End Components Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#" @click.prevent="toggleSection('forms')">
          <i class="bi bi-journal-text"></i><span>Forms</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse" :class="{ show: openSections.forms }" data-bs-parent="#sidebar-nav">
          <li>
            <nuxt-link to="/niceadmin/forms-elements">
              <i class="bi bi-circle"></i><span>Form Elements</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/forms-layouts">
              <i class="bi bi-circle"></i><span>Form Layouts</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/forms-editors">
              <i class="bi bi-circle"></i><span>Form Editors</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/forms-validation">
              <i class="bi bi-circle"></i><span>Form Validation</span>
            </nuxt-link>
          </li>
        </ul>
      </li><!-- End Forms Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#" @click.prevent="toggleSection('tables')">
          <i class="bi bi-layout-text-window-reverse"></i><span>Tables</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" class="nav-content collapse" :class="{ show: openSections.tables }" data-bs-parent="#sidebar-nav">
          <li>
            <nuxt-link to="/niceadmin/tables-general">
              <i class="bi bi-circle"></i><span>General Tables</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/tables-data">
              <i class="bi bi-circle"></i><span>Data Tables</span>
            </nuxt-link>
          </li>
        </ul>
      </li><!-- End Tables Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#" @click.prevent="toggleSection('charts')">
          <i class="bi bi-bar-chart"></i><span>Charts</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="charts-nav" class="nav-content collapse" :class="{ show: openSections.charts }" data-bs-parent="#sidebar-nav">
          <li>
            <nuxt-link to="/niceadmin/charts-chartjs">
              <i class="bi bi-circle"></i><span>Chart.js</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/charts-apexcharts">
              <i class="bi bi-circle"></i><span>ApexCharts</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/charts-echarts">
              <i class="bi bi-circle"></i><span>ECharts</span>
            </nuxt-link>
          </li>
        </ul>
      </li><!-- End Charts Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#" @click.prevent="toggleSection('icons')">
          <i class="bi bi-gem"></i><span>Icons</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="icons-nav" class="nav-content collapse" :class="{ show: openSections.icons }" data-bs-parent="#sidebar-nav">
          <li>
            <nuxt-link to="/niceadmin/icons-bootstrap">
              <i class="bi bi-circle"></i><span>Bootstrap Icons</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/icons-remix">
              <i class="bi bi-circle"></i><span>Remix Icons</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/niceadmin/icons-boxicons">
              <i class="bi bi-circle"></i><span>Boxicons</span>
            </nuxt-link>
          </li>
        </ul>
      </li><!-- End Icons Nav -->

      <li class="nav-heading">Pages</li>

      <li class="nav-item">
        <nuxt-link class="nav-link collapsed" to="/niceadmin/users-profile">
          <i class="bi bi-person"></i>
          <span>Profile</span>
        </nuxt-link>
      </li><!-- End Profile Page Nav -->

      <li class="nav-item">
        <nuxt-link class="nav-link collapsed" to="/niceadmin/pages-faq">
          <i class="bi bi-question-circle"></i>
          <span>F.A.Q</span>
        </nuxt-link>
      </li><!-- End F.A.Q Page Nav -->

      <li class="nav-item">
        <nuxt-link class="nav-link collapsed" to="/niceadmin/pages-contact">
          <i class="bi bi-envelope"></i>
          <span>Contact</span>
        </nuxt-link>
      </li><!-- End Contact Page Nav -->

      <li class="nav-item">
        <nuxt-link class="nav-link collapsed" to="/niceadmin/pages-register">
          <i class="bi bi-card-list"></i>
          <span>Register</span>
        </nuxt-link>
      </li><!-- End Register Page Nav -->

      <li class="nav-item">
        <nuxt-link class="nav-link collapsed" to="/niceadmin/pages-login">
          <i class="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </nuxt-link>
      </li><!-- End Login Page Nav -->

      <li class="nav-item">
        <nuxt-link class="nav-link collapsed" to="/niceadmin/pages-error-404">
          <i class="bi bi-dash-circle"></i>
          <span>Error 404</span>
        </nuxt-link>
      </li><!-- End Error 404 Page Nav -->

      <li class="nav-item">
        <nuxt-link class="nav-link collapsed" to="/niceadmin/pages-blank">
          <i class="bi bi-file-earmark"></i>
          <span>Blank</span>
        </nuxt-link>
      </li><!-- End Blank Page Nav -->

    </ul>

  </aside><!-- End Sidebar-->
</template>

<script>
export default {
  name: 'NiceAdminSidebarNew',
  data() {
    return {
      openSections: {
        components: false,
        forms: false,
        tables: false,
        charts: false,
        icons: false
      }
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    },
    toggleSection(section) {
      this.openSections[section] = !this.openSections[section]
    }
  }
}
</script>

<style>
/* Remove scoped to ensure NiceAdmin CSS applies */
</style>
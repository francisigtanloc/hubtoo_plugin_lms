<template>
  <div>
    <main id="main" class="main">
                    <div class="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                    </div><!-- End Page Title -->

                    <section class="section dashboard">
                    <div class="row">

                        <!-- Left side columns -->
                        <div class="col-lg-8">
                        <div class="row">

                            <!-- Sales Card -->
                            <div class="col-xxl-4 col-md-6">
                            <div class="card info-card sales-card">

                                <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li class="dropdown-header text-start">
                                    <h6>Filter</h6>
                                    </li>

                                    <li><a class="dropdown-item" href="#">Today</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">This Year</a></li>
                                </ul>
                                </div>

                                <div class="card-body">
                                <h5 class="card-title">Sales <span>| Today</span></h5>

                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="bi bi-cart"></i>
                                    </div>
                                    <div class="ps-3">
                                    <h6>145</h6>
                                    <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                                    </div>
                                </div>
                                </div>

                            </div>
                            </div><!-- End Sales Card -->

                            <!-- Revenue Card -->
                            <div class="col-xxl-4 col-md-6">
                            <div class="card info-card revenue-card">

                                <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li class="dropdown-header text-start">
                                    <h6>Filter</h6>
                                    </li>

                                    <li><a class="dropdown-item" href="#">Today</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">This Year</a></li>
                                </ul>
                                </div>

                                <div class="card-body">
                                <h5 class="card-title">Revenue <span>| This Month</span></h5>

                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="bi bi-currency-dollar"></i>
                                    </div>
                                    <div class="ps-3">
                                    <h6>$3,264</h6>
                                    <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                                    </div>
                                </div>
                                </div>

                            </div>
                            </div><!-- End Revenue Card -->

                            <!-- Customers Card -->
                            <div class="col-xxl-4 col-xl-12">

                            <div class="card info-card customers-card">

                                <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li class="dropdown-header text-start">
                                    <h6>Filter</h6>
                                    </li>

                                    <li><a class="dropdown-item" href="#">Today</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">This Year</a></li>
                                </ul>
                                </div>

                                <div class="card-body">
                                <h5 class="card-title">Customers <span>| This Year</span></h5>

                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="bi bi-people"></i>
                                    </div>
                                    <div class="ps-3">
                                    <h6>1244</h6>
                                    <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                                    </div>
                                </div>

                                </div>
                            </div>

                            </div><!-- End Customers Card -->

                            <!-- Reports -->
                            <div class="col-12">
                            <div class="card">

                                <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li class="dropdown-header text-start">
                                    <h6>Filter</h6>
                                    </li>

                                    <li><a class="dropdown-item" href="#">Today</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">This Year</a></li>
                                </ul>
                                </div>

                                <div class="card-body">
                                <h5 class="card-title">Reports <span>/Today</span></h5>

                                <!-- Line Chart -->
                                <div id="reportsChart"></div>
                                <!-- End Line Chart -->

                                </div>

                            </div>
                            </div><!-- End Reports -->

                            <!-- Recent Sales -->
                            <div class="col-12">
                            <div class="card recent-sales overflow-auto">

                                <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li class="dropdown-header text-start">
                                    <h6>Filter</h6>
                                    </li>

                                    <li><a class="dropdown-item" href="#">Today</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">This Year</a></li>
                                </ul>
                                </div>

                                <div class="card-body">
                                <h5 class="card-title">Recent Sales <span>| Today</span></h5>

                                <table class="table table-borderless datatable">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row"><a href="#">#2457</a></th>
                                        <td>Brandon Jacob</td>
                                        <td><a href="#" class="text-primary">At praesentium minu</a></td>
                                        <td>$64</td>
                                        <td><span class="badge bg-success">Approved</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><a href="#">#2147</a></th>
                                        <td>Bridie Kessler</td>
                                        <td><a href="#" class="text-primary">Blanditiis dolor omnis similique</a></td>
                                        <td>$47</td>
                                        <td><span class="badge bg-warning">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><a href="#">#2049</a></th>
                                        <td>Ashleigh Langosh</td>
                                        <td><a href="#" class="text-primary">At recusandae consectetur</a></td>
                                        <td>$147</td>
                                        <td><span class="badge bg-success">Approved</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><a href="#">#2644</a></th>
                                        <td>Angus Grady</td>
                                        <td><a href="#" class="text-primar">Ut voluptatem id earum et</a></td>
                                        <td>$67</td>
                                        <td><span class="badge bg-danger">Rejected</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><a href="#">#2644</a></th>
                                        <td>Raheem Lehner</td>
                                        <td><a href="#" class="text-primary">Sunt similique distinctio</a></td>
                                        <td>$165</td>
                                        <td><span class="badge bg-success">Approved</span></td>
                                    </tr>
                                    </tbody>
                                </table>

                                </div>

                            </div>
                            </div><!-- End Recent Sales -->

                            <!-- Top Selling -->
                            <div class="col-12">
                            <div class="card top-selling overflow-auto">

                                <div class="filter">
                                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li class="dropdown-header text-start">
                                    <h6>Filter</h6>
                                    </li>

                                    <li><a class="dropdown-item" href="#">Today</a></li>
                                    <li><a class="dropdown-item" href="#">This Month</a></li>
                                    <li><a class="dropdown-item" href="#">This Year</a></li>
                                </ul>
                                </div>

                                <div class="card-body pb-0">
                                <h5 class="card-title">Top Selling <span>| Today</span></h5>

                                <table class="table table-borderless">
                                    <thead>
                                    <tr>
                                        <th scope="col">Preview</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Sold</th>
                                        <th scope="col">Revenue</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row"><a href="#"><img src="@hubtoo-plugin-lms/assets/img/product-1.jpg" alt=""></a></th>
                                        <td><a href="#" class="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                                        <td>$64</td>
                                        <td class="fw-bold">124</td>
                                        <td>$5,828</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><a href="#"><img src="@hubtoo-plugin-lms/assets/img/product-2.jpg" alt=""></a></th>
                                        <td><a href="#" class="text-primary fw-bold">Exercitationem similique doloremque</a></td>
                                        <td>$46</td>
                                        <td class="fw-bold">98</td>
                                        <td>$4,508</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><a href="#"><img src="@hubtoo-plugin-lms/assets/img/product-3.jpg" alt=""></a></th>
                                        <td><a href="#" class="text-primary fw-bold">Doloribus nisi exercitationem</a></td>
                                        <td>$59</td>
                                        <td class="fw-bold">74</td>
                                        <td>$4,366</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><a href="#"><img src="@hubtoo-plugin-lms/assets/img/product-4.jpg" alt=""></a></th>
                                        <td><a href="#" class="text-primary fw-bold">Officiis quaerat sint rerum error</a></td>
                                        <td>$32</td>
                                        <td class="fw-bold">63</td>
                                        <td>$2,016</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><a href="#"><img src="@hubtoo-plugin-lms/assets/img/product-5.jpg" alt=""></a></th>
                                        <td><a href="#" class="text-primary fw-bold">Sit unde debitis delectus repellendus</a></td>
                                        <td>$79</td>
                                        <td class="fw-bold">41</td>
                                        <td>$3,239</td>
                                    </tr>
                                    </tbody>
                                </table>

                                </div>

                            </div>
                            </div><!-- End Top Selling -->

                        </div>
                        </div><!-- End Left side columns -->

                        <!-- Right side columns -->
                        <div class="col-lg-4">

                        <!-- Recent Activity -->
                        <div class="card">
                            <div class="filter">
                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li class="dropdown-header text-start">
                                <h6>Filter</h6>
                                </li>

                                <li><a class="dropdown-item" href="#">Today</a></li>
                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                <li><a class="dropdown-item" href="#">This Year</a></li>
                            </ul>
                            </div>

                            <div class="card-body">
                            <h5 class="card-title">Recent Activity <span>| Today</span></h5>

                            <div class="activity">

                                <div class="activity-item d-flex">
                                <div class="activite-label">32 min</div>
                                <i class='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                <div class="activity-content">
                                    Quia quae rerum <a href="#" class="fw-bold text-dark">explicabo officiis</a> beatae
                                </div>
                                </div><!-- End activity item-->

                                <div class="activity-item d-flex">
                                <div class="activite-label">56 min</div>
                                <i class='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                                <div class="activity-content">
                                    Voluptatem blanditiis blanditiis eveniet
                                </div>
                                </div><!-- End activity item-->

                                <div class="activity-item d-flex">
                                <div class="activite-label">2 hrs</div>
                                <i class='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                                <div class="activity-content">
                                    Voluptates corrupti molestias voluptatem
                                </div>
                                </div><!-- End activity item-->

                                <div class="activity-item d-flex">
                                <div class="activite-label">1 day</div>
                                <i class='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                                <div class="activity-content">
                                    Tempore autem saepe <a href="#" class="fw-bold text-dark">occaecati voluptatem</a> tempore
                                </div>
                                </div><!-- End activity item-->

                                <div class="activity-item d-flex">
                                <div class="activite-label">2 days</div>
                                <i class='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                                <div class="activity-content">
                                    Est sit eum reiciendis exercitationem
                                </div>
                                </div><!-- End activity item-->

                                <div class="activity-item d-flex">
                                <div class="activite-label">4 weeks</div>
                                <i class='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                                <div class="activity-content">
                                    Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                                </div>
                                </div><!-- End activity item-->

                            </div>

                            </div>
                        </div><!-- End Recent Activity -->

                        <!-- Budget Report -->
                        <div class="card">
                            <div class="filter">
                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li class="dropdown-header text-start">
                                <h6>Filter</h6>
                                </li>

                                <li><a class="dropdown-item" href="#">Today</a></li>
                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                <li><a class="dropdown-item" href="#">This Year</a></li>
                            </ul>
                            </div>

                            <div class="card-body pb-0">
                            <h5 class="card-title">Budget Report <span>| This Month</span></h5>

                            <div id="budgetChart" style="min-height: 400px;" class="echart"></div>

                            </div>
                        </div><!-- End Budget Report -->

                        <!-- Website Traffic -->
                        <div class="card">
                            <div class="filter">
                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li class="dropdown-header text-start">
                                <h6>Filter</h6>
                                </li>

                                <li><a class="dropdown-item" href="#">Today</a></li>
                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                <li><a class="dropdown-item" href="#">This Year</a></li>
                            </ul>
                            </div>

                            <div class="card-body pb-0">
                            <h5 class="card-title">Website Traffic <span>| Today</span></h5>

                            <div id="trafficChart" style="min-height: 400px;" class="echart"></div>

                            </div>
                        </div><!-- End Website Traffic -->

                        <!-- News & Updates Traffic -->
                        <div class="card">
                            <div class="filter">
                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <li class="dropdown-header text-start">
                                <h6>Filter</h6>
                                </li>

                                <li><a class="dropdown-item" href="#">Today</a></li>
                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                <li><a class="dropdown-item" href="#">This Year</a></li>
                            </ul>
                            </div>

                            <div class="card-body pb-0">
                            <h5 class="card-title">News &amp; Updates <span>| Today</span></h5>

                            <div class="news">
                                <div class="post-item clearfix">
                                <img src="@hubtoo-plugin-lms/assets/img/news-1.jpg" alt="">
                                <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                                <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                                </div>

                                <div class="post-item clearfix">
                                <img src="@hubtoo-plugin-lms/assets/img/news-2.jpg" alt="">
                                <h4><a href="#">Quidem autem et impedit</a></h4>
                                <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                                </div>

                                <div class="post-item clearfix">
                                <img src="@hubtoo-plugin-lms/assets/img/news-3.jpg" alt="">
                                <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                                <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                                </div>

                                <div class="post-item clearfix">
                                <img src="@hubtoo-plugin-lms/assets/img/news-4.jpg" alt="">
                                <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                                <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                                </div>

                                <div class="post-item clearfix">
                                <img src="@hubtoo-plugin-lms/assets/img/news-5.jpg" alt="">
                                <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                                <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                                </div>

                            </div><!-- End sidebar recent posts-->

                            </div>
                        </div><!-- End News & Updates -->

                        </div><!-- End Right side columns -->

                    </div>
                    </section>

                    </main><!-- End #main -->
  </div>
</template>
  
<script>
export default {
  name: 'KaiAdminDashboard',
  layout: 'test-layout',
  data() {
    return {
      charts: {
        apexChart: null,
        budgetChart: null,
        trafficChart: null
      }
    }
  },
  mounted() {
    // Client-side only: Load Chart.js and initialize charts
    if (process.client) {
      // Wait for layout to load all assets then initialize charts
      this.$nextTick(() => {
        // Try multiple times to ensure libraries are loaded
        this.waitForLibrariesAndInit()
      })
      
      // Add window resize handler for responsive charts
      window.addEventListener('resize', this.handleResize)
    }
  },
  
  beforeDestroy() {
    // Cleanup event listeners and charts
    if (process.client) {
      window.removeEventListener('resize', this.handleResize)
      
      // Dispose of charts to prevent memory leaks
      if (this.charts.apexChart) {
        this.charts.apexChart.destroy()
      }
      if (this.charts.budgetChart) {
        this.charts.budgetChart.dispose()
      }
      if (this.charts.trafficChart) {
        this.charts.trafficChart.dispose()
      }
    }
  },
  methods: {
    waitForLibrariesAndInit(retries = 10, delay = 500) {
      const checkLibraries = () => {
        const apexChartsLoaded = typeof window.ApexCharts !== 'undefined'
        const echartsLoaded = typeof window.echarts !== 'undefined'
        
        if (apexChartsLoaded && echartsLoaded) {
          console.log('All chart libraries loaded, initializing charts...')
          this.initializeCharts()
          return
        }
        
        if (retries > 0) {
          console.log(`Chart libraries not ready, retrying... (${retries} attempts left)`)
          console.log('ApexCharts loaded:', apexChartsLoaded)
          console.log('ECharts loaded:', echartsLoaded)
          setTimeout(() => this.waitForLibrariesAndInit(retries - 1, delay * 1.2), delay)
        } else {
          console.warn('Chart libraries failed to load after multiple attempts')
          // Try to initialize what we can
          this.initializeCharts()
        }
      }
      
      checkLibraries()
    },

    initializeCharts() {
      // Initialize charts after all libraries are loaded
      console.log('Initializing all charts...')
      this.initApexChart()
      this.initBudgetChart()
      this.initTrafficChart()
    },

    initApexChart() {
      // Check if ApexCharts is available
      if (typeof window.ApexCharts === 'undefined') {
        console.warn('ApexCharts not loaded, retrying in 1 second...')
        setTimeout(() => this.initApexChart(), 1000)
        return
      }

      const chartElement = document.querySelector("#reportsChart")
      if (!chartElement) return

      try {
        const chart = new window.ApexCharts(chartElement, {
          series: [{
            name: 'Sales',
            data: [31, 40, 28, 51, 42, 82, 56],
          }, {
            name: 'Revenue',
            data: [11, 32, 45, 32, 34, 52, 41]
          }, {
            name: 'Customers',
            data: [15, 11, 32, 18, 9, 24, 11]
          }],
          chart: {
            height: 350,
            type: 'area',
            toolbar: {
              show: false
            },
          },
          markers: {
            size: 4
          },
          colors: ['#4154f1', '#2eca6a', '#ff771d'],
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.3,
              opacityTo: 0.4,
              stops: [0, 90, 100]
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 2
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          }
        })
        chart.render()
        this.charts.apexChart = chart
        console.log('ApexChart initialized successfully')
      } catch (error) {
        console.error('Error initializing ApexChart:', error)
      }
    },

    initBudgetChart() {
      // Check if ECharts is available
      if (typeof window.echarts === 'undefined') {
        console.warn('ECharts not loaded, retrying in 1 second...')
        setTimeout(() => this.initBudgetChart(), 1000)
        return
      }

      const chartElement = document.querySelector("#budgetChart")
      if (!chartElement) return

      try {
        const budgetChart = window.echarts.init(chartElement)
        budgetChart.setOption({
          legend: {
            data: ['Allocated Budget', 'Actual Spending']
          },
          radar: {
            indicator: [{
              name: 'Sales',
              max: 6500
            }, {
              name: 'Administration',
              max: 16000
            }, {
              name: 'Information Technology',
              max: 30000
            }, {
              name: 'Customer Support',
              max: 38000
            }, {
              name: 'Development',
              max: 52000
            }, {
              name: 'Marketing',
              max: 25000
            }]
          },
          series: [{
            name: 'Budget vs spending',
            type: 'radar',
            data: [{
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget'
            }, {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending'
            }]
          }]
        })
        this.charts.budgetChart = budgetChart
        console.log('Budget Chart initialized successfully')
      } catch (error) {
        console.error('Error initializing Budget Chart:', error)
      }
    },

    initTrafficChart() {
      // Check if ECharts is available
      if (typeof window.echarts === 'undefined') {
        console.warn('ECharts not loaded, retrying in 1 second...')
        setTimeout(() => this.initTrafficChart(), 1000)
        return
      }

      const chartElement = document.querySelector("#trafficChart")
      if (!chartElement) return

      try {
        const trafficChart = window.echarts.init(chartElement)
        trafficChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [{
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [{
              value: 1048,
              name: 'Search Engine'
            }, {
              value: 735,
              name: 'Direct'
            }, {
              value: 580,
              name: 'Email'
            }, {
              value: 484,
              name: 'Union Ads'
            }, {
              value: 300,
              name: 'Video Ads'
            }]
          }]
        })
        this.charts.trafficChart = trafficChart
        console.log('Traffic Chart initialized successfully')
      } catch (error) {
        console.error('Error initializing Traffic Chart:', error)
      }
    },

    handleResize() {
      // Handle window resize for chart responsiveness
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout)
      }
      
      this.resizeTimeout = setTimeout(() => {
        // ApexCharts handles resize automatically
        if (this.charts.apexChart) {
          this.charts.apexChart.updateOptions({}, false, true)
        }
        
        // ECharts needs manual resize
        if (this.charts.budgetChart) {
          this.charts.budgetChart.resize()
        }
        if (this.charts.trafficChart) {
          this.charts.trafficChart.resize()
        }
      }, 250)
    },

    // async loadChartAssets() {
    //   try {
    //     // Import Chart.js dynamically like the samples page
    //     await import('@basetest/assets/chartjs/chart.umd.js')
    //     console.log('Chart.js loaded successfully for dashboard')
        
    //     // Wait for DOM and other assets to be ready
    //     this.$nextTick(() => {
    //       setTimeout(() => {
    //         this.initializeCharts()
    //       }, 500) // Give extra time for layout assets to load
    //     })
        
    //   } catch (error) {
    //     console.error('Failed to load Chart.js:', error)
    //   }
    // },
    // initializeCharts() {
    //   // Statistics Chart
    //   const statisticsChart = document.getElementById('statisticsChart')
    //   if (statisticsChart) {
    //     const ctx = statisticsChart.getContext('2d')
    //     const chart = new Chart(ctx, {
    //       type: 'line',
    //       data: {
    //         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //         datasets: [{
    //           label: 'Subscribers',
    //           borderColor: '#1d7af3',
    //           pointBorderColor: '#FFF',
    //           pointBackgroundColor: '#1d7af3',
    //           pointBorderWidth: 2,
    //           pointHoverRadius: 4,
    //           pointHoverBorderWidth: 1,
    //           pointRadius: 4,
    //           backgroundColor: 'transparent',
    //           fill: true,
    //           borderWidth: 2,
    //           data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 900]
    //         }, {
    //           label: 'New Visitors',
    //           borderColor: '#59d05d',
    //           pointBorderColor: '#FFF',
    //           pointBackgroundColor: '#59d05d',
    //           pointBorderWidth: 2,
    //           pointHoverRadius: 4,
    //           pointHoverBorderWidth: 1,
    //           pointRadius: 4,
    //           backgroundColor: 'transparent',
    //           fill: true,
    //           borderWidth: 2,
    //           data: [240, 300, 340, 250, 290, 200, 230, 300, 252, 200, 230, 400]
    //         }, {
    //           label: 'Active Users',
    //           borderColor: '#f3545d',
    //           pointBorderColor: '#FFF',
    //           pointBackgroundColor: '#f3545d',
    //           pointBorderWidth: 2,
    //           pointHoverRadius: 4,
    //           pointHoverBorderWidth: 1,
    //           pointRadius: 4,
    //           backgroundColor: 'transparent',
    //           fill: true,
    //           borderWidth: 2,
    //           data: [345, 390, 330, 400, 380, 343, 342, 434, 568, 610, 700, 900]
    //         }]
    //       },
    //       options: {
    //         responsive: true,
    //         maintainAspectRatio: false,
    //         plugins: {
    //           legend: {
    //             display: false
    //           },
    //           tooltip: {
    //             bodySpacing: 4,
    //             mode: "nearest",
    //             intersect: false,
    //             position: "nearest",
    //             padding: 10,
    //             caretPadding: 10
    //           }
    //         },
    //         layout: {
    //           padding: { left: 5, right: 5, top: 15, bottom: 15 }
    //         },
    //         scales: {
    //           y: {
    //             ticks: {
    //               font: { weight: "500" },
    //               beginAtZero: false,
    //               maxTicksLimit: 5,
    //               padding: 20
    //             },
    //             grid: {
    //               drawTicks: false,
    //               display: false
    //             }
    //           },
    //           x: {
    //             grid: {
    //               color: "transparent"
    //             },
    //             ticks: {
    //               padding: 20,
    //               font: { weight: "500" }
    //             }
    //           }
    //         },
    //         // Legend callback removed for Chart.js v4 compatibility
    //       }
    //     })
        
    //     // Generate legend for Chart.js v4
    //     const legendContainer = document.getElementById('myChartLegend')
    //     if (legendContainer && chart.data.datasets) {
    //       const legendHTML = chart.data.datasets.map(dataset => 
    //         `<li><span style="background-color:${dataset.borderColor}"></span>${dataset.label}</li>`
    //       ).join('')
    //       legendContainer.innerHTML = `<ul class="${chart.canvas.id}-legend html-legend">${legendHTML}</ul>`
    //     }
    //   }

    //   // Daily Sales Chart
    //   const dailySalesChart = document.getElementById('dailySalesChart')
    //   if (dailySalesChart) {
    //     const ctx2 = dailySalesChart.getContext('2d')
    //     new Chart(ctx2, {
    //       type: 'line',
    //       data: {
    //         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //         datasets: [{
    //           label: 'Sales Analytics',
    //           fill: !0,
    //           backgroundColor: 'rgba(255,255,255,0.2)',
    //           borderColor: '#fff',
    //           borderCapStyle: 'butt',
    //           borderDash: [],
    //           borderWidth: 2,
    //           pointBorderColor: '#fff',
    //           pointBackgroundColor: '#fff',
    //           pointBorderWidth: 1,
    //           pointHoverRadius: 5,
    //           pointHoverBackgroundColor: '#fff',
    //           pointHoverBorderColor: '#fff',
    //           pointHoverBorderWidth: 1,
    //           pointRadius: 1,
    //           pointHitRadius: 10,
    //           data: [65, 59, 80, 81, 56, 55, 40, 35, 30, 20, 25, 30]
    //         }]
    //       },
    //       options: {
    //         maintainAspectRatio: false,
    //         plugins: {
    //           legend: {
    //             display: false
    //           }
    //         },
    //         animation: {
    //           easing: 'easeInOutBack'
    //         },
    //         scales: {
    //           y: {
    //             display: false
    //           },
    //           x: {
    //             display: false
    //           }
    //         },
    //         elements: {
    //           line: {
    //             borderWidth: 1
    //           },
    //           point: {
    //             radius: 4
    //           }
    //         },
    //         layout: {
    //           padding: {
    //             left: 0,
    //             right: 0,
    //             top: 15,
    //             bottom: 15
    //           }
    //         }
    //       }
    //     })
    //   }

    //   // Initialize sparklines
    //   if (window.$) {
    //     $('#lineChart').sparkline([102, 109, 120, 99, 110, 105, 115], {
    //       type: 'line',
    //       height: '70',
    //       width: '100%',
    //       lineWidth: '2',
    //       lineColor: '#177dff',
    //       fillColor: 'rgba(23, 125, 255, 0.14)'
    //     })
    //   }
    // }
  }
}
</script>
<template>
  <div>
    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><nuxt-link to="/niceadmin">Home</nuxt-link></li>
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
                      <h6>{{ stats.sales }}</h6>
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
                      <h6>${{ stats.revenue }}</h6>
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
                      <h6>{{ stats.customers }}</h6>
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
                      <tr v-for="sale in recentSales" :key="sale.id">
                        <th scope="row">{{ sale.id }}</th>
                        <td>{{ sale.customer }}</td>
                        <td><a href="#" class="text-primary">{{ sale.product }}</a></td>
                        <td>${{ sale.price }}</td>
                        <td><span :class="'badge bg-' + sale.statusColor">{{ sale.status }}</span></td>
                      </tr>
                    </tbody>
                  </table>

                </div>

              </div>
            </div><!-- End Recent Sales -->

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

                <div v-for="activity in recentActivities" :key="activity.id" class="activity-item d-flex">
                  <div class="activite-label">{{ activity.time }}</div>
                  <i :class="'bi bi-circle-fill activity-badge ' + activity.color + ' align-self-start'"></i>
                  <div class="activity-content">
                    {{ activity.content }}
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
                <div v-for="news in newsItems" :key="news.id" class="post-item clearfix">
                  <img :src="news.image" alt="">
                  <h4><a href="#">{{ news.title }}</a></h4>
                  <p>{{ news.description }}</p>
                </div>

              </div><!-- End sidebar recent posts-->

            </div>
          </div><!-- End News & Updates -->

        </div><!-- End Right side columns -->

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'NiceAdminDashboard',
  layout: 'niceadmin-new',
  data() {
    return {
      stats: {
        sales: 145,
        revenue: 3264,
        customers: 1244
      },
      recentSales: [
        {
          id: '#2457',
          customer: 'Brandon Jacob',
          product: 'At praesentium minu',
          price: 64,
          status: 'Approved',
          statusColor: 'success'
        },
        {
          id: '#2147',
          customer: 'Bridie Kessler',
          product: 'Blanditiis dolor omnis similique',
          price: 47,
          status: 'Pending',
          statusColor: 'warning'
        },
        {
          id: '#2049',
          customer: 'Ashleigh Langosh',
          product: 'At recusandae consectetur',
          price: 147,
          status: 'Approved',
          statusColor: 'success'
        },
        {
          id: '#2644',
          customer: 'Angus Grady',
          product: 'Ut voluptatem id earum et',
          price: 67,
          status: 'Rejected',
          statusColor: 'danger'
        },
        {
          id: '#2644',
          customer: 'Raheem Lehner',
          product: 'Sunt similique distinctio',
          price: 165,
          status: 'Approved',
          statusColor: 'success'
        }
      ],
      recentActivities: [
        {
          id: 1,
          time: '32 min',
          color: 'text-success',
          content: 'Quia quae rerum explicabo officiis beatae'
        },
        {
          id: 2,
          time: '56 min',
          color: 'text-danger',
          content: 'Voluptatem blanditiis blanditiis eveniet'
        },
        {
          id: 3,
          time: '2 hrs',
          color: 'text-primary',
          content: 'Voluptates corrupti molestias voluptatem'
        },
        {
          id: 4,
          time: '1 day',
          color: 'text-info',
          content: 'Tempore autem saepe occaecati voluptatem tempore'
        },
        {
          id: 5,
          time: '2 days',
          color: 'text-warning',
          content: 'Est sit eum reiciendis exercitationem'
        },
        {
          id: 6,
          time: '4 weeks',
          color: 'text-muted',
          content: 'Dicta dolorem harum nulla eius. Ut quidem quidem sit quas'
        }
      ],
      newsItems: [
        {
          id: 1,
          title: 'Nihil blanditiis at in nihil autem',
          description: 'Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...',
          image: require('@hubtoo-plugin-lms/assets/img/news-1.jpg')
        },
        {
          id: 2,
          title: 'Quidem autem et impedit',
          description: 'Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...',
          image: require('@hubtoo-plugin-lms/assets/img/news-2.jpg')
        },
        {
          id: 3,
          title: 'Id quia et et ut maxime similique occaecati ut',
          description: 'Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...',
          image: require('@hubtoo-plugin-lms/assets/img/news-3.jpg')
        },
        {
          id: 4,
          title: 'Laborum corporis quo dara net para',
          description: 'Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...',
          image: require('@hubtoo-plugin-lms/assets/img/news-4.jpg')
        },
        {
          id: 5,
          title: 'Et dolores corrupti quae illo quod dolor',
          description: 'Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae et eius omnis...',
          image: require('@hubtoo-plugin-lms/assets/img/news-5.jpg')
        }
      ]
    }
  },
  mounted() {
    // Client-side only: Load Chart libraries and initialize charts
    if (process.client) {
      this.loadChartAssets()
    }
  },
  methods: {
    async loadChartAssets() {
      try {
        // Import chart libraries dynamically using the project asset paths
        await import('@hubtoo-plugin-lms/assets/apexcharts/apexcharts.min.js')
        await import('@hubtoo-plugin-lms/assets/echarts/echarts.min.js')
        console.log('ApexCharts and ECharts loaded successfully for NiceAdmin dashboard')
        
        // Wait for DOM and other assets to be ready
        this.$nextTick(() => {
          setTimeout(() => {
            this.initializeCharts()
          }, 500) // Give extra time for layout assets to load
        })
        
      } catch (error) {
        console.error('Failed to load chart libraries:', error)
        console.log('Charts will be displayed without interactive functionality')
      }
    },
    initializeCharts() {
      console.log('Initializing charts...')
      
      // Check if elements exist before initializing
      const reportsChartElement = document.querySelector("#reportsChart")
      const budgetChartElement = document.querySelector("#budgetChart")  
      const trafficChartElement = document.querySelector("#trafficChart")
      
      // Reports Chart (ApexCharts Line Chart) - from NiceAdmin demo
      if (window.ApexCharts && reportsChartElement) {
        console.log('Initializing ApexCharts for reports')
        new ApexCharts(reportsChartElement, {
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
        }).render()
        console.log('ApexCharts reports chart rendered successfully')
      } else {
        console.warn('ApexCharts not loaded or #reportsChart element not found', { ApexCharts: !!window.ApexCharts, element: !!reportsChartElement })
      }

      // Budget Chart (ECharts) - from NiceAdmin demo
      if (window.echarts && budgetChartElement) {
        console.log('Initializing ECharts for budget')
        const budgetChart = echarts.init(budgetChartElement)
        budgetChart.setOption({
          legend: {
            data: ['Allocated Budget', 'Actual Spending']
          },
          radar: {
            // shape: 'circle',
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
        console.log('ECharts budget chart rendered successfully')
      } else {
        console.warn('ECharts not loaded or #budgetChart element not found', { echarts: !!window.echarts, element: !!budgetChartElement })
      }

      // Website Traffic Chart (ECharts) - from NiceAdmin demo  
      if (window.echarts && trafficChartElement) {
        console.log('Initializing ECharts for traffic')
        const trafficChart = echarts.init(trafficChartElement)
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
        console.log('ECharts traffic chart rendered successfully')
      } else {
        console.warn('ECharts not loaded or #trafficChart element not found', { echarts: !!window.echarts, element: !!trafficChartElement })
      }
    }
  },
  head() {
    return {
      title: 'Dashboard - NiceAdmin',
      meta: [
        { hid: 'description', name: 'description', content: 'NiceAdmin Bootstrap Dashboard' }
      ]
    }
  }
}
</script>

<style>
/* Remove scoped to ensure NiceAdmin CSS applies */
</style>
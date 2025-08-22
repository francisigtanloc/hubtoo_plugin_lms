<template>
    <div>
      <div class="wrapper">
        <NiceAdminSidebar />
        <div class="main-panel">
          <NiceAdminNavbar />
          <div class="container">
            <div class="page-inner">
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

                                <script>
                                    document.addEventListener("DOMContentLoaded", () => {
                                    new ApexCharts(document.querySelector("#reportsChart"), {
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
                                    }).render();
                                    });
                                </script>
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
                                        <th scope="row"><a href="#"><img src="assets/img/product-1.jpg" alt=""></a></th>
                                        <td><a href="#" class="text-primary fw-bold">Ut inventore ipsa voluptas nulla</a></td>
                                        <td>$64</td>
                                        <td class="fw-bold">124</td>
                                        <td>$5,828</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt=""></a></th>
                                        <td><a href="#" class="text-primary fw-bold">Exercitationem similique doloremque</a></td>
                                        <td>$46</td>
                                        <td class="fw-bold">98</td>
                                        <td>$4,508</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><a href="#"><img src="assets/img/product-3.jpg" alt=""></a></th>
                                        <td><a href="#" class="text-primary fw-bold">Doloribus nisi exercitationem</a></td>
                                        <td>$59</td>
                                        <td class="fw-bold">74</td>
                                        <td>$4,366</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><a href="#"><img src="assets/img/product-4.jpg" alt=""></a></th>
                                        <td><a href="#" class="text-primary fw-bold">Officiis quaerat sint rerum error</a></td>
                                        <td>$32</td>
                                        <td class="fw-bold">63</td>
                                        <td>$2,016</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt=""></a></th>
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

                            <script>
                                document.addEventListener("DOMContentLoaded", () => {
                                var budgetChart = echarts.init(document.querySelector("#budgetChart")).setOption({
                                    legend: {
                                    data: ['Allocated Budget', 'Actual Spending']
                                    },
                                    radar: {
                                    // shape: 'circle',
                                    indicator: [{
                                        name: 'Sales',
                                        max: 6500
                                        },
                                        {
                                        name: 'Administration',
                                        max: 16000
                                        },
                                        {
                                        name: 'Information Technology',
                                        max: 30000
                                        },
                                        {
                                        name: 'Customer Support',
                                        max: 38000
                                        },
                                        {
                                        name: 'Development',
                                        max: 52000
                                        },
                                        {
                                        name: 'Marketing',
                                        max: 25000
                                        }
                                    ]
                                    },
                                    series: [{
                                    name: 'Budget vs spending',
                                    type: 'radar',
                                    data: [{
                                        value: [4200, 3000, 20000, 35000, 50000, 18000],
                                        name: 'Allocated Budget'
                                        },
                                        {
                                        value: [5000, 14000, 28000, 26000, 42000, 21000],
                                        name: 'Actual Spending'
                                        }
                                    ]
                                    }]
                                });
                                });
                            </script>

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

                            <script>
                                document.addEventListener("DOMContentLoaded", () => {
                                echarts.init(document.querySelector("#trafficChart")).setOption({
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
                                        },
                                        {
                                        value: 735,
                                        name: 'Direct'
                                        },
                                        {
                                        value: 580,
                                        name: 'Email'
                                        },
                                        {
                                        value: 484,
                                        name: 'Union Ads'
                                        },
                                        {
                                        value: 300,
                                        name: 'Video Ads'
                                        }
                                    ]
                                    }]
                                });
                                });
                            </script>

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
                                <img src="assets/img/news-1.jpg" alt="">
                                <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                                <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                                </div>

                                <div class="post-item clearfix">
                                <img src="assets/img/news-2.jpg" alt="">
                                <h4><a href="#">Quidem autem et impedit</a></h4>
                                <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                                </div>

                                <div class="post-item clearfix">
                                <img src="assets/img/news-3.jpg" alt="">
                                <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                                <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                                </div>

                                <div class="post-item clearfix">
                                <img src="assets/img/news-4.jpg" alt="">
                                <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                                <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                                </div>

                                <div class="post-item clearfix">
                                <img src="assets/img/news-5.jpg" alt="">
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
        title: 'KAI Admin - Bootstrap 5 Admin Dashboard',
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
          await this.loadScript('@hubtoo-plugin-lms/assets/niceadmin/vendor/apexcharts/apexcharts.min.js')
          await this.loadScript('@hubtoo-plugin-lms/assets/niceadmin/vendor/bootstrap/js/bootstrap.bundle.min.js')
          await this.loadScript('@hubtoo-plugin-lms/assets/niceadmin/vendor/chart.js/chart.umd.js')
          await this.loadScript('@hubtoo-plugin-lms/assets/niceadmin/vendor/echarts/echarts.min.js')
          await this.loadScript('@hubtoo-plugin-lms/assets/niceadmin/vendor/quill/quill.min.js')
          await this.loadScript('@hubtoo-plugin-lms/assets/niceadmin/vendor/simple-datatables/simple-datatables.js')
          await this.loadScript('@hubtoo-plugin-lms/assets/niceadmin/vendor/tinymce/tinymce.min.js')
          await this.loadScript('@hubtoo-plugin-lms/assets/niceadmin/vendor/php-email-form/validate.js')
          await this.loadScript('@hubtoo-plugin-lms/assets/js/main.js')
          
          console.log('NiceAdmin JS loaded successfully')
          
          // Initialize NiceAdmin after all scripts loaded
        //   this.$nextTick(() => {
        //     this.initializeKaiAdmin()
        //   })
          
        } catch (error) {
          console.error('Failed to load Nice Admin JavaScript assets:', error)
          // Initialize basic functionality even if some assets fail
        //   this.$nextTick(() => {
        //     this.initializeKaiAdmin()
        //   })
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
      
    //   initializeKaiAdmin() {
    //     // Initialize sidebar toggle functionality
    //     if (window.$ && window.jQuery) {
    //       console.log('Initializing KAI Admin components with jQuery')
          
    //       // Initialize sidebar toggles
    //       $('.sidenav-toggler').click(function() {
    //         $('body').toggleClass('sidebar_minimize')
    //       })
          
    //       $('.toggle-sidebar').click(function() {
    //         $('body').toggleClass('toggle-sidebar')
    //       })
          
    //       // Initialize scrollbar
    //       if ($.fn.scrollbar) {
    //         $('.scrollbar-inner').scrollbar()
    //       }
          
    //       // Initialize Bootstrap tooltips
    //       if (window.bootstrap && document.querySelectorAll('[data-bs-toggle="tooltip"]').length) {
    //         var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    //         tooltipTriggerList.map(function (tooltipTriggerEl) {
    //           return new window.bootstrap.Tooltip(tooltipTriggerEl)
    //         })
    //       }
          
    //       // Initialize dropdowns
    //       if (window.bootstrap && document.querySelectorAll('.dropdown-toggle').length) {
    //         var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    //         dropdownElementList.map(function (dropdownToggleEl) {
    //           return new window.bootstrap.Dropdown(dropdownToggleEl)
    //         })
    //       }
    //     }
    //   }
    }
  }
  </script>
  
  
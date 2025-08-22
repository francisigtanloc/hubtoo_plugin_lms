<template>
    <div>
      <div class="container">
        test
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'KaiAdminDashboard',
    layout: 'test-layout',
    mounted() {
      // Client-side only: Load Chart.js and initialize charts
      if (process.client) {
        // this.loadChartAssets()
      }
    },
    methods: {
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
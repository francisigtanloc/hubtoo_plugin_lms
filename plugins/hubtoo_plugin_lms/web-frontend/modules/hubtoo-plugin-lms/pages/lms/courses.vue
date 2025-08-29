<template>
  <div class="courses-dashboard">
    <main id="main" class="main">
      <!-- Dashboard Header -->
      <div class="dashboard-header d-flex justify-content-between align-items-center mb-4 p-3 bg-white rounded shadow-sm">
        <div class="header-content">
          <h1 class="page-title h2 fw-bold mb-1">Learning Dashboard</h1>
          <p class="page-subtitle text-muted mb-0">Track your learning progress and explore courses</p>
        </div>
        <div class="user-profile">
          <div class="user-avatar rounded-circle bg-primary d-flex align-items-center justify-content-center shadow-sm" style="width: 45px; height: 45px;">
            <i class="bi bi-person text-white fs-5"></i>
          </div>
        </div>
      </div>

      <!-- Statistics Cards -->
      <div class="row g-3 mb-4">
        <div class="col-md-3 col-sm-6">
          <div class="stat-card card h-100 shadow-sm border-0">
            <div class="card-body d-flex align-items-center">
              <div class="stat-icon bg-indigo bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm" style="width: 55px; height: 55px;">
                <i class="bi bi-journal-bookmark-fill text-indigo fs-4"></i>
              </div>
              <div>
                <h3 class="mb-0 fw-bold">{{ courses.length }}</h3>
                <small class="text-muted">Total Courses</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="stat-card card h-100 shadow-sm border-0">
            <div class="card-body d-flex align-items-center">
              <div class="stat-icon bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm" style="width: 55px; height: 55px;">
                <i class="bi bi-check2-circle text-success fs-4"></i>
              </div>
              <div>
                <h3 class="mb-0 fw-bold">{{ completedCoursesCount }}</h3>
                <small class="text-muted">Completed</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="stat-card card h-100 shadow-sm border-0">
            <div class="card-body d-flex align-items-center">
              <div class="stat-icon bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm" style="width: 55px; height: 55px;">
                <i class="bi bi-hourglass-split text-warning fs-4"></i>
              </div>
              <div>
                <h3 class="mb-0 fw-bold">{{ inProgressCoursesCount }}</h3>
                <small class="text-muted">In Progress</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6">
          <div class="stat-card card h-100 shadow-sm border-0">
            <div class="card-body d-flex align-items-center">
              <div class="stat-icon bg-secondary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm" style="width: 55px; height: 55px;">
                <i class="bi bi-clock-history text-secondary fs-4"></i>
              </div>
              <div>
                <h3 class="mb-0 fw-bold">{{ notStartedCoursesCount }}</h3>
                <small class="text-muted">Not Started</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="row mb-4 g-3">
        <div class="col-lg-6">
          <div class="chart-card card h-100 shadow-sm border-0">
            <div class="card-header d-flex justify-content-between align-items-center bg-white border-0">
              <h3 class="h5 mb-0 fw-semibold">Course Progress Overview</h3>
              <select class="form-select form-select-sm" style="width:auto;">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>All Time</option>
              </select>
            </div>
            <div class="card-body">
              <div class="chart-container" style="height: 250px;">
                <canvas ref="progressChart" height="250"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="chart-card card h-100 shadow-sm border-0">
            <div class="card-header bg-white border-0">
              <h3 class="h5 mb-0 fw-semibold">Course Distribution</h3>
            </div>
            <div class="card-body">
              <div class="chart-container" style="height: 250px;">
                <canvas ref="distributionChart" height="250"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Courses Section -->
      <div class="courses-section">
        <div class="section-header card shadow-sm border-0 mb-3">
          <div class="card-body d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
            <h2 class="h4 fw-bold mb-0">Available Courses</h2>
            <div class="controls d-flex flex-wrap gap-2">
              <div class="search-box position-relative">
                <i class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                <input
                  type="text"
                  class="form-control ps-5"
                  placeholder="Search courses..."
                  v-model="searchQuery"
                  @input="filterCourses"
                  style="min-width:200px;"
                />
              </div>
              <select class="form-select" v-model="filterStatus" @change="filterCourses" style="min-width:150px;">
                <option value="all">All Courses</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="not-started">Not Started</option>
              </select>
              <div class="btn-group">
                <button :class="['btn btn-outline-secondary', { active: viewMode === 'grid' }]" @click="viewMode = 'grid'">
                  <i class="bi bi-grid"></i>
                </button>
                <button :class="['btn btn-outline-secondary', { active: viewMode === 'list' }]" @click="viewMode = 'list'">
                  <i class="bi bi-list-task"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div :class="['row g-3', viewMode === 'list' ? 'row-cols-1' : 'row-cols-1 row-cols-md-2 row-cols-lg-3']">
          <div
            v-for="course in filteredCourses"
            :key="course.id"
            class="col"
          >
            <div :class="['course-card card h-100 shadow-sm border-0 hover-card', viewMode]">
              <div class="course-image-container position-relative" @click="openCourseDetails(course.id)">
                <img :src="course.image" :alt="course.title" class="card-img-top rounded-top" style="height:180px; object-fit:cover;" />
                <span class="course-status position-absolute top-0 end-0 m-2 badge rounded-pill shadow-sm" :class="{
                  'bg-success': statusClass(course.status) === 'complete',
                  'bg-warning': statusClass(course.status) === 'in-progress',
                  'bg-secondary': statusClass(course.status) === 'not-started'
                }">
                  {{ course.status }}
                  <span v-if="course.hasQuiz && course.status === 'Completed'" class="ms-1">
                    <i class="bi bi-question-circle"></i>
                  </span>
                </span>
                <div class="course-category position-absolute top-0 start-0 m-2 badge bg-primary shadow-sm">
                  {{ course.category }}
                </div>
              </div>

              <div class="card-body">
                <div class="course-meta d-flex justify-content-between text-muted small mb-2">
                  <span><i class="bi bi-person me-1"></i> {{ course.instructor }}</span>
                  <span><i class="bi bi-clock me-1"></i> {{ course.lessons }} Lessons</span>
                </div>

                <h3 class="card-title h5 fw-semibold course-title" @click="openCourseDetails(course.id)">
                  {{ course.title }}
                </h3>
                <p class="card-text text-muted small">{{ truncateDescription(course.description) }}</p>

                <!-- Progress bar -->
                <div v-if="course.lessons > 0" class="mt-3">
                  <div class="d-flex justify-content-between small text-muted mb-1">
                    <span>{{ course.progress }}% Complete</span>
                    <span>{{ getCompletedLessons(course) }}/{{ course.lessons }} lessons</span>
                  </div>
                  <div class="progress" style="height:8px;">
                    <div
                      class="progress-bar"
                      :class="{
                        'bg-success': course.progress === 100,
                        'bg-primary': course.progress > 0 && course.progress < 100,
                        'bg-secondary': course.progress === 0
                      }"
                      :style="{ width: course.progress + '%' }"
                    ></div>
                  </div>
                </div>

                <button
                  class="btn w-100 mt-3 fw-semibold"
                  @click.stop="handleCourseAction(course)"
                  :class="{
                    'btn-primary': course.progress === 0,
                    'btn-info': course.progress > 0 && course.progress < 100,
                    'btn-success': course.progress === 100
                  }"
                >
                  {{ getButtonText(course) }}
                  <i v-if="course.hasQuiz && course.status === 'Completed'" class="bi bi-question-circle ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filteredCourses.length === 0" class="text-center py-5">
          <i class="bi bi-search fs-1 text-muted mb-3"></i>
          <h3 class="h5">No courses found</h3>
          <p class="text-muted">Try adjusting your search or filter criteria</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import LoginModal from './courselogin.vue'
import Chart from 'chart.js/auto'

export default {
  layout: 'test-layout',
  name: "KaiAdminDashboard",
  components: {
    LoginModal
  },
  data() {
    return {
      courses: [],
      filteredCourses: [],
      selectedCourseId: null,
      searchQuery: '',
      filterStatus: 'all',
      quizzes: [],
      viewMode: 'grid',
      progressChart: null,
      distributionChart: null
    };
  },
  computed: {
    completedCoursesCount() {
      return this.courses.filter(course => course.status === 'Completed').length;
    },
    inProgressCoursesCount() {
      return this.courses.filter(course => course.status === 'In Progress').length;
    },
    notStartedCoursesCount() {
      return this.courses.filter(course => course.status === 'Not Started').length;
    }
  },
  async created() {
    await this.fetchCourses();
    await this.fetchQuizzes();
  },
  mounted() {
    this.$nextTick(() => {
      this.createCharts();
    });

    // Update charts on window resize
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    if (this.progressChart) {
      this.progressChart.destroy();
    }
    if (this.distributionChart) {
      this.distributionChart.destroy();
    }

    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      if (this.progressChart) {
        this.progressChart.resize();
      }
      if (this.distributionChart) {
        this.distributionChart.resize();
      }
    },
    async fetchCourses() {
      try {
        const [courseRes, progressRes] = await Promise.all([
          axios.get('http://localhost/api/hubtoo_plugin_lms/courses/'),
          axios.get('http://localhost/api/hubtoo_plugin_lms/progress/')
        ]);

        const progressList = progressRes.data.status === 'success' ? progressRes.data.progress : [];

        if (courseRes.data.status === 'success') {
          this.courses = courseRes.data.courses.map(c => {
            const courseProgressItems = progressList.filter(
              p => p.course && p.course.some(co => co.id === c.id)
            );

            const totalLessons = c.Lessons ? c.Lessons.length : 0;
            let completedLessons = 0;

            if (totalLessons > 0 && courseProgressItems.length > 0) {
              const completedLessonIds = new Set();
              courseProgressItems.forEach(progressItem => {
                if (progressItem.lesson) {
                  progressItem.lesson.forEach(lesson => {
                    if (c.Lessons.some(courseLesson => courseLesson.id === lesson.id)) {
                      completedLessonIds.add(lesson.id);
                    }
                  });
                }
              });
              completedLessons = completedLessonIds.size;
            }

            const progress = totalLessons > 0
              ? Math.min(100, Math.floor((completedLessons / totalLessons) * 100))
              : 0;

            let status = 'Not Started';
            if (progress === 100) status = 'Completed';
            else if (progress > 0) status = 'In Progress';

            const isCompleted = courseProgressItems.some(item => item.completed);

            return {
              id: c.id,
              title: c.title || 'Untitled Course',
              description: c.description || '',
              lessons: totalLessons,
              completedLessons,
              instructor: c.instructor && c.instructor.length > 0
                ? c.instructor.join(', ')
                : 'N/A',
              progress,
              status: isCompleted ? 'Completed' : status,
              image: c.image_url || 'https://via.placeholder.com/340x180?text=No+Image',
              category: c.difficulty ? c.difficulty.value : '',
              hasQuiz: this.quizzes.some(q => q.course && q.course.some(co => co.id === c.id))
            };
          });

          this.filteredCourses = [...this.courses];
          this.$nextTick(() => {
            this.updateCharts();
          });
        }
      } catch (err) {
        console.error('Error fetching courses/progress:', err);
      }
    },

    async fetchQuizzes() {
      try {
        const response = await axios.get('http://localhost/api/hubtoo_plugin_lms/quizzes/');

        if (response.data?.status === 'success') {
          // Filter only active quizzes with questions
          this.quizzes = (response.data.quizzes || []).filter(q =>
            q?.is_active &&
            Array.isArray(q.Questions) &&
            q.Questions.length > 0
          );

          // Update courses with quiz info if we have courses
          if (Array.isArray(this.courses)) {
            this.courses = this.courses.map(course => {
              if (!course?.id) return course;

              const hasQuiz = this.quizzes.some(q =>
                Array.isArray(q.course) &&
                q.course.some(co => co?.id === course.id)
              );

              return {
                ...course,
                hasQuiz
              };
            });

            // Update filtered courses while preserving any existing filters
            this.filteredCourses = this.applyFilters([...this.courses]);
          }
        } else {
          console.warn('Unexpected quiz response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching quizzes:', error);
        this.$notify({
          type: 'error',
          title: 'Quiz Error',
          text: 'Failed to load quiz information. Please try again later.'
        });
      }
    },

    createCharts() {
      const progressCtx = this.$refs.progressChart;
      const distributionCtx = this.$refs.distributionChart;

      if (progressCtx && distributionCtx) {
        // Progress Chart
        this.progressChart = new Chart(progressCtx, {
          type: 'bar',
          data: {
            labels: this.courses.map(c => c.title.length > 15 ? c.title.substring(0, 15) + '...' : c.title),
            datasets: [{
              label: 'Progress (%)',
              data: this.courses.map(c => c.progress),
              backgroundColor: this.courses.map(c => {
                if (c.progress === 100) return '#10B981';
                if (c.progress > 0) return '#3B82F6';
                return '#EF4444';
              }),
              borderWidth: 0,
              borderRadius: 6,
              barPercentage: 0.6,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                backgroundColor: '#1F2937',
                titleFont: {
                  family: "'Poppins', sans-serif"
                },
                bodyFont: {
                  family: "'Poppins', sans-serif"
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                grid: {
                  color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                  font: {
                    family: "'Poppins', sans-serif"
                  },
                  callback: function(value) {
                    return value + '%';
                  }
                }
              },
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  font: {
                    family: "'Poppins', sans-serif"
                  }
                }
              }
            }
          }
        });

        // Distribution Chart
        this.distributionChart = new Chart(distributionCtx, {
          type: 'doughnut',
          data: {
            labels: ['Completed', 'In Progress', 'Not Started'],
            datasets: [{
              data: [this.completedCoursesCount, this.inProgressCoursesCount, this.notStartedCoursesCount],
              backgroundColor: ['#10B981', '#F59E0B', '#9CA3AF'],
              borderWidth: 0,
              hoverOffset: 10
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  font: {
                    family: "'Poppins', sans-serif"
                  },
                  padding: 20
                }
              }
            },
            cutout: '70%'
          }
        });
      }
    },

    updateCharts() {
      if (this.progressChart) {
        this.progressChart.data.labels = this.courses.map(c => c.title.length > 15 ? c.title.substring(0, 15) + '...' : c.title);
        this.progressChart.data.datasets[0].data = this.courses.map(c => c.progress);
        this.progressChart.data.datasets[0].backgroundColor = this.courses.map(c => {
          if (c.progress === 100) return '#10B981';
          if (c.progress > 0) return '#3B82F6';
          return '#EF4444';
        });
        this.progressChart.update();
      }

      if (this.distributionChart) {
        this.distributionChart.data.datasets[0].data = [
          this.completedCoursesCount,
          this.inProgressCoursesCount,
          this.notStartedCoursesCount
        ];
        this.distributionChart.update();
      }
    },

    openCourseDetails(courseId) {
      if (!courseId) {
        console.error('Cannot open course details - missing course ID');
        return;
      }
      this.$router.push({
        name: 'course-detail',
        params: { id: courseId }
      }).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          console.error('Navigation error:', err);
        }
      });
    },

    getButtonText(course) {
      if (!course) return 'Start Now';

      if (course.progress === 0) return 'Start Now';
      if (course.progress === 100) {
        return course.hasQuiz ? 'Take Quiz' : 'View Certificate';
      }
      return 'Continue';
    },

    handleCourseAction(course) {
      if (!course?.id) {
        console.error('Invalid course data - missing ID');
        return;
      }

      this.selectedCourseId = course.id;

      if (course.progress === 100) {
        if (course.hasQuiz) {
          this.navigateToQuiz(course.id);
        } else {
          this.showCertificateAlert(course.title);
        }
      } else {
        this.openCourseDetails(course.id);
      }
    },

    navigateToQuiz(courseId) {
      this.$router.push({
        name: 'course-quiz',
        params: { id: courseId }
      }).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          console.error('Quiz navigation error:', err);
          this.$notify({
            type: 'error',
            title: 'Navigation Error',
            text: 'Could not open quiz. Please try again.'
          });
        }
      });
    },

    showCertificateAlert(courseTitle) {
      this.$notify({
        type: 'info',
        title: 'Certificate Available',
        text: `View certificate for ${courseTitle || 'this course'}`
      });
    },

    applyFilters(courses) {
      let filtered = courses || [];

      if (this.searchQuery.trim() !== '') {
        const q = this.searchQuery.toLowerCase();
        filtered = filtered.filter(c =>
          (c.title?.toLowerCase().includes(q) || '') ||
          (c.category?.toLowerCase().includes(q) || '') ||
          (c.instructor?.toLowerCase().includes(q) || '')
        );
      }

      if (this.filterStatus !== 'all') {
        const statusMap = {
          'in-progress': 'In Progress',
          'completed': 'Completed',
          'not-started': 'Not Started'
        };
        filtered = filtered.filter(c => c.status === statusMap[this.filterStatus]);
      }

      return filtered;
    },

    startCourse(courseId) {
      this.$router.push({
        name: 'course-learn',
        params: { id: courseId }
      })
    },

    statusClass(status) {
      switch (status.toLowerCase()) {
        case 'completed':
          return 'complete'
        case 'in progress':
          return 'in-progress'
        case 'not started':
        default:
          return 'not-started'
      }
    },

    filterCourses() {
      this.filteredCourses = this.applyFilters([...this.courses]);
    },

    truncateDescription(description) {
      if (!description) return '';
      return description.length > 100
        ? description.substring(0, 100) + '...'
        : description;
    },

    getCompletedLessons(course) {
      return course.completedLessons || 0;
    }
  }
};
</script>

<style scoped>
.course-card.list {
  display: flex;
  flex-direction: row;
}
.course-card.list .course-image-container {
  width: 250px;
  flex-shrink: 0;
}
.course-card.list .card-img-top {
  height: 100%;
  object-fit: cover;
}
.course-title {
  cursor: pointer;
  transition: color .2s;
}
.course-title:hover {
  color: #0d6efd;
}
.hover-card {
  transition: transform .2s, box-shadow .2s;
}
.hover-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}
@media (max-width: 768px) {
  .course-card.list {
    flex-direction: column;
  }
  .course-card.list .course-image-container {
    width: 100%;
  }
}
</style>
import path from 'path'

export const routes = [
  {
    name: 'starting',
    path: '/starting',
    component: path.resolve(__dirname, 'pages/starting.vue'),
  },
  {
    name: 'niceadmin',
    path: '/niceadmin',
    component: path.resolve(__dirname, 'pages/niceadmin/index.vue'),
  },
  {
    name: 'niceadmin-test',
    path: '/niceadmin/test',
    component: path.resolve(__dirname, 'pages/niceadmin/test.vue'),
  },
  {
    name: 'courses',
    path: '/lms/courses',
    component: path.resolve(__dirname, 'pages/lms/courses.vue'),
  },
  {
    name: 'course-quiz',
    path: '/lms/courses/:id/quiz',
    component: path.resolve(__dirname, 'pages/lms/CourseQuiz.vue'),
  },
  {
    name: 'course-detail',
    path: '/lms/courses/:id',
    component: path.resolve(__dirname, 'pages/lms/CourseDetailPage.vue'),
  },
  {
    name: 'course-learn',
    path: '/lms/courses/:id/learn',
    component: path.resolve(__dirname, 'pages/lms/CourseLearnPage.vue'),
  },
  {
    name: 'login',
    path: '/auth/login',
    component: path.resolve(__dirname, 'pages/authentication/login.vue'),
  },
  {
    name: 'courselogin',
    path: '/course/courselogin',
    component: path.resolve(__dirname, 'pages/lms/courselogin.vue'),
    props: true,
  },
]

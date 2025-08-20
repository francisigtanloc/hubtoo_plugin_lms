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
]

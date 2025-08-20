import path from 'path'

import { routes } from './routes'

export default function () {
  this.options.alias['@hubtoo-plugin-lms'] = path.resolve(
    __dirname,
    './'
  )
  this.addLayout(path.resolve(__dirname, 'layouts/niceadmin-new.vue'), 'niceadmin-new')

  this.extendRoutes((configRoutes) => {
    configRoutes.push(...routes)
  })
  this.appendPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
  })
  this.options.css.push(path.resolve(__dirname, 'assets/scss/default.scss'))
}

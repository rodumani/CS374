import './promise-polyfill' // eslint-disable-line import/no-unassigned-import
import { app } from './app'

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa') // eslint-disable-line import/no-unassigned-import
}

app.$mount('#app')

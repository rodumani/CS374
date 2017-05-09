import Vue from 'vue'
import Router from 'vue-router'
import Inbox from '../components/Inbox'
import Files from '../components/Files'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/inbox' },
    { path: '/inbox', component: Inbox },
    { path: '/sent', redirect: '/inbox' },
    { path: '/files', component: Files },
  ],
})

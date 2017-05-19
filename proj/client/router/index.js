import Vue from 'vue'
import Router from 'vue-router'
import Inbox from '../components/Inbox'
import Files from '../components/Files'
import ShowMail from '../components/ShowMail'
import Login from '../components/Login'
import store from '../store/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/inbox' },
    { path: '/login', component: Login },
    { path: '/inbox', component: Inbox, props: { type: 'Inbox' }},
    { path: '/sent', component: Inbox, props: { type: 'Sent' }},
    { path: '/files', component: Files },
    { path: '/inbox/:mailid', component: ShowMail },
    { path: '/sent/:mailid', component: ShowMail },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else if (!store.state.account) {
    next('/login')
  } else {
    next()
  }
})

export default router

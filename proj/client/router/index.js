import Vue from 'vue'
import Router from 'vue-router'
import Inbox from '../components/Inbox'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Inbox,
    },
  ],
})

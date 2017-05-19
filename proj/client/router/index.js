import Vue from 'vue'
import Router from 'vue-router'
import Inbox from '../components/Inbox'
import Sent from '../components/Sent'
import Files from '../components/Files'
import ShowMail from '../components/ShowMail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/inbox' },
    { path: '/inbox', component: Inbox },
    { path: '/sent', component: Sent },
    { path: '/files', component: Files },
    { path: '/inbox/:mailid', component: ShowMail },
    { path: '/sent/:mailid', component: ShowMail },
  ],
})

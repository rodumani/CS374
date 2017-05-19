import Vue from 'vue'
import Router from 'vue-router'
import Inbox from '../components/Inbox'
import Files from '../components/Files'
import ShowMail from '../components/ShowMail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/inbox' },
    { path: '/inbox', component: Inbox, props: { type: 'Inbox' }},
    { path: '/sent', component: Inbox, props: { type: 'Sent' }},
    { path: '/files', component: Files },
    { path: '/inbox/:mailid', component: ShowMail },
    { path: '/sent/:mailid', component: ShowMail },
  ],
})

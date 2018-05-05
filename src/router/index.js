import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/LoginPage'
import AdminPage from '@/pages/AdminPage'
import SubordinatePage from '@/pages/SubordinatePage'
import SupervisorPage from '@/pages/SupervisorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: AdminPage
    },
    {
      path: '/subordinate',
      name: 'SubordinatePage',
      component: SubordinatePage
    },
    {
      path: '/supervisor',
      name: 'SupervisorPage',
      component: SupervisorPage
    }
  ]
})

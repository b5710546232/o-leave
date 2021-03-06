import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/LoginPage'
import AdminPage from '@/pages/AdminPage'
import SubordinatePage from '@/pages/SubordinatePage'
import SupervisorPage from '@/pages/SupervisorPage'
import EditUserPage from '@/pages/EditUserPage'
import ConnectLinePage from '@/pages/ConnectLinePage'
import ProfilePage from '@/pages/ProfilePage'
import AddUserPage from '@/pages/AddUserPage'
import ManageUserPage from '@/pages/ManageUserPage'
import AdminEditUserPage from '@/pages/AdminEditUserPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/administrator',
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
    },
    {
      path: '/edituserprofile',
      name: 'EditUserPage',
      component: EditUserPage
    },
    {
      path: '/line',
      name: 'ConnectLinePage',
      component: ConnectLinePage
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage
    },
    {
      path: '/adduser',
      name: 'AddUserPage',
      component: AddUserPage
    },
    {
      path: '/manangeuser',
      name: 'ManageUserPage',
      component: ManageUserPage
    },
    {
      path: '/adminedituser',
      name: 'AdminEditUserPage',
      component: AdminEditUserPage
    }

  ]
})

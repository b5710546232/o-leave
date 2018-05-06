// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import DataTables from 'vue-data-tables'
import locale from 'element-ui/lib/locale/lang/en'
import fullCalendar from 'vue-fullcalendar'

import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import 'bulma-start/css/main.css'
import './styles/spacing.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false
Vue.use(Element, {
  locale
})
Vue.use(DataTables)
Vue.component('full-calendar', fullCalendar)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  store,
  template: '<App/>'
})

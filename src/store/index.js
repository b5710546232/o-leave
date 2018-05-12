import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import user from './modules/user'
import supervisor from './modules/supervisor'
import task from './modules/task'
import leave from './modules/leave'
import admin from './modules/admin'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    user,
    supervisor,
    task,
    leave,
    admin
  }
})

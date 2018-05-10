import task from '@/api/task'

// initial state
const state = {
  taskList: []
}

// getters
const getters = {}

// actions
const actions = {
  checkToken ({commit, state}) {
    const token = localStorage.getItem('accessToken')
    if (token) {
      commit('setToken', token)
    }
  }
}

// mutations
const mutations = {
  setTasks (state, token) {
    state.token = token
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}

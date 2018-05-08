import task from '../../api/task'

// initial state
const state = {
  tasks: []
}

// getters
const getters = {
  tasks: state => state.tasks
}

// actions
const actions = {
  getTasks ({ commit, state }, token) {
    return task.getMyTask(token).then(res => {
      console.log('actions getTasks', res)
      commit('setUserState', res)
    })
  }
}

// mutations
const mutations = {
  setUserState (state, tasks) {
    state.tasks = tasks
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}

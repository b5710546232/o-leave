import task from '../../api/task'

// initial state
const state = {
  tasks: [],
  isCreateTask: false
}

// getters
const getters = {
  tasks: state => state.tasks,
  isCreateTask: state => state.isCreateTask
}

// actions
const actions = {
  getTasks ({ commit, state }, token) {
    return task.getMyTask(token).then(res => {
      console.log('actions getTasks', res)
      commit('setUserState', res)
    })
  },
  setIsCreateTask ({ commit, state }, isCreate) {
    commit('setIsCreateTask', isCreate)
  }
}

// mutations
const mutations = {
  setUserState (state, tasks) {
    state.tasks = tasks
  },
  setIsCreateTask (state, isCreate) {
    state.isCreateTask = isCreate
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

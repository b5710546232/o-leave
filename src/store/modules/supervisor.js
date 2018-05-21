import task from '../../api/task'
import user from '../../api/user'
import leave from '../../api/leave'

// initial state
const state = {
  tasks: [],
  isCreateTask: false,
  subordinates: [],
  pendingLeaves: []
}

// getters
const getters = {
  tasks: state => state.tasks,
  isCreateTask: state => state.isCreateTask,
  subordinates: state => state.subordinates,
  pendingLeaves: state => state.pendingLeaves
}

// actions
const actions = {
  getTasks ({ commit, state }, token) {
    return task.getMyTask(token).then(res => {
      console.log('task', res)
      commit('setUserState', res)
    })
  },
  setIsCreateTask ({ commit, state }, isCreate) {
    commit('setIsCreateTask', isCreate)
  },
  getSubUsers ({ commit, state }) {
    return user.getAllSubordinate().then(res => {
      commit('setSubordinate', res)
    })
  },
  createTask ({ commit, state }, payload) {
    return task.postTask(payload).then(res => {
      console.log('done post')
    })
  },
  getPendingLeave ({ commit, state }) {
    return leave.getPendingLeave().then(res => {
      console.log('Get Pending Leave', res)
      commit('setPendingLeave', res)
    })
  }
}

// mutations
const mutations = {
  setUserState (state, tasks) {
    state.tasks = tasks
  },
  setIsCreateTask (state, isCreate) {
    state.isCreateTask = isCreate
  },
  setSubordinate (state, subs) {
    state.subordinates = subs
  },
  setPendingLeave (state, leaves) {
    state.pendingLeaves = leaves
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

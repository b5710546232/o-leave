import task from '../../api/task'
import user from '../../api/user'

// initial state
const state = {
  tasks: [],
  isCreateTask: false,
  subordinates: []
}

// getters
const getters = {
  tasks: state => state.tasks,
  isCreateTask: state => state.isCreateTask,
  subordinates: state => state.subordinates
}

// actions
const actions = {
  getTasks ({ commit, state }, token) {
    return task.getMyTask(token).then(res => {
      commit('setUserState', res)
    })
  },
  setIsCreateTask ({ commit, state }, isCreate) {
    commit('setIsCreateTask', isCreate)
  },
  getSubUsers ({ commit, state }) {
    return user.getAllUser().then(res => {
      console.log('Get subs', res)
      commit('setSubordinate', res)
    })
  },
  creatTask ({ commit, state }, payload) {
    return task.postTask(payload).then(res => {
      console.log('done post')
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

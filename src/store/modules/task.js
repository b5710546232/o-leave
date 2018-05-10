import task from '@/api/task'

// initial state
const state = {
  taskList: []
}

// getters
const getters = {
  taskList: state => state.taskList,
  inProgessTaskList: state => state.taskList.filter(task => task.status !== 'done')
}

// actions
const actions = {
  getMyTaskList ({commit, state}) {
    return task.getMyTask()
      .then(taskList => {
        commit('setTaskList', taskList)
        return taskList
      })
      .catch(err => err)
  }
}

// mutations
const mutations = {
  setTaskList (state, taskList) {
    state.taskList = taskList
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}

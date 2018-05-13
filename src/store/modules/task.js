import task from '@/api/task'

// initial state
const state = {
  myTaskList: [],
  taskList: [{
    'start': '',
    'end': '',
    'name': '',
    'status': ''
  }]
}

// getters
const getters = {
  taskList: state => state.taskList,
  myTaskList: state => state.myTaskList,
  inProgessTaskList: state => state.myTaskList.filter(task => task.status !== 'done')
}

// actions
const actions = {
  getMyTaskList ({commit, state}) {
    return task.getMyTask()
      .then(myTaskList => {
        commit('setMyTaskList', myTaskList)
        return myTaskList
      })
      .catch(err => { throw (err) })
  },
  getAllTaskList ({commit, state}) {
    return task.getAllTask()
      .then(taskList => {
        console.log('taskList', taskList)
        commit('setTaskList', taskList)
        return taskList
      })
      .catch(err => { throw (err) })
  }
}

// mutations
const mutations = {
  setMyTaskList (state, myTaskList) {
    state.myTaskList = myTaskList
  },
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

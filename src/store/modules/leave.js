import leave from '@/api/leave'

// initial state
const state = {
  leaveMessage: '',
  myLeave: []
}

// getters
const getters = {
  leaveMessage: state => state.leaveMessage,
  myLeave: state => state.myLeave
}

// actions
const actions = {
  postLeaveForm ({commit, state}, payload) {
    return leave.postLeave(payload)
      .then(res => {
        commit('setLeaveMessage', res.message)
        return res
      })
      .catch(err => { throw (err) })
  },
  getMyLeaves ({commit, state}) {
    return leave.getMyLeaves()
      .then(res => {
        commit('setgetMyLeaves', res)
      })
      .catch(err => { throw (err) })
  }
}

// mutations
const mutations = {
  setLeaveMessage (state, message) {
    state.leaveMessage = message
    console.log('leave', state.leaveMessage)
  },
  setgetMyLeaves (state, myLeave) {
    state.myLeave = myLeave
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

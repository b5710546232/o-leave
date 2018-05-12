import leave from '@/api/leave'

// initial state
const state = {
  leaveMessage: ''
}

// getters
const getters = {
  leaveMessage: state => state.leaveMessage
}

// actions
const actions = {
  postLeaveForm ({commit, state}, payload) {
    return leave.postLeave(payload)
      .then(res => {
        commit('setLeaveMessage', res.message)
        return res
      })
      .catch(err => err)
  }
}

// mutations
const mutations = {
  setLeaveMessage (state, message) {
    state.leaveMessage = message
    console.log('leave', state.leaveMessage)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

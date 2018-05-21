import leave from '@/api/leave'

// initial state
const state = {
  leaveMessage: '',
  myLeave: [],
  subtitution: []
}

// getters
const getters = {
  leaveMessage: state => state.leaveMessage,
  myLeave: state => state.myLeave,
  subtitution: state => state.subtitution
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
  },
  getSubtitution ({commit, state}) {
    return leave.getSubtitution()
      .then(res => {
        console.log('subtitution', res)
        commit('setSubtitution', res)
      })
      .catch(err => { throw (err) })
  },
  confirmPendingLeave ({commit, state}, index) {
    return leave.confirmPendingLeave(index)
      .then(res => {
      })
      .catch(err => { throw (err) })
  },
  rejectPendingLeave ({commit, state}, index) {
    return leave.rejectPendingLeave(index)
      .then(res => {
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
  },
  setSubtitution (state, sub) {
    state.subtitution = sub
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

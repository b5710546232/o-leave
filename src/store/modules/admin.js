import admin from '@/api/admin'

// initial state
const state = {
  adminMessage: '',
  isAdminMessageError: false
}

// getters
const getters = {
  adminMessage: state => state.adminMessage
}

// actions
const actions = {
  addUser ({commit, state}, payload) {
    return admin.registerUser(payload)
      .then(res => {
        if (res.hasOwnProperty('error')) {
          throw (res)
        }
        console.log('res')
        commit('setAdminMessage', res.message)
        return res
      })
      .catch(err => {
        console.log('error', err)
        commit('setAdminMessage', JSON.stringify(err))
        throw (err)
      })
  }
}

// mutations
const mutations = {
  setAdminMessage (state, message) {
    state.adminMessage = message
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

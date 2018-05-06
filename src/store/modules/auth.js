import auth from '../../api/auth'

// initial state
const state = {
  isLogin: false,
  role: ''
}

// getters
const getters = {}

// actions
const actions = {
  login ({commit, state}, payload) {
    console.log('action-login', payload)
    auth.login(payload)
      .then(res => {
        console.log('res', res)
      }).catch(err => {
        console.error(err)
      })
  }
}

// mutations
const mutations = {
  setRole (state) {}
}

export default {
  state,
  getters,
  actions,
  mutations
}

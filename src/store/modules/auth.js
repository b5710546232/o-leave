import auth from '../../api/auth'

// initial state
const state = {
  isLogin: false,
  token: ''
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
        let token = `${res.token_type} ${res.access_token}`
        commit('setToken', token)
        commit('setLoginStatus', true)
      }).catch(err => {
        console.error(err)
        commit('setToken', '')
        commit('setLoginStatus', false)
      })
  }
}

// mutations
const mutations = {
  setToken (state, token) {
    state.token = token
  },
  setLoginStatus (state, isLogin) {
    state.isLogin = isLogin
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}

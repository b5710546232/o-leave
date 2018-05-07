import auth from '../../api/auth'

// initial state
const state = {
  isLogin: false,
  token: undefined,
  errorMessage: ''
}

// getters
const getters = {
  isLogin: state => state.isLogin,
  token: state => state.token,
  errorMessage: state => state.errorMessage

}

// actions
const actions = {
  login ({commit, state}, payload) {
    console.log('action-login', payload)
    return auth.login(payload)
      .then(res => {
        console.log('res', res)
        let token = `${res.token_type} ${res.access_token}`
        if (res.access_token === undefined) {
          token = undefined
        }
        commit('setToken', token)
        commit('setLoginStatus', true)
        commit('setErrorMessege', res.message)
      }).catch(err => {
        console.error(err)
        commit('setToken', '')
        commit('setLoginStatus', false)
        commit('setErrorMessege', err.message)
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
  },
  setErrorMessege (state, message) {
    state.errorMessage = message
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}

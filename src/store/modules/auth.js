import auth from '@/api/auth'

// initial state
const state = {
  isLogin: false,
  token: undefined,
  authErrorMessage: ''
}

// getters
const getters = {
  isLogin: state => state.isLogin,
  token: state => state.token,
  authErrorMessage: state => state.authErrorMessage

}

// actions
const actions = {
  checkToken ({commit, state}) {
    const token = localStorage.getItem('accessToken')
    if (token) {
      commit('setToken', token)
    }
  },
  login ({commit, state}, payload) {
    console.log('action-login', payload)
    return auth.login(payload)
      .then(res => {
        console.log('res', res)
        let token = `${res.token_type} ${res.access_token}`
        if (res.access_token === undefined) {
          token = undefined
          throw (res)
        }
        localStorage.setItem('accessToken', token)
        commit('setToken', token)
        commit('setLoginStatus', true)
        return res
      })
      .catch(err => {
        localStorage.setItem('accessToken', '')
        commit('setToken', '')
        commit('setLoginStatus', false)
        commit('setErrorMessege', err.message)
        throw (err)
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
    state.authErrorMessage = message
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}

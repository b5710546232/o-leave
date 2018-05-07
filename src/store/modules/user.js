import user from '../../api/user'

// initial state
const state = {
  address: '',
  department: '',
  role: '',
  email: '',
  fb: '',
  ig: '',
  image_path: '',
  fname: '',
  lname: '',
  telno: '',
  supervisor_id: null

}

// getters
const getters = {
}

// actions
const actions = {
  getMe ({commit, state}, token) {
    console.log('action-getme', token)
    user.getMe(token)
      .then(res => {
        console.log('actions', res)
      })
  }
}

// mutations
const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}

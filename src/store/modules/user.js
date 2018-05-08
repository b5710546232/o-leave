import user from '@/api/user'
import {URL} from '@/api/base'
// initial state
const state = {
  userInfo: { address: '',
    department: '',
    role: '',
    email: '',
    fb: '',
    ig: '',
    image_path: '',
    fname: '',
    lname: '',
    telno: '',
    supervisor_id: null}
}

// getters
const getters = {
  userInfo: state => state.userInfo
}

// actions
const actions = {
  getMe ({ commit, state }, token) {
    return user.getMe(token).then(res => {
      console.log('actions', res)
      let userState = {
        address: res.address,
        department: res.department,
        role: res.role,
        email: res.email,
        fb: res.fb,
        ig: res.ig,
        image_path: `${URL}${res.image_path}`,
        fname: res.fname,
        lname: res.lname,
        telno: res.telno,
        supervisor_id: res.supervisor_id
      }
      commit('setUserState', userState)
    })
  }
}

// mutations
const mutations = {
  setUserState (state, userState) {
    state.userInfo = userState
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}

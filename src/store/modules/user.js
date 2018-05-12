import user, {getAccessToken} from '@/api/user'
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
    line: '',
    isLoaded: false,
    id: '',
    supervisor_id: null},
  OTP: '',
  supervisorList: []
}

// getters
const getters = {
  userInfo: state => state.userInfo,
  OTP: state => state.OTP,
  supervisorList: state => state.supervisorList
}

// actions
const actions = {
  getMe ({ commit, state }, token = getAccessToken()) {
    return user.getMe(token).then(res => {
      console.log('actions', res)
      let userState = {
        address: res.address,
        department: res.department,
        role: res.role,
        email: res.email,
        fb: res.fb,
        ig: res.ig,
        image_path: `${URL}/${res.image_path}`,
        fname: res.fname,
        lname: res.lname,
        telno: res.telno,
        line: res.line,
        isLoaded: true,
        id: res.id,
        supervisor_id: res.supervisor_id
      }
      commit('setUserState', userState)
    }).catch(err => { throw (err) })
  },
  uploadProfile ({commit, state}, file) {
    return user.uploadProfile(file)
  },
  getAllSupervisors ({commit, state}) {
    return user.getAllSupervisors().then(supsList => {
      commit('setSupervisorList', supsList)
    }).catch(err => { throw (err) })
  },
  updateUser ({commit, state}, payload) {
    return user.updateUser(payload)
  },
  getOTP ({commit, state}) {
    return user.getOTP().then(otp => {
      commit('setOTP', otp)
      return otp
    }).catch(err => err)
  },
  setOTP ({commit, state}, otp) {
    commit('setOTP', otp)
  },
  setUserInfoImagePath ({commit, state}, imagePath) {
    commit('setUserInfoImagePath', imagePath)
  }
}

// mutations
const mutations = {
  setUserState (state, userState) {
    state.userInfo = userState
  },
  setOTP (state, otp) {
    state.OTP = otp
  },
  setUserInfoImagePath (state, imagePath) {
    state.userInfo.image_path = imagePath
  },
  setSupervisorList (state, newList) {
    state.supervisorList = newList
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}

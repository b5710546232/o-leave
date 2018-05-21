import admin from '@/api/admin'
import user from '@/api/user'

// initial state
const state = {
  adminMessage: '',
  isAdminMessageError: false,
  editUserTarget: { address: '',
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
    supervisor_id: null}
}

// getters
const getters = {
  adminMessage: state => state.adminMessage,
  editUserTarget: state => state.editUserTarget
}

// actions
const actions = {
  adminUpdateUserByID ({commit, state}, payload) {
    const id = state.editUserTarget.id
    return user.adminUpdateUserByID(id, payload)
  },
  setEditUserTarget ({commit, state}, data) {
    let newState = {
      address: data.address,
      department: data.department,
      role: data.role,
      email: data.email,
      fb: data.fb,
      ig: data.ig,
      image_path: `${URL}/${data.image_path}`,
      fname: data.fname,
      lname: data.lname,
      telno: data.telno,
      line: data.line,
      isLoaded: true,
      id: data.id,
      supervisor_id: data.supervisor_id
    }
    commit('setEditUserTarget', newState)
  },
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
  },
  setEditUserTarget (state, newState) {
    state.editUserTarget = newState
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

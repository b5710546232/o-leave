import axios from './base'

const getAllLeaves = () => {
  return axios.get('/leaves').then((res) => {
    return res.data
  }).catch(error => {
    return error
  })
}

const getMyLeaves = () => {
  return axios.get('/me/leaves').then((res) => {
    return res.data
  }).catch(error => {
    return error
  })
}

const postLeave = (payload) => {
  return axios.post('/leaves', payload).then((res) => {
    return res.data
  }).catch(error => {
    return error
  })
}

const getPendingLeave = () => {
  return axios.get('/leaves/pending').then((res) => {
    return res.data
  }).catch(error => {
    return error
  })
}
const confirmPendingLeave = (index) => {
  return axios.get('leaves/' + index + '/approve').then((res) => {
    return res.data
  }).catch(error => {
    return error
  })
}
const rejectPendingLeave = (index) => {
  return axios.get('leaves/' + index + '/deny').then((res) => {
    return res.data
  }).catch(error => {
    return error
  })
}
export default {
  getAllLeaves,
  getMyLeaves,
  postLeave,
  getPendingLeave,
  confirmPendingLeave,
  rejectPendingLeave
}

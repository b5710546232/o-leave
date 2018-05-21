import axios from './base'

const getAllLeaves = () => {
  return axios.get('/leaves').then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}

const getMyLeaves = () => {
  return axios.get('/me/leaves').then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}

const postLeave = (payload) => {
  return axios.post('/leaves', payload).then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}

const getPendingLeave = () => {
  return axios.get('/leaves/pending').then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}
const confirmPendingLeave = (index) => {
  return axios.get('leaves/' + index + '/approve').then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}
const rejectPendingLeave = (index) => {
  return axios.get('leaves/' + index + '/deny').then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}
// {{url}}/api/me/substitution
const getSubtitution = () => {
  return axios.get('/me/substitution').then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}
export default {
  getAllLeaves,
  getMyLeaves,
  postLeave,
  getPendingLeave,
  confirmPendingLeave,
  rejectPendingLeave,
  getSubtitution
}

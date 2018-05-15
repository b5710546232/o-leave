import axios from './base'

const getAllTask = () => {
  return axios.get('/tasks').then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}

const getMyTask = () => {
  return axios.get('/me/tasks').then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}

const markAsDone = (id) => {
  return axios.get(`/tasks/${id}/done`)
}
const maskAsDoing = (id) => {
  return axios.get(`/tasks/${id}/doing`)
}

const postTask = (payload) => {
  return axios.post('/tasks', payload).then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}

export default {
  getAllTask,
  getMyTask,
  postTask,
  maskAsDoing,
  markAsDone
}

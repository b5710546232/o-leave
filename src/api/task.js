import axios from './base'

const getAllTask = () => {
  return axios.get('/tasks').then((res) => {
    return res.data
  }).catch(error => {
    return error
  })
}

const getMyTask = () => {
  return axios.get('/me/tasks').then((res) => {
    return res.data
  }).catch(error => {
    return error
  })
}

const postTask = (payload) => {
  return axios.post('/tasks', payload).then((res) => {
    console.log('fk task')
    return res.data
  }).catch(error => {
    return error
  })
}

export default {
  getAllTask,
  getMyTask,
  postTask
}

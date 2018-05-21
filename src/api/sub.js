import axios from './base'

const getSubordinate = () => {
  return axios.get('/me/subordinates').then((res) => {
    return res.data
  }).catch(error => {
    return error
  })
}
// leaves/substitutable/{{task}}
const getSubordinateFromTask = (taskID) => {
  return axios.get('/leaves/substitutable/' + taskID).then((res) => {
    console.log(res.data, 'sub from tasks')
    return res.data
  }).catch(error => {
    return error
  })
}

export default {
  getSubordinate,
  getSubordinateFromTask
}

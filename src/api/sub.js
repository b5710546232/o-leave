import axios from './axios'

const getSubordinate = () => {
  return axios.get('/me/subordinates').then((res) => {
    return res.data
  }).catch(error => {
    return error
  })
}

export default {
  getSubordinate
}

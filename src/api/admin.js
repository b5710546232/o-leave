import axios from './base'

const registerUser = (payload) => {
  return axios.post('/register', payload).then((res) => {
    return res.data
  }).catch(error => {
    console.log('error', error)
    throw (error)
  })
}

export default {
  registerUser
}

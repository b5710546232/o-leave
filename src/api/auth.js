import axios from './base'

const login = (payload) => {
  return axios.post('/login', payload)
    .then((res) => {
      return res.data
    })
    .catch(error => {
      console.error('[api]-login', error)
      return error
    })
}

export default {
  login
}

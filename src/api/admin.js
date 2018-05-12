import axios, {AuthHeaders} from './base'

const registerUser = (payload, headers = AuthHeaders) => {
  return axios.post('/register', payload, {
    'headers': headers
  }).then((res) => {
    return res.data
  }).catch(error => {
    console.log('error', error)
    throw (error)
  })
}

export default {
  registerUser
}

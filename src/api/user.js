import axios from './base'

export const getAccessToken = () => {
  if (localStorage.getItem('accessToken')) {
    return localStorage.getItem('accessToken')
  }
  return false
}

const getMe = () => {
  return axios.get('/me').then((res) => {
    return res.data
  }).catch(error => {
    console.log('error getMe', error)
    throw (error)
  })
}
const getAllUser = () => {
  return axios.get('/users').then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}

const getAllSupervisors = () => {
  return axios.get('/users/supervisors').then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}

const updateUser = (id, payload) => {
  const url = `/me`
  return axios.put(url, payload).then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}

const adminUpdateUserByID = (id, payload) => {
  const url = `/users/${id}`
  return axios.put(url, payload).then((res) => {
    return res.data
  }).catch(error => {
    throw (error)
  })
}

// const getHeaders = () => {
//   const token = getAccessToken()
//   if (token) {
//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: token
//     }
//     return headers
//   }
//   return null
// }

const uploadProfile = (file, name = 'images') => {
  const url = '/me/upload_image'
  if (typeof url !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof url}`)
  }
  // You can add checks to ensure the url is valid, if you wish
  // 'content-type': 'multipart/form-data'
  const formData = new FormData()
  formData.append(name, file)
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  return axios.post(url, formData, config)
}

const getOTP = () => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  return axios.get('/opt', config).then(res => {
    return res.data.opt
  }).catch(err => {
    console.error(err)
    alert('error')
  })
}

export default {
  getMe,
  uploadProfile,
  updateUser,
  getAllUser,
  adminUpdateUserByID,
  getAllSupervisors,
  getOTP
}

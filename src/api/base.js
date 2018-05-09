import axios from 'axios'
const baseURL = 'https://limitless-falls-39048.herokuapp.com/api'
// const baseURL = 'http://localhost/tender_bartik/public/api '
const instance = axios.create({
  baseURL: baseURL
})
const token = localStorage.getItem('accessToken')
instance.defaults.headers.common['Authorization'] = token
export default instance

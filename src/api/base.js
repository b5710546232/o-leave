import axios from 'axios'
export const baseURL = `https://limitless-falls-39048.herokuapp.com/api`
export const URL = `https://limitless-falls-39048.herokuapp.com/`
// const baseURL = 'http://localhost/tender_bartik/public/api '
export const DefaultHeaders = {
  'Content-Type': 'application/json'
}
let instance = axios.create({
  baseURL: baseURL
})
const token = localStorage.getItem('accessToken')
instance.defaults.headers.common['Authorization'] = token
export default instance

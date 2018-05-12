
import axios from 'axios'
// import {getAccessToken} from './user'
export const URL = `http://vleave-back.ivaa.space`
export const baseURL = `${URL}/api`
// `http://vleave-back.ivaa.space`
// `https://limitless-falls-39048.herokuapp.com/`
// const baseURL = 'http://localhost/tender_bartik/public/api '
export const DefaultHeaders = {
  'Content-Type': 'application/json'
}

export const AuthHeaders = {
  'Content-Type': 'application/json'
  // 'Authorization': getAccessToken()
}

let instance = axios.create({
  baseURL: baseURL
})
const token = localStorage.getItem('accessToken')
instance.defaults.headers.common['Authorization'] = token
export default instance

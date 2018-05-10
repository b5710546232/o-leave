import Axios from 'axios'
import {getAccessToken} from './user'
export const baseURL = `https://limitless-falls-39048.herokuapp.com/api`
export const URL = `https://limitless-falls-39048.herokuapp.com/`
// const baseURL = 'http://localhost/tender_bartik/public/api '
export const DefaultHeaders = {
  'Content-Type': 'application/json'
}

export const AuthHeaders = {
  'Content-Type': 'application/json',
  'Authorization': getAccessToken()
}

export default Axios.create({
  baseURL: baseURL
})

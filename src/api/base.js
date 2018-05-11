import Axios from 'axios'
import {getAccessToken} from './user'
export const URL = `https://limitless-falls-39048.herokuapp.com/`
export const baseURL = `${URL}/api`
// `http://vleave-back.ivaa.space`
// `https://limitless-falls-39048.herokuapp.com/`
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

import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333', // default port on our backend
  // baseURL: 'http://localhost:3000', // default port on json server
})

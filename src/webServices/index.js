import axios from 'axios'

const webService = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL
})

export default webService

import axios from 'axios'

const webService = axios.create({
  baseURL: 'http://fireshop.test/api'
})

export default webService

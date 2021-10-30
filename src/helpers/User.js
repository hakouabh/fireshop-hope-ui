/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable no-class-assign */
import Token from './Token'
import AppStorage from './AppStorage'
class User {
  responseAfterLogin (res) {
    const access_token = res.access_token
    const username = res.name
    const email = res.email
    const token_type = res.token_type
    const expires_in = res.expires_in
    const company = res.company
    if (Token.isValid(access_token)) {
      AppStorage.store(access_token, username, email, token_type, expires_in, company)
    }
  }

  ApiToken () {
    return localStorage.getItem('token_type') + ' ' + localStorage.getItem('token')
  }

  hasToken () {
    const storeToken = localStorage.getItem('token')
    if (storeToken) {
      return Token.isValid(storeToken) ? true : false
    }
    false
  }

  loggedIn () {
    return this.hasToken()
  }

  username () {
    if (this.loggedIn()) {
      return localStorage.getItem('username')
    }
  }

  company () {
    if (this.loggedIn()) {
      return localStorage.getItem('company')
    }
  }

  email () {
    if (this.loggedIn()) {
      return localStorage.getItem('email')
    }
  }

  id () {
    if (this.loggedIn()) {
      const payload = Token.payload(localStorage.getItem('token'))
      return payload.sub
    }
    return false
  }
}
export default User = new User()

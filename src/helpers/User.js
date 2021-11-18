/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable no-class-assign */
import Token from './Token'
import AppStorage from './AppStorage'
import i18n from '../i18n'

const { t } = i18n.global
class User {
  responseAfterLogin (res) {
    const access_token = res.access_token
    // const username = res.name
    // const email = res.email
    // const id = res.id
    const user = res.user
    const token_type = res.token_type
    const expires_in = res.expires_in
    // const company = res.company
    if (Token.isValid(access_token)) {
      AppStorage.store(user, access_token, token_type, expires_in)
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
      return localStorage.getItem('id')
    }
  }

  Role (role) {
    switch (role) {
      case 0:
        return t('usersVue.role.admin')
      case 1:
        return t('usersVue.role.seller')
      case 2:
        return t('usersVue.role.commis')
    }
  }

  role () {
    if (this.loggedIn()) {
      return Number(localStorage.getItem('role'))
    }
  }
}
export default User = new User()

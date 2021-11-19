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
    const user = res.user
    const token_type = res.token_type
    const expires_in = res.expires_in
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

  autorisation () {
    if (this.loggedIn()) {
      return localStorage.getItem('autorisation')
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

  hasAccess (path) {
    const autorisation = JSON.parse(this.autorisation())
    switch (path) {
      case 'default.counter':
        return true
      case 'default.dashboard':
        return autorisation.dashboard
      case 'product.list':
        return autorisation.product_list
      case 'product.add':
        return autorisation.product_add
      case 'product.deleted':
        return autorisation.corbeille
      case 'product.stock':
        return autorisation.stock_add
      case 'product.editStock':
        return autorisation.stock_update
      case 'product.search':
        return autorisation.product_list
      case 'product.edit':
        return autorisation.product_update
      case 'customer.add':
        return true
      case 'customer.list':
        return true
      case 'customer.search':
        return true
      case 'customer.edit':
        return true
      case 'operations.search':
        return autorisation.operations_list
      case 'operations.synthesis':
        return autorisation.counter_synthesis
      case 'operations.view':
        return autorisation.operations_view
      case 'charge.add':
        return autorisation.charge_add
      case 'charge.list':
        return autorisation.charge_list
      case 'charge.search':
        return autorisation.charge_list
      case 'charge.edit':
        return autorisation.charge_update
    }
  }
}
export default User = new User()

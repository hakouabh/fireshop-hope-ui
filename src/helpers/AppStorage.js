/* eslint-disable no-class-assign */
/* eslint-disable camelcase */
class AppStorage {
  storeToken (token) {
    localStorage.setItem('token', token)
  }

  storeTokenType (token_type) {
    localStorage.setItem('token_type', token_type)
  }

  storeExpiresIn (expires_in) {
    localStorage.setItem('expires_in', expires_in)
  }

  storeUsername (username) {
    localStorage.setItem('username', username)
  }

  storeEmail (email) {
    localStorage.setItem('email', email)
  }

  storecompany (company) {
    localStorage.setItem('company', company)
  }

  storId (id) {
    localStorage.setItem('id', id)
  }

  storeRole (role) {
    localStorage.setItem('role', role)
  }

  storeAutorisation (autorisation) {
    localStorage.setItem('autorisation', JSON.stringify(autorisation))
  }

  store (user, token, token_type, expires_in) {
    this.storeToken(token)
    this.storeUsername(user.name)
    this.storeEmail(user.email)
    this.storeTokenType(token_type)
    this.storeExpiresIn(expires_in)
    this.storecompany(user.company.name)
    this.storId(user.id)
    this.storeRole(user.role)
    this.storeAutorisation(user.autorisation)
  }

  clear () {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    localStorage.removeItem('token_type')
    localStorage.removeItem('expires_in')
    localStorage.removeItem('company')
    localStorage.removeItem('id')
    localStorage.removeItem('role')
    localStorage.removeItem('autorisation')
  }
}
export default AppStorage = new AppStorage()

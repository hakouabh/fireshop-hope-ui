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

  store (token, username, email, token_type, expires_in, company) {
    this.storeToken(token)
    this.storeUsername(username)
    this.storeEmail(email)
    this.storeTokenType(token_type)
    this.storeExpiresIn(expires_in)
    this.storecompany(company)
  }

  clear () {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    localStorage.removeItem('token_type')
    localStorage.removeItem('expires_in')
    localStorage.removeItem('company')
  }
}
export default AppStorage = new AppStorage()

import { createStore } from 'vuex'
import settings from './settings'
import auth from './auth'
import company from './company'
import charge from './charge'
import customer from './customer'
import user from './user'
import product from './product'
import stock from './stock'
import operation from './operation'
import counter from './counter'

export const store = createStore({
  modules: {
    settings,
    auth,
    company,
    charge,
    customer,
    user,
    product,
    stock,
    operation,
    counter
  }
})

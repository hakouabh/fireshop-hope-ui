import { createStore } from 'vuex'
import settings from './settings'
import auth from './auth'
import company from './company'

export const store = createStore({
  modules: {
    settings,
    auth,
    company
  }
})

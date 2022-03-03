/* eslint-disable no-undef */
import { SIGN_IN_SUCCSSS, SIGN_IN, SIGN_IN_FAILED, SIGN_UP, SIGN_UP_SUCCSSS, SIGN_UP_FAILED } from '@/store/mutation-types'
import router from '@/router'
import i18n from '../../i18n'
import { notify } from '@kyvg/vue3-notification'

const { t } = i18n.global

const state = {

}
const getters = {

}
const actions = {
  [SIGN_IN] (context, payload) {
    webServices.post('/auth/login', payload)
      .then(res => {
        context.commit(SIGN_IN_SUCCSSS, res.data)
      })
      .catch(error => {
        context.commit(SIGN_IN_FAILED, error)
      })
  },
  [SIGN_UP] (context, payload) {
    webServices.post('auth/register', payload)
      .then(result => {
        context.commit(SIGN_UP_SUCCSSS, result.data)
      })
      .catch(error => {
        context.commit(SIGN_UP_FAILED, error)
      })
  }
}
const mutations = {
  [SIGN_IN_SUCCSSS] (state, data) {
    User.responseAfterLogin(data)
    notify({
      type: 'success',
      layout: 'topLeft',
      text: t('sognInVue.connecter'),
      timeout: 1500

    })
    router.push({ name: 'default.counter' })
  },
  [SIGN_UP_SUCCSSS] (state, data) {
    User.responseAfterLogin(data)
    notify({
      type: 'success',
      layout: 'topLeft',
      text: t('signUpVue.created'),
      timeout: 1500
    })
    router.push({ name: 'default.counter' })
  },
  [SIGN_IN_FAILED] (state, error) {
    if (error.response.status === 401) {
      notify({
        type: 'error',
        layout: 'topLeft',
        text: t('sognInVue.invalid_credential'),
        timeout: 1500

      })
    } else if (error.response.status === 422) {
      // this.errors = error.response.data.errors
    }
  },
  [SIGN_UP_FAILED] (state, error) {
    // this.errors = error.response.data.errors
  }
}
export default {
  actions,
  state,
  getters,
  mutations
}

/* eslint-disable no-undef */
import { GET_COMPANY_TYPE, GET_COMPANY_TYPE_SUCCSSS, SET_COMPANY_TYPE } from '@/store/mutation-types'
import i18n from '../../i18n'
import { notify } from '@kyvg/vue3-notification'

const { t } = i18n.global

const state = {
  company_types: {}
}
const getters = {
  getCompanyTypes: state => { return state.company_types }
}
const actions = {
  [GET_COMPANY_TYPE] (context) {
    webServices.get('/companies/types')
      .then(res => {
        context.commit(GET_COMPANY_TYPE_SUCCSSS, res.data.data)
      })
      .catch(error => {
        this.errors = error.response.data.errors
      })
  },
  [SET_COMPANY_TYPE] (context, payload) {
    webServices.post('/companies/types/store', payload)
      .then(() => {
        notify({
          type: 'success',
          layout: 'topLeft',
          text: t('created'),
          timeout: 1500
        })
        context.dispatch(GET_COMPANY_TYPE)
      })
      .catch(error => {
        this.errors = error.response.data.errors
      })
  }
}
const mutations = {
  [GET_COMPANY_TYPE_SUCCSSS] (state, data) {
    state.company_types = data
  }
}
export default {
  actions,
  state,
  getters,
  mutations
}

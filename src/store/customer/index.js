/* eslint-disable no-undef */
import { SET_CUSTOMER, SET_CUSTOMER_FAILED, INDEX_CUSTOMER, INDEX_CUSTOMER_SUCCESS, EDIT_CUSTOMER, GET_CUSTOMERS, GET_CUSTOMERS_SUCCESS } from '@/store/mutation-types'
import i18n from '../../i18n'
import { notify } from '@kyvg/vue3-notification'
import router from '@/router'
const { t } = i18n.global

const state = {
  customer: {},
  errors: {},
  customers: {}
}
const getters = {
  customerErrors: state => { return state.errors },
  customer: state => { return state.customer },
  customers: state => { return state.customers }
}
const actions = {
  [SET_CUSTOMER] (context, payload) {
    webServices.post('/customers/add', payload, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        notify({
          type: 'success',
          layout: 'topLeft',
          text: t('created'),
          timeout: 1500
        })
        router.go({ name: 'customer.add' })
      })
      .catch(error => {
        context.commit(SET_CUSTOMER_FAILED, error.response.data.errors)
      })
  },
  [INDEX_CUSTOMER] (context, id) {
    webServices.get('customers/' + id, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        context.commit(INDEX_CUSTOMER_SUCCESS, res.data.data)
      })
  },
  [EDIT_CUSTOMER] (context, payload) {
    webServices.put(`/customers/${payload.id}/update`, payload.form, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        notify({
          type: 'success',
          layout: 'topLeft',
          text: t('created'),
          timeout: 1500
        })
        router.go({ name: 'customer.edit', params: { id: payload.id } })
      })
      .catch(error => {
        context.commit(SET_CUSTOMER_FAILED, error.response.data.errors)
      })
  },
  [GET_CUSTOMERS] (context, payload) {
    webServices.get('/customers?page=' + payload.page, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      },
      params: {
        perpage: payload.perpage,
        filter: payload.filter
      }
    })
      .then(res => {
        context.commit(GET_CUSTOMERS_SUCCESS, res.data.data)
      })
  }
}
const mutations = {
  [SET_CUSTOMER_FAILED] (state, data) {
    state.errors = data
  },
  [INDEX_CUSTOMER_SUCCESS] (state, data) {
    state.customer = data
  },
  [GET_CUSTOMERS_SUCCESS] (state, data) {
    state.customers = data
  }
}
export default {
  actions,
  state,
  getters,
  mutations
}

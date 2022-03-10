/* eslint-disable no-undef */
import {
  GET_CHARGE_TYPE, SET_CHARGE_TYPE,
  INDEX_CHARGE, INDEX_CHARGE_SUCCSSS, SET_CHARGE,
  GET_CHARGE_TYPE_SUCCSSS, SET_CHARGE_FAILED, EDIT_CHARGE,
  GET_CHARGES, GET_CHARGES_SUCCESS
} from '@/store/mutation-types'
import i18n from '../../i18n'
import { notify } from '@kyvg/vue3-notification'
import router from '@/router'

const { t } = i18n.global

const state = {
  charge_types: {},
  errors: {},
  charge: {},
  charges: {},
  total_charges: 0
}
const getters = {
  getChargeTypes: state => { return state.charge_types },
  chargeErrors: state => { return state.errors },
  charge: state => { return state.charge },
  total_charges: state => { return state.total_charges },
  charges: state => { return state.charges }
}
const actions = {
  [GET_CHARGE_TYPE] (context) {
    webServices.get('/charges/types', {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        context.commit(GET_CHARGE_TYPE_SUCCSSS, res.data.data)
      })
  },
  [SET_CHARGE_TYPE] (context, payload) {
    webServices.post('/charges/types/store', payload, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(() => {
        notify({
          type: 'success',
          layout: 'topLeft',
          text: t('created'),
          timeout: 1500
        })
        context.dispatch(GET_CHARGE_TYPE)
      })
  },
  [SET_CHARGE] (context, payload) {
    webServices.post('/charges/add', payload, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(() => {
        notify({
          type: 'success',
          layout: 'topLeft',
          text: t('created'),
          timeout: 1500
        })
        router.go({ name: 'charge.add' })
      })
      .catch(error => {
        context.commit(SET_CHARGE_FAILED, error.response.data.errors)
      })
  },
  [INDEX_CHARGE] (context, id) {
    webServices.get('charges/' + id, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        context.commit(INDEX_CHARGE_SUCCSSS, res.data.data)
      })
  },
  [EDIT_CHARGE] (context, payload) {
    webServices.put(`/charges/${payload.id}/update`, payload.form, {
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
        router.go({ name: 'charge.edit', params: { id: payload.id } })
      })
      .catch(error => {
        context.commit(SET_CHARGE_FAILED, error.response.data.errors)
      })
  },
  [GET_CHARGES] (context, payload) {
    webServices.get('/charges?page=' + payload.page, {
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
        context.commit(GET_CHARGES_SUCCESS, res.data)
      })
  }
}
const mutations = {
  [GET_CHARGE_TYPE_SUCCSSS] (state, data) {
    state.charge_types = data
  },
  [SET_CHARGE_FAILED] (state, data) {
    state.errors = data
  },
  [INDEX_CHARGE_SUCCSSS] (state, data) {
    state.charge = data
  },
  [GET_CHARGES_SUCCESS] (state, data) {
    state.charges = data.data
    state.total_charges = data.total_charges
  }
}
export default {
  actions,
  state,
  getters,
  mutations
}

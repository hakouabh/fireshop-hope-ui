/* eslint-disable no-undef */
import { INDEX_OPERATION, INDEX_OPERATION_SUCCESS, GET_OPERATIONS, GET_OPERATIONS_SUCCESS, VALIDATE_OPERATION } from '@/store/mutation-types'
import i18n from '../../i18n'
import { notify } from '@kyvg/vue3-notification'
import router from '@/router'
const { t } = i18n.global

const state = {
  operation: {},
  operations: {},
  stats: {}
}
const getters = {
  operation: state => { return state.operation },
  operations: state => { return state.operations },
  stats: state => { return state.stats }
}

const actions = {
  [VALIDATE_OPERATION] (context, payload) {
    webServices.get('/operations/validateOperation', {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      },
      params: {
        customer: payload.customer,
        payement: payload.payement,
        type: payload.type
      }
    })
      .then(() => {
        notify({
          type: 'success',
          layout: 'topLeft',
          text: t('validate_operation'),
          timeout: 1500
        })
        setTimeout(() => {
          router.go({ name: 'default.counter' })
        }, 500)
      })
  },
  [INDEX_OPERATION] (context, id) {
    webServices.get(`/operations/view/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        context.commit(INDEX_OPERATION_SUCCESS, res.data)
      })
  },
  [GET_OPERATIONS] (context, payload) {
    webServices.get('/operations?page=' + payload.page, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      },
      params: {
        filter: payload.filter,
        perpage: payload.perpage
      }
    })
      .then(res => {
        context.commit(GET_OPERATIONS_SUCCESS, res.data.data)
      })
      .catch(error => {
        if (error.response.status === 495) {
          router.push({ name: 'auth.pricing' })
        }
      })
  }
}
const mutations = {
  [INDEX_OPERATION_SUCCESS] (state, data) {
    state.operation = data
  },
  [GET_OPERATIONS_SUCCESS] (state, data) {
    state.operations = data.operations.data
    state.stats = data.stats
  }
}
export default {
  actions,
  state,
  getters,
  mutations
}

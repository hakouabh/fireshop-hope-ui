/* eslint-disable no-undef */
import {
  SET_QUANTITY, GET_ORDERS, GET_ORDERS_SUCCESS, DELETE_ORDERS,
  DISCOUNT, REMOVE_ITEM, RETURN_ITEM, ADD_ITEM
} from '@/store/mutation-types'
import i18n from '../../i18n'
import { notify } from '@kyvg/vue3-notification'
import router from '@/router'

const { t } = i18n.global

const state = {
  orders: {},
  subTotal: 0
}
const getters = {
  orders: state => { return state.orders },
  subTotal: state => { return state.subTotal }
}
const actions = {
  [SET_QUANTITY] (context, payload) {
    webServices.get('/ordersV2/quantity', {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      },
      params: {
        order_id: payload.order_id,
        update: payload.update
      }
    })
      .then(() => {
        context.dispatch(GET_ORDERS)
      })
  },
  [DELETE_ORDERS] (context) {
    webServices.get('/ordersV2/deleteAll', {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(() => {
        context.dispatch(GET_ORDERS)
      })
  },
  [GET_ORDERS] (context) {
    webServices.get('/ordersV2/get', {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        context.commit(GET_ORDERS_SUCCESS, res.data)
      })
      .catch(error => {
        if (error.response.status === 495) {
          router.push({ name: 'auth.pricing' })
        }
      })
  },
  [DISCOUNT] (context, payload) {
    webServices.post('/ordersV2/discount', {
      discount: payload.discount,
      order_id: payload.order_id
    }, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(() => {
        context.dispatch(GET_ORDERS)
      })
  },
  [REMOVE_ITEM] (context, id) {
    webServices.get('/ordersV2/delete/' + id, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(() => {
        context.dispatch(GET_ORDERS)
      })
  },
  [RETURN_ITEM] (context, id) {
    webServices.get('/ordersV2/return/' + id, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(() => {
        context.dispatch(GET_ORDERS)
      })
  },
  [ADD_ITEM] (context, payload) {
    webServices.post('/ordersV2/add', payload, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        context.dispatch(GET_ORDERS)
        notify({
          type: 'success',
          layout: 'topLeft',
          text: t('added'),
          timeout: 1500
        })
      })
      .catch(() => {
        notify({
          type: 'error',
          layout: 'topLeft',
          text: t('not_found'),
          timeout: 1500
        })
      })
  }
}
const mutations = {
  [GET_ORDERS_SUCCESS] (state, data) {
    state.subTotal = data.reduce((a, b) => a + b.order_detail.total_order, 0)
    state.orders = data
  }
}
export default {
  actions,
  state,
  getters,
  mutations
}

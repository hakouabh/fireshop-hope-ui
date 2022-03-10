/* eslint-disable no-undef */
import { EDIT_STOCK, INDEX_STOCK, DELETE_STOCK, INDEX_STOCK_SUCCESS, SET_STOCK_FAILED, GET_STOCKS, GET_STOCKS_SUCCESS, SET_STOCK } from '@/store/mutation-types'
import i18n from '../../i18n'
import { notify } from '@kyvg/vue3-notification'
import router from '@/router'
const { t } = i18n.global

const state = {
  stock: {},
  errors: {},
  stocks: {}
}
const getters = {
  stockErrors: state => { return state.errors },
  stock: state => { return state.stock },
  stocks: state => { return state.stocks }
}
const actions = {
  [SET_STOCK] (context, payload) {
    webServices.post('/products/stock', payload, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        router.go({ name: 'product.stock' })
      })
      .catch(error => {
        context.commit(SET_STOCK_FAILED, error.response.data.errors)
      })
  },
  [DELETE_STOCK] (context, payload) {
    webServices.delete(`/products/${payload.id}/delete/stock`, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(() => {
        Swal.fire(
          t('swal.deleted'),
          t('swal.deleted-success'),
          'success'
        )
        router.push({ name: 'product.edit', params: { id: payload.product_id } })
      })
  },
  [INDEX_STOCK] (context, id) {
    webServices.get('/products/stock/find/' + id, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        context.commit(INDEX_STOCK_SUCCESS, res.data)
      })
  },
  [EDIT_STOCK] (context, payload) {
    webServices.put('/products/stock/update', payload.form, {
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
        router.go({ name: 'product.edit', params: { id: payload.id } })
      })
      .catch(error => {
        context.commit(SET_STOCK_FAILED, error.response.data.errors)
      })
  },
  [GET_STOCKS] (context, payload) {
    webServices.get('/products/stock/get?page=' + payload.page, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      },
      params: {
        perpage: payload.perpage,
        product_id: payload.product_id
      }
    })
      .then(res => {
        context.commit(GET_STOCKS_SUCCESS, res.data)
      })
  }
}
const mutations = {
  [SET_STOCK_FAILED] (state, data) {
    state.errors = data
  },
  [INDEX_STOCK_SUCCESS] (state, data) {
    state.stock = data
  },
  [GET_STOCKS_SUCCESS] (state, data) {
    state.stocks = data
  }
}
export default {
  actions,
  state,
  getters,
  mutations
}

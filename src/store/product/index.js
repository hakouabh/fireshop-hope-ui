/* eslint-disable no-undef */
import {
  SET_PRODUCT, SET_PRODUCT_FAILED, INDEX_PRODUCT,
  INDEX_PRODUCT_SUCCESS, EDIT_PRODUCT, GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS, GET_PRODUCT_TYPE, SET_PRODUCT_TYPE,
  GET_PRODUCT_TYPE_SUCCSSS, DELETE_PRODUCT, SET_PRODUCT_IMAGE,
  RESTORE_PRODUCT, GET_PRODUCTS_TRASH, GET_PRODUCTS_TRASH_SUCCESS
} from '@/store/mutation-types'
import i18n from '../../i18n'
import { notify } from '@kyvg/vue3-notification'
import router from '@/router'
const { t } = i18n.global

const state = {
  product: {},
  products_trash: {},
  product_types: {},
  errors: {},
  products: {}
}
const getters = {
  getProductTypes: state => { return state.product_types },
  productErrors: state => { return state.errors },
  product: state => { return state.product },
  products: state => { return state.products },
  productsTrash: state => { return state.products_trash }
}
const actions = {
  [GET_PRODUCTS_TRASH] (context, payload) {
    webServices.get('/products/deleted?page=' + payload.page, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      },
      params: {
        perpage: payload.perpage
      }
    })
      .then(res => {
        context.commit(GET_PRODUCTS_TRASH_SUCCESS, res.data)
      })
  },
  [RESTORE_PRODUCT] (context, id) {
    webServices.get('/products/restore/' + id, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    }).then(() => {
      notify({
        type: 'success',
        layout: 'topLeft',
        text: t('restored'),
        timeout: 1500
      })
      context.dispatch(GET_PRODUCTS_TRASH, {
        page: 1,
        perpage: 10
      })
    })
  },
  [SET_PRODUCT_IMAGE] (context, payload) {
    webServices.post('/products/storeImage', payload, {
      headers: {
        'content-type': 'multipart/form-data',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
  },
  [SET_PRODUCT_TYPE] (context, payload) {
    webServices.post('/products/types/store', payload, {
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
        context.dispatch(GET_PRODUCT_TYPE)
      })
  },
  [GET_PRODUCT_TYPE] (context) {
    webServices.get('/products/types', {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        context.commit(GET_PRODUCT_TYPE_SUCCSSS, res.data.data)
      })
  },
  [SET_PRODUCT] (context, payload) {
    webServices.post('/products/add', payload, {
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
        router.go({ name: 'product.add' })
      })
      .catch(error => {
        context.commit(SET_PRODUCT_FAILED, error.response.data.errors)
      })
  },
  [INDEX_PRODUCT] (context, id) {
    webServices.get('products/' + id, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        context.commit(INDEX_PRODUCT_SUCCESS, res.data.data)
      })
  },
  [EDIT_PRODUCT] (context, payload) {
    webServices.put(`/products/${payload.id}/update`, payload.form, {
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
        context.commit(SET_PRODUCT_FAILED, error.response.data.errors)
      })
  },
  [DELETE_PRODUCT] (context, id) {
    webServices.delete(`/products/${id}/delete`, {
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
        router.push({ name: 'product.list' })
      })
  },
  [GET_PRODUCTS] (context, payload) {
    webServices.get('/products?page=' + payload.page, {
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
        context.commit(GET_PRODUCTS_SUCCESS, res.data.data)
      })
  }
}
const mutations = {
  [SET_PRODUCT_FAILED] (state, data) {
    state.errors = data
  },
  [INDEX_PRODUCT_SUCCESS] (state, data) {
    state.product = data
  },
  [GET_PRODUCTS_SUCCESS] (state, data) {
    state.products = data
  },
  [GET_PRODUCT_TYPE_SUCCSSS] (state, data) {
    state.product_types = data
  },
  [GET_PRODUCTS_TRASH_SUCCESS] (state, data) {
    state.products_trash = data
  }
}
export default {
  actions,
  state,
  getters,
  mutations
}

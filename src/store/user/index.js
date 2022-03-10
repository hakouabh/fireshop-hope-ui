/* eslint-disable no-undef */
import { SET_USER, SET_USER_FAILED, INDEX_USER, INDEX_USER_SUCCESS, EDIT_USER, GET_USERS, GET_USERS_SUCCESS } from '@/store/mutation-types'
import i18n from '../../i18n'
import { notify } from '@kyvg/vue3-notification'
import router from '@/router'
const { t } = i18n.global

const state = {
  user: {},
  errors: {},
  users: {}
}
const getters = {
  userErrors: state => { return state.errors },
  indexUser: state => { return state.user },
  users: state => { return state.users }
}
const actions = {
  [SET_USER] (context, payload) {
    webServices.post('/auth/addUser', payload, {
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
        router.push({ name: 'user.UserList' })
      })
      .catch(error => {
        context.commit(SET_USER_FAILED, error.response.data.errors)
      })
  },
  [INDEX_USER] (context, id) {
    webServices.get('/auth/user/' + id, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        context.commit(INDEX_USER_SUCCESS, res.data)
      })
  },
  [EDIT_USER] (context, payload) {
    webServices.put(`/users/${payload.id}/update`, payload.form, {
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
        router.go({ name: 'user.edit', params: { id: payload.id } })
      })
      .catch(error => {
        context.commit(SET_USER_FAILED, error.response.data.errors)
      })
  },
  [GET_USERS] (context) {
    webServices.get('/auth/users', {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        context.commit(GET_USERS_SUCCESS, res.data)
      }).catch(error => {
        if (error.response.status === 495) {
          router.push({ name: 'auth.pricing' })
        }
      })
  }
}
const mutations = {
  [SET_USER_FAILED] (state, data) {
    state.errors = data
    // i18n
    notify({
      type: 'error',
      layout: 'topLeft',
      text: 'error',
      timeout: 1500
    })
  },
  [INDEX_USER_SUCCESS] (state, data) {
    state.user = data
  },
  [GET_USERS_SUCCESS] (state, data) {
    state.users = data
  }
}
export default {
  actions,
  state,
  getters,
  mutations
}

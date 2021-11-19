/* eslint-disable no-undef */
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import User from '../helpers/User'
import { notify } from '@kyvg/vue3-notification'
import i18n from '../i18n'

const { t } = i18n.global

const defaultchildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.dashboard',
    meta: { requiresAuthentication: true, name: 'dashboard' },
    component: () => import('../views/main/dashboard')
  },
  {
    path: '/counter',
    name: prop + '.counter',
    meta: { requiresAuthentication: true, name: 'counter' },
    component: () => import('../views/main/orders/counter')
  }
]
const productchildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.list',
    meta: { requiresAuthentication: true, name: 'list' },
    component: () => import('../views/main/product/listProduct')
  },
  {
    path: 'new',
    name: prop + '.add',
    meta: { requiresAuthentication: true, name: 'add' },
    component: () => import('../views/main/product/createProduct')
  },
  {
    path: 'deleted',
    name: prop + '.deleted',
    meta: { requiresAuthentication: true, name: 'deleted' },
    component: () => import('../views/main/product/DeletedProduct')
  },
  {
    path: 'stock',
    name: prop + '.stock',
    meta: { requiresAuthentication: true, name: 'stock' },
    component: () => import('../views/main/product/stock')
  },
  {
    path: 'editStock/:id/:product_id',
    name: prop + '.editStock',
    meta: { requiresAuthentication: true, name: 'editStock' },
    component: () => import('../views/main/product/editStock')
  },
  {
    path: 'search',
    name: prop + '.search',
    meta: { requiresAuthentication: true, name: 'search' },
    component: () => import('../views/main/product/searchProduct')
  },
  {
    path: 'edit/:id',
    name: prop + '.edit',
    meta: { requiresAuthentication: true, name: 'edit' },
    component: () => import('../views/main/product/editProduct')
  }
]
const customerchildRoutes = (prop, mode = false) => [
  {
    path: 'add',
    name: prop + '.add',
    meta: { requiresAuthentication: true, name: 'add' },
    component: () => import('../views/main/customer/createCustomer')
  },
  {
    path: '',
    name: prop + '.list',
    meta: { requiresAuthentication: true, name: 'list' },
    component: () => import('../views/main/customer/listCustomer')
  },
  {
    path: 'search',
    name: prop + '.search',
    meta: { requiresAuthentication: true, name: 'search' },
    component: () => import('../views/main/customer/searchCustomer')
  },
  {
    path: 'edit/:id',
    name: prop + '.edit',
    meta: { requiresAuthentication: true, name: 'edit' },
    component: () => import('../views/main/customer/editCustomer')
  }
]
const userchildRoutes = (prop, mode = false) => [
  // User Pages
  {
    path: 'UserAdd',
    name: prop + '.UserAdd',
    meta: { requiresAdmin: true, name: 'UserAdd' },
    component: () => import('../views/main/Users/UserAdd')
  },
  {
    path: 'UserList',
    name: prop + '.UserList',
    meta: { requiresAdmin: true, name: 'UserList' },
    component: () => import('../views/main/Users/UserList')
  },
  {
    path: 'UserProfile/:id',
    name: prop + '.UserProfile',
    meta: { requiresAdmin: true, name: 'User Profile' },
    component: () => import('../views/main/Users/UserProfile')
  }
]
const orderschildRoutes = (prop, mode = false) => [
  {
    path: 'search',
    name: prop + '.search',
    meta: { requiresAuthentication: true, name: 'search' },
    component: () => import('../views/main/orders/searchOperation')
  },
  {
    path: 'synthesis',
    name: prop + '.synthesis',
    meta: { requiresAuthentication: true, name: 'synthesis' },
    component: () => import('../views/main/orders/Synthesis')
  },
  {
    path: 'view/:id',
    name: prop + '.view',
    meta: { requiresAuthentication: true, name: 'edit' },
    component: () => import('../views/main/orders/viewOperation')
  }
]
const chargeschildRoutes = (prop, mode = false) => [
  {
    path: 'add',
    name: prop + '.add',
    meta: { requiresAuthentication: true, name: 'add' },
    component: () => import('../views/main/charge/createCharge')
  },
  {
    path: '',
    name: prop + '.list',
    meta: { requiresAuthentication: true, name: 'list' },
    component: () => import('../views/main/charge/listCharge')
  },
  {
    path: 'search',
    name: prop + '.search',
    meta: { requiresAuthentication: true, name: 'search' },
    component: () => import('../views/main/charge/searchCharge')
  },
  {
    path: 'edit/:id',
    name: prop + '.edit',
    meta: { requiresAuthentication: true, name: 'edit' },
    component: () => import('../views/main/charge/editCharge')
  }
]
const authchildRoutes = (prop, mode = false) => [
  {
    path: '/signin',
    name: prop + '.signin',
    meta: { isAuthenticated: true, name: 'SignIn' },
    component: () => import('../views/Auth/SignIn')
  },
  {
    path: '/signup',
    name: prop + '.signup',
    meta: { isAuthenticated: true, name: 'SignUp' },
    component: () => import('../views/Auth/SignUp')
  },
  {
    path: '/confirmMail',
    name: prop + '.confirmMail',
    meta: { isAuthenticated: true, name: 'Confirm Mail' },
    component: () => import('../views/Auth/ConfirmMail')
  },
  {
    path: '/lockScreen',
    name: prop + '.lockScreen',
    meta: { isAuthenticated: true, name: 'Lock Screen' },
    component: () => import('../views/Auth/LockScreen')
  },
  {
    path: '/recoverPassword',
    name: prop + '.recoverPassword',
    meta: { isAuthenticated: true, name: 'Recover password' },
    component: () => import('../views/Auth/RecoverPassword')
  }
]

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../layouts/default'),
    children: defaultchildRoutes('default')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../layouts/default'),
    children: userchildRoutes('user')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../layouts/default'),
    children: productchildRoutes('product')
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('../layouts/default'),
    children: customerchildRoutes('customer')
  },
  {
    path: '/operations',
    name: 'Operation',
    component: () => import('../layouts/default'),
    children: orderschildRoutes('operations')
  },
  {
    path: '/charges',
    name: 'Charge',
    component: () => import('../layouts/default'),
    children: chargeschildRoutes('charge')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../layouts/simple'),
    children: authchildRoutes('auth')
  }
]

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
  // history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes

})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuthentication)) {
    if (User.loggedIn()) {
      if (User.hasAccess(to.name)) {
        next()
      } else {
        notify({
          type: 'error',
          layout: 'topLeft',
          text: t('no_access'),
          timeout: 1500
        })
      }
    } else {
      next({ name: 'auth.signin' })
    }
  } else if (to.matched.some(record => record.meta.isAuthenticated)) {
    if (User.loggedIn()) {
      next({ name: 'default.counter' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (User.loggedIn() && User.role() === 0) {
      next()
    } else {
      notify({
        type: 'error',
        layout: 'topLeft',
        text: t('no_access'),
        timeout: 1500
      })
    }
  }
})

export default router

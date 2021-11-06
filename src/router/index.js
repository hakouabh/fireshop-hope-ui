import { createRouter, createWebHistory } from 'vue-router'
import User from '../helpers/User'

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
  },
  {
    path: 'UserProfile',
    name: prop + '.UserProfile',
    meta: { auth: true, name: 'User Profile' },
    component: () => import('../views/Users/UserProfile')
  },
  {
    path: 'UserPrivacySetting',
    name: prop + '.UserPrivacySetting',
    meta: { auth: true, name: 'UserPrivacySetting' },
    component: () => import('../views/Users/UserPrivacySetting')
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
    path: 'listStock',
    name: prop + '.listStock',
    meta: { requiresAuthentication: true, name: 'listStock' },
    component: () => import('../views/main/product/listStock')
  },
  {
    path: 'stock',
    name: prop + '.stock',
    meta: { requiresAuthentication: true, name: 'stock' },
    component: () => import('../views/main/product/stock')
  },
  {
    path: 'editStock/:id',
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
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes

})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuthentication)) {
    // eslint-disable-next-line no-constant-condition
    if (User.loggedIn()) {
      next()
    } else {
      next({ name: 'auth.signin' })
    }
  } else if (to.matched.some(record => record.meta.isAuthenticated)) {
    if (User.loggedIn()) {
      next({ name: 'default.dashboard' })
    } else {
      next()
    }
  }
})

export default router

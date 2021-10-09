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
  } else {
    next()
  }
  /* if (to.matched.some(record => record.meta.isAuthenticated)) {
    // eslint-disable-next-line no-constant-condition
    if (true) {
      next({ name: 'default.dashboard' })
    } else {
      next()
    }
  } else {
    next()
  } */
})

export default router

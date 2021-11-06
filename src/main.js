import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import webServices from './webServices'
import globalComponent from './plugins/global-components'
import User from './helpers/User'
import Notif from './helpers/Notification'
import Notifications from '@kyvg/vue3-notification'
import i18n from './i18n'
require('waypoints/lib/noframework.waypoints.min')
window.User = User
window.Notif = Notif
window.webServices = webServices

const app = createApp(App).use(i18n)
app.use(store)
app.use(router)
app.use(Notifications)
app.use(globalComponent)
app.mount('#app')
export { app }
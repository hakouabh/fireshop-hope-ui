import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import webServices from './webServices'
import globalComponent from './plugins/global-components'
import User from './helpers/User'
import Swal from 'sweetalert2'
require('waypoints/lib/noframework.waypoints.min')
window.User = User
window.webServices = webServices

// Sweet Alert start

window.Swal = Swal

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast = Toast

// Sweet Alert End

const app = createApp(App)
app.use(store)
app.use(router)
app.use(globalComponent)
app.mount('#app')
export { app }

<template>
  <router-view/>
  <notifications />
</template>

<script>
/* eslint-disable no-undef */
import 'nouislider/dist/nouislider.css'
import 'offline-js/themes/offline-theme-dark.css'
import 'offline-js/themes/offline-language-french.css'
import 'offline-js'
// import jQuery from 'jquery'
// import AppStorage from './helpers/AppStorage'

export default {
  name: 'App'
  // mounted () {
  //   // Offline.options = { checks: { image: { url: process.env.VUE_APP_SERVER_URL }, active: 'image' } }
  //   // Offline.options = { checks: { xhr: { url: process.env.VUE_APP_SERVER_URL }, active: 'xhr' } }
  //   // Offline.options = { checks: { image: { xhr: 'http://firesho.test/api' } } }
  //   Offline.check()
  //   const overlay = jQuery('.uk-overlay-default')
  //   Offline.on('confirmed-up', () => {
  //     overlay.fadeOut('slow')
  //   })
  //   Offline.on('confirmed-down', () => {
  //     overlay.fadeIn('slow')
  //     AppStorage.clear()
  //     this.$router.push({ name: 'auth.signin' })
  //   })
  // }
}
</script>
<style lang="scss">
  @import "@/assets/scss/hope-ui.scss";
  @import "@/assets/scss/custom.scss";
  @import "@/assets/scss/dark.scss";
  @import "@/assets/scss/rtl.scss";
  @import url("./plugins/aos/dist/aos.css");
  @import url("./plugins/Leaflet/leaflet.css");
  @import url("./assets/vendor/fullcalendar/core/main.css");
  @import url("./assets/vendor/fullcalendar/daygrid/main.css");
  @import url("./assets/vendor/fullcalendar/timegrid/main.css");
  @import url("./assets/vendor/fullcalendar/list/main.css");
</style>

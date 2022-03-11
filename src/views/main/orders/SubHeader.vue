<template>
    <div :class="`iq-navbar-header ${statesubNavbarStyle}`">
    <div class="container-fluid iq-container">
        <div class="row">
            <div class="col-md-12">
                <div class="d-flex justify-content-center align-items-center flex-wrap">
                    <div>
                        <h1 class="display-1 mt-3"><Vue3autocounter  ref='counter' :startAmount='(total*4/5)' :duration='1' :endAmount="(total)"/></h1>
                    </div>
                     <div>
                        <h1 class="mt-4">&nbsp;{{$t('currency')}} </h1>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                    <div>
                        <h3>{{customer || $t('operationVue.no_client') }}</h3>
                    </div>
                     <div>
                        <h3>{{ time }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="iq-header-img">
        <img src="@/assets/images/dashboard/top-header.png" alt="header" class="img-fluid w-100 h-100 animated-scaleX">
    </div>
</div>
</template>
<script>
/* eslint-disable no-undef */
import { mapActions } from 'vuex'
import Vue3autocounter from 'vue3-autocounter'
export default {
  name: 'SubHeader',
  components: {
    Vue3autocounter
  },
  props: {
    statesubNavbarStyle: { type: String, default: '' },
    total: { type: Number, default: 0 },
    oldtotal: { type: Number, default: 0 },
    customer: { type: String, default: null }
  },
  data () {
    return {
      time: null
    }
  },
  mounted () {
    const navstyle = sessionStorage.getItem('navbarstyle')
    this.navbarstyleChange(navstyle)
    setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  methods: {
    updateTime () {
      var cd = new Date()
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
    },
    zeroPadding (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    },
    ...mapActions({
      navbarstyleChange: 'navbarstyleAction'
    })
  }
}
</script>

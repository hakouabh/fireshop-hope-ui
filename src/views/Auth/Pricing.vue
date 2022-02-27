<template>
    <div>
        <div class="row iq-star-inserted row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5 mt-5 text-center">
            <div class="col iq-star-inserted-1">
                <div class="card my-5">
                <div class="card-body">
                    <h2 class="my-0 fw-normal mb-4">{{$t('pricing.free.title')}}</h2>
                    <h1 class="card-title pricing-card-title mb-0">0 {{$t('currency')}} <small class="text-secondary"> - {{$t('pricing.free.lifetime')}}</small></h1>
                    <ul class="list-unstyled my-3 p-0">
                        <li><p>{{$t('pricing.free.stockage')}}</p></li>
                        <li><p>{{$t('pricing.free.server')}}</p></li>
                        <li><p>{{$t('pricing.free.access')}}</p></li>
                    </ul>
                    <button type="button" @click="plan_type = 1" class="btn btn-primary rounded-pill w-100">{{$t('pricing.free.button')}}</button>
                </div>
                </div>
            </div>
            <div class="col iq-star-inserted-2">
                <div class="card mb-0 shadow-lg">
                <div class="card-body">
                    <h2><span class="badge rounded-pill bg-soft-primary mb-4"><small class="text-uppercase px-3">{{$t('pricing.offline.popular')}}</small></span></h2>
                    <h2 class="my-0 fw-normal mb-4">{{$t('pricing.offline.title')}}</h2>
                    <h1 class="card-title pricing-card-title mb-0">25000 {{$t('currency')}}<small class="text-secondary"> / {{$t('pricing.offline.lifetime')}}</small></h1>
                    <ul class="list-unstyled my-3 p-0">
                        <li><p>{{$t('pricing.offline.stockage')}}</p></li>
                        <li><p>{{$t('pricing.offline.server')}}</p></li>
                        <li><p>{{$t('pricing.offline.access')}}</p></li>
                    </ul>
                    <button type="button" @click="plan_type = 2" class="btn btn-primary rounded-pill w-100">{{$t('pricing.offline.button')}}</button>
                </div>
                </div>
            </div>
            <div class="col iq-star-inserted-3">
                <div class="card my-5">
                <div class="card-body">
                    <h2 class="my-0 fw-normal mb-4">{{$t('pricing.entreprise.title')}}</h2>
                    <h1 class="card-title pricing-card-title mb-0">3000 {{$t('currency')}} <small class="text-secondary"> / {{$t('pricing.entreprise.lifetime')}}</small></h1>
                    <ul class="list-unstyled my-3 p-0">
                        <li><p>{{$t('pricing.entreprise.stockage')}}</p></li>
                        <li><p>{{$t('pricing.entreprise.server')}}</p></li>
                        <li><p>{{$t('pricing.entreprise.access')}}</p></li>
                    </ul>
                    <button type="button" @click="plan_type = 3" class="btn btn-primary rounded-pill w-100">{{$t('pricing.entreprise.button')}}</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-undef */
export default {
  name: 'Pricing',
  data () {
    return {
      plan_type: null
    }
  },
  watch: {
    plan_type (val) {
      webServices.get('/gerenateKey',
        {
          headers: {
            'Content-Type': 'application/json',
            // eslint-disable-next-line quote-props
            'Authorization': User.ApiToken()
          },
          params: {
            plan_type: val
          }
        })
        .then(res => {
          this.$notify({
            type: 'success',
            layout: 'topLeft',
            text: this.$t('pricing.connecter'),
            timeout: 2000
          })
          this.$router.push({ name: 'default.counter' })
        })
        .catch(res => {
          this.$notify({
            type: 'error',
            layout: 'topLeft',
            text: 'error',
            timeout: 1500

          })
        })
    }
  }
}
</script>

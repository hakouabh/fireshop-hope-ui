<template>
    <div>
        <section class="login-content">
         <div class="row m-0 align-items-center bg-white vh-100">
            <div class="col-md-6">
               <div class="row justify-content-center">
                  <div class="col-md-10">
                     <div class="card card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                        <div class="card-body">
                           <router-link  :to="{name: 'default.dashboard'}" class="navbar-brand d-flex align-items-center mb-3">
                              <svg width="30" class="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                                 <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                                 <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                                 <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
                              </svg>
                              <h4 class="logo-title ms-3">{{ $t('app_name') }}</h4>
                           </router-link>
                           <h2 class="mb-2 text-center">{{ $t('sognInVue.signin') }}</h2>
                           <p class="text-center">{{ $t('sognInVue.logintostay') }}</p>
                           <form @submit.prevent="signIn">
                              <div class="row">
                                 <div class="col-lg-12">
                                    <div class="form-group">
                                       <label for="email" class="form-label">{{ $t('sognInVue.label.email') }}</label>
                                       <input type="email" v-model="form.email" class="form-control" id="email" aria-describedby="email" :placeholder="$t('sognInVue.placeholder.email')">
                                       <small class="text-danger" id="Company-category-errors" v-if="errors.email"> {{ errors.email[0] }} </small>
                                    </div>
                                 </div>
                                 <div class="col-lg-12">
                                    <div class="form-group">
                                       <label for="password" class="form-label">{{ $t('sognInVue.label.password') }}</label>
                                       <input type="password" v-model="form.password" class="form-control" id="password" aria-describedby="password" :placeholder="$t('sognInVue.placeholder.password')">
                                       <small class="text-danger" id="Company-category-errors" v-if="errors.password"> {{ errors.password[0] }} </small>
                                    </div>
                                 </div>
                                 <div class="col-lg-12 d-flex justify-content-between">
                                    <div class="form-check mb-3">
                                       <input type="checkbox" class="form-check-input" id="customCheck1">
                                       <label class="form-check-label" for="customCheck1">{{ $t('sognInVue.remember_me') }}</label>
                                    </div>
                                     <router-link  :to="{name: 'auth.recoverPassword'}">{{ $t('sognInVue.forget_password') }}</router-link>
                                 </div>
                              </div>
                              <div class="d-flex justify-content-center">
                                 <button type="submit" class="btn btn-primary">{{ $t('sognInVue.signin') }}</button>
                              </div>
                              <p class="mt-3 text-center">
                                 {{ $t('sognInVue.dont_have_account') }} <router-link :to="{name: 'auth.signup'}">{{ $t('sognInVue.click_to_signup') }}</router-link>
                              </p>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="sign-bg">
                  <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g opacity="0.05">
                     <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF"/>
                     <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF"/>
                     <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 61.9355 138.545)" fill="#3B8AFF"/>
                     <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857" transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF"/>
                     </g>
                  </svg>
               </div>
            </div>
            <div class="col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
               <img src="@/assets/images/auth/01.png" class="img-fluid gradient-main animated-scaleX" alt="images">
            </div>
         </div>
      </section>
    </div>
</template>
<script>
/* eslint-disable no-undef */
export default {
  name: 'SignIn',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  methods: {
    signIn () {
      webServices.post('/auth/login', this.form)
        .then(res => {
          User.responseAfterLogin(res.data)
          this.$notify({
            type: 'success',
            layout: 'topLeft',
            text: this.$t('sognInVue.connecter'),
            timeout: 1500

          })
          this.$router.push({ name: 'default.counter' })
        })
        .catch(error => {
          if (error.response.status === 401) {
            this.$notify({
              type: 'error',
              layout: 'topLeft',
              text: this.$t('sognInVue.invalid_credential'),
              timeout: 1500

            })
          } else if (error.response.status === 422) {
            this.errors = error.response.data.errors
          }
        })
    }
  }
}
</script>

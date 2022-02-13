<template>
    <div>
         <section class="login-content">
         <div class="row m-0 align-items-center bg-white vh-100">
               <div class="col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
               <img src="@/assets/images/auth/05.png" class="img-fluid gradient-main animated-scaleX" alt="images">
            </div>
            <div class="col-md-6">
               <div class="row justify-content-center">
                  <div class="col-md-10">
                     <div class="card card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
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
                           <h2 class="mb-2 text-center">{{ $t('signUpVue.signup') }}</h2>
                           <p class="text-center">{{ $t('signUpVue.create_account') }}</p>
                           <form  @submit.prevent="signUp">
                              <div class="row">
                                 <div class="col-lg-6">
                                    <div class="form-group">
                                       <input type="text" class="form-control" id="full-name" v-model="form.name" :placeholder="$t('signUpVue.placeholder.name') ">
                                       <small class="text-danger" id="Company-category-errors" v-if="errors.name"> {{ errors.name[0] }} </small>
                                    </div>
                                 </div>
                                 <div class="col-lg-6">
                                    <div class="form-group">
                                       <input type="text" class="form-control" id="company-name" v-model="companyName" :placeholder="$t('signUpVue.placeholder.company_name') ">
                                       <small class="text-danger" id="Company-category-errors" v-if="errors.company"> {{ errors.company[0] }} </small>
                                    </div>
                                 </div>
                                 <div class="col-lg-6">
                                    <div class="form-group">
                                       <input type="text" class="form-control" id="last-name" v-model="form.email" :placeholder="$t('signUpVue.placeholder.email') ">
                                       <small class="text-danger" id="Company-category-errors" v-if="errors.email"> {{ errors.email[0] }} </small>
                                    </div>
                                 </div>
                                 <div class="col-lg-6">
                                    <div class="form-group">
                                       <input type="text" class="form-control" id="last-name" v-model="form.phone" :placeholder="$t('signUpVue.placeholder.phone') ">
                                       <small class="text-danger" id="Company-category-errors" v-if="errors.phone"> {{ errors.phone[0] }} </small>
                                    </div>
                                 </div>
                                 <div class="col-lg-6">
                                    <div class="form-group">
                                       <input type="password" class="form-control" id="password" v-model="form.password" :placeholder="$t('signUpVue.placeholder.password') ">
                                       <small class="text-danger" id="Company-category-errors" v-if="errors.password"> {{ errors.password[0] }} </small>
                                    </div>
                                 </div>
                                 <div class="col-lg-6">
                                    <div class="form-group">
                                       <input type="text" class="form-control" id="confirm-password" v-model="form.password_confirmation" :placeholder="$t('signUpVue.placeholder.password_confirmation') ">
                                    </div>
                                 </div>
                                 <div class="col-lg-8">
                                    <div class="form-group">
                                       <select class="form-select" id="SelectCategory" v-model="category_id">
                                       <option selected disabled >{{$t('signUpVue.placeholder.company_category')}}</option>
                                       <option v-for="category in categories" :value="category.id" :key="category.id">{{category.name}}</option>
                                       </select>
                                       <small class="text-danger" id="Company-category-errors" v-if="errors.category"> {{$t('signUpVue.required')}}</small>
                                    </div>
                                 </div>
                                 <div class="col-lg-2 mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M12.0001 8.32739V15.6537" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                       <path d="M15.6668 11.9904H8.3335" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                       <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
                                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                 </div>
                                 <div class="col-lg-12 d-flex justify-content-center">
                                    <div class="form-check mb-3">
                                       <input type="checkbox" class="form-check-input" id="customCheck1">
                                       <label class="form-check-label" for="customCheck1">{{$t('signUpVue.agree')}}</label>
                                    </div>
                                 </div>
                              </div>
                              <div class="d-flex justify-content-center">
                                 <button type="submit" class="btn btn-primary">{{$t('signUpVue.signup')}}</button>
                              </div>
                              <p class="mt-3 text-center">
                                 {{$t('signUpVue.alredy_have_account')}} <router-link :to="{name: 'auth.signin'}">{{$t('signUpVue.signin')}}</router-link>
                              </p>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
               <modal mainClass="fade" :tabindex="-1" id="exampleModal1" ariaLabelled="exampleModalLabel" :ariaHidden="true" style="display: none;">
                  <model-header :dismissable="true">
                     <h5 class="modal-title" id="exampleModalLabel">Create new Category</h5>
                  </model-header>
                  <model-body>
                     <form>
                        <div class="col-lg-12">
                           <div class="form-group">
                              <input type="text" class="form-control" id="Company-category" v-model="createdCompany" placeholder="Enter the Company name">
                              <small class="text-danger" id="Company-category-errors" v-if="errors.name"> {{ errors.name[0] }} </small>
                           </div>
                        </div>
                     </form>
                  </model-body>
                  <model-footer>
                     <button type="button" id="close" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     <button type="button" class="btn btn-primary" @click="CreateCategory">Save changes</button>
                  </model-footer>
               </modal>
               <div class="sign-bg sign-bg-right">
                  <svg width="280" height="230" viewBox="0 0 421 359" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g opacity="0.05">
                        <rect x="-15.0845" y="154.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -15.0845 154.773)" fill="#3A57E8"/>
                        <rect x="149.47" y="319.328" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 149.47 319.328)" fill="#3A57E8"/>
                        <rect x="203.936" y="99.543" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 203.936 99.543)" fill="#3A57E8"/>
                        <rect x="204.316" y="-229.172" width="543" height="77.5714" rx="38.7857" transform="rotate(45 204.316 -229.172)" fill="#3A57E8"/>
                     </g>
                  </svg>
               </div>
            </div>
         </div>
      </section>
    </div>
</template>
<script>
/* eslint-disable no-undef */
export default {
  name: 'SignUp',
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        company: {
          type: {},
          name: ''
        }
      },
      companyName: '',
      category_id: null,
      createdCompany: '',
      categories: {},
      errors: {}
    }
  },
  created () {
    this.getCompanies()
  },
  methods: {
    getCompanies () {
      webServices.get('/companies/types')
        .then(res => {
          this.categories = res.data.data
        })
        .catch(error => {
          this.errors = error.response.data.errors
        })
    },
    CreateCategory () {
      webServices.post('/companies/types/store', { name: this.createdCompany })
        .then(() => {
          this.getCompanies()
          this.$notify({
            type: 'success',
            layout: 'topLeft',
            text: this.$t('created'),
            timeout: 1500
          })
          document.getElementById('close').click()
          document.querySelector('#Company-category').value = ''
          document.querySelector('#Company-category-errors').value = ''
        })
        .catch(error => {
          this.errors = error.response.data.errors
        })
    },
    signUp () {
      if (this.category_id != null) {
        webServices.get(`/companies/types/${this.category_id}`)
          .then(res => {
            this.form.company.type = res.data.data
            this.form.company.name = this.companyName
            webServices.post('auth/register', this.form)
              .then(result => {
                User.responseAfterLogin(result.data)
                this.$notify({
                  type: 'success',
                  layout: 'topLeft',
                  text: this.$t('signUpVue.created'),
                  timeout: 1500

                })
                this.$router.push({ name: 'default.counter' })
              })
              .catch(error => {
                this.errors = error.response.data.errors
              })
          })
          .catch(error => {
            this.errors = error.response.data.errors
          })
      } else {
        this.errors.category = 'error'
      }
    }
  }
}
</script>

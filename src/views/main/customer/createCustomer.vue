<template>
    <div>
      <div class="row">
         <div class="col-sm-12 col-lg-12">
            <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">{{$t('customerVue.create_customer')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="createCustomer" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-6 mb-2">
                           <label for="customer01" class="form-label">{{$t('customerVue.feilds.full_name')}} <small class="text-danger"> *</small></label>
                           <input type="text" :class="`${errors.full_name ? 'is-invalid' : ''}`" class="form-control" id="customer01" v-model="form.full_name">
                           <small class="text-danger" v-if="errors.full_name" > {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-6 mb-2">
                           <label for="customer02" class="form-label">{{$t('customerVue.feilds.email')}}</label>
                           <input type="text" class="form-control" id="customer02" v-model="form.email" >
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="customer03" class="form-label">{{$t('customerVue.feilds.phone')}}</label>
                           <input type="text" class="form-control" id="customer03" v-model="form.phone">
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="customer04" class="form-label">{{$t('customerVue.feilds.company_name')}}</label>
                           <input type="text" class="form-control" id="customer04" v-model="form.company_name">
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="customer05" class="form-label">{{$t('customerVue.feilds.city')}}</label>
                           <input type="text" class="form-control" id="customer05" v-model="form.city">
                        </div>
                        <div class="col-md-12 mb-5">
                            <label for="validationTextareaaddress" class="form-label">{{$t('customerVue.feilds.address')}}</label>
                            <textarea class="form-control" id="validationTextareaaddress" v-model="form.address" :placeholder="$t('customerVue.feilds.address')+' ....'"></textarea>
                        </div>
                         <div class="row d-flex">
                           <div class="col-lg-3 col-md-6">
                            <button class="btn btn-success" type="submit">{{$t('customerVue.button.save')}}</button>
                           </div>
                           <div class="col-lg-3 col-md-6">
                            <a class="btn btn-danger" href="">{{$t('customerVue.button.cancel')}}</a>
                           </div>
                        </div>
                     </div>
                     </form>
                  </div>
               </div>
         </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable no-undef */
export default {
  name: 'createCustomer',
  data () {
    return {
      form: {
        email: null,
        phone: null,
        address: null,
        full_name: null,
        company_name: null,
        city: null
      },
      errors: {}
    }
  },
  methods: {
    createCustomer () {
      webServices.post('/customers/add', this.form, {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.$notify({
            type: 'success',
            layout: 'topLeft',
            text: this.$t('created'),
            timeout: 1500
          })
          this.$router.go({ name: 'customer.add' })
        })
        .catch(error => { this.errors = error.response.data.errors })
    }
  }
}

</script>

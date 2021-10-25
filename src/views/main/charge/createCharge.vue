<template>
    <div>
      <div class="row">
         <div class="col-sm-12 col-lg-12">
            <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">{{$t('chargeVue.create_charge')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="createCharge" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-6 mb-2">
                           <label for="charge01" class="form-label">{{$t('chargeVue.feilds.amount')}} <small class="text-danger"> *</small></label>
                           <input type="number" :class="`${errors.amount ? 'is-invalid' : ''}`" class="form-control" id="charge01" v-model="form.amount">
                           <small class="text-danger" v-if="errors.amount" > {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-5 mb-2">
                           <label for="validationCustom04" class="form-label">{{$t('chargeVue.feilds.type')}} <small class="text-danger"> *</small></label>
                           <select class="form-select" :class="`${errors.type ? 'is-invalid' : ''}`" id="validationCustom04" v-model="form.type" >
                              <option v-for="type in chargesTypes" :value="type" :key="type.id">{{type.name}}</option>
                           </select>
                           <small class="text-danger" v-if="errors.type"> {{$t('signUpVue.required')}} </small>
                        </div>
                        <div class="col-lg-1 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                           <br>
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
                        <div class="col-md-12 mb-5">
                            <label for="validationTextareaaddress" class="form-label">{{$t('chargeVue.feilds.description')}}</label>
                            <textarea class="form-control" id="validationTextareaaddress" v-model="form.description" :placeholder="$t('chargeVue.feilds.description')+' ....'"></textarea>
                        </div>
                         <div class="row d-flex">
                           <div class="col-lg-3 col-md-6">
                            <button class="btn btn-success" type="submit">{{$t('chargeVue.button.save')}}</button>
                           </div>
                           <div class="col-lg-3 col-md-6">
                            <a class="btn btn-danger" href="">{{$t('chargeVue.button.cancel')}}</a>
                           </div>
                        </div>
                     </div>
                     </form>
                  </div>
               </div>
         </div>
      </div>
    </div>
<modal mainClass="fade" :tabindex="-1" id="exampleModal1" ariaLabelled="exampleModalLabel" :ariaHidden="true" style="display: none;">
<model-header :dismissable="true">
   <h5 class="modal-title" id="exampleModalLabel">{{$t('model_titel')}}</h5>
</model-header>
<model-body>
   <form>
      <div class="col-lg-12">
         <div class="form-group">
            <input type="text" class="form-control" id="Company-category" v-model="createdCompany" :placeholder="$t('chargeVue.feilds.type')">
            <small class="text-danger" id="Company-category-errors" v-if="errors.name"> {{ errors.name[0] }} </small>
         </div>
      </div>
   </form>
</model-body>
<model-footer>
   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{$t('chargeVue.button.cancel')}}</button>
   <button type="button" class="btn btn-primary" @click="CreateCategory">{{$t('chargeVue.button.save')}}</button>
</model-footer>
</modal>
</template>
<script>
/* eslint-disable no-undef */
export default {
  name: 'CreateCharge',
  data () {
    return {
      form: {
        amount: null,
        type: {},
        description: null
      },
      errors: {},
      createdCompany: null,
      chargesTypes: {}
    }
  },
  created () {
    this.chargeCategory()
  },
  methods: {
    createCharge () {
      webServices.post('/charges/add', this.form, {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(() => {
          this.$notify({
            type: 'success',
            layout: 'topLeft',
            text: this.$t('created'),
            timeout: 1500
          })
          this.$router.go({ name: 'charge.add' })
        })
        .catch(error => {
          this.errors = error.response.data.errors
        })
    },
    CreateCategory () {
      webServices.post('/charges/types/store', { name: this.createdCompany }, {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(() => {
          this.chargeCategory()
          this.$notify({
            type: 'success',
            layout: 'topLeft',
            text: this.$t('created'),
            timeout: 1500
          })
          document.querySelector('#Company-category').value = null
          document.querySelector('#Company-category-errors').value = null
        })
        .catch(error => {
          this.errors = error.response.data.errors
        })
    },
    chargeCategory () {
      webServices.get('/charges/types', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.chargesTypes = res.data.data
        })
        .catch(error => { this.errors = error.response.data.errors })
    }
  }
}

</script>

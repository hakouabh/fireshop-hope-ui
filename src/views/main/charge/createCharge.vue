<template>
    <div>
      <div class="row">
         <div class="col-sm-12 col-lg-12">
            <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                       <router-link :to="{ name: 'charge.list'}" class="icon">
                          <svg width="50px" stroke="blue" height="40px" viewBox="0 0 24 24">
                              <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
                          </svg>
                        </router-link>
                        <h4 class="card-title">{{$t('chargeVue.create_charge')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="createCharge" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-6 mb-2">
                           <label for="charge01" class="form-label">{{$t('chargeVue.feilds.amount')}} <small class="text-danger"> *</small></label>
                           <input type="number" step="0.01" min="0" :class="`${errors.amount ? 'is-invalid' : ''}`" class="form-control" id="charge01" v-model="form.amount">
                           <small class="text-danger" v-if="errors.amount" > {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-5 mb-2">
                           <label for="validationCustom04" class="form-label">{{$t('chargeVue.feilds.type')}} <small class="text-danger"> *</small></label>
                           <select class="form-select" :class="`${errors.type_id ? 'is-invalid' : ''}`" id="validationCustom04" v-model="form.type_id" >
                              <option v-for="type in chargesTypes" :value="type.id" :key="type.id">{{type.name}}</option>
                           </select>
                           <small class="text-danger" v-if="errors.type_id"> {{$t('signUpVue.required')}} </small>
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
import { GET_CHARGE_TYPE, SET_CHARGE_TYPE, SET_CHARGE } from '@/store/mutation-types'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CreateCharge',
  data () {
    return {
      form: {
        amount: null,
        type_id: null,
        description: null
      },
      createdCompany: null
    }
  },
  mounted () {
    this.chargeCategory()
  },
  computed: {
    ...mapGetters({
      chargesTypes: 'getChargeTypes',
      errors: 'chargeErrors'
    })
  },
  methods: {
    createCharge () {
      this.$store.dispatch(SET_CHARGE, this.form)
    },
    CreateCategory () {
      this.$store.dispatch(SET_CHARGE_TYPE, { name: this.createdCompany })
      document.querySelector('#Company-category').value = null
      // document.querySelector('#Company-category-errors').value = null
    },
    ...mapActions({
      chargeCategory: GET_CHARGE_TYPE
    })
  }
}

</script>

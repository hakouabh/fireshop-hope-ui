<template>
    <div>
      <div class="row">
         <div class="col-sm-12 col-lg-12">
            <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                       <router-link :to="{ name: 'customer.list'}" class="icon">
                          <svg width="50px" stroke="blue" height="40px" viewBox="0 0 24 24">
                              <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
                          </svg>
                        </router-link>
                        <h4 class="card-title">{{$t('customerVue.edit_customer')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="EditCustomer" enctype="multipart/form-data">
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
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h5 class="card-title">{{$t('operationVue.table_name')}}</h5>
                    </div>
                    </div>
                    <div class="card-body p-0">
                    <div class="table-responsive mt-4">
                        <table id="basic-table" class="table table-striped  table-hover mb-0" role="grid">
                            <thead>
                                <tr>
                                <th>{{$t('operationVue.feilds.customer')}}</th>
                                <th>{{$t('operationVue.feilds.discount')}}</th>
                                <th>{{$t('operationVue.feilds.total')}}</th>
                                <th>{{$t('operationVue.feilds.payment')}}</th>
                                <th>{{$t('operationVue.feilds.date')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="operation in form.operations" :key="operation.id" @click="viewOperation(operation.id)">
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6> {{form.full_name}} </h6>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6> {{operation.discount}} {{$t('currency')}} </h6>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6> {{operation.total}} {{$t('currency')}} </h6>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6> {{operation.payment}} {{$t('currency')}} </h6>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6> {{operation.created_at}} </h6>
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable no-undef */
import { INDEX_CUSTOMER, EDIT_CUSTOMER } from '@/store/mutation-types'
import { mapGetters } from 'vuex'
export default {
  name: 'createCustomer',
  computed: {
    ...mapGetters({
      form: 'customer',
      errors: 'customerErrors'
    })
  },
  created () {
    this.$store.dispatch(INDEX_CUSTOMER, this.$route.params.id)
  },
  methods: {
    viewOperation (id) {
      this.$router.push({ name: 'operations.view', params: { id: id } })
    },
    EditCustomer () {
      this.$store.dispatch(EDIT_CUSTOMER, {
        id: this.$route.params.id,
        form: this.form
      })
    }
  }
}

</script>

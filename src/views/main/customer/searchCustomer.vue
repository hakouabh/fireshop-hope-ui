<template>
    <div>
      <div class="row">
         <div class="col-sm-12 col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">{{$t('customerVue.search_customer')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="searchCustomer" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-3 mb-2">
                           <label for="validationCustomer01" class="form-label">{{$t('customerVue.feilds.full_name')}}</label>
                           <input type="text" class="form-control" id="validationCustomer01" v-model="form.name">
                        </div>
                        <div class="col-md-3 mb-2">
                           <label for="validationCustomer02" class="form-label">{{$t('customerVue.searchCustomer.email')}}</label>
                           <input type="text" class="form-control" id="validationCustomer02" v-model="form.email">
                        </div>
                        <div class="col-md-3 mb-2">
                           <label for="validationCustomer03" class="form-label">{{$t('customerVue.searchCustomer.phone')}}</label>
                           <input type="text" class="form-control" id="validationCustomer03" v-model="form.phone">
                        </div>
                        <div class="col-md-3 mb-2">
                           <label for="validationCustomer04" class="form-label">{{$t('customerVue.searchCustomer.company_name')}}</label>
                           <input type="text" class="form-control" id="validationCustomer04" v-model="form.company">
                        </div>
                        <div class="col-md-6 mb-2">
                           <label for="validationCustomer05" class="form-label">{{$t('customerVue.searchCustomer.date_from')}}</label>
                           <input type="date" :class="`${errors.date_from ? 'is-invalid' : ''}`" class="form-control" id="validationCustomer05" v-model="form.date_range.from">
                        </div>
                        <div class="col-md-6 mb-5">
                           <label for="validationCustomer06" class="form-label">{{$t('customerVue.searchCustomer.date_to')}}</label>
                           <input type="date" :class="`${errors.date_to ? 'is-invalid' : ''}`" class="form-control" id="validationCustomer06" v-model="form.date_range.to">
                        </div>
                       <div class="row d-flex">
                       <div class="col-lg-3 col-md-6">
                           <button class="btn btn-success" type="submit">{{$t('customerVue.button.search_customer')}}</button>
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
       <div class="row">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header d-flex justify-content-between">
               <div class="header-title">
                  <h4 class="card-title">{{$t('customerVue.table_name')}}</h4>
               </div>
            </div>
            <div class="card-body p-0">
               <div class="table-responsive mt-4">
                <table id="basic-table" class="table table-striped mb-0" role="grid">
                     <thead>
                        <tr>
                           <th>{{$t('customerVue.feilds.full_name')}}</th>
                           <th>{{$t('customerVue.feilds.email')}}</th>
                           <th>{{$t('customerVue.feilds.phone')}}</th>
                           <th>{{$t('customerVue.feilds.city')}}</th>
                           <th>{{$t('customerVue.feilds.company_name')}}</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="customer in customers" :key="customer.id" @click="goToedit(customer.id)">
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{customer.full_name}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{customer.email}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{customer.phone}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{customer.city}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{customer.company_name}} </h6>
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
export default {
  name: 'searchCustomer',
  data () {
    return {
      form: {
        name: null,
        company: null,
        email: null,
        phone: null,
        date_range: {
          from: null,
          to: null
        }
      },
      errors: {},
      customers: {}
    }
  },
  methods: {
    goToedit (id) {
      this.$router.push({ name: 'customer.edit', params: { id: id } })
    },
    searchCustomer () {
      webServices.get('/customers/', {
        headers: {
          'Content-Type': 'multipart/form-data',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        },
        params: {
          filter: this.form
        }
      })
        .then(res => {
          this.customers = res.data.data
        })
    }
  }

}
</script>

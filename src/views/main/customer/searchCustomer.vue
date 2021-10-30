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
                        <tr v-for="customer in customers.data" :key="customer.id" @click="goToedit(customer.id)">
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
               <custompagination :totalpage="totalpage" @PerPage="(val,val2)=>{perpage=val; searchCustomer(val2)}" @Paginate="searchCustomer"/>
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
      totalpage: 0,
      perpage: 15,
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
    searchCustomer (page = 1) {
      webServices.get('/customers?page=' + page, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        },
        params: {
          filter: this.form,
          perpage: this.perpage
        }
      })
        .then(res => {
          this.customers = res.data.data
          this.totalpage = res.data.data.last_page
        })
    }
  }

}
</script>

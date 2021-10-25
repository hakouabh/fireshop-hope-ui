<template>
<br><br>
 <div class="row d-flex">
   <div class="col-lg-3 col-md-6">
      <router-link :to="{name: 'customer.add'}">
            <div class="card bg-soft-success">
                  <div class="card-body">
                     <div class="d-flex justify-content-between align-items-center">
                        <div v-html="createicon"></div>
                        <div>
                        {{$t('customerVue.button.new_customer')}}
                        </div>
                     </div>
                  </div>
         </div>
      </router-link>
   </div>
   <div class="col-lg-3 col-md-6">
      <router-link :to="{name: 'customer.search'}">
            <div class="card bg-soft-primary">
                  <div class="card-body">
                     <div class="d-flex justify-content-between align-items-center">
                        <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                        </svg>
                        <div>
                        {{$t('customerVue.button.search_customer')}}
                        </div>
                     </div>
            </div>
         </div>
      </router-link>
   </div>
</div>
<div>
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
import { Solidicons } from '@/icondata/iconsolid.js'
export default {
  name: 'ClientTable',
  data () {
    return {
      createicon: Solidicons[74].svgicons,
      searchicon: Solidicons[77].svgicons,
      customers: {}
    }
  },
  created () {
    this.getCustomers()
  },
  methods: {
    goToedit (id) {
      this.$router.push({ name: 'customer.edit', params: { id: id } })
    },
    getCustomers () {
      webServices.get('/customers', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.customers = res.data.data
        })
    }
  }
}
</script>

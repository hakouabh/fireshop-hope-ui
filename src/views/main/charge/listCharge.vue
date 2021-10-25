<template>
<br><br>
 <div class="row d-flex">
   <div class="col-lg-3 col-md-6">
      <router-link :to="{name: 'charge.add'}">
            <div class="card bg-soft-success">
                  <div class="card-body">
                     <div class="d-flex justify-content-between align-items-center">
                        <div v-html="createicon"></div>
                        <small>
                        {{$t('chargeVue.button.new_charge')}}
                        </small>
                     </div>
                  </div>
         </div>
      </router-link>
   </div>
   <div class="col-lg-3 col-md-6">
      <router-link :to="{name: 'charge.search'}">
            <div class="card bg-soft-primary">
                  <div class="card-body">
                     <div class="d-flex align-items-center">
                        <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                        </svg>
                        <small>
                        {{$t('chargeVue.button.search_charge')}}
                        </small>
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
                  <h4 class="card-title">{{$t('chargeVue.table_name')}}</h4>
               </div>
            </div>
            <div class="card-body p-0">
               <div class="table-responsive mt-4">
                  <table id="basic-table" class="table table-striped mb-0" role="grid">
                     <thead>
                        <tr>
                           <th>{{$t('chargeVue.feilds.type')}}</th>
                           <th>{{$t('chargeVue.feilds.amount')}}</th>
                           <th>{{$t('chargeVue.feilds.description')}}</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="charge in charges" :key="charge.id" @click="goToedit(charge.id)">
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{charge.type.name}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{charge.amount}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{charge.description}} </h6>
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
  name: 'BootstrapTable',
  data () {
    return {
      createicon: Solidicons[74].svgicons,
      searchicon: Solidicons[77].svgicons,
      charges: {}
    }
  },
  created () {
    this.getCharges()
  },
  methods: {
    goToedit (id) {
      this.$router.push({ name: 'charge.edit', params: { id: id } })
    },
    getCharges () {
      webServices.get('/charges', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.charges = res.data.data
        })
    }
  }
}
</script>

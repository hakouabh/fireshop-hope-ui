<template>
<br><br>
 <div class="row d-flex">
   <div class="col-lg-3 col-md-6">
      <router-link :to="{name: 'product.add'}">
            <div class="card bg-soft-success">
                  <div class="card-body">
                     <div class="d-flex justify-content-between align-items-center">
                        <div v-html="createicon"></div>
                        <div>
                        {{$t('productVue.button.new_product')}}
                        </div>
                     </div>
                  </div>
         </div>
      </router-link>
   </div>
   <div class="col-lg-3 col-md-6">
      <router-link :to="{name: 'product.search'}">
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
                        {{$t('productVue.button.search_product')}}
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
                  <h4 class="card-title">{{$t('productVue.table_name')}}</h4>
               </div>
            </div>
            <div class="card-body p-0">
               <div class="table-responsive mt-4">
                  <table id="basic-table" class="table table-striped mb-0" role="grid">
                     <thead>
                        <tr>
                           <th>
                               <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.24512 14.7815L10.2383 10.8914L13.6524 13.5733L16.5815 9.79297" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <circle cx="19.9954" cy="4.20027" r="1.9222" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M14.9248 3.12012H7.65704C4.6456 3.12012 2.77832 5.25284 2.77832 8.26428V16.3467C2.77832 19.3581 4.60898 21.4817 7.65704 21.4817H16.2612C19.2726 21.4817 21.1399 19.3581 21.1399 16.3467V9.30776"
                                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                           </th>
                           <th>{{$t('productVue.feilds.name')}}</th>
                           <th>{{$t('productVue.feilds.sku')}}</th>
                           <th>{{$t('productVue.feilds.type')}}</th>
                           <th>{{$t('productVue.feilds.unit_price')}}</th>
                           <th>{{$t('productVue.feilds.stock')}}</th>
                           <th>{{$t('productVue.feilds.status')}}</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="product in products" :key="product.id" @click="goToedit(product.id)">
                            <td v-if="!product.image">
                              <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M7.24512 14.7815L10.2383 10.8914L13.6524 13.5733L16.5815 9.79297" stroke="currentColor" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                       <circle cx="19.9954" cy="4.20027" r="1.9222" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                       <path
                                          d="M14.9248 3.12012H7.65704C4.6456 3.12012 2.77832 5.25284 2.77832 8.26428V16.3467C2.77832 19.3581 4.60898 21.4817 7.65704 21.4817H16.2612C19.2726 21.4817 21.1399 19.3581 21.1399 16.3467V9.30776"
                                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.name}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.sku}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.type.name}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.selling_price}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.stock}} </h6>
                              </div>
                           </td>
                           <td v-if="product.stock > 0"><div class="text-success">{{$t('productVue.available')}}</div></td>
                           <td v-if="product.stock <= 0"><div class="text-danger">{{$t('productVue.stock_out')}}</div></td>
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
      products: {}
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    goToedit (id) {
      this.$router.push({ name: 'product.edit', params: { id: id } })
    },
    getProducts () {
      webServices.get('/products', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.products = res.data.data
          console.log(this.products)
        })
    }
  }
}
</script>

<template>
<br><br>
<div>
 <div class="row">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header d-flex justify-content-between">
               <div class="header-title">
                  <h4 class="card-title">{{$t('productVue.table_name_deleted')}}</h4>
               </div>
            </div>
            <div class="card-body p-0">
               <div class="table-responsive mt-4">
                  <table id="basic-table" class="table table-striped  table-hover mb-0" role="grid">
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
                           <th>{{$t('productVue.feilds.date')}}</th>
                           <th>{{$t('productVue.feilds.actions')}}</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="product in products.data" :key="product.id">
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
                            <td v-else>
                                 <img :src="product.image" alt="product-img" class="rounded-pill avatar-40">
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
                                 <h6> {{product.selling_price}} {{$t('currency')}}</h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.stock}} </h6>
                              </div>
                           </td>
                           <td ><div class="text-danger">{{product.deleted_at}}</div></td>
                           <td @click="restore(product.id)">
                                    <div class="flex align-items-center list-user-action">
                                       <a class="btn btn-sm btn-icon btn-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" href="#">
                                          <span class="btn-inner">
                                             <svg width="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                <path fill="none" d="M19.305,9.61c-0.235-0.235-0.615-0.235-0.85,0l-1.339,1.339c0.045-0.311,0.073-0.626,0.073-0.949
                                                   c0-3.812-3.09-6.901-6.901-6.901c-2.213,0-4.177,1.045-5.44,2.664l0.897,0.719c1.053-1.356,2.693-2.232,4.543-2.232
                                                   c3.176,0,5.751,2.574,5.751,5.751c0,0.342-0.037,0.675-0.095,1l-1.746-1.39c-0.234-0.235-0.614-0.235-0.849,0
                                                   c-0.235,0.235-0.235,0.615,0,0.85l2.823,2.25c0.122,0.121,0.282,0.177,0.441,0.172c0.159,0.005,0.32-0.051,0.44-0.172l2.25-2.25
                                                   C19.539,10.225,19.539,9.845,19.305,9.61z M10.288,15.752c-3.177,0-5.751-2.575-5.751-5.752c0-0.276,0.025-0.547,0.062-0.813
                                                   l1.203,1.203c0.235,0.234,0.615,0.234,0.85,0c0.234-0.235,0.234-0.615,0-0.85l-2.25-2.25C4.281,7.169,4.121,7.114,3.961,7.118
                                                   C3.802,7.114,3.642,7.169,3.52,7.291l-2.824,2.25c-0.234,0.235-0.234,0.615,0,0.85c0.235,0.234,0.615,0.234,0.85,0l1.957-1.559
                                                   C3.435,9.212,3.386,9.6,3.386,10c0,3.812,3.09,6.901,6.902,6.901c2.083,0,3.946-0.927,5.212-2.387l-0.898-0.719
                                                   C13.547,14.992,12.008,15.752,10.288,15.752z"></path>
                                             </svg>
                                          </span>
                                       </a>
                                    </div>
                              </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <custompagination :totalpage="products.last_page" @PerPage="(val,val2)=>{perpage=val; getProducts(val2)}" @Paginate="getProducts"/>
            </div>
         </div>
      </div>
   </div>
    </div>
</template>
<script>
/* eslint-disable no-undef */
import { RESTORE_PRODUCT, GET_PRODUCTS_TRASH } from '@/store/mutation-types'
import { mapGetters } from 'vuex'

export default {
  name: 'BootstrapTable',
  data () {
    return {
      perpage: 15
    }
  },
  computed: {
    ...mapGetters({
      products: 'productsTrash'
    })
  },
  created () {
    this.getProducts()
  },
  methods: {
    restore (id) {
      this.$store.dispatch(RESTORE_PRODUCT, id)
    },
    getProducts (page = 1) {
      this.$store.dispatch(GET_PRODUCTS_TRASH, {
        page: page,
        perpage: this.perpage
      })
    }
  }
}
</script>

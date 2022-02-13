<template>
<br><br>
<div>
 <div class="row">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header d-flex justify-content-between">
               <div class="header-title">
                  <h4 class="card-title">{{$t('stockVue.table_name')}}</h4>
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
                           <th>{{$t('stockVue.feilds.product')}}</th>
                           <th>{{$t('stockVue.feilds.sku')}}</th>
                           <th>{{$t('stockVue.feilds.type')}}</th>
                           <th>{{$t('stockVue.feilds.cost')}}</th>
                           <th>{{$t('stockVue.feilds.selling_price')}}</th>
                           <th>{{$t('stockVue.feilds.stock')}}</th>
                           <th>{{$t('stockVue.feilds.date')}}</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="product in products.data" :key="product.product_id" @click="goToedit(product.id)" >
                            <td v-if="!product.product.image">
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
                                 <img :src="product.product.image" alt="product-img" class="rounded-pill avatar-40">
                            </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.product.name}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.product.sku}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.product.type.name}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.cost}} {{$t('currency')}}</h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.selling_price}} {{$t('currency')}}</h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.quantity}} </h6>
                              </div>
                           </td>
                           <td v-if="product.stock > 0"><div class="text-success">{{$t('stockVue.available')}}</div></td>
                           <td v-if="product.stock <= 0"><div class="text-danger">{{$t('stockVue.stock_out')}}</div></td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.created_at}} </h6>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <custompagination :totalpage="totalpage" @PerPage="(val,val2)=>{perpage=val; getProducts(val2)}" @Paginate="getProducts"/>
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
  name: 'ListStock',
  props: {
    product_id: { type: String, default: null }
  },
  data () {
    return {
      totalpage: 10,
      perpage: 15,
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
      this.$router.push({ name: 'product.editStock', params: { id: id, product_id: this.product_id } })
    },
    getProducts (page = 1) {
      webServices.get('/products/stock/get?page=' + page, {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        },
        params: {
          perpage: this.perpage,
          product_id: this.product_id
        }
      })
        .then(res => {
          this.products = res.data
          this.totalpage = res.data.last_page
        })
    }
  }
}
</script>

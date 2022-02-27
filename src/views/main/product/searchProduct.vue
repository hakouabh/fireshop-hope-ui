<template>
    <div>
      <div class="row">
         <div class="col-sm-12 col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <router-link :to="{ name: 'product.list'}" class="icon">
                          <svg width="50px" stroke="blue" height="40px" viewBox="0 0 24 24">
                              <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
                          </svg>
                        </router-link>
                        <h4 class="card-title">{{$t('productVue.search_product1')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="searchProduct" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom01" class="form-label">{{$t('productVue.feilds.product_name')}}</label>
                           <input type="text" :class="`${errors.name ? 'is-invalid' : ''}`" class="form-control" id="validationCustom01" v-model="form.name">
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom02" class="form-label">{{$t('productVue.searchProduct.sku')}}</label>
                           <input type="text" :class="`${errors.sku ? 'is-invalid' : ''}`" class="form-control" id="validationCustom02" v-model="form.sku">
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom04" class="form-label">{{$t('productVue.searchProduct.type')}}</label>
                           <select class="form-select" :class="`${errors.type ? 'is-invalid' : ''}`" id="validationCustom04"  v-model="form.type" >
                              <option v-for="type in productsTypes" :value="type" :key="type.id">{{type.name}}</option>
                           </select>
                        </div>
                        <div class="col-md-6 mb-2">
                           <label for="validationCustom05" class="form-label">{{$t('productVue.searchProduct.date_from')}}</label>
                           <input type="date" :class="`${errors.date_from ? 'is-invalid' : ''}`" class="form-control" id="validationCustom05" v-model="form.date_range.from">
                        </div>
                        <div class="col-md-6 mb-5">
                           <label for="validationCustom06" class="form-label">{{$t('productVue.searchProduct.date_to')}}</label>
                           <input type="date" :class="`${errors.date_to ? 'is-invalid' : ''}`" class="form-control" id="validationCustom06" v-model="form.date_range.to">
                        </div>
                       <div class="row d-flex">
                       <div class="col-lg-3 col-md-6">
                           <button class="btn btn-success" type="submit">{{$t('productVue.button.search_product')}}</button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                           <a class="btn btn-danger" href="">{{$t('productVue.button.cancel')}}</a>
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
                  <h4 class="card-title">{{$t('productVue.table_name')}}</h4>
               </div>
                  <div class="d-flex align-items-center">
                     <div>
                        <h6 class="card-title">{{$t('export_as')}}</h6>
                     </div>
                  <div class="btn btn-icon" @click="exportExcel()">
                     <div class="btn-inner">
                        <img src="https://img.icons8.com/color/48/000000/ms-excel.png"/>
                     </div>
                  </div>
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
                           <th>{{$t('productVue.feilds.cost')}}</th>
                           <th>{{$t('productVue.feilds.selling_price')}}</th>
                           <th>{{$t('productVue.feilds.stock')}}</th>
                           <th>{{$t('productVue.feilds.status')}}</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="product in products.data" :key="product.id" @click="goToedit(product.id)">
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
                                 <h6> {{product.stock}} </h6>
                              </div>
                           </td>
                           <td v-if="product.stock > 0"><div class="text-success">{{$t('productVue.available')}}</div></td>
                           <td v-if="product.stock <= 0"><div class="text-danger">{{$t('productVue.stock_out')}}</div></td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <custompagination :totalpage="totalpage" @PerPage="(val,val2)=>{perpage=val; searchProduct(val2)}" @Paginate="searchProduct"/>
            </div>
         </div>
      </div>
   </div>
    </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'searchProduct',
  data () {
    return {
      totalpage: 0,
      perpage: 15,
      form: {
        name: null,
        type: null,
        date_range: {
          from: null,
          to: null
        },
        sku: null
      },
      productsTypes: {},
      errors: {},
      products: {}
    }
  },
  created () {
    this.productCategory()
    this.searchProduct()
  },
  methods: {
    exportExcel () {
      webServices.get('/products/export',
        {
          responseType: 'arraybuffer',
          headers: {
            'Content-Type': 'multipart/form-data',
            // eslint-disable-next-line quote-props
            'Authorization': User.ApiToken()
          },
          params: {
            filter: this.form
          }
        })
        .then(response => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]))
          var fileLink = document.createElement('a')
          fileLink.href = fileURL
          fileLink.setAttribute('download', `${this.$t('dashboardVue.products')}.xlsx`)
          document.body.appendChild(fileLink)
          fileLink.click()
        })
    },
    goToedit (id) {
      this.$router.push({ name: 'product.edit', params: { id: id } })
    },
    searchProduct (page = 1) {
      webServices.get('/products?page=' + page, {
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
          this.products = res.data.data
          this.totalpage = res.data.data.last_page
        })
    },
    productCategory () {
      webServices.get('/products/types', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.productsTypes = res.data.data
        })
        .catch()
    }

  }

}
</script>

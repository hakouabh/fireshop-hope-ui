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
                        <h4 class="card-title">{{$t('stockVue.create_stock')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="CreateStock" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-5 mb-2">
                           <label for="validationCustom04" class="form-label">{{$t('stockVue.feilds.product')}} <small class="text-danger"> *</small></label>
                           <select class="form-select" :class="`${errors.type ? 'is-invalid' : ''}`" id="validationCustom04" v-model="form.product" >
                              <option v-for="product in products.data" :value="product" :key="product.id">{{product.name}}</option>
                           </select>
                           <small class="text-danger" v-if="errors.product"> {{$t('signUpVue.required')}} </small>
                        </div>
                        <div class="col-md-6 mb-2 mt-2">
                              <br>
                              <button type="button" data-bs-toggle="modal" data-bs-target="#findProduct" @click="findProduct()" class="btn btn-info">
                                 <span class="btn-inner">
                                    <svg class="svg-icon" stroke="currentColor" viewBox="0 0 20 20">
                                       <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                                    </svg>
                                 </span>
                                 {{$t('counterVue.button.search_product')}}</button>
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom03" class="form-label">{{$t('stockVue.feilds.stock')}} <small class="text-danger"> *</small></label>
                           <input type="number" min="0" class="form-control" :class="`${errors.stock ? 'is-invalid' : ''}`" id="validationCustom03" v-model="form.quantity" >
                           <small class="text-danger" v-if="errors.stock"> {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom03" class="form-label">{{$t('stockVue.feilds.cost')}} <small class="text-danger"> *</small></label>
                           <input type="number" step="0.01" min="0" class="form-control" :class="`${errors.cost ? 'is-invalid' : ''}`" id="validationCustom03" v-model="form.cost">
                           <small class="text-danger" v-if="errors.cost"> {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom05" class="form-label">{{$t('stockVue.feilds.selling_price')}} <small class="text-danger"> *</small></label>
                           <input type="number" step="0.01" min="0" :class="`${errors.selling_price ? 'is-invalid' : ''}`" class="form-control" id="validationCustom05" v-model="form.selling_price">
                           <small class="text-danger" v-if="errors.selling_price"> {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-6 mb-4">
                           <br>
                           <div class="form-check form-switch mt-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="form.is_defect">
                              <label class="form-check-label" for="flexSwitchCheckDefault">{{$t('stockVue.feilds.is_defect')}}</label>
                           </div>
                        </div>
                        <div class="col-md-6 mb-4">
                           <br>
                           <div class="form-check form-switch mt-2">
                              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="form.update_price">
                              <label class="form-check-label" for="flexSwitchCheckDefault">{{$t('stockVue.feilds.update_price')}}</label>
                           </div>
                        </div>
                         <div class="row d-flex">
                           <div class="col-lg-3 col-md-6">
                            <button class="btn btn-success" type="submit">{{$t('stockVue.button.save')}}</button>
                           </div>
                           <div class="col-lg-3 col-md-6">
                            <a class="btn btn-danger" href="">{{$t('stockVue.button.cancel')}}</a>
                           </div>
                        </div>
                     </div>
                     </form>
                  </div>
               </div>
         </div>
      </div>
      <modal mainClass="fade" :tabindex="-1" id="findProduct" ariaLabelled="exampleModalLabel" :ariaHidden="true" style="display: none;" dialogClass="modal-fullscreen modal-dialog-scrollable">
<model-header :dismissable="true">
   <h5 class="modal-title" id="exampleModalLabel">{{$t('model_search_product')}}</h5>
</model-header>
<model-body>
   <form>
      <div class="col-lg-12">
         <div class="row">
            <div class="col-lg-6">
               <input type="text" class="form-control" id="model-product-sku" v-on:keyup.enter="findProduct()" v-model.lazy="formProduct.sku" :placeholder="$t('productVue.feilds.sku')">
            </div>
            <div class="col-lg-6">
               <input type="text" class="form-control" id="model-product_name" v-on:keyup.enter="findProduct()" v-model.lazy="formProduct.name" :placeholder="$t('productVue.feilds.product_name')">
            </div>
         </div>
         <div class="table-responsive mt-4">
                  <table id="basic-table" class="table table-striped  table-hover mb-0" role="grid">
                     <thead>
                        <tr>
                           <th>{{$t('productVue.feilds.name')}}</th>
                           <th>{{$t('productVue.feilds.sku')}}</th>
                           <th>{{$t('productVue.feilds.unit_price')}}</th>
                           <th>{{$t('productVue.feilds.stock')}}</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="product in products.data" :key="product.id" data-bs-dismiss="modal" @click="selectProduct(product)">
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
                                 <h6> {{product.selling_price}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{product.stock}} </h6>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
      </div>
   </form>
</model-body>
<model-footer>
   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{$t('productVue.button.cancel')}}</button>
</model-footer>
</modal>
    </div>
</template>
<script>
/* eslint-disable no-undef */
export default {
  name: 'createStock',
  data () {
    return {
      form: {
        product: {},
        quantity: null,
        cost: null,
        selling_price: null,
        is_defect: false,
        update_price: false
      },
      products: {},
      errors: {},
      formProduct: {
        name: null,
        type: null,
        date_range: {
          from: null,
          to: null
        },
        sku: null
      }
    }
  },
  created () {
    this.getProduct()
  },
  methods: {
    selectProduct (product) {
      this.form.product = product
      this.addProduct()
    },
    getProduct (page = 1) {
      webServices.get('/products/', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        },
        params: {
          perpage: 10
        }
      })
        .then(res => {
          this.products = res.data.data
        })
    },
    CreateStock () {
      webServices.post('/products/stock', this.form, {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.$router.go({ name: 'product.stock' })
        })
        .catch(error => { this.errors = error.response.data.errors })
    },
    findProduct () {
      webServices.get('/products/', {
        headers: {
          'Content-Type': 'multipart/form-data',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        },
        params: {
          filter: this.formProduct
        }
      })
        .then(res => {
          this.products = res.data.data
        })
    }
  }
}

</script>

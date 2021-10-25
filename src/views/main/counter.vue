<template>
    <div>
      <div class="row">
         <div class="col-sm-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 mb-2">
                              <label for="counterCustom01" class="form-label">{{$t('counterVue.feilds.sku')}}</label>
                              <input type="text" v-on:keyup.enter="addProduct" autofocus :class="`${errors ? 'is-invalid text-danger' : success ? 'text-success': ''}`" class="form-control" id="counterCustom01" v-model="sku">
                            </div>
                           <div class="col-md-4 mb-2 mt-2">
                              <br>
                              <button type="button" data-bs-toggle="modal" data-bs-target="#findProduct" @click="findProduct()" class="btn btn-info">
                                 <span class="btn-inner">
                                    <svg class="svg-icon" stroke="currentColor" viewBox="0 0 20 20">
                                       <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                                    </svg>
                                 </span>
                                 {{$t('counterVue.button.search_product')}}</button>
                            </div>
                            <div class="col-md-4 mt-2 mb-2">
                              <br>
                              <button type="button" class="btn btn-info" @click="findCustomer()" data-bs-toggle="modal" data-bs-target="#findClient">
                                 <span class="btn-inner">
                                    <svg class="svg-icon" stroke="currentColor" viewBox="0 0 20 20">
                                       <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                                    </svg>
                                 </span>
                              {{$t('counterVue.button.search_customer')}}</button>
                            </div>
                        </div>
                        <div class="row">
                           <div class="col-md-3 mb-2 mt-2">
                              <button type="button" @click="DeleteAll()" class="btn btn-light">
                                 <span class="btn-inner">
                                    <svg class="svg-icon" stroke="currentColor" viewBox="0 0 20 20">
                                       <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                                    </svg>
                                 </span>
                                 {{$t('counterVue.button.delete')}}</button>
                           </div>
                           <div class="col-md-4 mb-2 mt-2">
                              <button type="button" @click="validateOperation()" class="btn btn-light">
                                 <span class="btn-inner">
                                    <svg class="svg-icon" stroke="currentColor" viewBox="0 0 20 20">
                                       <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                                    </svg>
                                 </span>
                                 {{$t('counterVue.button.validate')}}</button>
                            </div>
                        </div>
               <div class="table-responsive mt-4">
                  <table id="basic-table" class="table table-striped mb-0" role="grid">
                     <thead>
                        <tr>
                           <th>{{$t('counterVue.feilds.sku')}}</th>
                           <th>{{$t('counterVue.feilds.name')}}</th>
                           <th>{{$t('counterVue.feilds.unit_price')}}</th>
                           <th>{{$t('counterVue.feilds.quantity')}}</th>
                           <th>{{$t('counterVue.feilds.total')}}</th>
                           <th>{{$t('counterVue.feilds.action')}}</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="order in orders" :key="order.id">
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{order.order_detail.product.sku}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{order.order_detail.product.name}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{order.order_detail.product.selling_price}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{order.order_detail.amount}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{order.order_detail.total_order}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <div class="btn btn-icon btn-soft-light me-2 " @click="deleteProduct(order.id)">
                                    <div class="btn-inner">
                                       <svg class="svg-icon" viewBox="0 0 20 20">
                                          <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                                       </svg>
                                    </div>
                                 </div>
                                 <div class="btn btn-icon btn-soft-light me-2" @click="product_price = order.order_detail.product.selling_price;order_id = order.order_detail.id" data-bs-toggle="modal" data-bs-target="#exampleDiscount">
                                    <div class="btn-inner">
                                       <svg class="svg-icon" viewBox="0 0 20 20">
                                          <path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
                                       </svg>
                                    </div>
                                 </div>
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
                  <table id="basic-table" class="table table-striped mb-0" role="grid">
                     <thead>
                        <tr>
                           <th>{{$t('productVue.feilds.name')}}</th>
                           <th>{{$t('productVue.feilds.sku')}}</th>
                           <th>{{$t('productVue.feilds.unit_price')}}</th>
                           <th>{{$t('productVue.feilds.stock')}}</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="product in products" :key="product.id" @click="selectProduct(product.sku)">
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

<modal mainClass="fade" :tabindex="-1" id="findClient" ariaLabelled="exampleModalLabel" :ariaHidden="true" style="display: none;" dialogClass="modal-fullscreen modal-dialog-scrollable">
<model-header :dismissable="true">
   <h5 class="modal-title" id="exampleModalLabel">{{$t('model_search_customer')}}</h5>
</model-header>
<model-body>
   <form>
      <div class="col-lg-12">
         <div class="row">
            <div class="col-lg-6">
               <input type="text" class="form-control" id="model-name" v-model.lazy="formCustomer.name" v-on:keyup.enter="findCustomer()" :placeholder="$t('customerVue.searchCustomer.full_name')">
            </div>
            <div class="col-lg-6">
               <input type="text" class="form-control" id="model-phone" v-model.lazy="formCustomer.phone" v-on:keyup.enter="findCustomer()" :placeholder="$t('customerVue.searchCustomer.phone')">
            </div>
         </div>
            <div class="table-responsive mt-4">
                <table id="basic-table" class="table table-striped mb-0" role="grid">
                     <thead>
                        <tr>
                           <th>{{$t('customerVue.feilds.full_name')}}</th>
                           <th>{{$t('customerVue.feilds.email')}}</th>
                           <th>{{$t('customerVue.feilds.phone')}}</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="customer in customers" :key="customer.id" data-bs-dismiss="modal" @click="selectClient(customer.id)">
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

<modal mainClass="fade" :tabindex="-1" id="exampleDiscount" ariaLabelled="exampleModalLabel" :ariaHidden="true" style="display: none;">
<model-header :dismissable="true">
   <h5 class="modal-title" id="exampleModalLabel">{{$t('model_discount')}}</h5>
</model-header>
<model-body>
   <form>
      <div class="col-lg-12">
         <div class="row">
            <div class="col-lg-6">
               <input type="number" class="form-control" :class="`${discount <= 0 ? 'is-invalid text-danger' : discount > 0 ? 'text-success': ''}`" id="model-discount" v-model="discount">
            </div>
            <div class="col-lg-6">
               <input type="number" class="form-control" :class="`${discount <= 0 ? 'is-invalid text-danger' : discount > 0 ? 'text-success': ''}`" id="model-discount" v-model="discount_percent">
            </div>
         </div>
      </div>
   </form>
</model-body>
<model-footer>
   <button type="button" class="btn btn-secondary" id="closeDiscount" data-bs-dismiss="modal">{{$t('productVue.button.cancel')}}</button>
   <button type="button" class="btn btn-primary" @click="Discount()">{{$t('productVue.button.save')}}</button>
</model-footer>
</modal>
</template>
<script>
/* eslint-disable no-undef */
export default {
  name: 'Counter',
  data () {
    return {
      order_id: null,
      discount_percent: null,
      product_price: null,
      discount: null,
      sku: null,
      errors: false,
      success: false,
      orders: {},
      products: {},
      customers: {},
      formProduct: {
        name: null,
        type: null,
        date_range: {
          from: null,
          to: null
        },
        sku: null
      },
      formCustomer: {
        name: null,
        company: null,
        email: null,
        phone: null,
        date_range: {
          from: null,
          to: null
        }
      }
    }
  },
  created () {
    this.getOrders()
  },
  watch: {
    discount (val) {
      this.discount_percent = (val * 100) / this.product_price
    },
    discount_percent (val) {
      this.discount = (val * this.product_price) / 100
    }
  },
  methods: {
    DeleteAll () {
      webServices.get('/ordersV2/deleteAll', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(() => {
          this.getOrders()
        })
        .catch()
    },
    validateOperation () {
      webServices.get('/operations/validateOperation', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(() => {
          this.$notify({
            type: 'success',
            layout: 'topLeft',
            text: this.$t('validate_operation'),
            timeout: 1500
          })
          this.getOrders()
        })
        .catch()
    },
    Discount () {
      if (this.discount > 0) {
        webServices.post('/ordersV2/discount', {
          discount: this.discount,
          order_id: this.order_id
        }, {
          headers: {
            'Content-Type': 'application/json',
            // eslint-disable-next-line quote-props
            'Authorization': User.ApiToken()
          }
        })
          .then(() => {
            this.getOrders()
            this.discount = null
            document.getElementById('closeDiscount').click()
          })
          .catch()
      }
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
    },
    findCustomer () {
      webServices.get('/customers/', {
        headers: {
          'Content-Type': 'multipart/form-data',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        },
        params: {
          filter: this.formCustomer
        }
      })
        .then(res => {
          this.customers = res.data.data
        })
    },
    selectProduct (sku) {
      this.sku = sku
      this.addProduct()
    },
    selectClient (customer) {
      this.customer = customer
      this.addProduct()
    },
    deleteProduct (id) {
      webServices.get('/ordersV2/delete/' + id, {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(() => {
          this.getOrders()
        })
    },
    getOrders () {
      webServices.get('/ordersV2/get', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.orders = res.data
        })
        .catch()
    },
    addProduct () {
      if (this.sku != null) {
        webServices.post('/ordersV2/add', { sku: this.sku }, {
          headers: {
            'Content-Type': 'application/json',
            // eslint-disable-next-line quote-props
            'Authorization': User.ApiToken()
          }
        })
          .then(res => {
            this.getOrders()
            this.$notify({
              type: 'success',
              layout: 'topLeft',
              text: this.$t('added'),
              timeout: 1500
            })
            this.success = true
            setTimeout(() => {
              this.sku = null
              this.success = false
            }, 500)
          })
          .catch(() => {
            this.$notify({
              type: 'error',
              layout: 'topLeft',
              text: this.$t('not_found'),
              timeout: 1500
            })
            this.errors = true
            setTimeout(() => {
              this.sku = null
              this.errors = false
            }, 1500)
          })
      }
    }
  }
}
</script>

<style>

</style>

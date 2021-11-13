<template>
    <div>
      <div class="row">
         <div class="col-sm-12 col-lg-12">
            <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <router-link :to="{ name: 'product.edit', params: { id: form.product_id }}" class="icon">
                          <svg width="50px" stroke="blue" height="40px" viewBox="0 0 24 24">
                              <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
                          </svg>
                        </router-link>
                        <h4 class="card-title">{{$t('editStockVue.create_stock')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="EditStock" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-6 mb-2">
                           <label for="validationCustom04" class="form-label">{{$t('editStockVue.feilds.product')}} <small class="text-danger"> *</small></label>
                           <input type="text" disabled class="form-control" :class="`${errors.stock ? 'is-invalid' : ''}`" id="validationCustom03" v-model="form.product_name" >
                        </div>
                        <div></div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom03" class="form-label">{{$t('editStockVue.feilds.stock')}} <small class="text-danger"> *</small></label>
                           <input type="number" min="0" class="form-control" :class="`${errors.stock ? 'is-invalid' : ''}`" id="validationCustom03" v-model="form.quantity" >
                           <small class="text-danger" v-if="errors.stock"> {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom03" class="form-label">{{$t('editStockVue.feilds.cost')}} <small class="text-danger"> *</small></label>
                           <input type="number" step="0.01" min="0" class="form-control" :class="`${errors.cost ? 'is-invalid' : ''}`" id="validationCustom03" v-model="form.cost">
                           <small class="text-danger" v-if="errors.cost"> {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom05" class="form-label">{{$t('editStockVue.feilds.selling_price')}} <small class="text-danger"> *</small></label>
                           <input type="number" step="0.01" min="0" :class="`${errors.selling_price ? 'is-invalid' : ''}`" class="form-control" id="validationCustom05" v-model="form.selling_price">
                           <small class="text-danger" v-if="errors.selling_price"> {{$t('signUpVue.required')}}</small>
                        </div>
                         <div class="row d-flex mt-5">
                           <div class="col-lg-3 col-md-6">
                            <button class="btn btn-success" type="submit">{{$t('editStockVue.button.save')}}</button>
                           </div>
                           <div class="col-lg-3 col-md-6">
                            <a class="btn btn-danger" href="">{{$t('editStockVue.button.cancel')}}</a>
                           </div>
                           <div class="col-lg-3 col-md-6">
                              <button type="button" @click="DeleteStock" class="btn btn-danger">
                                 <span class="btn-inner">
                                    <svg class="svg-icon" stroke="currentColor" viewBox="0 0 20 20">
                                      <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306" />
                                    </svg>
                                 </span>
                                 {{$t('editStockVue.button.delete')}}</button>
                            </div>
                        </div>
                     </div>
                     </form>
                  </div>
               </div>
         </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable no-undef */
export default {
  name: 'editStock',
  data () {
    return {
      form: {
        id: this.$route.params.id,
        product_id: this.$route.params.product_id,
        product_name: null,
        quantity: null,
        cost: null,
        selling_price: null
      },
      errors: {}
    }
  },
  created () {
    this.findStock()
  },
  methods: {
    DeleteStock () {
      Swal.fire({
        title: this.$t('swal.sure'),
        text: this.$t('swal.sure2'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: this.$t('swal.yes')
      }).then((result) => {
        if (result.isConfirmed) {
          webServices.delete(`/products/${this.$route.params.id}/delete/stock`, {
            headers: {
              'Content-Type': 'application/json',
              // eslint-disable-next-line quote-props
              'Authorization': User.ApiToken()
            }
          })
            .then(() => {
              Swal.fire(
                this.$t('swal.deleted'),
                this.$t('swal.deleted-success'),
                'success'
              )
              this.$router.push({ name: 'product.edit', params: { id: this.form.product_id } })
            })
        }
      })
    },
    EditStock () {
      webServices.post('/products/stock/update', this.form, {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.$router.go({ name: 'product.edit', params: { id: this.form.product_id } })
        })
        .catch(error => { this.errors = error.response.data.errors })
    },
    findStock () {
      webServices.get('/products/stock/find/' + this.form.id, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.form.product_name = res.data.product.name
          this.form.quantity = res.data.quantity
          this.form.cost = res.data.cost
          this.form.selling_price = res.data.selling_price
        })
    }
  }
}

</script>

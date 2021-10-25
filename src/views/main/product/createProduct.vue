<template>
    <div>
      <div class="row">
         <div class="col-sm-12 col-lg-12">
            <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">{{$t('productVue.create_product')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="CreateProduct" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom01" class="form-label">{{$t('productVue.feilds.product_name')}} <small class="text-danger"> *</small></label>
                           <input type="text" :class="`${errors.name ? 'is-invalid' : ''}`" class="form-control" id="validationCustom01" v-model="form.name">
                           <small class="text-danger" v-if="errors.name" > {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-3 mb-2">
                           <label for="validationCustom02" class="form-label">{{$t('productVue.feilds.sku')}} <small class="text-danger"> *</small></label>
                           <input type="text" :class="`${errors.sku ? 'is-invalid' : ''}`" class="form-control" id="validationCustom02" v-model="form.sku">
                           <small class="text-danger" v-if="errors.sku"> {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom04" class="form-label">{{$t('productVue.feilds.type')}} <small class="text-danger"> *</small></label>
                           <select class="form-select" :class="`${errors.type ? 'is-invalid' : ''}`" id="validationCustom04" v-model="form.type" >
                              <option v-for="type in productsTypes" :value="type" :key="type.id">{{type.name}}</option>
                           </select>
                           <small class="text-danger" v-if="errors.type"> {{$t('signUpVue.required')}} </small>
                        </div>
                        <div class="col-lg-1 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                           <br>
                           <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.0001 8.32739V15.6537" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                 stroke-linejoin="round" />
                              <path d="M15.6668 11.9904H8.3335" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                 stroke-linejoin="round" />
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                 d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
                                 stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom03" class="form-label">{{$t('productVue.feilds.stock')}} <small class="text-danger"> *</small></label>
                           <input type="text" class="form-control" :class="`${errors.stock ? 'is-invalid' : ''}`" id="validationCustom03" v-model="form.stock" >
                           <small class="text-danger" v-if="errors.stock"> {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom03" class="form-label">{{$t('productVue.feilds.cost')}} <small class="text-danger"> *</small></label>
                           <input type="text" class="form-control" :class="`${errors.cost ? 'is-invalid' : ''}`" id="validationCustom03" v-model="form.cost">
                           <small class="text-danger" v-if="errors.cost"> {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom05" class="form-label">{{$t('productVue.feilds.selling_price')}} <small class="text-danger"> *</small></label>
                           <input type="text" :class="`${errors.selling_price ? 'is-invalid' : ''}`" class="form-control" id="validationCustom05" v-model="form.selling_price">
                           <small class="text-danger" v-if="errors.selling_price"> {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-12 mb-5">
                            <label for="validationTextarea" class="form-label">{{$t('productVue.feilds.description')}}</label>
                            <textarea class="form-control" id="validationTextarea" v-model="form.description" :placeholder="$t('productVue.feilds.description')"></textarea>
                        </div>
                         <div class="row d-flex">
                           <div class="col-lg-3 col-md-6">
                            <button class="btn btn-success" type="submit">{{$t('productVue.button.save')}}</button>
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
    </div>
<modal mainClass="fade" :tabindex="-1" id="exampleModal1" ariaLabelled="exampleModalLabel" :ariaHidden="true" style="display: none;">
<model-header :dismissable="true">
   <h5 class="modal-title" id="exampleModalLabel">{{$t('model_titel')}}</h5>
</model-header>
<model-body>
   <form>
      <div class="col-lg-12">
         <div class="form-group">
            <input type="text" class="form-control" id="Company-category" v-model="createdCompany" :placeholder="$t('productVue.feilds.category')">
            <small class="text-danger" id="Company-category-errors" v-if="errors.name"> {{ errors.name[0] }} </small>
         </div>
      </div>
   </form>
</model-body>
<model-footer>
   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{$t('productVue.button.cancel')}}</button>
   <button type="button" class="btn btn-primary" @click="CreateCategory">{{$t('productVue.button.save')}}</button>
</model-footer>
</modal>
</template>
<script>
/* eslint-disable no-undef */
export default {
  name: 'createProduct',
  data () {
    return {
      form: {
        name: null,
        sku: null,
        type: null,
        stock: null,
        cost: null,
        selling_price: null,
        description: null
      },
      errors: {},
      productsTypes: {},
      createdCompany: null
    }
  },
  created () {
    this.productCategory()
  },
  methods: {
    CreateCategory () {
      webServices.post('/products/types/store', { name: this.createdCompany }, {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(() => {
          this.productCategory()
          this.$notify({
            type: 'success',
            layout: 'topLeft',
            text: this.$t('created'),
            timeout: 1500
          })
          document.querySelector('#Company-category').value = null
          document.querySelector('#Company-category-errors').value = null
        })
        .catch(error => {
          this.errors = error.response.data.errors
        })
    },
    CreateProduct () {
      webServices.post('/products/add', this.form, {
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
            text: this.$t('created'),
            timeout: 1500
          })
          this.$router.go({ name: 'product.add' })
        })
        .catch(error => {
          this.errors = error.response.data.errors
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
        .catch(error => { this.errors = error.response.data.errors })
    }
  }
}

</script>

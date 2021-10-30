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
                        <h4 class="card-title">{{$t('productVue.edit_product')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="EditProduct" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom01" class="form-label">{{$t('productVue.feilds.product_name')}}</label>
                           <input type="text" :class="`${errors.name ? 'is-invalid' : ''}`" class="form-control" id="validationCustom01" v-model="form.name">
                           <small class="text-danger" v-if="errors.name" > {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-3 mb-2">
                           <label for="validationCustom02" class="form-label">{{$t('productVue.feilds.sku')}}</label>
                           <input type="text" :class="`${errors.sku ? 'is-invalid' : ''}`" class="form-control" id="validationCustom02" v-model="form.sku">
                           <small class="text-danger" v-if="errors.sku"> {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom04" class="form-label">{{$t('productVue.feilds.type')}}</label>
                           <select class="form-select" :class="`${errors.type ? 'is-invalid' : ''}`" id="validationCustom04" v-model="category_id" >
                              <option v-for="type in productsTypes" :value="type.id" :key="type.id">{{type.name}}</option>
                           </select>
                           <small class="text-danger" v-if="errors.type"> {{$t('signUpVue.required')}}</small>
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
                           <label for="validationCustom03" class="form-label">{{$t('productVue.feilds.stock')}}</label>
                           <input disabled type="text" class="form-control" :class="`${errors.stock ? 'is-invalid' : ''}`" id="validationCustom03" v-model="form.stock" >
                           <small class="text-danger" v-if="errors.stock"> {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom03" class="form-label">{{$t('productVue.feilds.cost')}}</label>
                           <input disabled type="text" class="form-control" :class="`${errors.cost ? 'is-invalid' : ''}`" id="validationCustom03" v-model="form.cost">
                           <small class="text-danger" v-if="errors.cost"> {{$t('signUpVue.required')}}</small>
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="validationCustom05" class="form-label">{{$t('productVue.feilds.selling_price')}}</label>
                           <input disabled type="text" :class="`${errors.selling_price ? 'is-invalid' : ''}`" class="form-control" id="validationCustom05" v-model="form.selling_price">
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
   <h5 class="modal-title" id="exampleModalLabel">Create new Category</h5>
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
   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   <button type="button" class="btn btn-primary" @click="CreateCategory">Save changes</button>
</model-footer>
</modal>
</template>
<script>
/* eslint-disable no-undef */
export default {
  name: 'editProduct',
  data () {
    return {
      form: {
        name: '',
        sku: '',
        type: {
          id: ''
        },
        stock: '',
        cost: '',
        selling_price: '',
        description: ''
      },
      category_id: '',
      errors: {},
      productsTypes: {},
      createdCompany: ''
    }
  },
  created () {
    this.productCategory()
    const id = this.$route.params.id
    webServices.get('products/' + id, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        this.form = res.data.data
        this.category_id = res.data.data.type.id
      })
  },
  methods: {
    EditProduct () {
      webServices.put(`/products/${this.$route.params.id}/update`, this.form, {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.$notify({
            type: 'success',
            layout: 'topLeft',
            text: this.$t('created'),
            timeout: 1500
          })
          this.$router.go({ name: 'product.edit', params: { id: this.$route.params.id } })
        })
        .catch(error => { this.errors = error.response.data.errors })
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
    }
  }

}

</script>

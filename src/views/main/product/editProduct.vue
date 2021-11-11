<template>
    <div>
      <div class="row">
         <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-center">
                                <div class="d-flex flex-column text-center align-items-center justify-content-between ">
                                    <div class="fs-italic">
                                        <h1> {{form.name}}</h1>
                                        <div class="text-black-50 mb-1">
                                            <small>{{form.type.name}}</small>
                                        </div>
                                    </div>
                                    <div class="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="orange">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="orange">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="orange">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="gary">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="gary">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <div v-if="productTotal" class="card-profile-progress">
                                        <CircleProgress :value="productTotal" color="primary" />
                                        <img v-if="form.image"  :src="form.image" class="img-fluid rounded-circle card-img" alt="image">
                                    </div>
                                    <div class="mt-3 text-center text-black-50">
                                        <p>{{form.description}}</p>
                                    </div>
                                    <div class="d-flex icon-pill">
                                        <a @click="DeleteProduct()" class="btn btn-sm rounded-pill px-2 py-2  ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="text-danger" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306" />
                                            </svg>
                                        </a>
                                           <input type="file" v-show="false" class="custom-file-input" id="customFile" @change="onFileSelected">
                                        <a @click="AddImage" class="btn btn-sm rounded-pill px-2 py-2  ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="text-primary" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M18.555,15.354V4.592c0-0.248-0.202-0.451-0.45-0.451H1.888c-0.248,0-0.451,0.203-0.451,0.451v10.808c0,0.559,0.751,0.451,0.451,0.451h16.217h0.005C18.793,15.851,18.478,14.814,18.555,15.354 M2.8,14.949l4.944-6.464l4.144,5.419c0.003,0.003,0.003,0.003,0.003,0.005l0.797,1.04H2.8z M13.822,14.949l-1.006-1.317l1.689-2.218l2.688,3.535H13.822z M17.654,14.064l-2.791-3.666c-0.181-0.237-0.535-0.237-0.716,0l-1.899,2.493l-4.146-5.42c-0.18-0.237-0.536-0.237-0.716,0l-5.047,6.598V5.042h15.316V14.064z M12.474,6.393c-0.869,0-1.577,0.707-1.577,1.576s0.708,1.576,1.577,1.576s1.577-0.707,1.577-1.576S13.343,6.393,12.474,6.393 M12.474,8.645c-0.371,0-0.676-0.304-0.676-0.676s0.305-0.676,0.676-0.676c0.372,0,0.676,0.304,0.676,0.676S12.846,8.645,12.474,8.645" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between mt-3">
                              <div>
                                 <h2 class="mb-0"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='form.stock'/></h2>
                                    <!-- <h2 class="mb-0 counter">4500</h2> -->
                                 <div>{{$t('productVue.feilds.stock')}}</div>
                              </div>
                              <div>
                                 <h2 class="mb-0"><Vue3autocounter  ref='counter' :startAmount='0' :endAmount='sold'/></h2>
                                    <!-- <h2 class="mb-0">3.9</h2> -->
                                 <div>{{$t('dashboardVue.feilds.sold')}}</div>
                              </div>
                           </div>
                        </div>
                    </div>
        </div>
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
         <ListStock :product_id="$route.params.id" />
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
import Vue3autocounter from 'vue3-autocounter'
import ListStock from './listStock'
import CircleProgress from '@/components/custom/progressbar/Circleprogressbar'
export default {
  components: {
    ListStock,
    CircleProgress,
    Vue3autocounter
  },
  name: 'editProduct',
  data () {
    return {
      sold: 0,
      form: {
        image: '',
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
  computed: {
    productTotal () {
      const sum = 0
      if (this.sold > 0) {
        if (this.form.stock <= 0) {
          return 100
        }
        return (this.sold * 100 / this.form.stock)
      }
      return sum
    }
  },
  created () {
    this.productCategory()
    this.getProduct()
  },
  methods: {
    onFileSelected (e) {
      const formData = new FormData()
      formData.append('image', e.target.files[0])
      webServices.post(`/products/${this.$route.params.id}/storeImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2),
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
    },
    AddImage () {
      document.getElementById('customFile').click()
    },
    DeleteProduct () {
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
          webServices.delete(`/products/${this.$route.params.id}/delete`, {
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
              this.$router.push({ name: 'product.list' })
            })
        }
      })
    },
    getProduct () {
      const id = this.$route.params.id
      webServices.get('products/' + id, {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          if (res.data.data.sold != null) {
            this.sold = res.data.data.sold.amount
          }
          this.form = res.data.data
          this.category_id = res.data.data.type.id
        })
    },
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

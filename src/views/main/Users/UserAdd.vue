<template>
    <div>
       <div class="row">
         <div class="col-xl-3 col-lg-4">
            <div class="card">
               <div class="card-body">
                  <form>
                     <div class="form-group">
                        <div class="profile-img-edit position-relative">
                           <img @click="AddImage" class="profile-pic rounded avatar-100" :src="url || require('@/assets/images/avatars/01.png')" alt="profile-pic">
                           <div class="upload-icone bg-primary">
                              <svg @click="AddImage" class="upload-button" width="14" height="14" viewBox="0 0 24 24">
                                 <path fill="#ffffff" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                              </svg>
                              <input type="file" v-show="false" class="custom-file-input" id="customFile" @change="onFileSelected">
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                        <label class="form-label">{{$t('usersVue.role.title')}}</label>
                        <select name="type" v-model="form.role" class="selectpicker form-control" data-style="py-0">
                           <option value="0">{{$t('usersVue.role.admin')}}</option>
                           <option value="1">{{$t('usersVue.role.seller')}}</option>
                           <option value="2">{{$t('usersVue.role.commis')}}</option>
                        </select>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div class="col-xl-9 col-lg-8">
            <div class="card">
               <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                     <h4 class="card-title">{{$t('usersVue.add_user_title')}}</h4>
                  </div>
               </div>
               <div class="card-body">
                  <div class="new-user-info">
                     <form @submit.prevent="AddUser" enctype="multipart/form-data">
                        <div class="row">
                           <div class="col-lg-6">
                              <div class="form-group">
                                 <input type="text" class="form-control" id="full-name" v-model="form.name" :placeholder="$t('signUpVue.placeholder.name') ">
                                 <small class="text-danger" id="Company-category-errors" v-if="errors.name"> {{ errors.name[0] }} </small>
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="form-group">
                                 <input type="email" class="form-control" id="last-name" v-model="form.email" :placeholder="$t('signUpVue.placeholder.email') ">
                                 <small class="text-danger" id="Company-category-errors" v-if="errors.email"> {{ errors.email[0] }} </small>
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="form-group">
                                 <input type="password" class="form-control" id="password" v-model="form.password" :placeholder="$t('signUpVue.placeholder.password') ">
                                 <small class="text-danger" id="Company-category-errors" v-if="errors.password"> {{ errors.password[0] }} </small>
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="form-group">
                                 <input type="text" class="form-control" id="confirm-password" v-model="form.password_confirmation" :placeholder="$t('signUpVue.placeholder.password_confirmation') ">
                              </div>
                           </div>
                        </div>
                        <button type="submit" class="btn btn-primary">{{$t('usersVue.add_button')}}</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
       </div>
    </div>
</template>
<script>
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

import { SET_USER } from '@/store/mutation-types'
import { mapGetters } from 'vuex'
export default {
  name: 'UserAdd',
  data () {
    return {
      url: null,
      form: {
        role: 1,
        name: null,
        email: null,
        image: null,
        password: null,
        password_confirmation: null
      }
    }
  },
  computed: {
    ...mapGetters({
      errors: 'userErrors'
    })
  },
  methods: {
    AddImage () {
      document.getElementById('customFile').click()
    },
    onFileSelected (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) { return }
      this.form.image = files[0]
      this.createImage(files[0])
    },
    createImage (file) {
      var reader = new FileReader()

      reader.onload = (e) => {
        this.url = e.target.result
      }
      reader.readAsDataURL(file)
    },
    AddUser () {
      const formData = new FormData()
      formData.append('role', this.form.role)
      formData.append('image', this.form.image)
      this.form.name ? formData.append('name', this.form.name) : false
      this.form.email ? formData.append('email', this.form.email) : false
      this.form.password ? formData.append('password', this.form.password) : false
      this.form.password_confirmation ? formData.append('password_confirmation', this.form.password_confirmation) : false
      this.$store.dispatch(SET_USER, formData)
    }
  }
}
</script>

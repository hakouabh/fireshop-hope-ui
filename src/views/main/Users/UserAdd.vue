<template>
    <div>
       <div class="row">
         <div class="col-xl-3 col-lg-4">
            <div class="card">
               <div class="card-body">
                  <form>
                     <div class="form-group">
                        <div class="profile-img-edit position-relative">
                           <img class="profile-pic rounded avatar-100" src="@/assets/images/avatars/01.png" alt="profile-pic">
                           <div class="upload-icone bg-primary">
                              <svg class="upload-button" width="14" height="14" viewBox="0 0 24 24">
                                 <path fill="#ffffff" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                              </svg>
                              <input class="file-upload" @change="onFileSelected" type="file">
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
                     <form @submit.prevent="AddUser">
                        <div class="row">
                           <div class="col-lg-6">
                              <div class="form-group">
                                 <input type="text" class="form-control" id="full-name" v-model="form.name" :placeholder="$t('signUpVue.placeholder.name') ">
                                 <small class="text-danger" id="Company-category-errors" v-if="errors.name"> {{ errors.name[0] }} </small>
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="form-group">
                                 <input type="text" class="form-control" id="last-name" v-model="form.email" :placeholder="$t('signUpVue.placeholder.email') ">
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
export default {
  name: 'UserAdd',
  data () {
    return {
      form: {
        role: 1,
        name: null,
        email: null,
        image: null,
        password: null,
        password_confirmation: null
      },
      errors: {}
    }
  },
  methods: {
    onFileSelected (e) {
      this.form.image = e.target.files[0]
    },
    AddUser () {
      webServices.post('/auth/addUser', this.form, {
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
          this.$router.push({ name: 'user.UserList' })
        })
        .catch(error => {
          this.errors = error.response.data.errors
        })
    }
  }
}
</script>

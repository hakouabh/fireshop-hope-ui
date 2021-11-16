<template>
    <div>
        <div class="row">
          <div class="col-lg-12">
             <div class="card">
                  <div class="card-body">
                     <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <div class="d-flex flex-wrap align-items-center">
                           <router-link :to="{ name: 'user.UserList'}" class="icon">
                          <svg width="50px" stroke="blue" height="40px" viewBox="0 0 24 24">
                              <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
                          </svg>
                        </router-link>
                           <div class="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo">
                              <img :src="getImage(user.image)" class="img-fluid rounded-pill avatar-100" alt="profile-image">
                           </div>
                           <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                              <h4 class="me-2 h4">{{user.name}}</h4>
                              <span> - {{user.role}}</span>
                           </div>
                        </div>
                        <tab-nav :pills="true" id="profile-pills-tab" class="d-flex mb-0 text-center profile-tab" data-toggle="slider-tab" role="tablist">
                           <tab-nav-items :active="true" id="pills-friends-tab" href="#profile-friends" ariaControls="profile-friends" role="tab" dataToggle="tab" :ariaSelected="false">
                              <template v-slot:title>
                                    {{$t('usersVue.autorisation')}}
                              </template>
                           </tab-nav-items>
                           <tab-nav-items :active="false" id="pills-profile-tab" href="#profile-profile" ariaControls="profile-profile" role="tab" dataToggle="tab" :ariaSelected="false">
                              <template v-slot:title>
                                    {{$t('usersVue.profile')}}
                              </template>
                           </tab-nav-items>
                        </tab-nav>
                     </div>
                  </div>
             </div>
          </div>
          <div class="col-lg-12">
            <tab-content extraclass="profile-content">
               <tab-content-item id="profile-friends" :active="true">
                  <div class="card">
                     <div class="card-header">
                        <div class="header-title">
                           <h4 class="card-title">{{$t('usersVue.autorisation')}}</h4>
                        </div>
                     </div>
                     <div class="card-body">
                        <ul class="list-inline m-0 p-0">
                           <li class="d-flex mb-4 align-items-center">
                              <img src="@/assets/images/avatars/01.png" alt="story-img" class="rounded-pill avatar-40">
                              <div class="ms-3 col-md-3">
                                 <h6>Autorisation 1 </h6>
                              </div>
                              <div class="col-md-3 form-check form-switch">
                                 <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              </div>
                              <img src="@/assets/images/avatars/01.png" alt="story-img" class="rounded-pill avatar-40">
                              <div class="ms-3 col-md-3">
                                 <h6>Autorisation 2 </h6>
                              </div>
                              <div class="col-md-3 form-check form-switch">
                                 <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              </div>
                           </li>
                           <li class="d-flex mb-4 align-items-center">
                              <img src="@/assets/images/avatars/01.png" alt="story-img" class="rounded-pill avatar-40">
                              <div class="ms-3 col-md-3">
                                 <h6>Autorisation 1 </h6>
                              </div>
                              <div class="col-md-3 form-check form-switch">
                                 <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              </div>
                              <img src="@/assets/images/avatars/01.png" alt="story-img" class="rounded-pill avatar-40">
                              <div class="ms-3 col-md-3">
                                 <h6>Autorisation 2 </h6>
                              </div>
                              <div class="col-md-3 form-check form-switch">
                                 <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              </div>
                           </li>
                           <li class="d-flex mb-4 align-items-center">
                              <img src="@/assets/images/avatars/01.png" alt="story-img" class="rounded-pill avatar-40">
                              <div class="ms-3 col-md-3">
                                 <h6>Autorisation 1 </h6>
                              </div>
                              <div class="col-md-3 form-check form-switch">
                                 <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              </div>
                              <img src="@/assets/images/avatars/01.png" alt="story-img" class="rounded-pill avatar-40">
                              <div class="ms-3 col-md-3">
                                 <h6>Autorisation 2 </h6>
                              </div>
                              <div class="col-md-3 form-check form-switch">
                                 <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </tab-content-item>
               <tab-content-item id="profile-profile" :active="false">
                  <div class="card">
                     <div class="card-header">
                        <div class="header-title">
                           <h4 class="card-title">{{$t('usersVue.profile')}}</h4>
                        </div>
                     </div>
                     <div class="card-body">
                        <div class="text-center">
                           <div class="user-profile mb-4">
                              <img :src="getImage(user.image)" alt="profile-img" class="rounded-pill avatar-130 img-fluid">
                           </div>
                           <div class="row d-flex align-items-center flex-column">
                              <div>
                                 <h3 class="d-inline-block">{{user.name}}</h3>
                                 <p class="d-inline-block pl-3"> - {{user.role}}</p>
                              </div>
                              <div class="d-flex col-md-4 justify-content-between">
                                 <h5 class="d-inline-block">{{$t('usersVue.feilds1.email')}}</h5>
                                 <p class="d-inline-block">{{user.email}}</p>
                              </div>
                              <div class="d-flex col-md-4 justify-content-between">
                                 <h5 class="d-inline-block">{{$t('usersVue.feilds1.revenue')}}</h5>
                                 <p class="d-inline-block ">{{user.revenue}}   {{$t('currency')}}</p>
                              </div>
                              <div class="d-flex col-md-4 justify-content-between">
                                 <h5 class="d-inline-block">{{$t('usersVue.feilds1.profit')}}</h5>
                                 <p class="d-inline-block ">{{user.profit }}  {{$t('currency')}}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </tab-content-item>
            </tab-content>
          </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable no-undef */
import SliderTab from '../../../assets/js/slider-tabs.js'
const fslightbox = () => import('@/assets/js/fslightbox.js')
export default {
  name: 'UserProfile',
  data () {
    return {
      slidetab: {},
      user_id: this.$route.params.id,
      user: {}
    }
  },
  mounted () {
    fslightbox()
    Array.from(document.querySelectorAll('[data-toggle="slider-tab"]'), (elem) => {
      this.slider = new SliderTab(elem)
    })
  },
  created () {
    webServices.get('/auth/user/' + this.user_id, {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': User.ApiToken()
      }
    })
      .then(res => {
        this.user = res.data
        this.user.role = User.Role(this.user.role)
      })
  },
  methods: {
    getImage (path) {
      if (path != null) {
        return path
      }
      return require('@/assets/images/avatars/01.png')
    }
  }
}
</script>

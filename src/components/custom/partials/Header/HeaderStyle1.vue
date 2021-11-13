<template>
    <nav :class="`nav navbar navbar-expand-lg navbar-light iq-navbar ${stateNavbarStyle}`">
  <div class="container-fluid navbar-inner">
    <router-link :to="{ name: 'default.dashboard'}" class="navbar-brand">
        <svg width="30" class="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
          <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
          <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
          <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
        </svg>
        <h4 class="logo-title">{{$t('app_name')}}</h4>
    </router-link>
    <div class="sidebar-toggle" data-toggle="sidebar" data-active="true">
        <i class="icon">
         <svg width="20px" height="20px" viewBox="0 0 24 24" @click="opensidebar">
            <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
        </svg>
        </i>
    </div>
    <div class="input-group search-input">
      <span class="input-group-text" id="search-input">
        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
      <input type="search" class="form-control" placeholder="Search...">
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
          <span class="navbar-toggler-bar bar1 mt-2"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  navbar-list mb-2 mb-lg-0">
         <li class="nav-item dropdown">
            <a href="#" class="search-toggle nav-link" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img :src="flag" class="img-fluid rounded-circle" alt="user" style="height: 30px; min-width: 30px; width: 30px;">
            <span class="bg-primary"></span>
            </a>
            <div class="sub-drop dropdown-menu dropdown-menu-end p-0" aria-labelledby="dropdownMenuButton2">
                <div class="card shadow-none m-0 border-0">
                    <div class=" p-0 ">
                        <ul class="list-group list-group-flush p-0">
                            <li @click="langChanged('fr')" class="iq-sub-card list-group-item"><a class="p-0" href="#"><img src="@/assets/images/Flag/fr.png" alt="img-flaf" class="img-fluid me-2" style="width: 15px;height: 15px;min-width: 15px;"/>{{$t('language.fr')}}</a></li>
                            <li @click="langChanged('ar')" class="iq-sub-card list-group-item"><a class="p-0" href="#"><img src="@/assets/images/Flag/ar.png" alt="img-flaf" class="img-fluid me-2" style="width: 15px;height: 15px;min-width: 15px;"/>{{$t('language.ar')}}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link py-0 d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="@/assets/images/avatars/01.png" alt="User-Profile" class="img-fluid avatar avatar-50 avatar-rounded">
            <div class="caption ms-3 d-none d-md-block ">
                <h6 class="mb-0 caption-title">{{user.username}}</h6>
                <p class="mb-0 caption-sub-title">{{user.email}}</p>
            </div>
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" :to="{name: 'user.UserProfile', params: { id: user.id }}">Profile</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="logout"> {{$t('sognInVue.logout')}} </a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
/* eslint-disable no-undef */
import { mapGetters, mapActions } from 'vuex'
import AppStorage from '../../../../helpers/AppStorage'
export default {
  name: 'HeaderStyle1',
  props: {
    fullsidebar: { type: Boolean, default: false }
  },
  data () {
    return {
      user: {},
      flag: null
    }
  },
  created () {
    this.user = {
      username: User.username(),
      email: User.email(),
      id: User.id()
    }
    if (localStorage.getItem('language') != null) {
      this.schemediractive(localStorage.getItem('language'))
      this.$i18n.locale = localStorage.getItem('language')
      this.flag = require(`@/assets/images/Flag/${localStorage.getItem('language')}.png`)
    } else {
      this.$i18n.locale = 'fr'
      this.schemediractive('fr')
      this.flag = require('@/assets/images/Flag/fr.png')
    }
  },
  mounted () {
    const navstyle = sessionStorage.getItem('navbarstyle')
    this.navbarstyleChange(navstyle)
  },
  computed: {
    ...mapGetters({
      stateNavbarStyle: 'navbarstyle'
    })
  },
  methods: {
    ...mapActions({
      navbarstyleChange: 'navbarstyleAction',
      schemedirmodeChange: 'schemedirModeAction'
    }),
    opensidebar () {
      this.$emit('makefullsidebar', !this.fullsidebar)
    },
    logout () {
      AppStorage.clear()
      this.$router.push({ name: 'auth.signin' })
    },
    langChanged (language) {
      localStorage.setItem('language', language)
      this.$i18n.locale = language
      this.schemediractive(language)
      this.flag = require(`@/assets/images/Flag/${language}.png`)
    },
    schemediractive (dir) {
      switch (dir) {
        case 'fr':
          this.schemedirmodeChange('ltr')
          break
        case 'ar':
          this.schemedirmodeChange('rtl')
          break
      }
    }
  }
}
</script>

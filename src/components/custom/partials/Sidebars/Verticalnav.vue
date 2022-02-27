<template>
    <ul class="navbar-nav iq-main-menu" id="sidebar">
        <li class="nav-item static-item">
            <a class="nav-link static-item disabled" href="#" tabindex="-1">
                <span class="default-icon">{{$t('verticalBare.home')}}</span>
                <span class="mini-icon">-</span>
            </a>
        </li>
        <li class="nav-item">
            <router-link :class="`nav-link ${checkActive('default.dashboard') ? 'active' : ''}`" aria-current="page" :to="{name: 'default.dashboard'}">
                <i class="icon">
                    <div v-html="dashboardicon"></div>
                </i>
                <span class="item-name">{{$t('verticalBare.dashboard')}}</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :class="`nav-link ${checkActive('default.counter') ? 'active' : ''}`" aria-current="page" :to="{name: 'default.counter'}">
                <i class="icon">
                    <div v-html="countericon"></div>
                </i>
                <span class="item-name">{{$t('verticalBare.counter')}}</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :class="`nav-link ${checkActive('operations.synthesis') ? 'active' : ''}`" aria-current="page" :to="{name: 'operations.synthesis'}">
                <i class="icon">
                    <div v-html="synthesisicon"></div>
                </i>
                <span class="item-name">{{$t('verticalBare.synthesis')}}</span>
            </router-link>
        </li>
        <li><hr class="hr-horizontal"></li>
        <li class="nav-item static-item">
            <a class="nav-link static-item disabled" href="#" tabindex="-1">
                <span class="default-icon">Pages</span>
                <span class="mini-icon">-</span>
            </a>
        </li>
        <li class="nav-item">
            <a :class="`nav-link ${checkActive(specialpages) ? 'active' : ''}`"  data-bs-toggle="collapse" href="#sidebar-product" role="button" aria-expanded="false" aria-controls="sidebar-product">
                <div v-html="producticon"></div>
                <span class="item-name">{{$t('verticalBare.product.title')}}</span>
                <i class="right-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </i>
            </a>
            <ul class="sub-nav collapse" id="sidebar-product" data-bs-parent="#sidebar">
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('product.list') ? 'active' : ''}`" :to="{name: 'product.list'}">
                    <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                    <i class="sidenav-mini-icon"></i>
                    <span class="item-name">{{$t('verticalBare.product.list_product')}}</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('product.add') ? 'active' : ''}`" :to="{name: 'product.add'}">
                    <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                    <i class="sidenav-mini-icon"></i>
                    <span class="item-name">{{$t('verticalBare.product.add_product')}}</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('product.search') ? 'active' : ''}`" :to="{name: 'product.search'}">
                    <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                    <i class="sidenav-mini-icon"></i>
                    <span class="item-name">{{$t('verticalBare.product.search_product1')}}</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('product.stock') ? 'active' : ''}`" :to="{name: 'product.stock'}">
                    <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                    <i class="sidenav-mini-icon"></i>
                    <span class="item-name">{{$t('verticalBare.product.stock')}}</span>
                    </router-link>
                </li>
            </ul>
        </li>
        <li class="nav-item">
            <a :class="`nav-link ${checkActive(customerpages) ? 'active' : ''}`"  data-bs-toggle="collapse" href="#sidebar-customer
            " role="button" aria-expanded="false" aria-controls="sidebar-customer">
                <div v-html="customericon"></div>
                <span class="item-name">{{$t('verticalBare.customer.title')}}</span>
                <i class="right-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </i>
            </a>
            <ul class="sub-nav collapse" id="sidebar-customer" data-bs-parent="#sidebar">
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('customer.add') ? 'active' : ''}`" :to="{name: 'customer.add'}">
                    <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                    <i class="sidenav-mini-icon"></i>
                    <span class="item-name">{{$t('verticalBare.customer.add_customer')}}</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('customer.list') ? 'active' : ''}`" :to="{name: 'customer.list'}">
                    <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                    <i class="sidenav-mini-icon"></i>
                    <span class="item-name">{{$t('verticalBare.customer.list_customer')}}</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('customer.search') ? 'active' : ''}`" :to="{name: 'customer.search'}">
                    <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                    <i class="sidenav-mini-icon"></i>
                    <span class="item-name">{{$t('verticalBare.customer.search_customer')}}</span>
                    </router-link>
                </li>
            </ul>
        </li>
        <li class="nav-item">
            <a :class="`nav-link ${checkActive(chargepages) ? 'active' : ''}`"  data-bs-toggle="collapse" href="#sidebar-charge
            " role="button" aria-expanded="false" aria-controls="sidebar-charge">
                <div v-html="chargeicon"></div>
                <span class="item-name">{{$t('verticalBare.charge.title')}}</span>
                <i class="right-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </i>
            </a>
            <ul class="sub-nav collapse" id="sidebar-charge" data-bs-parent="#sidebar">
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('charge.add') ? 'active' : ''}`" :to="{name: 'charge.add'}">
                    <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                    <i class="sidenav-mini-icon"></i>
                    <span class="item-name">{{$t('verticalBare.charge.add_charge')}}</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('charge.list') ? 'active' : ''}`" :to="{name: 'charge.list'}">
                    <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                    <i class="sidenav-mini-icon"></i>
                    <span class="item-name">{{$t('verticalBare.charge.list_charge')}}</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('charge.search') ? 'active' : ''}`" :to="{name: 'charge.search'}">
                    <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                    <i class="sidenav-mini-icon"></i>
                    <span class="item-name">{{$t('verticalBare.charge.search_charge')}}</span>
                    </router-link>
                </li>
            </ul>
        </li>
        <li class="nav-item">
            <a :class="`nav-link ${checkActive(orderspages) ? 'active' : ''}`"  data-bs-toggle="collapse" href="#sidebar-orders
            " role="button" aria-expanded="false" aria-controls="sidebar-orders">
                <div v-html="ordersicon"></div>
                <span class="item-name">{{$t('verticalBare.orders.title')}}</span>
                <i class="right-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </i>
            </a>
            <ul class="sub-nav collapse" id="sidebar-orders" data-bs-parent="#sidebar">
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('operations.search') ? 'active' : ''}`" :to="{name: 'operations.search'}">
                    <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                    <i class="sidenav-mini-icon"></i>
                    <span class="item-name">{{$t('verticalBare.orders.search_orders')}}</span>
                    </router-link>
                </li>
            </ul>
        </li>
        <li class="nav-item">
            <a :class="`nav-link ${checkActive(user) ? 'active' : ''}`" data-bs-toggle="collapse" href="#sidebar-user" role="button" aria-expanded="false" aria-controls="sidebar-user">
                <i class="icon">
                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9488 14.54C8.49884 14.54 5.58789 15.1038 5.58789 17.2795C5.58789 19.4562 8.51765 20.0001 11.9488 20.0001C15.3988 20.0001 18.3098 19.4364 18.3098 17.2606C18.3098 15.084 15.38 14.54 11.9488 14.54Z" fill="currentColor"></path>
                        <path opacity="0.4" d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z" fill="currentColor"></path>
                        <path opacity="0.4" d="M21.0881 9.21923C21.6925 6.84176 19.9205 4.70654 17.664 4.70654C17.4187 4.70654 17.1841 4.73356 16.9549 4.77949C16.9244 4.78669 16.8904 4.802 16.8725 4.82902C16.8519 4.86324 16.8671 4.90917 16.8895 4.93889C17.5673 5.89528 17.9568 7.0597 17.9568 8.30967C17.9568 9.50741 17.5996 10.6241 16.9728 11.5508C16.9083 11.6462 16.9656 11.775 17.0793 11.7948C17.2369 11.8227 17.3981 11.8371 17.5629 11.8416C19.2059 11.8849 20.6807 10.8213 21.0881 9.21923Z" fill="currentColor"></path>
                        <path d="M22.8094 14.817C22.5086 14.1722 21.7824 13.73 20.6783 13.513C20.1572 13.3851 18.747 13.205 17.4352 13.2293C17.4155 13.232 17.4048 13.2455 17.403 13.2545C17.4003 13.2671 17.4057 13.2887 17.4316 13.3022C18.0378 13.6039 20.3811 14.916 20.0865 17.6834C20.074 17.8032 20.1698 17.9068 20.2888 17.8888C20.8655 17.8059 22.3492 17.4853 22.8094 16.4866C23.0637 15.9589 23.0637 15.3456 22.8094 14.817Z" fill="currentColor"></path>
                        <path opacity="0.4" d="M7.04459 4.77973C6.81626 4.7329 6.58077 4.70679 6.33543 4.70679C4.07901 4.70679 2.30701 6.84201 2.9123 9.21947C3.31882 10.8216 4.79355 11.8851 6.43661 11.8419C6.60136 11.8374 6.76343 11.8221 6.92013 11.7951C7.03384 11.7753 7.09115 11.6465 7.02668 11.551C6.3999 10.6234 6.04263 9.50765 6.04263 8.30991C6.04263 7.05904 6.43303 5.89462 7.11085 4.93913C7.13234 4.90941 7.14845 4.86348 7.12696 4.82926C7.10906 4.80135 7.07593 4.78694 7.04459 4.77973Z" fill="currentColor"></path>
                        <path d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z" fill="currentColor"></path>
                    </svg>
                </i>
                <span class="item-name">{{$t('verticalBare.users.title')}}</span>
                <i class="right-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </i>
            </a>
            <ul class="sub-nav collapse" id="sidebar-user" data-bs-parent="#sidebar">
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('user.UserAdd') ? 'active' : ''}`" :to="{name: 'user.UserAdd'}">
                        <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                        <span class="item-name">{{$t('verticalBare.users.add_users')}}</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('user.UserList') ? 'active' : ''}`" :to="{name: 'user.UserList'}">
                        <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                        <i class="sidenav-mini-icon"> U </i>
                        <span class="item-name">{{$t('verticalBare.users.list_users')}}</span>
                    </router-link>
                </li>
            </ul>
        </li>
        <li class="nav-item">
            <a :class="`nav-link ${checkActive(corbeille) ? 'active' : ''}`" data-bs-toggle="collapse" href="#sidebar-corbeille" role="button" aria-expanded="false" aria-controls="sidebar-corbeille">
                <i class="icon">
                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                        <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                    </svg>
                </i>
                <span class="item-name">{{$t('verticalBare.corbeille.title')}}</span>
                <i class="right-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </i>
            </a>
            <ul class="sub-nav collapse" id="sidebar-corbeille" data-bs-parent="#sidebar">
                <li class="nav-item">
                    <router-link :class="`nav-link ${checkActive('product.deleted') ? 'active' : ''}`" :to="{name: 'product.deleted'}">
                        <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                </g>
                            </svg>
                        </i>
                        <span class="item-name">{{$t('verticalBare.corbeille.list_product')}}</span>
                    </router-link>
                </li>
            </ul>
        </li>
        <br><br><br><br><br><br>
    </ul>
</template>
<script>
import { Solidicons } from '@/icondata/iconsolid.js'
export default {
  name: 'Verticalnav',
  data () {
    return {
      customericon: Solidicons[1].svgicons,
      chargeicon: Solidicons[47].svgicons,
      producticon: Solidicons[34].svgicons,
      dashboardicon: Solidicons[53].svgicons,
      countericon: Solidicons[104].svgicons,
      ordersicon: Solidicons[103].svgicons,
      synthesisicon: Solidicons[105].svgicons,
      authentication: ['auth.signin', 'auth.signup', 'auth.confirmMail', 'auth.lockScreen', 'auth.recoverPassword'],
      user: ['user.UserProfile', 'user.UserAdd', 'user.UserList'],
      corbeille: ['product.deleted'],
      utilities: ['auth.error404', 'auth.error500', 'auth.pricing'],
      specialpages: ['product.add', 'product.list', 'product.edit', 'product.search', 'product.stock', 'rtl.dashboardrtl'],
      customerpages: ['customer.add', 'customer.list', 'customer.edit', 'customer.search', 'rtl.dashboardrtl'],
      chargepages: ['charge.add', 'charge.list', 'charge.edit', 'charge.search', 'rtl.dashboardrtl'],
      orderspages: ['operations.search', 'operations.view', 'rtl.dashboardrtl']
    }
  },
  methods: {
    checkActive (route) {
      if (this.$route.name === route) {
        return true
      }
      if (route.includes(this.$route.name)) {
        return true
      }
    }

  }
}
</script>

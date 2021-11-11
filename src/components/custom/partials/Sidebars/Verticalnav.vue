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
      user: ['default.UserProfile', 'default.UserAdd', 'default.UserList'],
      utilities: ['auth.error404', 'auth.error500', 'auth.maintenance'],
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

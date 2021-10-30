<template>
   <div>
      <div class="row">
         <div class="col-lg-12">
            <div class="card   rounded">
               <div class="card-body">
                  <div class="row">
                      <div class="d-flex justify-content-center align-items-center flex-wrap">
                        <div>
                            <h1 class="display-1 mt-3"><Vue3autocounter  ref='counter' :startAmount='((operation.total) *4/5)' :endAmount="(operation.total)"/></h1>
                        </div>
                        <div>
                            <h1 class="mt-4">&nbsp;{{$t('currency')}} </h1>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center flex-wrap">
                        <div>
                            {{(operation.customer != null ? operation.customer.full_name : $t('operationVue.no_client'))}}
                        </div>
                        <div>
                            {{operation.created_at}}
                        </div>
                    </div>

                  </div>
                  <div class="row">
                     <div class="col-sm-12 mt-4">
                        <div class="table-responsive-lg">
                           <table class="table">
                              <thead>
                                 <tr>
                                    <th scope="col">{{$t('viewOperation.feilds.product_name')}}</th>
                                    <th class="text-center" scope="col">{{$t('viewOperation.feilds.quantity')}}</th>
                                    <th class="text-center" scope="col">{{$t('viewOperation.feilds.selling_price')}}</th>
                                    <th class="text-center" scope="col">{{$t('viewOperation.feilds.discount')}}</th>
                                    <th class="text-center" scope="col">{{$t('viewOperation.feilds.total')}}</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr v-for="order in orders" :key="order.id">
                                    <td>
                                       <h6 class="mb-0">{{order.order_detail.product.name}}</h6>
                                    </td>
                                    <td class="text-center">{{order.order_detail.amount}}</td>
                                    <td class="text-center">{{order.order_detail.product.selling_price}} {{$t('currency')}}</td>
                                    <td class="text-center">{{(order.order_detail.discount || 0)}} {{$t('currency')}}</td>
                                    <td class="text-center">{{order.order_detail.total_order}} {{$t('currency')}}</td>
                                 </tr>
                                 <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <h6 class="mb-0">{{$t('viewOperation.total')}}</h6>
                                    </td>
                                    <td class="text-center"></td>
                                    <td class="text-center"></td>
                                    <td class="text-center"></td>
                                    <td class="text-center">{{operation.total}} {{$t('currency')}}</td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <h6 class="mb-0">{{$t('viewOperation.discount')}}</h6>
                                    </td>
                                    <td class="text-center"></td>
                                    <td class="text-center"></td>
                                    <td class="text-center"></td>
                                    <td class="text-center">{{operation.discount}} {{$t('currency')}}</td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <h6 class="mb-0">{{$t('viewOperation.payment')}}</h6>
                                    </td>
                                    <td class="text-center"></td>
                                    <td class="text-center"></td>
                                    <td class="text-center"></td>
                                    <td class="text-center"><b>{{operation.payment}} {{$t('currency')}}</b></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-sm-12">
                        <div class="d-flex justify-content-center mt-4">
                           <button type="button" class="btn btn-primary">{{$t('viewOperation.print')}}</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
/* eslint-disable no-undef */
import Vue3autocounter from 'vue3-autocounter'
export default {
  name: 'viewOperation',
  components: {
    Vue3autocounter
  },
  data () {
    return {
      operation: {},
      orders: {},
      order_details: {}
    }
  },
  created () {
    this.viewOperation()
  },
  methods: {
    viewOperation () {
      webServices.get(`/operations/view/${this.$route.params.id}`, {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.operation = res.data
          this.orders = this.operation.order
          console.log(this.operation.customer)
        })
    }
  }
}
</script>

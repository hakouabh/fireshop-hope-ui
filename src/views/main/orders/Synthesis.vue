<template>
  <div>
      <br><br><br>
      <div class="row">
      <div class="col-lg-3">
            <div class="card">
               <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                     <div class="bg-info text-white rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path fill="none" d="M4.423,9.141H3.565c-0.237,0-0.429,0.192-0.429,0.429s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.192,0.429-0.429S4.66,9.141,4.423,9.141 M6.997,16.861H6.139c-0.237,0-0.429,0.192-0.429,0.43s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.191,0.429-0.429S7.234,16.861,6.997,16.861 M4.423,16.861H3.565c-0.237,0-0.429,0.192-0.429,0.43s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.191,0.429-0.429S4.66,16.861,4.423,16.861M13.861,9.998h0.857c0.236,0,0.429-0.192,0.429-0.429s-0.192-0.429-0.429-0.429h-0.857c-0.237,0-0.43,0.192-0.43,0.429S13.624,9.998,13.861,9.998 M14.719,16.861h-0.857c-0.237,0-0.43,0.192-0.43,0.43s0.192,0.429,0.43,0.429h0.857c0.236,0,0.429-0.191,0.429-0.429S14.955,16.861,14.719,16.861 M15.576,13.001c-0.236,0-0.429,0.192-0.429,0.43c0,0.236,0.192,0.429,0.429,0.429c0.237,0,0.43-0.192,0.43-0.429C16.006,13.193,15.813,13.001,15.576,13.001 M6.997,9.141H6.139c-0.237,0-0.429,0.192-0.429,0.429s0.192,0.429,0.429,0.429h0.858c0.237,0,0.429-0.192,0.429-0.429S7.234,9.141,6.997,9.141M12.145,9.141h-0.857c-0.236,0-0.429,0.192-0.429,0.429s0.193,0.429,0.429,0.429h0.857c0.237,0,0.43-0.192,0.43-0.429S12.382,9.141,12.145,9.141 M17.722,10.856V7.424c0-0.948-0.769-1.716-1.716-1.716h-0.617l-1.038-3.873c-0.245-0.916-1.186-1.458-2.101-1.213L3.592,2.912C2.676,3.157,2.133,4.098,2.378,5.014l0.186,0.695H2.278c-0.947,0-1.716,0.768-1.716,1.716V17.72c0,0.947,0.769,1.716,1.716,1.716h13.728c0.947,0,1.716-0.769,1.716-1.716v-1.716c0.947,0,1.716-0.769,1.716-1.716v-1.716C19.438,11.624,18.669,10.856,17.722,10.856 M16.006,6.566c0.473,0,0.857,0.384,0.857,0.858v0.238c-0.253-0.146-0.544-0.238-0.857-0.238h-0.157l-0.229-0.858H16.006z M14.41,5.372l0.55,2.053H6.67L14.41,5.372z M3.814,3.741l8.657-2.29c0.458-0.123,0.928,0.149,1.051,0.607l0.222,0.828L3.43,5.621l-0.223-0.83C3.084,4.333,3.356,3.863,3.814,3.741M1.42,7.424c0-0.474,0.384-0.858,0.858-0.858h0.517l0.229,0.858H2.278c-0.314,0-0.605,0.091-0.858,0.238V7.424z M16.863,17.72c0,0.474-0.385,0.858-0.857,0.858H2.278c-0.474,0-0.858-0.385-0.858-0.858V9.141c0-0.474,0.384-0.858,0.858-0.858h13.728c0.473,0,0.857,0.384,0.857,0.858v1.715h-1.716c-0.947,0-1.716,0.768-1.716,1.716v1.716c0,0.947,0.769,1.716,1.716,1.716h1.716V17.72z M18.58,14.288c0,0.474-0.385,0.857-0.858,0.857h-2.574c-0.474,0-0.857-0.384-0.857-0.857v-1.716c0-0.474,0.384-0.858,0.857-0.858h2.574c0.474,0,0.858,0.385,0.858,0.858V14.288z M9.571,16.861H8.713c-0.237,0-0.429,0.192-0.429,0.43s0.192,0.429,0.429,0.429h0.858c0.236,0,0.429-0.191,0.429-0.429S9.808,16.861,9.571,16.861M12.145,16.861h-0.857c-0.236,0-0.429,0.192-0.429,0.43s0.193,0.429,0.429,0.429h0.857c0.237,0,0.43-0.191,0.43-0.429S12.382,16.861,12.145,16.861 M9.571,9.141H8.713c-0.237,0-0.429,0.192-0.429,0.429s0.192,0.429,0.429,0.429h0.858C9.808,9.998,10,9.806,10,9.569S9.808,9.141,9.571,9.141"></path>
                        </svg>
                     </div>
                     <div class="text-end">
                        {{$t('SynthesisVue.total')}}
                        <h5> <Vue3autocounter  ref='counter' :startAmount='0' :endAmount="(stats.total)"/> {{$t('currency1')}}</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-lg-3">
            <div class="card">
               <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                     <div class="bg-warning text-white rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M14.776,10c0,0.239-0.195,0.434-0.435,0.434H5.658c-0.239,0-0.434-0.195-0.434-0.434s0.195-0.434,0.434-0.434h8.684C14.581,9.566,14.776,9.762,14.776,10 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.691-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.382,10c0-4.071-3.312-7.381-7.382-7.381C5.929,2.619,2.619,5.93,2.619,10c0,4.07,3.311,7.382,7.381,7.382C14.07,17.383,17.382,14.07,17.382,10"></path>
                        </svg>
                     </div>
                     <div class="text-end">
                        {{$t('SynthesisVue.discount')}}
                           <h5> <Vue3autocounter  ref='counter' :startAmount='0' :endAmount="(stats.discount)"/> {{$t('currency1')}}</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-lg-3">
            <div class="card">
               <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                     <div class="bg-success text-white rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
                        </svg>
                     </div>
                     <div class="text-end">
                        {{$t('SynthesisVue.benefit')}}
                           <h5> <Vue3autocounter  ref='counter' :startAmount='0' :endAmount="(stats.benefit)"/> {{$t('currency1')}}</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-lg-3">
            <div class="card">
               <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                     <div class="bg-danger text-white rounded p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M17.237,3.056H2.93c-0.694,0-1.263,0.568-1.263,1.263v8.837c0,0.694,0.568,1.263,1.263,1.263h5.629v0.879c-0.015,0.086-0.183,0.306-0.273,0.423c-0.223,0.293-0.455,0.592-0.293,0.92c0.07,0.139,0.226,0.303,0.577,0.303h5.819c0.208,0,0.696,0,0.862-0.379c0.162-0.37-0.124-0.682-0.374-0.955c-0.089-0.097-0.231-0.252-0.268-0.328v-0.862h5.629c0.694,0,1.263-0.568,1.263-1.263V4.319C18.5,3.625,17.932,3.056,17.237,3.056 M8.053,16.102C8.232,15.862,8.4,15.597,8.4,15.309v-0.89h3.366v0.89c0,0.303,0.211,0.562,0.419,0.793H8.053z M17.658,13.156c0,0.228-0.193,0.421-0.421,0.421H2.93c-0.228,0-0.421-0.193-0.421-0.421v-1.263h15.149V13.156z M17.658,11.052H2.509V4.319c0-0.228,0.193-0.421,0.421-0.421h14.308c0.228,0,0.421,0.193,0.421,0.421V11.052z"></path>
                        </svg>
                     </div>
                     <div class="text-end">
                        {{$t('SynthesisVue.box')}}
                          <h5> <Vue3autocounter  ref='counter' :startAmount='0' :endAmount="(stats.box)"/> {{$t('currency1')}}</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body row justify-content-between">
                        <div class="col-md-3 mb-2">
                            <input type="date" :class="`${errors.date_from ? 'is-invalid' : ''}`" class="form-control" id="formOperation05" v-model="form.date_range.from">
                        </div>
                        <div class="col-md-3 mb-2">
                          <input type="date" :class="`${errors.date_to ? 'is-invalid' : ''}`" class="form-control" id="formOperation06" v-model="form.date_range.to">
                        </div>
                        <div class="col-md-3 mb-2">
                          <select class="form-select" :class="`${errors.user ? 'is-invalid' : ''}`" id="validationCustom04" v-model="form.user" >
                              <option :value="null">{{$t('all_users')}}</option>
                              <option v-for="user in users" :value="user" :key="user.id">{{user.name}}</option>
                           </select>
                        </div>
                        <div class="col-md-2 d-flex align-items-center" @click="refresh()">
                            <div class="p-2 rounded bg-info disabled">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="none" viewBox="0 0 24 24" stroke="white">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h5 class="card-title">{{$t('operationVue.table_name')}}</h5>
                    </div>
                    </div>
                    <div class="card-body p-0">
                    <div class="table-responsive mt-4">
                        <table id="basic-table" class="table table-striped  table-hover mb-0" role="grid">
                            <thead>
                                <tr>
                                <th>{{$t('operationVue.feilds.customer')}}</th>
                                <th>{{$t('operationVue.feilds.discount')}}</th>
                                <th>{{$t('operationVue.feilds.total')}}</th>
                                <th>{{$t('operationVue.feilds.payment')}}</th>
                                <th>{{$t('operationVue.feilds.date')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="operation in operations.data" :key="operation.id" @click="viewOperation(operation.id)">
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6 v-if="operation.customer"> {{operation.customer.full_name}} </h6>
                                        <h6 v-else> {{$t('operationVue.no_client')}} </h6>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6> {{operation.discount}} {{$t('currency')}} </h6>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6> {{operation.total}} {{$t('currency')}} </h6>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6> {{operation.payment}} {{$t('currency')}} </h6>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6> {{operation.created_at}} </h6>
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                      <custompagination :totalpage="totalpage1" @PerPage="(val,val2)=>{perpage1=val; searchOperations(val2)}" @Paginate="searchOperations"/>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h5 class="card-title">{{$t('chargeVue.table_name')}}</h5>
                    </div>
                    </div>
                    <div class="card-body p-0">
                    <div class="table-responsive mt-4">
                        <table id="basic-table" class="table table-striped  table-hover mb-0" role="grid">
                            <thead>
                                <tr>
                                <th>{{$t('chargeVue.feilds.type')}}</th>
                                <th>{{$t('chargeVue.feilds.amount')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="charge in charges.data" :key="charge.id">
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6> {{charge.type.name}} </h6>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <h6> {{charge.amount}} {{$t('currency')}} </h6>
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <custompagination :totalpage="totalcharges" @Paginate="searchCharge"/>
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
  name: 'Synthesis',
  components: {
    Vue3autocounter
  },
  data () {
    return {
      perpagecharge: 5,
      perpage1: 15,
      totalcharges: 0,
      totalpage1: 0,
      stats: {
        total: 0,
        discount: 0,
        benefit: 0,
        box: 0,
        totalCharge: 0
      },
      charges: {},
      errors: {},
      operations: {},
      form: {
        type: null,
        customer: null,
        phone: null,
        date_range: {
          from: null,
          to: null
        },
        user: null
      },
      users: {}
    }
  },
  created () {
    const today = new Date()
    this.getUsers()
    this.form.date_range.from = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    this.form.date_range.to = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    this.searchOperations()
  },
  methods: {
    getUsers () {
      webServices.get('/auth/users', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.users = res.data
        }).catch(error => {
          if (error.response.status === 495) {
            this.$router.push({ name: 'auth.pricing' })
          }
        })
    },
    refresh () {
      this.searchOperations()
    },
    viewOperation (id) {
      this.$router.push({ name: 'operations.view', params: { id: id } })
    },
    searchOperations (page = 1) {
      webServices.get('/operations?page=' + page, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        },
        params: {
          filter: this.form,
          perpage: this.perpage1
        }
      })
        .then(res => {
          this.stats = res.data.data.stats
          this.operations = res.data.data.operations
          this.totalpage1 = res.data.data.operations.last_page
          this.searchCharge()
        })
        .catch(error => {
          if (error.response.status === 495) {
            this.$router.push({ name: 'auth.pricing' })
          }
        })
    },
    searchCharge (page = 1) {
      webServices.get('/charges?page=' + page, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        },
        params: {
          filter: this.form,
          perpage: this.perpagecharge
        }
      })
        .then(res => {
          this.charges = res.data.data.charges
          this.stats.totalCharge = res.data.data.total_charge
          this.stats.box = this.stats.total - this.stats.totalCharge + 1
          this.totalcharges = res.data.data.charges.last_page
        })
    }
  }
}

</script>

<style>

</style>

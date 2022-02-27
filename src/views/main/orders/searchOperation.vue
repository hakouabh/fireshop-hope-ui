<template>
    <div>
      <div class="row">
         <div class="col-sm-12 col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">{{$t('operationVue.search_operation')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="searchOperations" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-6 mb-2">
                           <label for="formOperation02" class="form-label">{{$t('operationVue.searchOperation.customer')}}</label>
                           <input type="text" :class="`${errors.customer ? 'is-invalid' : ''}`" class="form-control" id="formOperation07" v-model="form.customer">
                        </div>
                        <div class="col-md-6 mb-2">
                           <label for="formOperation02" class="form-label">{{$t('operationVue.searchOperation.phone')}}</label>
                           <input type="text" :class="`${errors.phone ? 'is-invalid' : ''}`" class="form-control" id="formOperation02" v-model="form.phone">
                        </div>
                        <div class="col-md-4 mb-2">
                           <label for="formOperation05" class="form-label">{{$t('operationVue.searchOperation.date_from')}}</label>
                           <input type="date" :class="`${errors.date_from ? 'is-invalid' : ''}`" class="form-control" id="formOperation05" v-model="form.date_range.from">
                        </div>
                        <div class="col-md-4 mb-5">
                           <label for="formOperation06" class="form-label">{{$t('operationVue.searchOperation.date_to')}}</label>
                           <input type="date" :class="`${errors.date_to ? 'is-invalid' : ''}`" class="form-control" id="formOperation06" v-model="form.date_range.to">
                        </div>
                        <div class="col-md-4 mb-5">
                           <label for="formOperation06" class="form-label">{{$t('verticalBare.users.title')}}</label>
                           <select class="form-select" :class="`${errors.user ? 'is-invalid' : ''}`" id="validationCustom044" v-model="form.user" >
                              <option :value="null">{{$t('all_users')}}</option>
                              <option v-for="user in users" :value="user" :key="user.id">{{user.name}}</option>
                           </select>
                        </div>
                       <div class="row d-flex">
                       <div class="col-lg-3 col-md-6">
                           <button class="btn btn-success" type="submit">{{$t('operationVue.button.search_operation')}}</button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                           <a class="btn btn-danger" href="">{{$t('operationVue.button.cancel')}}</a>
                        </div>
                     </div>
                    </div>
                    </form>
                  </div>
            </div>
        </div>
      </div>
       <div class="row">
      <div class="col-sm-12">
         <div class="card">
            <div class="card-header d-flex justify-content-between">
               <div class="header-title">
                  <h4 class="card-title">{{$t('operationVue.table_name')}}</h4>
               </div>
               <div class="d-flex align-items-center">
                  <div>
                     <h6 class="card-title">{{$t('export_as')}}</h6>
                  </div>
               <div class="btn btn-icon" @click="exportExcel()">
                  <div class="btn-inner">
                     <img src="https://img.icons8.com/color/48/000000/ms-excel.png"/>
                  </div>
               </div>
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
                                 <h6> {{operation.discount}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{operation.total}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{operation.payment}} </h6>
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
               </div>
               <custompagination :totalpage="totalpage" @PerPage="(val,val2)=>{perpage=val; searchOperations(val2)}" @Paginate="searchOperations"/>
            </div>
         </div>
      </div>
   </div>
    </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'searchOperation',
  data () {
    return {
      perpage: 15,
      totalpage: 0,
      form: {
        customer: null,
        phone: null,
        date_range: {
          from: null,
          to: null
        },
        user: null
      },
      users: {},
      errors: {},
      operations: {}
    }
  },
  created () {
    this.getUsers()
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
        })
    },
    exportExcel () {
      webServices.get('/operations/export',
        {
          responseType: 'arraybuffer',
          headers: {
            'Content-Type': 'multipart/form-data',
            // eslint-disable-next-line quote-props
            'Authorization': User.ApiToken()
          },
          params: {
            filter: this.form
          }
        })
        .then(response => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]))
          var fileLink = document.createElement('a')
          fileLink.href = fileURL
          fileLink.setAttribute('download', `${this.$t('dashboardVue.operations')}.xlsx`)
          document.body.appendChild(fileLink)
          fileLink.click()
        }).catch(error => {
          if (error.response.status === 495) {
            this.$router.push({ name: 'auth.pricing' })
          }
        })
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
          perpage: this.perpage
        }
      })
        .then(res => {
          this.operations = res.data.data.operations
          this.totalpage = res.data.data.operations.last_page
        })
        .catch(error => {
          if (error.response.status === 495) {
            this.$router.push({ name: 'auth.pricing' })
          }
        })
    }
  }

}
</script>

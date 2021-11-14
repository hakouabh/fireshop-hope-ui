<template>
    <div>
      <div class="row">
         <div class="col-sm-12 col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <router-link :to="{ name: 'charge.list'}" class="icon">
                          <svg width="50px" stroke="blue" height="40px" viewBox="0 0 24 24">
                              <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
                          </svg>
                        </router-link>
                        <h4 class="card-title">{{$t('chargeVue.search_charge')}}</h4>
                     </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="searchCharge" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-md-12 mb-2">
                            <div class="col-md-6 mb-2">
                            <label for="validationCustom04" class="form-label">{{$t('chargeVue.searchCharge.type')}}</label>
                            <select class="form-select" :class="`${errors.type ? 'is-invalid' : ''}`" id="validationCustom04"  v-model="form.type" >
                                <option v-for="type in chargesTypes" :value="type" :key="type.id">{{type.name}}</option>
                            </select>
                            </div>
                        </div>
                        <div class="col-md-6 mb-2">
                           <label for="validationCustom05" class="form-label">{{$t('chargeVue.searchCharge.date_from')}}</label>
                           <input type="date" :class="`${errors.date_from ? 'is-invalid' : ''}`" class="form-control" id="validationCustom05" v-model="form.date_range.from">
                        </div>
                        <div class="col-md-6 mb-5">
                           <label for="validationCustom06" class="form-label">{{$t('chargeVue.searchCharge.date_to')}}</label>
                           <input type="date" :class="`${errors.date_to ? 'is-invalid' : ''}`" class="form-control" id="validationCustom06" v-model="form.date_range.to">
                        </div>
                       <div class="row d-flex">
                       <div class="col-lg-3 col-md-6">
                           <button class="btn btn-success" type="submit">{{$t('chargeVue.button.search_charge')}}</button>
                        </div>
                        <div class="col-lg-3 col-md-6">
                           <a class="btn btn-danger" href="">{{$t('chargeVue.button.cancel')}}</a>
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
                  <h4 class="card-title">{{$t('chargeVue.table_name')}}</h4>
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
                  <table id="basic-table" class="table table-striped table-hover mb-0" role="grid">
                     <thead>
                        <tr>
                           <th>{{$t('chargeVue.feilds.type')}}</th>
                           <th>{{$t('chargeVue.feilds.amount')}}</th>
                           <th>{{$t('chargeVue.feilds.description')}}</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="charge in charges.data" :key="charge.id" @click="goToedit(charge.id)">
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{charge.type.name}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{charge.amount}} {{$t('currency')}}</h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{charge.description}} </h6>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <custompagination :totalpage="totalpage" @PerPage="(val,val2)=>{perpage=val; searchCharge(val2)}" @Paginate="searchCharge"/>
            </div>
         </div>
      </div>
   </div>
    </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'searchCharges',
  data () {
    return {
      totalpage: 0,
      perpage: 15,
      form: {
        type: null,
        date_range: {
          from: null,
          to: null
        }
      },
      chargesTypes: {},
      errors: {},
      charges: {}
    }
  },
  created () {
    this.chargeCategory()
    this.searchCharge()
  },
  methods: {
    exportExcel () {
      webServices.get('/charges/export',
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
          fileLink.setAttribute('download', `${this.$t('verticalBare.charge.title')}.xlsx`)
          document.body.appendChild(fileLink)
          fileLink.click()
        })
    },
    goToedit (id) {
      this.$router.push({ name: 'charge.edit', params: { id: id } })
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
          perpage: this.perpage
        }
      })
        .then(res => {
          this.charges = res.data.data.charges
          this.totalpage = res.data.data.charges.last_page
        })
    },
    chargeCategory () {
      webServices.get('/charges/types', {
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        }
      })
        .then(res => {
          this.chargesTypes = res.data.data
        })
        .catch()
    }

  }

}
</script>

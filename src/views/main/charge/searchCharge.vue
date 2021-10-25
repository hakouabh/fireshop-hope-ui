<template>
    <div>
      <div class="row">
         <div class="col-sm-12 col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
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
            </div>
            <div class="card-body p-0">
               <div class="table-responsive mt-4">
                  <table id="basic-table" class="table table-striped mb-0" role="grid">
                     <thead>
                        <tr>
                           <th>{{$t('chargeVue.feilds.type')}}</th>
                           <th>{{$t('chargeVue.feilds.amount')}}</th>
                           <th>{{$t('chargeVue.feilds.description')}}</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="charge in charges" :key="charge.id" @click="goToedit(charge.id)">
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{charge.type.name}} </h6>
                              </div>
                           </td>
                           <td>
                              <div class="d-flex align-items-center">
                                 <h6> {{charge.amount}} </h6>
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
  },
  methods: {
    goToedit (id) {
      this.$router.push({ name: 'charge.edit', params: { id: id } })
    },
    searchCharge () {
      webServices.get('/charges/', {
        headers: {
          'Content-Type': 'multipart/form-data',
          // eslint-disable-next-line quote-props
          'Authorization': User.ApiToken()
        },
        params: {
          filter: this.form
        }
      })
        .then(res => {
          this.charges = res.data.data
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

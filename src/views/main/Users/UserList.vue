<template>
    <div>
         <div class="row">
            <div class="col-sm-12">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">{{$t('usersVue.list')}}</h4>
                     </div>
                  </div>
                  <div class="card-body px-0">
                     <div class="table-responsive">
                        <table id="user-list-table" class="table table-striped  table-hover" role="grid" data-toggle="data-table">
                           <thead>
                              <tr class="ligth">
                                 <th>
                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M7.24512 14.7815L10.2383 10.8914L13.6524 13.5733L16.5815 9.79297" stroke="currentColor" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                             <circle cx="19.9954" cy="4.20027" r="1.9222" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                             <path
                                                d="M14.9248 3.12012H7.65704C4.6456 3.12012 2.77832 5.25284 2.77832 8.26428V16.3467C2.77832 19.3581 4.60898 21.4817 7.65704 21.4817H16.2612C19.2726 21.4817 21.1399 19.3581 21.1399 16.3467V9.30776"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                 </th>
                                 <th>{{$t('usersVue.feilds.name')}}</th>
                                 <th>{{$t('usersVue.feilds.email')}}</th>
                                 <th>{{$t('usersVue.feilds.status')}}</th>
                                 <th>{{$t('usersVue.feilds.date')}}</th>
                                 <th style="min-width: 100px">{{$t('usersVue.feilds.actions')}}</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr v-for="user in users" :key="user.id" @click="Goto(user.id)">
                                  <td v-if="!user.image">
                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M7.24512 14.7815L10.2383 10.8914L13.6524 13.5733L16.5815 9.79297" stroke="currentColor" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                             <circle cx="19.9954" cy="4.20027" r="1.9222" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                             <path
                                                d="M14.9248 3.12012H7.65704C4.6456 3.12012 2.77832 5.25284 2.77832 8.26428V16.3467C2.77832 19.3581 4.60898 21.4817 7.65704 21.4817H16.2612C19.2726 21.4817 21.1399 19.3581 21.1399 16.3467V9.30776"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                 </td>
                                 <td v-else>
                                    <img :src="user.image" alt="user-img" class="rounded-pill avatar-40">
                                 </td>
                                 <td>{{user.name}}</td>
                                 <td>{{user.email}}</td>
                                 <td><span :class="`badge ${ user.role == 0 ? ' bg-success' : user.role == 1 ? ' bg-primary': ' bg-danger' }`" >{{Role(user.role)}}</span></td>
                                 <td>{{user.created_at}}</td>
                                 <td>
                                    <div class="flex align-items-center list-user-action">
                                       <a class="btn btn-sm btn-icon btn-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#">
                                          <span class="btn-inner">
                                             <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                             </svg>
                                          </span>
                                       </a>
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
  name: 'UserList',
  data () {
    return {
      users: {}
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    Role (role) {
      switch (role) {
        case 0:
          return this.$t('usersVue.role.admin')
        case 1:
          return this.$t('usersVue.role.seller')
        case 2:
          return this.$t('usersVue.role.commis')
      }
    },
    Goto (id) {
      this.$router.push({ name: 'user.UserProfile', params: { id: id } })
    },
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
    }
  }
}
</script>

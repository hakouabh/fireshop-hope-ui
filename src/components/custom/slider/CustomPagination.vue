<template>
  <div>
    <div class="nav-scroller mt-2">
      <nav class="nav d-flex justify-content-center">
        <div class="col-sm-2">
          <select class="form-select mb-2" id="validationperpage" v-model="perpage" >
              <option>15</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
          </select>
        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-9">
          <ul class="pagination pagination-sm flex-sm-wrap">
              <li class="page-item">
                  <a class="page-link" @click="decrement" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                  </a>
              </li>
              <li v-for=" item in totalpage" :key="item" class="page-item" @click="curentpage = item"><a class="page-link">{{item}}</a></li>
              <li @click="increment" class="page-item">
                  <a class="page-link"  aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                  </a>
              </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CustomPagination',
  props: {
    totalpage: { type: Number, default: 0 }
  },
  data () {
    return {
      perpage: 15,
      curentpage: 1
    }
  },
  watch: {
    perpage (val) {
      this.$emit('PerPage', val, this.curentpage)
    },
    curentpage (val) {
      this.$emit('Paginate', val)
    }
  },
  methods: {
    decrement () {
      if (this.curentpage > 1) this.curentpage -= 1
    },
    increment () {
      if (this.curentpage < this.totalpage) this.curentpage += 1
    }
  }
}
</script>

<style>

</style>

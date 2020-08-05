<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <h1>後台產品列表</h1>
    <div id="app" class="container mt-3">
      <div>
        <div class="text-right mt-4">
          <button class="btn btn-primary" @click="openModal('new')">新增產品</button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="200">分類</th>
              <th>標題</th>
              <!--<th width="100">點擊次數</th>-->
              <th width="100">原價</th>
              <th width="100">售價</th>
              <th width="100">是否啟用</th>
              <th width="150">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in products" :key="item.id">
              <!--(item,key) -->
              <td>{{ item.category }}</td>
              <td>{{ item.title }}</td>
              <!--<td>{{ item.clickCount }}</td>-->
              <td>{{ item.origin_price }}</td>
              <td>{{ item.price }}</td>
              <td>
                <span v-if="item.enabled" class="text-success">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    @click="openModal('edit', item)"
                    :disabled="loadingBtn === item.id"
                  >編輯</button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    @click="openModal('delete', item)"
                    :disabled="loadingBtn === item.id"
                  >刪除</button>
                  <span
                    v-if="loadingBtn === item.id"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!--分頁-->
        <pagination :pages="pagination" @updatepagenum="getProducts"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
// 分頁元件
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      products: [],
      tempProduct: {
        imageUrl: []
      },
      pagination: {},
      api: {
        uuid: process.env.VUE_APP_UUID,
        path: process.env.VUE_APP_APIPATH
      },
      token: '',
      isNew: '',
      isLoading: false,
      loadingBtn: ''
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${this.api.path}/api/${this.api.uuid}/admin/ec/products?page=${page}`
      this.$http.get(api).then((response) => {
        this.products = response.data.data
        this.pagination = response.data.meta.pagination
        this.isLoading = false
      })
    }
  }
}
</script>

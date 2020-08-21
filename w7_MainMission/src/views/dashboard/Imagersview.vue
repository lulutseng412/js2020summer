<template>
  <div>
    <Loading :active.sync="isLoading" />
    <table class="table mt-4">
      <thead>
        <tr>
          <th>圖片縮圖</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody v-if="storages.length">
        <tr v-for="(item, key) in storages" :key="key">
          <td>
            <img :src="item.path" width="100px" class="img-fluid" />
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button class="btn btn-outline-danger" @click.prevent="openModel(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emitPages="getStorageList" />
    <div
      id="deleteModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>刪除資料</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">是否刪除該圖片 (刪除後將無法恢復)。</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="deleteStorage">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      pagination: {},
      storages: {},
      tempData: {},
      api: {
        uuid: process.env.VUE_APP_UUID,
        path: process.env.VUE_APP_APIPATH
      },
      token: '',
      isLoading: false
    }
  },
  created () {
    this.getStorageList()
  },
  methods: {
    getStorageList (page = 1) {
      // GET api/{uuid}/admin/storage
      this.isLoading = true
      const api = `${this.api.path}/api/${this.api.uuid}/admin/storage?page=${page}&orderBy=updated_at&sort=desc`
      this.$http.get(api).then((response) => {
        this.storages = response.data.data
        this.pagination = response.data.meta.pagination
        this.isLoading = false
      })
    },
    deleteStorage () {
      // DELETE api/{uuid}/admin/storage/{id}
      this.isLoading = true
      const api = `${this.api.path}/api/${this.api.uuid}/admin/storage/${this.tempData.id}` // 帶入tempdata的id
      this.$http.delete(api).then(() => {
        $('#deleteModal').modal('hide') // 關閉modal
        this.$bus.$emit('message:push', '刪除成功', 'success') // 傳送網頁訊息
        this.isLoading = false // 關閉動畫
        this.getData() // 重新渲染畫面
      })
    },
    openModel (item) {
      // 刪除圖片的modal視窗
      $('#deleteModal').modal('show')
      this.tempData = { ...item }
    }
  }
}
</script>

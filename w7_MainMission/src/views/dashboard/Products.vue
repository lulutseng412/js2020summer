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
    <!-- Modal -->
    <div id="productModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯 {{ tempProduct.title }} 產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div v-for="i in 3" :key="i + 'img'" class="form-group">
                  <label :for="'img' + i">輸入圖片網址</label>
                  <input :id="'img' + i" v-model="tempProduct.imageUrl[i - 1]" type="text" class="form-control" placeholder="請輸入圖片連結" >
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i v-if="status.fileUploading" class="fas fa-spinner fa-spin" />
                  </label>
                  <input id="customFile" ref="file" type="file" class="form-control" @change="uploadFile" >
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl[0]" alt >
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input id="title" v-model="tempProduct.title" type="text" class="form-control" placeholder="請輸入標題" required >
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input id="category" v-model="tempProduct.category" type="text" class="form-control" placeholder="請輸入分類" required>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input id="unit" v-model="tempProduct.unit" type="text" class="form-control" placeholder="請輸入單位" >
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input id="origin_price" v-model="tempProduct.origin_price" type="number" class="form-control" placeholder="請輸入原價" >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input id="price" v-model="tempProduct.price" type="number" class="form-control" placeholder="請輸入售價" >
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="description">產品說明</label>
                  <textarea id="description" v-model="tempProduct.description" type="text" class="form-control" placeholder="請輸入產品說明" required />
                </div>
                <div class="form-group">
                  <label for="content">產品描述</label>
                  <vue-editor id="content" v-model="tempProduct.content"></vue-editor>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input id="is_enabled" v-model="tempProduct.enabled" class="form-check-input" type="checkbox" >
                    <label class="form-check-label" for="is_enabled" >是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal" >取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct" >確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delModal -->
    <div id="delProductModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document" >
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="exampleModalLabel" class="modal-title" >
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal" >取消</button>
            <button type="button" class="btn btn-danger" @click="delProduct" >確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
// 分頁元件
import Pagination from '@/components/Pagination.vue'
import { VueEditor } from 'vue2-editor'

export default {
  components: {
    Pagination,
    VueEditor
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
      status: {
        fileUploading: false
      },
      loadingBtn: ''
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${this.api.path}/api/${this.api.uuid}/admin/ec/products?page=${page}&orderBy=updated_at&sort=desc`
      this.$http.get(api).then((response) => {
        this.products = response.data.data
        this.pagination = response.data.meta.pagination
        this.isLoading = false
      })
    },
    openModal (isNew, item) { // 開啟Modal
      switch (isNew) {
        case 'new':
          this.tempProduct = {
            imageUrl: []
          }
          this.isNew = true
          $('#productModal').modal('show')
          break
        case 'edit':
          this.isNew = false
          this.getDetails(item.id)
          break
        case 'delete':
          this.tempProduct = { ...item }
          $('#delProductModal').modal('show')
          break
        default:
          break
      }
    },
    getDetails (id) {
      this.isLoading = true
      const api = `${this.api.path}/api/${this.api.uuid}/admin/ec/product/${id}`
      this.$http.get(api).then((response) => {
        this.tempProduct = response.data.data
        $('#productModal').modal('show')
        this.isLoading = false
      })
    },
    uploadFile () { // 上傳檔案
      const uploadedFile = this.$refs.file.files[0] // 取得DOM中的檔案資訊
      const formData = new FormData()
      formData.append('file', uploadedFile) // 轉成Form Data上傳 加上一個新欄位file
      const url = `${this.api.path}/api/${this.api.uuid}/admin/storage`
      this.status.fileUploading = true // 圖片上傳等待動畫
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        this.status.fileUploading = false
        if (response.status === 200) { // 回傳200成功
          this.tempProduct.imageUrl.push(response.data.data.path)
        }
      }).catch(() => {
        this.$bus.$emit('message:push', '檔案上傳失敗，請檢查是不是檔案大小超過 2MB', 'danger')
        this.status.fileUploading = false
      })
    },
    updateProduct () { // 上傳產品資料
      // 新增商品
      let api = `${this.api.path}/api/${this.api.uuid}/admin/ec/product`
      let httpMethod = 'post'
      // 當不是新增商品時則切換成編輯商品 API
      if (!this.isNew) {
        api = `${this.api.path}/api/${this.api.uuid}/admin/ec/product/${this.tempProduct.id}`
        httpMethod = 'patch'
      }
      this.$http[httpMethod](api, this.tempProduct).then(() => {
        $('#productModal').modal('hide')
        this.$bus.$emit('message:push', '新增成功', 'success') // 給吐司用
        this.isLoading = false // 關閉動畫
        this.getProducts() // 更新畫面
      }).catch((error) => {
        this.isLoading = false
        const errorData = error.response.data
        $('#productModal').modal('hide')
        this.$bus.$emit('message:push', `出現錯誤 ${errorData}`, 'danger')
      })
    },
    delProduct () { // 刪除產品
      this.isLoading = true
      const url = `${this.api.path}/api/${this.api.uuid}/admin/ec/product/${this.tempProduct.id}`
      this.$http.delete(url).then(() => {
        $('#delProductModal').modal('hide')
        this.isLoading = false
        this.$bus.$emit('message:push', '刪除成功', 'success')
        this.getProducts()
      })
    }
  }
}
</script>

<style lang="css">
/* 導入編輯器 */
@import '~vue2-editor/dist/vue2-editor.css';

/* 導入編輯器樣式 */
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
</style>

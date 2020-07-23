export default{
    template:`<div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 id="exampleModalLabel" class="modal-title">
          <span>新增產品</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="imageUrl">輸入圖片網址</label>
              <input id="imageUrl" v-model="tempProduct.imageUrl[0]" type="text" class="form-control"
                placeholder="請輸入圖片連結">
            </div>
            <img class="img-fluid" :src="tempProduct.imageUrl" alt>
          </div>
          <div class="col-sm-8">
            <div class="form-group">
              <label for="title">標題</label>
              <input id="title" v-model="tempProduct.title" type="text" class="form-control" placeholder="請輸入標題">
            </div>
            <div class="form-group">
              <label for="content">產品描述</label>
              <textarea id="description" v-model="tempProduct.content" type="text" class="form-control"
                placeholder="產品描述" >
              </textarea>
            </div>
            <div class="form-group">
                <label for="category">分類</label>
                <input id="category" v-model="tempProduct.category" type="text" class="form-control"
                  placeholder="請輸入分類" >
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="origin_price">原價</label>
                <input id="origin_price" v-model="tempProduct.origin_price" type="number" class="form-control"
                  placeholder="請輸入原價" >
              </div>
              <div class="form-group col-md-6">
                <label for="price">售價</label>
                <input id="price" v-model="tempProduct.price" type="number" class="form-control"
                  placeholder="請輸入售價">
              </div>
            </div>
            <div class="form-group">
              <label for="description">詳細內容</label>
              <textarea id="description" v-model="tempProduct.description" type="text" class="form-control"
                placeholder="請輸入詳細內容" >
              </textarea>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input id="enabled" v-model="tempProduct.enabled" class="form-check-input" type="checkbox"
                  v-bind:true-value="1" v-bind:false-value="0">
                <label class="form-check-label" for="enabled">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
          取消
        </button>
        <button type="button" class="btn btn-primary" @click="updateProduct">
          確認
        </button>
      </div>
    </div>
  </div>`,
    data(){//元件裡的資料使用return
      return{
        //tempProduct:{
        //    imageUrl:[]
        //},
        //api:{
        //    
        //}
      }
    },
    props:['tempProduct','api'],
    methods: {
        updateProduct() {
            var vm = this;
            if(vm.tempProduct.id){
                let urlEdit = `${vm.api.path}${vm.api.uuid}/admin/ec/product/${vm.tempProduct.id}`;
                //id存在表示是編輯 PATCH api/{uuid}/admin/ec/product/{id}
                axios.patch(urlEdit,vm.tempProduct).then(resdata=>{
                    //console.log(resdata);
                    vm.$emit('updatelist');//呼叫元件外層事件
                })
            }else{
                let urlCreate = `${vm.api.path}${vm.api.uuid}/admin/ec/product`;
                //id不存在表示是新增 POST api/{uuid}/admin/ec/product
                axios.post(urlCreate,vm.tempProduct).then(function(res){
                    //console.log(resdata);
                    vm.$emit('updatelist');//呼叫元件外層事件
                })
            }
        },
    },
}
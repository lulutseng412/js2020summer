import zh from './zh_TW.js';
// 載入自訂規則包
VeeValidate.localize('tw', zh);
//VeeValidate input 驗證
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
//VeeValidate form 驗證
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);

// Class 設定檔案
VeeValidate.configure({
    classes: {
      valid: 'is-valid',
      invalid: 'is-invalid',
    }
})

const app = new Vue({
    el: '#form_app',
    data: {
        username:'',
        email: '',
        password: '',
        telphone:'',
        address:'',
        payWay:'',
        message:''
    },
    methods: {
      submitForm() {
        console.log('送出表單')
      }
    },
    created() {
      console.log(this);
      
    }
  })
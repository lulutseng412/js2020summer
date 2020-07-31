<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div>products</div>
        <div v-for="item in products" :key="item.id">
            <span>{{ item.title }}</span>
            <span>{{ item.content }}</span>
            <span>{{ item.origin_price }}</span>
            <router-link :to="`/product/${item.id}`">詳細內容</router-link>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      products: []
    }
  },
  created () {
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 3000);
    this.isLoading = true
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.isLoading = false
        this.products = res.data.data
        console.log(res)
      })
  }
}
</script>

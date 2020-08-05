<template>
    <div>
        <div>{{this.product.title}}</div>
        <div>{{this.product.content}}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  created () {
    // console.log(this.$route.params.id)
    const { id } = this.$route.params
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        console.log(res)
        this.product = res.data.data
      })
  }
}
</script>

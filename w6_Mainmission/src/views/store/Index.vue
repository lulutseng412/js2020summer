<template>
   <div id="">
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/pay">結帳畫面</router-link> |
      <router-link to="/completepay">完成結帳</router-link> |
      <router-link to="/about">關於</router-link> |
      <router-link to="/login">登入</router-link> |
    </div>
    <router-view/>
  </div>
</template>

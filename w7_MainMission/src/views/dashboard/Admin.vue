<template>
    <div>
        <div id="nav">
            <router-link to="/dashboard">Admin</router-link> |
            <router-link to="/dashboard/products">產品列表</router-link> |
            <router-link to="/dashboard/product">單一產品列表</router-link> |
            <router-link to="/dashboard/coupons">優惠券後台管理</router-link> |
            <router-link to="/dashboard/orders">訂單後台管理</router-link> |
            <router-link to="/dashboard/imagersview">圖片儲存列表</router-link> |
        </div>
        <router-view/>
    </div>
</template>

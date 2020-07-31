import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/store/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/store/About.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/store/Products.vue')
      },
      {
        // 動態路由
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/store/Product.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/store/Cart.vue')
      },
      {
        path: 'pay',
        name: 'Pay',
        component: () => import('../views/store/Pay.vue')
      },
      {
        path: 'completepay',
        name: 'Completepay',
        component: () => import('../views/store/Completepay.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/dashboard/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Admin.vue'),
    children: [
      {
        path: 'products',
        name: 'dashboardProducts',
        component: () => import('../views/dashboard/Products.vue')
      },
      {
        path: 'product',
        name: 'dashboardProduct',
        component: () => import('../views/dashboard/Product.vue')
      },
      {
        path: 'coupons',
        name: 'dashboardCoupons',
        component: () => import('../views/dashboard/Coupons.vue')
      },
      {
        path: 'orders',
        name: 'dashboardOrders',
        component: () => import('../views/dashboard/Orders.vue')
      },
      {
        path: 'imagersview',
        name: 'dashboardImagersview',
        component: () => import('../views/dashboard/Imagersview.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

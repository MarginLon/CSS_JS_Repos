import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      {
        path: '/',
        name: "Home",
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
      },
      {
        path: '/list',
        name: "List",
        component: () => import(/* webpackChunkName: "List" */ '../views/List.vue')
      },
      {
        path: '/cart',
        name: "Cart",
        component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')
      },
      {
        path: '/user',
        name: "User",
        component: () => import(/* webpackChunkName: "User" */ '../views/User.vue')
      }
    ]
  },

  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'current',
  linkExactActiveClass:'current-exact',
  base: process.env.BASE_URL,
  routes
})

export default router
 
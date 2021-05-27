import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Neck from '../views/Neck.vue'
import Forget from'../views/Forget.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/neck',
    name: 'neck',
    component:  Neck
  },
  {
    path: '/forget',
    name: 'foeget',
    component:  Forget
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

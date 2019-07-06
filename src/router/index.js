import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/Home',
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
      // component: Home
    },
    {
      path: '/About',
      component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
      // component: About
    },
    {
      path: '*',
      redirect: '/Home'
    }
  ]
})
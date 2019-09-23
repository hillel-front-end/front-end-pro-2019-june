import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admins from "./views/Admins";
import foo1 from "./views/AdminsChildren/foo1.vue";
import foo2 from "./views/AdminsChildren/foo2";
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: SignIn
    },
    {
      path: '/main',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Main
    },
    {
      path: '/admins',
      name: 'admins',
      component: Admins,
      children: [
        {
          path: 'foo1',
          component: foo1
        },
        {
          path: 'foo2',
          component: foo2
        }
      ]
    },
    {
      path: '*',
      component: notFound
    }
  ]
})

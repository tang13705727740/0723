import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import index from '../views/index.vue'
import register from '../views/register.vue'
import houtai from '../views/houtai.vue'
import alllink from '../components/alllink.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      name: 'login',
      path: '/login',
      meta: { title: '登录页' },
      component: login
    },
    {
      name: 'register',
      path: '/register',
      meta: { title: '注册页' },
      component: register
    },
    {
      name: 'index',
      path: '/index',
      meta: { title: '首页' },
      component: index
    },
    {
      name: 'houtai',
      path: '/houtai',
      meta: { title: '后台搜索' },
      component: houtai
    },
    {
      name: 'alllink',
      path: '/alllink',
      meta: { title: 'all跳转页面' },
      component: alllink
    }
  ]
})

export default router

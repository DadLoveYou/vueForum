import Vue from 'vue'
import Router from 'vue-router'
import allpages from '@/views/allpages'
import Login from '@/views/login'
import Register from '@/views/register'
import Content from '@/views/details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'allpages',
      component:allpages
    },
    {
      path: '/login',
      name:'login',
      component:Login
    },
    {
      path: '/register',
      name:'register',
      component:Register
    },
    {
      path: '/details/:id',
      name:'details',
      component:Content
    }
  ]
})

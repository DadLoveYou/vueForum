import Vue from 'vue'
import Router from 'vue-router'
import allpages from '@/views/allpages'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'allpages',
      component:allpages
    }
  ]
})

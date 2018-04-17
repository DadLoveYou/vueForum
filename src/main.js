// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Pagination from 'element-ui'

Vue.use(Pagination)
Vue.config.productionTip = false

// Vue.prototype.axios = axios

/* eslint-disable no-new */


// 处理时间函数
Vue.prototype.delTime=function(str){
    const nowDate = new Date().getTime();
    const creatDate = new Date(str).getTime();
    const times = nowDate - creatDate;
    if ((times / 1000) < 60) {
      return "刚刚"
    } else if ((times / 60000) < 60) {
      return parseInt(times / 60000) + "分钟前"
    } else if ((times / 3600000) < 24) {
      return parseInt(times / 3600000) + "小时前"
    } else if (times / (3600000 * 24) < 30) {
      return parseInt(times / (3600000 * 24)) + "天前"
    } else if (times / (3600000 * 24 * 30) < 12) {
      return parseInt(times / (3600000 * 24 * 30)) + "个月前"
    } else {
      return parseInt(times / (3600000 * 24 * 30 * 12)) + "年前"
    }
}


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

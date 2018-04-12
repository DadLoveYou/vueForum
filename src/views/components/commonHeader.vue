<template lang="html">
  <div class="header">
    <div class="container clear">
      <a href="/" class="logo fl">
        <img src="@/assets/vue.png" alt="">
        Vue.js
      </a>
      <form class="search-form fl" action="/serach" method="post">
        <input type="text" name="" value="">
      </form>
      <ul class="nav clear fr">
        <li @click="$router.push({name:'allpages'})">首页</li>
        <li @click="$router.push({name:'register'})">注册</li>
        <li @click="$router.push({name:'login'})">登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonHeader',
  methods:{
    reloadPage(){
      location.reload()
    }
  }
}
</script>

<style lang="scss">
// 公用头部
.header {
    min-height: 40px;
    height: 55px;
    line-height: 55px;
    width: 100%;
    background: #1c6132;
    font-size: 13px;
    box-sizing: border-box;
    .container {
        width: 90%;
        min-width: 960px;
        margin: 0 auto;
        max-width: 1400px;
        .logo {
            display: block;
            font-size: 20px;
            font-weight: 200;
            text-shadow: 0 1px 0 #fff;
            width: 120px;
            padding: 0 20px;
            color: #fff;
            img {
                height: 45px;
            }
        }
        .search-form {
            input {
                -webkit-box-shadow: none;
                -moz-box-shadow: none;
                background: #4f9639 url("../../assets/search.png") no-repeat 4px 4px;
                padding: 3px 5px 3px 22px;
                color: #666;
                border: 0;
                transition: all 0.5s;
                font-size: 13px;
                font-weight: 400;
                line-height: 1;
                -webkit-border-radius: 15px;
                -moz-border-radius: 15px;
                border-radius: 15px;
                width: 206px;
                height: 20px;
            }
            input:focus,
            input:hover {
                background: #fff url("../../assets/search.png") no-repeat 4px 4px;
            }
        }
        .nav {
            margin: 0 10px 0 0;
            li {
                float: left;
                padding: 0 15px;
                color: #eee;
                cursor: pointer;
            }
            li:hover {
                color: #fff;
            }
        }
    }
}
</style>

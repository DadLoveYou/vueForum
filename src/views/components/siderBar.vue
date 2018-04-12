<template lang="html">
  <div class="sidebar">
    <div class="panel">
      <div class="inner">
        <p>Vue：Vue.js专业中文社区</p>
        <div>
          您可以
          <a href="/signin">登录</a>
          或
          <a href="/signup">注册</a>
          , 也可以
          <a href="/auth/github">
            <span class="span-info">
              通过 GitHub 登录
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style lang="scss">
.sidebar {
    font-size: 14px;
    .panel {
        font-size: 13px;
        .inner {
            line-height: 31px;
            padding: 10px;
            background-color: #fff;
            border-radius: 0 0 3px 3px;
            p {
                font-size: 14px;
            }
            div a {
                color: #778087;
                .span-info {
                    display: inline-block;
                    float: none;
                    padding: 3px 10px;
                    border: 0;
                    margin: 0;
                    font-size: 14px;
                    transition: all 0.2s ease-in-out;
                    cursor: pointer;
                    letter-spacing: 2px;
                    box-shadow: none;
                    border-radius: 3px;
                    line-height: 2em;
                    vertical-align: middle;
                    color: #fff;
                    background-color: #7597d4;
                }
                .span-info:hover {
                    color: #fff;
                    background-color: #3374de;
                }
            }

        }
    }
}
</style>

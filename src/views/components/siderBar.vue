<template lang="html">
  <div class="showSidebar">
    <div class="sidebar" v-if="showsider">
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

    <div class="sidebar" v-else>
      <div class="panel">
        <div class="head">
          <span class="col_fade">关于</span>
        </div>
        <div class="inner">
          <p>Vue：Vue.js专业中文社区</p>

          <p>在这里你可以：</p>
          <ul>
            <li>向别人提出你遇到的问题</li>
            <li>帮助遇到问题的人</li>
            <li>分享自己的知识</li>
            <li>和其它人一起进步</li>
          </ul>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'sidebar',
  props:['showsider']
}
</script>

<style lang="scss">
.sidebar {
    font-size: 14px;
    .panel {
        font-size: 13px;
        .head {
            padding: 10px;
            background-color: #f6f6f6;
            border-radius: 3px 3px 0 0;
            color: #51585c;
            .col_fade {
                color: #1c6132;
            }
        }
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
            ul {
                padding: 0;
                margin: 0 0 10px 25px;
                list-style-type: disc;
            }
        }
    }
}
</style>

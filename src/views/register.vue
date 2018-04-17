<template lang="html">
  <div class="wrapPage clear">
      <div class="content-l fl">
        <div class="login-head">
          <ul class="breadcrumb">
            <li><a href="/">主页</a><span class="divider">/</span></li>
            <li class="active">登录</li>
          </ul>
        </div>
        <div class="login-body">
          <form id="signin_form" class="form-horizontal" action="/signin" method="post">
            <div class="control-group">
              <label class="control-label" for="name">用户名</label>
              <div class="controls">
                <input class="input-xlarge" id="loginname" name="loginname" size="30" type="text">
              </div>
            </div>
            <div class="control-group">
              <label class="control-label" for="pass">密码</label>
              <div class="controls">
                <input class="input-xlarge" id="pass" name="pass" size="30" type="password">
              </div>
            </div>
            <div class="control-group">
              <label class="control-label" for="re_pass">确认密码</label>
              <div class="controls">
                <input class="input-xlarge" id="re_pass" name="re_pass" size="30" type="password">
              </div>
            </div>
            <div class="control-group">
              <label class="control-label" for="email">电子邮箱</label>
              <div class="controls">
                <input class="input-xlarge" id="email" name="email" size="30" type="password">
              </div>
            </div>
            <input type="hidden" name="" value="">
            <div class="form-actions">
              <input type="submit" class="span-primary" value="注册">
              <a href="/auth/github">
                <span class="span-info">
                  通过 GitHub 登录
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div class="content-r fr">
          <sider-bar :showsider="sider"/>
      </div>
  </div>
</template>

<script>
import siderBar from '@/views/components/siderBar'

export default {
  name: "register",
  components: {
    siderBar
  },
  data() {
    return {
      sider: false
    }
  }
}
</script>

<style lang="scss">
$common-background: #fff;
.content-l {
    width: 76%;
    background: $common-background;
    border-radius: 3px;
    .login-head {
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
        .breadcrumb {
            padding: 0;
            margin: 0;
            border: 0;
            background: 0 0;
            box-shadow: none;
            list-style: none;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            font-size: 14px;
            li {
                display: inline-block;
                text-shadow: none;
                a {
                    color: #369219;
                    font-size: 14px;
                }
                .divider {
                    padding: 0 5px;
                    color: #ccc;
                }
            }
            .active {
                color: #999;
            }
        }
    }
    .login-body {
        padding: 10px;
        background-color: #fff;
        .form-horizontal {
            margin-top: 40px;
            .control-group {
                margin-bottom: 20px;
                .control-label {
                    float: left;
                    width: 160px;
                    padding-top: 5px;
                    text-align: right;
                    margin-bottom: 5px;
                    font-size: 14px;
                }
                .controls {
                    margin-left: 180px;
                    input {
                        background-color: #fff;
                        border: 1px solid #ccc;
                        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                        -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                        -webkit-transition: border linear 0.2s,box-shadow linear 0.2s;
                        -moz-transition: border linear 0.2s,box-shadow linear 0.2s;
                        -o-transition: border linear 0.2s,box-shadow linear 0.2s;
                        transition: border linear 0.2s,box-shadow linear 0.2s;
                        display: inline-block;
                        height: 20px;
                        padding: 4px 6px;
                        font-size: 14px;
                        line-height: 20px;
                        color: #555;
                        vertical-align: middle;
                        -webkit-border-radius: 4px;
                        -moz-border-radius: 4px;
                        border-radius: 4px;
                        width: 270px;
                    }
                    input:focus {
                        border-color: rgba(82,168,236,.8);
                        outline: 0;
                        outline: thin dotted \9;
                        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);
                        -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6);
                        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);
                    }
                }
            }
            .form-actions {
                padding: 19px 20px 20px;
                margin-top: 20px;
                margin-bottom: 20px;
                border-top: 0;
                background-color: #fff;
                max-height: 40px;
                padding-left: 180px;
                .span-primary {
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
                    background-color: #3374de;
                }
                a {
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
}
.content-r {
    width: 23%;
    background: $common-background;
}
</style>

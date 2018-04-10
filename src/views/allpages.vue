  <template lang="html">
  <div class="wrapPage clear">
    <div class="content-l fl">
        <div class="list-head">
            <ul class="clear">
              <li v-for='(item,i) in items' :class="[isActive == i  ? 'active':'']" @click='changeActive(i)'>{{item.message}}</li>
            </ul>
        </div>
        <div class="list-body">
            <ul>
              <li class="clear" v-for='result in results'>
                <div class="avatar fl">
                  <img :src="result.author.avatar_url" :alt="result.author.loginname">
                </div>
                <div class="clicks fl">
                  <span title="回复数" class="count-replies">{{result.reply_count}}</span>
                  <span class="count-seperator">/</span>
                  <span title="点击数" class="count-visits">{{result.visit_count}}</span>
                </div>
                <div class="titles fl">
                  <span class="top" v-if="result.top">置顶</span>
                  <template v-else>
                    <span class="top" v-if="result.good">精华</span>
                    <span class="tab" v-if="result.tab==='share'">分享</span>
                    <span class="tab" v-if="result.tab==='ask'">问答</span>
                    <span class="tab" v-if="result.tab==='job'">招聘</span>
                  </template>
                  <a>{{result.title}}</a>
                </div>
                <div class="lastTime fr">
                  <img :src="result.author.avatar_url" alt="">
                  <span>{{delTime(result.create_at)}}</span>
                </div>
              </li>
            </ul>
        </div>
    </div>
    <div class="content-r fr">

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'pages',
  data() {
    return {
      items: [{
        message: '全部'
      }, {
        message: '精华'
      }, {
        message: 'week'
      }, {
        message: '分享'
      }, {
        message: '问答'
      }, {
        message: '招聘'
      }],
      isActive: '0',
      results: []
    }
  },
  methods: {
    changeActive(i) {
      this.isActive = i
    },
    delTime(str) {
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
      } else{
        return parseInt(times / (3600000 * 24 * 30 * 12)) + "年前"
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      axios.get("https://www.vue-js.com/api/v1/topics?page=1&tab=share&limit=30&mdrender=true")
        .then(response => {
          vm.results = response.data.data
          console.log(vm.results);
        })
    })
  }
}
</script>

<style lang="scss">
$common-background: #fff;
.content-l {
    width: 76%;
    background: $common-background;
    border-radius: 3px;
    .list-head {
        padding: 10px;
        background-color: #f6f6f6;
        box-sizing: border-box;
        font-size: 14px;
        ul {
            li {
                color: #369219;
                float: left;
                margin: 0 10px;
                height: 20px;
                cursor: pointer;

            }
            .active {
                background-color: #369219;
                color: #fff!important;
                padding: 0 4px;
                border-radius: 3px;
                box-sizing: border-box;
            }

            li:hover {
                color: #08c;
            }
        }
    }

    .list-body {
        ul {
            li:first-child {
                border-top: 0;
            }
            li {
                padding: 10px;
                background: #fff;
                border-top: 1px solid #f0f0f0;
                font-size: 14px;
                line-height: 28px;
                .avatar {
                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 3px;
                    }
                }
                .clicks {
                    width: 70px;
                    text-align: center;
                    display: inline-block;
                    .count-replies {
                        color: #9e78c0;
                    }
                    .count-seperator {
                        font-size: 10px;
                    }
                    .count-visits {
                        font-size: 10px;
                        color: #b4b4b4;
                    }
                }
                .titles {
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    .tab,
                    .top {
                        padding: 2px 4px;
                        border-radius: 3px;
                        -webkit-border-radius: 3px;
                        -moz-border-radius: 3px;
                        -o-border-radius: 3px;

                        font-size: 12px;
                    }
                    .tab {
                        background-color: #e5e5e5;
                        color: #999;
                    }
                    .top {
                        background-color: #369219;
                        color: #fff;
                    }
                    a {
                        max-width: 70%;
                        text-overflow: ellipsis;
                        -o-text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        font-size: 16px;
                        cursor: pointer;
                    }
                    a:visited {
                        color: #888;
                    }

                    a:focus,
                    a:hover {
                        text-decoration: underline;
                    }
                }
                .lastTime {
                    font-size: 11px;
                    color: #778087;
                    margin-left: 20px;
                    img {
                        height: 18px;
                        width: 18px;
                        vertical-align: middle;
                        margin-right: 0.5em;
                        border-radius: 3px;
                        display: inline-block;
                    }
                    span {
                        text-align: right;
                        min-width: 50px;
                        display: inline-block;
                        white-space: nowrap;
                    }
                }
            }
            li:hover {
                background-color: #f5f5f5;
            }
        }
    }
}

.content-r {
    width: 23%;
    background: $common-background;
}
</style>

<template lang="html">
  <div class="wrapPage clear">
    <div class="content-l fl">
      <div class="topic_header">
          <span class="topic_title">{{result.title}}</span>
          <div class="changes">
            <span>
            发布于 {{delTime(result.create_at)}}
            </span>
            <span>
              作者 <a :href="'/user/'+result.author.loginname">{{result.author.loginname}}</a>
            </span>
            <span>
              {{result.visit_count}} 次浏览
            </span>
            <span> 来自 {{tips}}</span>
          </div>
      </div>
      <div class="topic_body">
        <div class="topic_con" v-html="result.content">

        </div>
      </div>
    </div>
    <div class="content-r fr">

    </div>
  </div>
</template>

<script>
import Api from '@/api'
import axios from 'axios'

export default {
  name: 'detail',
  data() {
    return {
      topic_id: '5',
      result: [],
      tips: ''
    }
  },
  methods: {
    getTopic(topic_id) {
      axios.get(Api.getDetail(topic_id))
        .then(response => {
          this.result = response.data.data
          console.log(this.result)
          if (this.result.tab == "share") {
            this.tips = "分享"
          } else if (this.result.tab == "ask") {
            this.tips = "问答"
          } else if (this.result.tab == "job") {
            this.tips = "招聘"
          }
        })
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getTopic(to.params.id)
    })
  }
}
</script>

<style lang="scss">
.content-l {
    width: 76%;
    background: #fff;
    border-radius: 3px;
    .topic_header {
        padding: 10px;
        background-color: #fff;
        border-radius: 3px 3px 0 0;
        .topic_title {
            font-size: 22px;
            font-weight: 700;
            margin: 8px 0;
            display: inline-block;
            vertical-align: bottom;
            width: 75%;
            line-height: 130%;
        }
        .changes {
            font-size: 12px;
            color: #838383;
            span:before {
                content: "•";
            }
            span {
                a {
                    color: inherit;
                }
                a:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    .topic_body {
        padding: 10px;
        border-top: 1px solid #e5e5e5;
        background-color: #fff;
        border-radius: 0 0 3px 3px;
        .topic_con {
            margin: 0 10px;
            .markdown-text:first-child {
                margin-top: 0;
            }
            .markdown-text {
                p {
                    font-size: 15px;
                    line-height: 1.7em;
                    overflow: auto;
                    white-space: pre-wrap;
                    white-space: -moz-pre-wrap;
                    white-space: -pre-wrap;
                    white-space: -o-pre-wrap;
                    word-wrap: break-word;
                    line-height: 2em;
                    margin: 1em 0;
                }
                hr {
                    margin: 20px 0;
                    border: 0;
                    border-top: 1px solid #eee;
                    border-bottom: 1px solid #fff;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    margin: 30px 0 15px;
                    border-bottom: 1px solid #eee;
                }
                h1,
                h2,
                h3 {
                    line-height: 40px;
                }
                h2 {
                    font-size: 26px;
                }
                h3 {
                    font-size: 24.5px;
                }
                ul {
                    padding: 0;
                    margin: 0 0 10px 25px;
                }
            }

            .markdown-text a {
                color: #778087;
            }

            .markdown-text a:hover {
                text-decoration: underline;
            }
        }
    }
}

.content-r {
    width: 23%;
    background: #fff;
}
</style>

<template>
  <div class="blog">
    <ul>
      <li>
        <h5><router-link to="/tools/blogInfo/">Jquery初步学习!</router-link></h5>
        <dl>
          <dt><a href="javascript:;"><img src="@images/avatar_2.jpg" alt=""></a></dt>
          <dd class="author"><a href="javascript:;">wait-for-the-wind</a></dd>
          <div class="info">
            1. Jquery初步学习!Jquery初步学习!Jquery初步学习!Jquery初步学习!Jquery初步学习!Jquery初步学习!Jquery初步学习!Jquery初步学习!Jquery初步学习!
          </div>
          <div class="read-info">
            <dd>
              <!-- 点赞 -->
              <a href="javascript:;" class="thumb">
                <span>
                  <!-- <svg></svg> -->
                  <i>&#128077;</i>
                </span>
                <span class="num">32332</span>
              </a>
              <!-- 查看 -->
              <a href="javascript:;" class="check">
                <span>
                  <!-- <svg></svg> -->
                  <i class="el-icon-view"></i>
                </span>
                <span class="num">32</span>
              </a>
              <!-- 评论 -->
              <a href="javascript:;">
                <span>
                  <!-- <svg></svg> -->
                  <i class="el-icon-s-comment"></i>
                </span>
                <span class="num">3132</span>
              </a>
            </dd>
          </div>
        </dl>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
  .blog{
    // background: skyblue;
    ul {
      box-shadow: 2px 2px 10px #999;
      width: 950px;
      margin: 0 auto;
      li {
        border-bottom: 1px solid #f4f4f4;
        background: #fff;
        height: 84px;
        box-sizing: border-box;
        padding: 18px 24px 13px;
        // margin-bottom: 5px;
        h5 {
          text-align: left;
          font-size: 18px;
          font-weight: 700;
          height: 24px;
          line-height: 24px;
          width: 100%;
          a {
            display: inline-block;
            width: 100%;
          }
          a:hover {
            color: #ca0c16;
          }
        }
        dl {
          display: flex;
          height: 24px;
          justify-content: space-between;
          dt {
            float: left;
            img {
              width: 24px;
              height: 24px;
              display: block;
              border-radius: 50%;
            }
          }
          .author {
            float: left;
            display: inline-block;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-left: 16px;
            text-align: left;
            max-width: 120px;
            a {
              max-width: 120px;
            }
          }
          div.info {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-left: 16px;
            // margin: 0 100px;
          }
          div.read-info {
            // display: flex;
            flex-direction: row;
            width: 100%;
            text-align: right;
            float: right;
            // min-width: 110px;
            dd {
              display: inline-block;
              a {
                display: inline-block;
                margin-right: 10px;
                color: #999;
                span.num {
                  color: #349edf;
                  i {
                    margin-right: 2px;
                  }
                }
              }
              a:hover {
                color: #349edf;
              }
              .thumb::after, .check::after {
                content: '|';
                margin-left: 5px;
                color: #e0e0e0;
              }
            }
          }
        }
      }
      li:hover  {
        background: #fafafa;
      }
    }
  }
</style>

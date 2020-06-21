<template>
  <div class="wrapper">
    <el-row >
      <el-col :span="17">
        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix">
            <span>个人博客</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <!-- <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div> -->
          <ul class="blogList">
            <li>
              <h3 class="blogTitle">
                <b>【顶】</b>
                <a href="http://10.0.204.46:8081/blog" target="_blank">新起点新开始</a>
              </h3>
              <span class="blogPic">
                <a href="http://10.0.204.46:8081/blog" target="_blank">
                  <img src="@images/pic1.jpg" alt="">
                </a>
              </span>
              <div class="blogrbox">
                <p class="blogText">如何做一个属于自己的个人博客网站，做个人博客网站的流程是什么？这是很多新手站长会遇到的问题。首先我们得给自己的个人博客网站，定一个位。用来做什么，是建立一个个人博客来写</p>
                <p class="blogInfo">
                  <i class="avatar">
                    <img src="@images/avatar.jpg" alt="">
                  </i>
                  <span>盛·迎风</span>
                  <span>2020-06-11</span>
                  <i class="el-icon-view mr5"></i>
                  <span>0</span>
                  <i class="el-icon-chat-dot-square mr5"></i>
                  <span>0</span>
                  <span>【<a href="http://10.0.204.46:8081/growUp">个人信息</a>】</span>
                  <a href="http://10.0.204.46:8081/gr" class="readMore">阅读更多</a>
                </p>
              </div>
            </li>
            <li>
              <h3 class="blogTitle">
                <b>【顶】</b>
                <a href="http://10.0.204.46:8081/blog" target="_blank">新起点新开始</a>
              </h3>
              <span class="blogPic">
                <a href="http://10.0.204.46:8081/blog" target="_blank">
                  <img src="@images/pic1.jpg" alt="">
                </a>
              </span>
              <div class="blogrbox">
                <p class="blogText">如何做一个属于自己的个人博客网站，做个人博客网站的流程是什么？这是很多新手站长会遇到的问题。首先我们得给自己的个人博客网站，定一个位。用来做什么，是建立一个个人博客来写</p>
                <p class="blogInfo">
                  <i class="avatar">
                    <img src="@images/avatar.jpg" alt="">
                  </i>
                  <span>盛·迎风</span>
                  <span>2020-06-11</span>
                  <span>【<a href="http://10.0.204.46:8081/growUp">个人信息</a>】</span>
                  <a href="http://10.0.204.46:8081/gr" class="readMore">阅读更多</a>
                </p>
              </div>

            </li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="6" class="rank">
        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix">
            <span>点击排行</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <ul>
            <li>
              <i>1</i>
              <a href="javascript:;">起点开始</a>
            </li>
            <li>
              <i>2</i>
              <a href="javascript:;">JS讲解</a>
            </li>
            <li>
              <i>3</i>
              <a href="javascript:;">起点jflksdjflsjflsdjlfjfkljsdlk543535345f开始</a>
            </li>
          </ul>
        </el-card>
        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix">
            <span>站长推荐</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <ul>
            <li>
              <i>1</i>
              <a href="javascript:;">起点开始</a>
            </li>
            <li>
              <i>2</i>
              <a href="javascript:;">JS讲解</a>
            </li>
            <li>
              <i>3</i>
              <a href="javascript:;">起点jflksdjflsjflsdjlfjfkljsdlk543535345f开始</a>
            </li>
          </ul>
        </el-card>
        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix">
            <span>来首安静得歌曲吧</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <ul>
            <li>
              <i>1</i>
              <a href="javascript:;">起点开始</a>
            </li>
            <li>
              <i>2</i>
              <a href="javascript:;">JS讲解</a>
            </li>
            <li>
              <i>3</i>
              <a href="javascript:;">起点jflksdjflsjflsdjlfjfkljsdlk543535345f开始</a>
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      'radio': 1
    }
  }
}
</script>
<style lang="less">
.box-card {
  margin-top: 10px;
  .blogList {
    li {
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: #eee 1px dashed;
    }
    .blogTitle {
      font-size: 16px;
      font-weight: 700;
      color: black;
      margin-bottom: 10px;
      b {
        color: red;
      }
      a:visited {
        color: black;
      }
    }
    .blogPic {
      display: inline-block;
      width: 200px;
      vertical-align: top;
      overflow: hidden;
      img {
         animation: 5s all;
      }
      img:hover {
        transform: scale(1.2);
      }
    }
    .blogrbox {
      width: 528px;
      display: inline-block;
      position: relative;
      p {
        font-size: 14px;
        margin: 10px 0 0 30px;
      }
      p.blogText {
        width: 528px;
        color: #666;
      }
      p.blogInfo {
        .avatar {
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(to top right), rgba(0,153,255,.9), rgba(42,228,197,.7);
          margin-right: 10px;
          position: relative;
          img {
            border-radius: 50%;
            width: 30px;
            vertical-align: -40%;
          }
        }
        .avatar::after {
          content: "";
          position: absolute;
          top: 0px;
          right: 0px;
        }
        span {
          display: inline-block;
          line-height: 30px;
          margin-right: 10px;
        }
        .readMore {
          position: absolute;
          text-align: center;
          color: white;
          border-radius: 3px;
          bottom: -20px;
          right: -10px;
          outline: none;
          width: 80px;
          height: 28px;
          line-height: 28px;
          background: #12b7de;
        }
      }
    }
  }
}
.rank {
  margin-left: 30px;
  .el-card__header {
    padding: 18px 20px;
    position: relative;
  }
  .el-card__header:after {
    position: absolute;
    width: 100px;
    height: 2px;
    bottom: 0px;
    left: 0px;
    content: "";
    display: inline-block;
    background: violet;
  }
  ul li{
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    i {
      width: 16px;
      height: 16px;
      text-align: center;
      line-height: 16px;
      color: white;
      background: #FF6600;
      display: inline-block;
      margin-right: 10px;
    }
    a {
      max-width: 230px;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: -29%;
    }
  }
}
</style>

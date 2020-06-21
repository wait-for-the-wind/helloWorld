<template>
  <div>
    <ul class="blogList" v-for="(item, index) in blogData" :key="index">
      <li>
        <h3 class="blogTitle">
          <b>【{{item.title_moifier}}】</b>
          <a :href="item.a_href" target="_blank">{{item.title}}</a>
        </h3>
        <span class="blogPic">
          <a :href="item.a_href" target="_blank">
            <img :src="item.img_src" alt="">
          </a>
        </span>
        <div class="blogrbox">
          <p class="blogText">{{item.blogText}}</p>
          <p class="blogInfo">
            <i class="avatar">
              <img :src="item.autho_img" alt="">
            </i>
            <span>{{item.autho}}</span>
            <span>{{item.time}}</span>
            <i class="el-icon-view mr5"></i>
            <span>{{item.see}}</span>
            <i class="el-icon-chat-dot-square mr5"></i>
            <span>{{item.comment}}</span>
            <span>【<a :href="item.autho_info">个人信息</a>】</span>
            <a :href="item.see_more" class="readMore">阅读更多</a>
          </p>
        </div>
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
  props: ['blogData'],
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
  body{
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
          // animation: 1s all;
          transition: 0.5s all;
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
</style>

<template>
  <div class="wrapper">
    <el-row >
      <el-col :span="17">
        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix">
            <span>个人博客</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <my-blog-cpn :blogData="blog_data"></my-blog-cpn>
        </el-card>
      </el-col>
      <el-col :span="6" class="rank">

        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix">
            <span>点击排行</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <my-rank :rank="click_rank"></my-rank>
        </el-card>

        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix">
            <span>站长推荐</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <my-rank :rank="recommend_rank"></my-rank>
        </el-card>
        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix">
            <span>来首安静得歌曲吧</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <my-rank :rank="music_rank"></my-rank>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import blogCpn from '@components/blog/blog_components.vue'
import rank from '@components/blog/rank.vue'
export default {
  data () {
    return {
      'radio': 1,
      blog_data: [
        {
          title_moifier: '顶',
          title: '新起点新开始',
          a_href: 'http://10.0.204.46:8081/blog',
          img_src: 'https://www.yangqq.com/d/file/jstt/web/2019-09-24/d0d6dc103bfae7f29ce18d0c4219ff57.jpg',
          blogText: '如何做一个属于自己的个人博客网站，做个人博客网站的流程是什么？这是很多新手站长会遇到的问题。首先我们得给自己的个人博客网站，定一个位。用来做什么，是建立一个个人博客来写',
          autho: '盛·迎风',
          autho_img: 'https://www.yangqq.com/skin/jxhx/images/avatar.jpg',
          time: '2020-06-11',
          see: 2232,
          comment: 66,
          autho_info: 'http://10.0.204.46:8081/growUp',
          see_more: 'http://10.0.204.46:8081/gr'
        },
        {
          title_moifier: '顶',
          title: '新起点新开始',
          a_href: 'http://10.0.204.46:8081/blog',
          img_src: 'https://www.yangqq.com/d/file/jstt/web/2019-09-24/d0d6dc103bfae7f29ce18d0c4219ff57.jpg',
          blogText: '如何做一个属于自己的个人博客网站，做个人博客网站的流程是什么？这是很多新手站长会遇到的问题。首先我们得给自己的个人博客网站，定一个位。用来做什么，是建立一个个人博客来写',
          autho: '盛·迎风',
          autho_img: 'https://www.yangqq.com/skin/jxhx/images/avatar.jpg',
          time: '2020-06-11',
          see: 99,
          comment: 103,
          autho_info: 'http://10.0.204.46:8081/growUp',
          see_more: 'http://10.0.204.46:8081/gr'
        },
        {
          title_moifier: '顶',
          title: '新起点新开始',
          a_href: 'http://10.0.204.46:8081/blog',
          img_src: 'https://www.yangqq.com/d/file/jstt/web/2019-09-24/d0d6dc103bfae7f29ce18d0c4219ff57.jpg',
          blogText: '如何做一个属于自己的个人博客网站，做个人博客网站的流程是什么？这是很多新手站长会遇到的问题。首先我们得给自己的个人博客网站，定一个位。用来做什么，是建立一个个人博客来写',
          autho: '盛·迎风',
          autho_img: 'https://www.yangqq.com/skin/jxhx/images/avatar.jpg',
          time: '2020-06-11',
          see: 11,
          comment: 7567,
          autho_info: 'http://10.0.204.46:8081/growUp',
          see_more: 'http://10.0.204.46:8081/gr'
        }
      ],
      click_rank: [
        {
          title: 'JS讲解',
          title_href: 'javascript:;'
        },
        {
          title: 'CSS讲解',
          title_href: 'javascript:;'
        }
      ],
      recommend_rank: [
        {
          title: 'XXXXXX',
          title_href: 'javascript:;'
        },
        {
          title: 'YYYYYYY',
          title_href: 'javascript:;'
        }
      ],
      music_rank: [
        {
          title: '等你下课',
          title_href: 'javascript:;'
        },
        {
          title: '世界美好与你环环相扣',
          title_href: 'javascript:;'
        },
        {
          title: '推开世界的门',
          title_href: 'javascript:;'
        }
      ]
    }
  },
  components: {
    'my-blog-cpn': blogCpn,
    'my-rank': rank
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

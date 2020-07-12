<template>
  <div class="root">
    <el-row class="tac">
      <el-col :span="4">
        <my-toolCard :toolData="data"></my-toolCard>
      </el-col>
    </el-row>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="24"
      layout="total, prev, pager, next"
      :total="data.length"
    ></el-pagination>
  </div>
</template>
<script>
import toolCard from '@components/toolCard.vue'
export default {
  data () {
    return {
      flag: false,
      currentPage1: 1,
      data: [
        {
          web_url: 'https://c.runoob.com/',
          img_src: require('../../assets/images/cn.png'),
          title: '菜鸟 在线工具',
          info: '提供各种编码、前端工具'
        },
        {
          web_url: 'https://tool.oschina.net/',
          img_src: require('../../assets/images/osChina.png'),
          title: 'osChina 在线工具',
          info: '提供各种编码、加密、转换工具'
        },
        {
          web_url: 'https://www.jiumodiary.com/',
          img_src: 'https://www5.jiumodiary.com/images/front/eleps.png',
          title: '鸠摩搜索',
          info: '电子图书搜索'
        },
        {
          web_url: 'https://caniuse.com/',
          img_src: require('../../assets/images/CanIUse.png'),
          title: 'Can I use',
          info: '查询Html标签、Css属性兼容性'
        },
        {
          web_url: 'https://htmlcolorcodes.com/zh/yanse-biao/',
          img_src: require('../../assets/images/color.jpg'),
          title: '颜色搭配表',
          info: '16进制颜色查询'
        },
        {
          web_url: 'http://www.yuangongju.com/color',
          img_src: require('../../assets/images/random.png'),
          title: '随机颜色',
          info: '具有随机选色功能，颜色也挺好看的'
        },
        {
          web_url: 'https://color.adobe.com/zh/create/color-wheel',
          img_src: require('../../assets/images/color.png'),
          title: '自配颜色',
          info: '根据自己的需求，配置自己需要的颜色'
        },
        {
          web_url: 'https://www.npmjs.com/',
          img_src: require('../../assets/images/npm.png'),
          title: 'npm安装包查询',
          info: '在线查询包的下载情况、下载指令'
        },
        {
          web_url: 'https://unicode-table.com/cn/',
          img_src: require('../../assets/images/Unicode.png'),
          title: 'Unicode 字符百科',
          info: '文字、表情、字母 Unicode 值查询'
        },
        {
          web_url: 'http://www.blpack.com/',
          img_src: require('../../assets/images/MOMO.png'),
          title: 'MOMO 百度文库下载',
          info: '账号236274515密码862435'
        },
        {
          web_url: 'https://curl.trillworks.com/',
          img_src: require('../../assets/images/pachong.png'),
          title: '网络自动请求爬虫编写',
          info: '获取接口的bash即可使用'
        },
        {
          web_url: 'https://tinypng.com/',
          img_src: require('../../assets/images/tin.png'),
          title: 'jpg、png图片压缩',
          info: '在线压缩图片，单张最高5M'
        },
        {
          web_url: 'https://pixabay.com/zh/',
          img_src: require('../../assets/images/img.png'),
          title: '免费高清图片素材库（中文）',
          info: '可以使用众多免费的高清素材图片'
        },
        {
          web_url: 'https://unsplash.com/',
          img_src: require('../../assets/images/unsplash.png'),
          title: '免费高清图片素材库（英文）',
          info: '可以使用众多免费的高清素材图片'
        },
        {
          web_url: 'https://cupcake.nilssonlee.se/',
          img_src: require('../../assets/images/cupcake.png'),
          title: '免费高清图片素材库（英文）',
          info: '可以使用众多免费的高清素材图片'
        },
        {
          web_url: 'https://app.xunjiepdf.com/',
          img_src: require('../../assets/images/xunjie.png'),
          title: '迅捷在线格式转换',
          info: '2M 以内免费'
        },
        {
          web_url: 'http://www.zhanshaoyi.com/rjxz.html',
          img_src: require('../../assets/images/share.png'),
          title: '软件下载',
          info: '破解软件也很香'
        },
        {
          web_url: 'https://www.iconfont.cn/',
          img_src: require('../../assets/images/albb.png'),
          title: '阿里巴巴矢量图标库',
          info: '矢量图使用'
        },
        {
          web_url: 'https://www.webfont.com/onlinefont/index',
          img_src: require('../../assets/images/onlinefont.png'),
          title: '有字库，多种字体选择',
          info: '字体使用'
        }
      ]
    }
  },
  components: {
    'my-toolCard': toolCard
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="less" scoped>
div.root {
  height: 700px;
  margin-top: 10px;
  ul.tool_list {
    width: 999px;
    .tool_part {
      width: 293px;
      float: left;
      background: WhiteSmoke;
      border-radius: 5px;
      padding: 5px;
      margin: 15px;
      box-shadow: 0px 5px 15px Gainsboro;
      transition: all 0.3s;
      img {
        width: 48px;
        height: 48px;
        float: left;
      }
      aside {
        float: left;
        margin-left: 10px;
        a {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #64854c;
          font-size: 16px;
          text-align: left;
        }
        p {
          font-weight: bold;
          color: #666;
          font-size: 14px;
          line-height: 28px;
          height: 28px;
        }
      }
    }
    .tool_part:hover {
      // margin-top: 1px;
      // overflow: hidden;
    }
  }
}
</style>

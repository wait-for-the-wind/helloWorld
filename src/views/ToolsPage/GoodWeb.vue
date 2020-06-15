<template>
  <div class="root">
    <el-row class="tac">
      <el-col :span="4">
        <ul class="tool_list">
          <li class="tool_part">
            <a href="https://c.runoob.com/compile/5577" target="_blank">
              <img src="@images/typescript.png" alt="">
            </a>
            <aside>
              <a href="https://c.runoob.com/compile/5577" target="_blank"><h5>TS 在线工具</h5></a>
              <p>在线编译、运行 TS 代码</p>
            </aside>
          </li>
          <li class="tool_part">
            <a href="https://c.runoob.com/front-end/51" target="_blank">
              <img src="@images/js.png" alt="">
            </a>
            <aside>
              <a href="https://c.runoob.com/front-end/51" target="_blank"><h5>JS 压缩/解压工具</h5></a>
              <p>在线压缩/解压 JS 代码</p>
            </aside>
          </li>
          <li class="tool_part">
            <a href="https://c.runoob.com/front-end/52" target="_blank">
              <img src="@images/css.png" alt="">
            </a>
            <aside>
              <a href="https://c.runoob.com/front-end/52" target="_blank"><h5>CSS 压缩/解压工具</h5></a>
              <p>在线压缩/解压 CSS 代码</p>
            </aside>
          </li>
          <li class="tool_part">
            <a href="https://c.runoob.com/front-end/5580" target="_blank">
              <img src="@images/count-word.png" alt="">
            </a>
            <aside>
              <a href="https://c.runoob.com/front-end/5580" target="_blank"><h5>在线字数统计工具</h5></a>
              <p>汉字、原文、符号统计</p>
            </aside>
          </li>
          <li class="tool_part">
            <a href="https://www.jiumodiary.com/" target="_blank">
              <img src="@images/eleps.png" alt="">
            </a>
            <aside>
              <a href="https://www.jiumodiary.com/" target="_blank"><h5>鸠摩搜索</h5></a>
              <p>电子图书搜索</p>
            </aside>
          </li>
          <li class="tool_part">
            <a href="http://rainyin.com/307.html" target="_blank">
              <img src="@images/color.jpg" alt="">
            </a>
            <aside>
              <a href="http://rainyin.com/307.html" target="_blank"><h5>颜色搭配表</h5></a>
              <p>16进制颜色查询</p>
            </aside>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    }
  }
}
</script>
<style lang="less" scoped>
  div.root {
    height: 800px;
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

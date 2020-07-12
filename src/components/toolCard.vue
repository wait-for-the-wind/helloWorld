<template>
  <div>
    <ul class="tool_list" v-for="(item, index) in toolData" :key="index">
      <li class="tool_part">
        <a :href="item.web_url" target="_blank">
          <img :src="item.img_src" alt="">
        </a>
        <aside>
          <a :href="item.web_url" target="_blank"><h5>{{item.title}}</h5></a>
          <p>{{item.info}}</p>
        </aside>
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
  props: ['toolData'],
  mounted() {},
  methods: {
  }
}
</script>
<style lang='less' scoped>
  body{
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
            text-align: left;
            color: #666;
            font-size: 14px;
            line-height: 28px;
            height: 28px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            max-width: 230px;
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

<template>
  <div>
    <ul class="tool_list">
      <li class="tool_part" v-for="(item, index) in toolData" :key="index">
        <section>
          <a :href="item.web_url" target="_blank">
            <img :src="item.img_src" alt="">
          </a>
          <aside>
            <a :href="item.web_url" target="_blank" class="ellipsis"><h5>{{item.title}}</h5></a>
            <p class="ellipsis">{{item.info}}</p>
          </aside>
        </section>
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
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      .tool_part {
        width: 293px;
        // float: left;
        background: WhiteSmoke;
        border-radius: 5px;
        padding: 5px;
        margin: 15px;
        box-shadow: 0px 5px 15px Gainsboro;
        transition: 0.3s;
        overflow: hidden;
        section {

          img {
            width: 48px;
            height: 48px;
            float: left;
          }
          aside {
            float: left;
            margin-left: 10px;
            a {
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
              max-width: 230px;
            }
          }
        }
        // section:hover {

        //   }
      }
      .tool_part:hover {
          margin-top: 5px;
        // margin-bottom: 20px;
        // overflow: hidden;
      }
    }
  }
</style>

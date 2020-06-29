<template>
  <div>
    <ul class="rbox" ref="img_list">
      <li v-for="(item, index) in data" :key="index">
        <a href>
          <img :src="item.img_url" alt />
        </a>
        <span>{{item.img_title}}</span>
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
  methods: {},
  props: ['data']
}
</script>
<style lang='less' scoped>
  body{
    .rbox {
      width: 100%;
      // margin-right: 199px;
      float: right;
      li {
        // 正常情况 115 合适 展开时候 150合适
        height: 115px;
        width: 275px;
        overflow: hidden;
        position: relative;
        margin-bottom: 5px;
        a {
          display: block;
          // position: absolute;
          // transform: translate(-50%);
          img {
            width: 275px;
            transition: all 0.5s;
            opacity: 0.7;
            filter: blur(2px);
            // filter: grayscale(0.5);
            display: block;
            transition: all 1s;
          }
          img:hover {
            transform: scale(1.2);
            filter: blur(0px);
            opacity: 1;
          }
        }
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 195px;
          height: 44px;
          transform: translate(-50%, -50%);
          display: block;
          color: #ff0000;
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 2;
        }
      }
    }
  }
</style>

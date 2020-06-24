<template>
  <div>
    <!-- 这里是第二个轮播图组件 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;"><img src="../assets/images/swiperB_1.png" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;"><img src="../assets/images/swiperB_2.png" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;"><img src="../assets/images/swiperB_3.png" alt=""></a>
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'
import '../../node_modules/swiper/css/swiper.min.css'
export default {
  data() {
    return {
      flag: false,
      arr1: [1, 2, 3],
      arr2: [4, 5, 6]
    }
  },
  mounted() {
    new Swiper('.swiper-container', {
      loop: true, // 可以循环轮播
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
  body{
    .swiper-slide {
      height: 236px;
      width: 601px;
      // background: #d3d3d3;
    }
  }
</style>

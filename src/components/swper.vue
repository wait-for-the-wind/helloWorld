<template>
  <div class="parent clearfix">
    <el-carousel autoplay loop>
      <el-carousel-item v-for="item in imglist" :key="item.id">
        <img :src="item.img_url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      img_list: []
    }
  },
  mounted() {

  },
  methods: {},
  props: ['imglist']
}
</script>
<style lang='less' scoped>
.el-carousel__item img {
    width: 100%;
    height: 300px;
}
</style>

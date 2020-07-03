<template>
  <div>
    <!-- 博客管理页面，这里最好能使用 md  编辑文档，autho 信息从登录那获取 -->
    <el-row>
      <el-col :span="4" class="center">
        博客主标题：
      </el-col>
      <el-col :span="8">
          <el-input
            placeholder="请输入博客主标题"
            prefix-icon="el-icon-date"
            v-model="input1">
          </el-input>
      </el-col>
    </el-row>
    <my-upload/>
  </div>
</template>
<script>
import upload from '@components/upload.vue'
export default {
  data() {
    return {
      flag: false,
      input1: ''
    }
  },
  mounted() {},
  methods: {
  },
  components: {
    'my-upload': upload
  }
}
</script>
<style lang='less' scoped>
  body{
    .center {
      height: 40px;
      line-height: 40px;
    }
  }
</style>

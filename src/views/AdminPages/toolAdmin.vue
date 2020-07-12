
<template>
  <div>
    <el-row>
      <el-col :span="4" class="center">
          工具名称：
      </el-col>
      <el-col :span="8" class="rainbow">
          <el-input
            placeholder="请输入工具名称"
            prefix-icon="el-icon-date"
            v-model="input1">
          </el-input>
      </el-col>
    </el-row>
    <el-row style="margin-top: 15px;">
      <el-col :span="4" class="center">
          工具详情：
      </el-col>
      <el-col :span="8" class="rainbow">
          <el-input
            placeholder="请输入工具详情"
            prefix-icon="el-icon-date"
            v-model="input1">
          </el-input>
      </el-col>
    </el-row>
    <el-row style="margin-top: 15px;">
      <el-col :span="4" class="center">
          上传图片：
      </el-col>
      <el-col :span="8" style="text-align: left;">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-col>
    </el-row>
    <el-row style="margin-top: 15px;">
      <el-col :span="1" style="margin-left: 170px;">
        <el-button type="primary" plain>提交</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      input1: '',
      fileList: [
        { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
        { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }
      ]
    }
  },
  mounted() {
    console.log('123', 123)
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`)
    }
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

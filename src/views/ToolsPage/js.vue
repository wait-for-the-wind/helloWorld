<template>
  <el-container>
    <section class="one-yuan-popup share-popup">
      <div class="light-box"></div>
      <div class="container">
        <div class="header">
          <img src="<%= static_url %>/images/webview/one_yuan/hand_icon.png" alt />
          <span>长按分享给好友或保存邀请卡片</span>
        </div>
        <div class="content">
          <img src="<%= avatar %>" class="one-share-avatar" alt />
          <img src="<%= static_url %>/images/webview/one_yuan/page_share.png" alt />
          <p class="one-share-title">
            <span id="nickname"><%= decodeURIComponent(nickname) %></span>邀请您
          </p>
          <p class="one-share-desc">1元解锁私人图书馆</p>
          <img src="<%= qrcode.qrCodeUrl %>" alt class="one-share-code" />
        </div>
      </div>
    </section>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      str: 'qwe'
    }
  },
  mounted() {
    let canvas2 = document.createElement('canvas') // 创建canvas
    let _canvas = document.querySelector('.share-popup .content') // 此处可换body，或div等 我们一般可以放绘制的元素
    let w = parseInt(window.getComputedStyle(_canvas).width)
    let h = parseInt(window.getComputedStyle(_canvas).height)

    // 将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
    canvas2.width = w * 2
    canvas2.height = h * 2
    canvas2.style.width = w + 'px'
    canvas2.style.height = h + 'px'

    let context = canvas2.getContext('2d')
    let rect = document
      .querySelector('.share-popup .content')
      .getBoundingClientRect() // 获取元素相对于视察的偏移量

    context.scale(2, 2)
    context.translate(-rect.left, -rect.top) // 设置context位置，值为相对于视窗的偏移量负值，让图片复位

    // =====================================注意注意注意=================================
    // 必须先scale,再traslate，如果不是绘制全屏的话，这两句可以不加，正常绘制就会把margin区域也绘制上，如果需要不绘制margin区域，而且这个元素就根据窗口大小而居中，我们很不好控制，所以我们再这里先获取 getBoundingClientRect() 根据元素偏移，最后绘制出来全屏的，

    html2canvas(document.querySelector('.share-popup .content'), {
      canvas: canvas2,
      useCORS: true, // 允许图片跨域
      width: 584, // 绘制图片的宽 2倍
      dpi: window.devicePixelRatio * 2, // dpi  如果模糊的话 就把dpi和scale缩放的值调大 dpi越高生成的图片越大
      height: 1188 // 绘制图片的高 2倍
    }).then(function (canvas) {
      // $('.share-canvas').css('display', 'block').attr('src', canvas.toDataURL())
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
body {
  .one-yuan-popup {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 501;

    .light-box {
      display: block;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.85);
      cursor: pointer;
    }
    .content {
      position: relative;
      width: 77vw;
      height: 131vw;
      padding-top: 0;
      background: #fff;
      border-radius: 8px;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 1002;
      text-align: center;
    }
  }
}
</style>

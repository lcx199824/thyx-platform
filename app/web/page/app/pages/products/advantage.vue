<template>
  <div id="advantage">
    <div class="nav">
      <div class="cover"></div>
      <div class="main">
        <div class="container">
          <!-- <div class="here">当前位置：首页>配套产品>产品介绍</div> -->
          <div class="slogan">
            <h1>泰和印象产品三大优势</h1>
            <p>
              <span>完整方案</span>
              <span>设计延伸</span>
              <span>过程管理</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="intro">
      <div class="content">
        <div class="detail">
          <div class="text-left">
            <p class="title">完整方案</p>
            <p class="title-en">Complete schema</p>
            <div class="desc">
              a-全线产品：产品体系涵盖瓷砖、壁纸、地板、洁具、木作、设备等70多个国际国内一线品类约700余家。<br> a-全线产品：产品体系涵盖瓷砖、壁纸、地板、洁具、木作、设备等70多个国际国内一线品类约700余家。
              <br> a-全线产品：产品体系涵盖瓷砖、壁纸、地板、洁具、木作、设备等70多个国际国内一线品类约700余家。
              <br>
            </div>
            <div class="index-left">01</div>
          </div>
          <div class="pic-right" :style="backgroundImgStyle('/public/888.png')">
          </div>
        </div>
        <div class="detail">

          <div class="pic-left" :style="backgroundImgStyle('/public/999.png')">
          </div>
          <div class="text-right">
            <p class="title">设计延伸</p>
            <p class="title-en">Design extension</p>
            <div class="desc">
              a-全线产品：产品体系涵盖瓷砖、壁纸、地板、洁具、木作、设备等70多个国际国内一线品类约700余家。<br> a-全线产品：产品体系涵盖瓷砖、壁纸、地板、洁具、木作、设备等70多个国际国内一线品类约700余家。
              <br> a-全线产品：产品体系涵盖瓷砖、壁纸、地板、洁具、木作、设备等70多个国际国内一线品类约700余家。
              <br>
            </div>
            <div class="index-right">02</div>
          </div>
        </div>
        <div class="detail">
          <div class="text-left">
            <p class="title">过程管理</p>
            <p class="title-en">Process management service</p>
            <div class="desc">
              a-全线产品：产品体系涵盖瓷砖、壁纸、地板、洁具、木作、设备等70多个国际国内一线品类约700余家。<br> a-全线产品：产品体系涵盖瓷砖、壁纸、地板、洁具、木作、设备等70多个国际国内一线品类约700余家。
              <br> a-全线产品：产品体系涵盖瓷砖、壁纸、地板、洁具、木作、设备等70多个国际国内一线品类约700余家。
              <br>
            </div>
            <div class="index-left">03</div>
          </div>
          <div class="pic-right" :style="backgroundImgStyle('/public/888.png')">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backgroundImgStyle(image) {
      return {
        'background-image': `url(${image})`
      };
    },
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 325px;
  color: #fff;
  background-image: url('/public/advantage.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.1);
  }
  .main {
    display: flex;
    justify-content: center;
    .container {
      width: 65%;
      min-width: 1200px;
      .slogan {
        text-align: center;
        margin-top: 120px;
        span {
          margin: 0 10px;
          font-size: 20px;
        }
      }
    }
  }
}
.intro {
  display: flex;
  justify-content: center;
  .content {
    width: 65%;
    min-width: 1200px;
  }
  .detail {
    display: flex;
    margin: 30px 0;
    .text-right,
    .text-left {
      background-color: #f5f5f5;
      width: 350px;
      height: 500px;
      padding: 0 20px;
      position: relative;
      .title {
        font-size: 25px;
      }
      .title-en {
        color: #999;
      }
      .desc {
        color: #666;
        font-size: 14px;
        line-height: 30px;
      }
      .index-left,
      .index-right {
        position: absolute;
        color: #333;
        font-size: 25px;
        bottom: 30px;
      }
      .index-left {
        left: 20px;
      }
      .index-right {
        right: 20px;
      }
    }
    .text-right {
      text-align: right !important;
    }
    .pic-right,
    .pic-left {
      width: 850px;
      height: 500px;
      //   background-image: url("/public/888.png");
      position: relative;
      overflow: hidden;
    }
    .pic-right:after {
      content: '';
      position: absolute;
      height: 85px;
      width: 85px;
      display: block;
      top: -45px;
      right: -45px;
      background-color: #fff;
      transform: rotate(45deg);
    }
    .pic-left:after {
      content: '';
      position: absolute;
      height: 85px;
      width: 85px;
      display: block;
      top: -45px;
      left: -45px;
      background-color: #fff;
      transform: rotate(45deg);
    }
  }
}
</style>

<template>
  <div id="flow">
    <div class="nav">
      <div class="cover"></div>
      <div class="main">
        <div class="container">
          <!-- <div class="here">当前位置：首页>配套产品>服务流程</div> -->
          <div class="slogan">
            <h1>泰和印象家装产品服务流程</h1>
            <h4>
              专业家装产品服务人员全程为您服务
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="flow">
      <div class="wrapper">
        <div class="left">
          <div class="item">
            <h3>1.客户经理接待、客户沟通</h3>
            <div class="pic" :style="backgroundImgStyle('/public/flow1.png')"></div>
          </div>
          <div class="item">
            <h3>3.平面方案制作、产品方案制作</h3>
            <div class="pic" :style="backgroundImgStyle('/public/flow3.png')"></div>
          </div>
          <div class="item">
            <h3>5.确定工程产品交叉施工进场节点</h3>
            <div class="pic" :style="backgroundImgStyle('/public/flow5.png')"></div>
          </div>
          <div class="item">
            <h3>7.签订合同</h3>
            <div class="pic" :style="backgroundImgStyle('/public/flow7.png')"></div>
          </div>
        </div>
        <div class="right">
          <div class="item">
            <div class="pic" :style="backgroundImgStyle('/public/flow2.png')"></div>
            <h3>2.推荐设计师、家居设计师签设计协议、量房</h3>
          </div>
          <div class="item">
            <div class="pic" :style="backgroundImgStyle('/public/flow4.png')"></div>
            <h3>4.工程产品方案内部研讨</h3>
          </div>
          <div class="item">
            <div class="pic" :style="backgroundImgStyle('/public/flow6.png')"></div>
            <h3>6.客户工程产品方案确定</h3>
          </div>
          <div class="item">
            <div class="pic" :style="backgroundImgStyle('/public/flow8.png')"></div>
            <h3>8.客户交款</h3>
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
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 325px;
  color: #fff;
  background-image: url('/public/team.png');
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
      }
    }
  }
}
.flow {
  display: flex;
  justify-content: center;
  margin: 90px 0;
  .wrapper {
    width: 1200px;
    display: flex;
    .item {
      margin: 55px 0;
    }
    .pic {
      width: 525px;
      height: 300px;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .left,
    .right {
      width: 50%;
      h3 {
        position: relative;
      }
    }
    .left {
      border-right: 1px solid black;
      padding-right: 75px;

      h3 {
        text-align: right;
        padding-right: 14%;
      }
      h3:after {
        position: absolute;
        right: -16.2%;
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #e60012;
      }
    }
    .right {
      padding-left: 75px;

      h3:before {
        position: absolute;
        left: -16.2%;
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #e60012;
      }
    }
  }
}
</style>

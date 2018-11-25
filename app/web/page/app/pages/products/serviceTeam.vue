<template>
  <div id="team">
    <div class="nav">
      <div class="cover"></div>
      <div class="main">
        <div class="container">
          <!-- <div class="here">当前位置：首页>配套产品>服务团队</div> -->
          <div class="slogan">
            <h1>专业产品服务团队</h1>
            <h4>
              泰和印象甄选全球优质产品，保障您的家装品质
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="intro">
      <div class="wrapper">
        <div class="item" v-for="(item,index) in teamData" :key="index">
          <h2>{{item.title}}</h2>
          <p>
            <span>职责：</span>
            <span>{{item.duty}}</span>
          </p>
          <img :src="item.image" alt="">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      teamData: [
        {
          title: '项目经理',
          duty: '专业的方案制作，进场时间管理',
          image: '/public/t1.png'
        },
        {
          title: '木作设计师',
          duty: '木作产品的设计、出图、报价',
          image: '/public/flow3.png'
        },
        {
          title: '订单员',
          duty: '订单、追踪物流进程',
          image: '/public/clerk.png'
        },
        {
          title: '结算员',
          duty: '订货、退货相关结算',
          image: '/public/cashier.png'
        },
        {
          title: '产品监理',
          duty: '全程参与工程施工与产品安全规范',
          image: '/public/accept.png'
        },
        {
          title: '安装技工',
          duty: '专业技术与先进工具安装泰和产品',
          image: '/public/technitian.png'
        },
      ]
    };
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
.intro {
  display: flex;
  justify-content: center;
  .wrapper {
    width: 65%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-width: 1200px;
    margin-bottom: 30px;
    .item {
      margin: 20px 0;
      p {
        color: #808080;
        font-size: 16px;
      }
    }
  }
}
</style>

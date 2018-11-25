<template>
  <div id="introduce">
    <div class="nav">
      <div class="cover"></div>
      <div class="main">
        <div class="container">
          <!-- <div class="here">当前位置：首页>配套产品>产品介绍</div> -->
          <div class="slogan">
            <h1>好产品，成就好家装</h1>
            <h3>提供配套名牌产品，为客户提供最优质的服务</h3>
          </div>
        </div>
      </div>
      <div class="category">
        <ul>
          <li v-for="(item,index) in categories" :key="index" @click="view(index)" :class="{category_active:current===index}">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="wrapper">
        <div class="desc">
          <div class="left">
            <p>泰和印象进口瓷砖产品优势</p>
            <div class="txt">
              北京意德法家经贸有限公司主要经营陶瓷优质产区的瓷砖，为纯原装进口产品，每年两季的产品引入，跟随当季流行趋势引进最新产品，同步于国际，且为国内市场独有，仅在东易日盛全国设计门店有售。 引进欧洲七大瓷砖品牌，与国际顶级设计大师合作研发，开发具有复古的、高设计含量的、独特创新的陶瓷装饰方案；如意大利Piero Fornasetti皮埃罗•夫那斯提的飞行器、天使的微笑，荷兰Tord Boontje 托德• 布歇尔的花开时节，古巴Ruben Toledo 鲁本• 托莱多的伊莎贝尔、加勒比海的童年等大师系列作品，轻松将室内空间变成艺术的殿堂。 产品系列配套完善，融合欧州的历史文化与艺术元素，臻选经典搭配，从墙砖、大小腰线、花片、转角至地砖、地角、地线、配件砖等一应俱全，产品价格满足不同客户对空间多样化的需求，并由资深的产品家居设计师为客户量身定制产品方案，彰显客户品位的家居空间。
            </div>
          </div>
          <div class="right"></div>
        </div>
        <div class="filter">
          <div class="brand">产品品牌</div>
          <ul>
            <li class="all">全部</li>
            <li>VENUS</li>
            <li>IRIS</li>
            <li>HANDTRADE</li>
            <li>FAVRESA</li>
            <li>FAVRESA</li>
            <li>FAVRESA</li>
          </ul>
        </div>
        <div class="photos">
          <div class="wrap">
            <div class="main-pic" :style="backgroundImgStyle('http://img.dyrs.cc/store/212/092/000/71657287cdad8b3e.jpg!l')">
              <div class="series">麋鹿</div>
            </div>
            <div class="small-pic">
              <div class="pic" :style="backgroundImgStyle('http://img.dyrs.cc/store/213/092/000/61657287ce0d7183.jpg!mm')"></div>
              <div class="pic" :style="backgroundImgStyle('http://img.dyrs.cc/store/214/092/000/53057287ce5be68a.jpg!mm')"></div>
            </div>
          </div>
          <div class="wrap">
            <div class="main-pic" :style="backgroundImgStyle('http://img.dyrs.cc/store/212/092/000/71657287cdad8b3e.jpg!l')">
              <div class="series">麋鹿</div>
            </div>
            <div class="small-pic">
              <div class="pic" :style="backgroundImgStyle('http://img.dyrs.cc/store/213/092/000/61657287ce0d7183.jpg!mm')"></div>
              <div class="pic" :style="backgroundImgStyle('http://img.dyrs.cc/store/214/092/000/53057287ce5be68a.jpg!mm')"></div>
            </div>
          </div>
          <div class="wrap">
            <div class="main-pic" :style="backgroundImgStyle('http://img.dyrs.cc/store/212/092/000/71657287cdad8b3e.jpg!l')">
              <div class="series">麋鹿</div>
            </div>
            <div class="small-pic">
              <div class="pic" :style="backgroundImgStyle('http://img.dyrs.cc/store/213/092/000/61657287ce0d7183.jpg!mm')"></div>
              <div class="pic" :style="backgroundImgStyle('http://img.dyrs.cc/store/214/092/000/53057287ce5be68a.jpg!mm')"></div>
            </div>
          </div>
          <div class="wrap">
            <div class="main-pic" :style="backgroundImgStyle('http://img.dyrs.cc/store/212/092/000/71657287cdad8b3e.jpg!l')">
              <div class="series">麋鹿</div>
            </div>
            <div class="small-pic">
              <div class="pic" :style="backgroundImgStyle('http://img.dyrs.cc/store/213/092/000/61657287ce0d7183.jpg!mm')"></div>
              <div class="pic" :style="backgroundImgStyle('http://img.dyrs.cc/store/214/092/000/53057287ce5be68a.jpg!mm')"></div>
            </div>
          </div>
        </div>
        <div class="page">
          <pagination :pages="15" @pageChange="pageItemClick"></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from 'component/pagination';

export default {
  components: {
    pagination
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: '进口瓷砖类'
        },
        {
          id: 2,
          name: '国产瓷砖类'
        },
        {
          id: 3,
          name: '壁纸类'
        },
        {
          id: 4,
          name: '地板类'
        },
        {
          id: 5,
          name: '洁具类'
        }, {
          id: 6,
          name: '智能家居类'
        }
      ],
      current: 0
    };
  },
  methods: {
    view(index) {
      this.current = index;
    },
    backgroundImgStyle(image) {
      return {
        'background-image': `url(${image})`
      };
    },
    pageItemClick(page) {
      console.log(page);
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../../../assets/css/introduce.scss';
</style>


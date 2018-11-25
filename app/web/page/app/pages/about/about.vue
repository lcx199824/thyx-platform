<style lang="scss" scoped>
#about {
  display: flex;
  justify-content: center;
  .container {
    width: 1200px;
  }

  .content {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    .left {
      width: 280px;
      .top-active {
        color: #e60012;
      }
      .left-top {
        .option {
          width: 260px;
          height: 55px;
          line-height: 55px;
          padding: 0 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #e6e6e6;
          &:hover {
            cursor: pointer;
          }
          span {
            margin-left: 5px;
          }
        }
      }
      .left-bottom {
        border: 1px solid #e6e6e6;
        text-align: center;
        margin: 20px 0;
        padding-top: 20px;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  #about {
    display: flex;
    justify-content: center;
    .container {
      width: 100%;
    }

    .content {
      margin-top: 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .left {
        width: 100%;
        .top-active {
          color: #e60012;
        }
        .left-top {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          .option {
            width: 45%;
            height: 55px;
            line-height: 55px;
            padding: 0 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #e6e6e6;
            &:hover {
              cursor: pointer;
            }
            span {
              margin-left: 5px;
            }
          }
        }
        .left-bottom {
          display: none;
        }
      }
    }
  }
}
</style>
<template>
  <div id="about">
    <div class="container">
      <!-- <div class="here">当前位置：首页>了解我们
      </div> -->
      <div class="content">
        <div class="left">
          <div class="left-top">
            <router-link tag="div" class="option" to="/about/aboutUs" :class="{'top-active':page==='/about/aboutUs'}">
              <div>
                <img src="/public/about_us-active.png" alt="" v-if="page==='/about/aboutUs'">
                <img src="/public/about_us.png" alt="" v-else>
                <span>关于我们</span>
              </div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>
            <router-link tag="div" class="option" to="/about/devePath" :class="{'top-active':page==='/about/devePath'}">
              <div>
                <img src="/public/develop-active.png" alt="" v-if="page==='/about/devePath'">
                <img src="/public/develop.png" alt="" v-else>
                <span>发展历程</span>
              </div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>
            <router-link tag="div" class="option" to="/about/news" :class="{'top-active':page==='/about/news'}">
              <div>
                <img src="/public/news-active.png" alt="" v-if="page==='/about/news'">
                <img src="/public/news.png" alt="" v-else>
                <span>企业动态</span>
              </div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>
            <router-link tag="div" class="option" to="/about/culture" :class="{'top-active':page==='/about/culture'}">
              <div>
                <img src="/public/culture-active.png" alt="" v-if="page==='/about/culture'">
                <img src="/public/culture.png" alt="" v-else>
                <span style="margin-left:9px">企业文化</span>
              </div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>

          </div>
          <div class="left-bottom">
            <plan-bar></plan-bar>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import planBar from 'component/planBar';

export default {
  data() {
    return {
      current: 0,
      page: '/about/aboutUs'
    };
  },
  watch: {
    $route(to, from) {
      const tmp = to.path.split('/');
      if (tmp[1] === 'about' && tmp[2]) {
        this.page = to.path;
      }
    }
  },
  components: {
    planBar,
  },
  methods: {
    change(index) {
      this.current = index;
    },
    pageItemClick(page) {
      console.log(page);

    },
    backgroundImgStyle(image) {
      return {
        'background-image': `url(${image})`
      };
    },
  }
};
</script>


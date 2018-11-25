
<style lang="scss" scoped>
#process {
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
  #process {
    display: flex;
    justify-content: center;
    .container {
      width: 100%;
    }
    .content {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .left {
        width: 100%;
        .top-active {
          color: #e60012;
        }
        .left-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          .option {
            width: 46%;
            height: 55px;
            line-height: 55px;
            margin: 0 1px;
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
          // border: 1px solid #e6e6e6;
          // text-align: center;
          // margin: 20px 0;
          // padding-top: 20px;
          display: none;
        }
      }
    }
  }
}
</style>

<template>
  <div id="process">
    <div class="container">
      <div class="content">
        <div class="left">
          <div class="left-top">
            <router-link tag="div" class="option" to="/process/envmaterial" :class="{'top-active':page==='/process/envmaterial'}">
              <div>
                <img src="/public/construction-active.png" alt="" v-if="page==='/process/envmaterial'">
                <img src="/public/construction.png" alt="" v-else>
                <span>环保材料</span>
              </div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>
            <router-link tag="div" class="option" to="/process/construct" :class="{'top-active':page==='/process/construct'}">
              <div>
                <img src="/public/super-active.png" alt="" v-if="page==='/process/construct'">
                <img src="/public/super.png" alt="" v-else>
                <span>精湛工艺</span>
              </div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>
            <router-link tag="div" class="option" to="/process/strictAccept" :class="{'top-active':page==='/process/strictAccept'}">
              <div>
                <img src="/public/strict-active.png" alt="" v-if="page==='/process/strictAccept'">
                <img src="/public/strict.png" alt="" v-else>
                <span>严苛验收</span>
              </div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>
            <router-link tag="div" class="option" to="/process/fineSite" :class="{'top-active':page==='/process/fineSite'}">
              <div>
                <img src="/public/site-active.png" alt="" v-if="page==='/process/fineSite'">
                <img src="/public/site.png" alt="" v-else>
                <span>精品工地</span>
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
      page: '/process/envmaterial'
    };
  },
  watch: {
    $route(to, from) {
      const tmp = to.path.split('/');
      if (tmp[1] === 'process' && tmp[2]) {
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


<style lang="scss" scoped>
.right {
  width: 100%;
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    border: 1px solid #e6e6e6;
    margin: 30px 0;
    .top {
      text-align: center;
      p {
        color: #a9a9a9;
        font-size: 15px;
        .detail {
          margin: 0 5px;
        }
      }
    }
    .main {
      // width: ;
      // margin: 30px 50px;
      display: flex;
      padding: 0 20px;
      justify-content: center;
      .wrapper {
        .desc {
          color: #666666;
          font-size: 16px;
          line-height: 30px;
        }
        .images {
          text-align: center;
          margin: 15px 0;
          img {
            width: 640px;
          }
        }
      }
    }
    .bottom {
      text-align: center;
      border-top: 1px solid #e6e6e6;
      height: 100px;
      line-height: 100px;
      margin-top: 10px;
      font-size: 15px;
      display: flex;
      justify-content: space-between;
      .item {
        width: 46%;
        margin: 0 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        .title {
          min-width: 90px;
        }
        .case-name {
          // display: inline-block;
          color: #a9a9a9;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .insert {
        border-left: 1px solid #e6e6e6;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .right {
    width: 100%;
    display: flex;
    justify-content: center;
    .content {
      width: 90%;
      // border: 1px solid #e6e6e6;
      border: none;
      .top {
        text-align: center;
        p {
          color: #a9a9a9;
          font-size: 15px;
          .detail {
            margin: 0 2px;
          }
          .from {
            display: none;
          }
        }
      }
      .main {
        // width: ;
        // margin: 30px 50px;
        display: flex;
        padding: 0 5px;
        justify-content: center;
        .wrapper {
          .desc {
            color: #666666;
            font-size: 16px;
            line-height: 30px;
          }
          .images {
            text-align: center;
            margin: 15px 0;
            img {
              width: 640px;
            }
          }
        }
      }
      .bottom {
        text-align: center;
        border-top: 1px solid #e6e6e6;
        height: 100px;
        line-height: 100px;
        margin-top: 10px;
        font-size: 15px;
        display: flex;
        justify-content: space-between;
        .item {
          width: 46%;
          margin: 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          .title {
            min-width: 90px;
          }
          .case-name {
            // display: inline-block;
            color: #a9a9a9;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:hover {
              cursor: pointer;
            }
          }
        }
        .insert {
          border-left: 1px solid #e6e6e6;
        }
      }
    }
  }
}
</style>

<template>
  <div class="right">
    <div class="content">
      <loading v-show="!loaded"></loading>
      <div v-show="loaded">
        <div class="top">
          <h2>{{article.title}}</h2>
          <p>
            <span class="detail from">
              <span>来源:</span>
              <span>{{article.from}}</span>
            </span>
            <span class="detail">
              <span>浏览人数:</span>
              <span>{{article.readnum}}人</span>
            </span>
            <span class="detail">
              <span>更新时间:</span>
              <span>{{article.create}}</span>
            </span>
          </p>
        </div>
        <div class="main">
          <div class="wrapper">
            <!-- <div class="desc">{{article.intro}}</div> -->
            <div class="images" v-html="article.detail">
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="item">
            <div class="title">上一篇文章：</div>
            <div class="case-name" v-if="article.preid===0">无</div>
            <router-link tag="div" :to="{name:'guideDetail',params: {id:article.preid}}" class="case-name" v-else>
              {{article.prename}}
            </router-link>
          </div>
          <div class="insert"></div>
          <div class="item">
            <div class="title">下一篇文章：</div>
            <div class="case-name" v-if="article.nextid===0">无</div>
            <router-link tag="div" :to="{name:'guideDetail',params: {id:article.nextid}}" class="case-name" v-else>
              {{article.nextname}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticalDetail } from '@/api/data'
import loading from 'component/loading';

export default {
  created() {
    const id = this.$route.params.id;
    if (id) {
      getArticalDetail({ id }).then(res => {
        if (res) {
          console.log(res);

          this.article = res;
          this.loaded = true;
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      const id = this.$route.params.id;
      if (id) {
        getArticalDetail({ id }).then(res => {
          console.log(res);
          if (res) {
            this.article = res;
            this.loaded = true;
          }
        });
      }
    }
  },
  data() {
    return {
      article: {},
      loaded: false
    }
  },
  components: {
    loading
  },
  methods: {
    bgImgStyle(image) {
      return {
        'background-image': `url(${image})`
      };
    },
  }
}
</script>



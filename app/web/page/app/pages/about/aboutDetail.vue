<style lang="scss" scoped>
.right {
  width: 900px;
  border: 1px solid #e6e6e6;
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
    width: 800px;
    margin: 30px 50px;
    .desc {
      color: #666666;
      font-size: 16px;
      line-height: 30px;
    }
    .images {
      text-align: center;
      margin: 15px 0;
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
      }
    }
    .insert {
      border-left: 1px solid #e6e6e6;
    }
  }
}
@media only screen and (max-width: 600px) {
  .right {
    width: 100%;
    border: 1px solid #e6e6e6;
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
      width: 100%;
      margin: 0;
      .desc {
        color: #666666;
        font-size: 16px;
        line-height: 30px;
      }
      .images {
        text-align: center;
        margin: 15px 0;
      }
    }
    .bottom {
      text-align: center;
      border-top: 1px solid #e6e6e6;
      height: 60px;
      line-height: 60px;
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
        }
      }
      .insert {
        border-left: 1px solid #e6e6e6;
      }
    }
  }
}
</style>

<template>
  <div class="right">
    <loading v-show="!loaded"></loading>
    <div v-show="loaded">
      <div class="top">
        <h2>{{article.title}}</h2>
        <p>
          <span class="detail">
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
        <div class="desc">{{article.intro}}</div>
        <div class="images" v-html="article.detail">
        </div>
      </div>
      <div class="bottom">
        <div class="item">
          <div class="title">上一篇文章：</div>
          <router-link tag="div" :to="{name:'guideDetail',params: {id:article.preid}}" class="case-name">
            {{article.prename}}
          </router-link>
        </div>
        <div class="insert"></div>
        <div class="item">
          <div class="title">下一篇文章：</div>
          <router-link tag="div" :to="{name:'guideDetail',params: {id:article.nextid}}" class="case-name">
            {{article.nextname}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticalDetail } from '@/api/data';
import loading from 'component/loading';

export default {
  created() {
    const id = this.$route.params.id;
    if (id) {
      getArticalDetail({ id }).then(res => {
        if (res) {
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
    };
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
};
</script>



<template>
  <loading v-if="!loaded"></loading>
  <div class="right" v-else>
    <div class="top">
      <h2>{{activity.title}}</h2>
      <p>
        <span class="detail from">
          <span>来源:</span>
          <span>{{activity.from}}</span>
        </span>
        <span class="detail">
          <span>浏览人数:</span>
          <span>{{activity.readnum}}人</span>
        </span>
        <span class="detail">
          <span>更新时间:</span>
          <span>{{activity.updatetime | formatDate}}</span>
        </span>
      </p>
    </div>
    <div class="main">
      <div class="desc">{{activity.intro}}</div>
      <div class="images" v-html="activity.detail">
      </div>
    </div>
    <!-- <div class="bottom">
      <span class="item">
        <span>上一篇文章：</span>
        <router-link :to="{name:'ActivityDetail',params: {id:activity.preid}}">
          <span class="case-name">{{activity.prename}}</span>
        </router-link>
      </span>
      <span class="item insert"></span>
      <span class="item">
        <span>下一篇文章：</span>
        <router-link :to="{name:'ActivityDetail',params: {id:activity.nextid}}">
          <span class="case-name">{{activity.nextname}}</span>
        </router-link>
      </span>
    </div> -->
  </div>
</template>

<script>
import planBar from 'component/planBar';
import loading from 'component/loading';
import { getArticalDetail } from '@/api/data';

export default {
  components: {
    planBar,
    loading
  },
  filters: {
    formatDate(value) {
      const date = new Date(parseInt(value) * 1000);
      const y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? ('0' + MM) : MM;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let m = date.getMinutes();
      m = m < 10 ? ('0' + m) : m;
      let s = date.getSeconds();
      s = s < 10 ? ('0' + s) : s;
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    }
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      getArticalDetail({ id }).then(res => {
        console.log(res);
        if (res) {
          this.loaded = true;
          this.activity = res;
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      const id = this.$route.params.id;
      // console.log(id);
      if (id) {
        getArticalDetail({ id }).then(res => {
          console.log(res);
          if (res) {
            this.activity = res;
          }
        });
      }
    }
  },
  data() {
    return {
      show: { type: Number },
      activity: {},
      loaded: false,
    };
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

<style lang="scss" scoped>
.right {
  .no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    height: 500px;
  }
  width: 900px;
  border: 1px solid #e6e6e6;
  margin-bottom: 20px;
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
      display: flex;
      flex-wrap: wrap;
      .img {
        width: 800px;
        height: 500px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
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
    .item {
      margin: 0 30px;
      .case-name {
        color: #a9a9a9;
      }
    }
    .insert {
      border-left: 1px solid #e6e6e6;
    }
  }
}
@media only screen and (max-width: 600px) {
  .right {
    .no-data {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      height: 500px;
    }
    width: 99%;
    border: 1px solid #e6e6e6;
    margin-bottom: 20px;
    .top {
      text-align: center;
      .from {
        display: none;
      }
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
      margin: 0px;
      display: flex;
      justify-content: center;
      .desc {
        color: #666666;
        font-size: 16px;
        line-height: 30px;
      }
      .images {
        width: 85%;
        text-align: center;
        margin: 5px 0;
        display: flex;
        flex-wrap: wrap;
        p {
          margin: 5px;
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
      .item {
        margin: 0 30px;
        .case-name {
          color: #a9a9a9;
        }
      }
      .insert {
        border-left: 1px solid #e6e6e6;
      }
    }
  }
}
</style>

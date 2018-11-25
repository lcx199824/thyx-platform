<style lang="scss" scoped>
.right {
  width: 1200px;
  margin-left: 15px;

  .no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    height: 500px;
  }

  .right-list {
    width: 97%;
    height: 200px;
    padding: 15px;
    border: 1px solid #e6e6e6;
    .img {
      // display: inline-block;
      width: 260px;
      height: 180px;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .link {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .info {
      // display: inline-block;
      height: 200px;
      width: 600px;
      position: relative;
      text-align: left;
      .desc {
        color: #666;
        font-size: 15px;
        line-height: 30px;
      }
      .date {
        position: absolute;
        color: #666;
        font-size: 15px;
        bottom: 20px;
        .type {
          font-weight: 800;
          color: #333;
          margin-right: 20px;
        }
      }
    }
  }
  .page {
    text-align: center;
    margin: 30px 0;
  }
}

@media only screen and (max-width: 600px) {
  .right {
    width: 100%;
    margin-left: 0px;
    .right-list {
      width: 96%;
      height: auto;
      padding: 5px;
      margin: 10px 0;
      border: 1px solid #e6e6e6;

      .link {
        width: 100%;
        height: 110px;
        display: flex;
        height: auto;
        // flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
      .img {
        width: 50%;
        margin-right: 10px;
        height: 105px;
        background-size: cover;
        background-repeat: no-repeat;
        vertical-align: middle;
      }
      .info {
        vertical-align: middle;
        height: 105px;
        width: 72%;
        position: relative;
        h3 {
          margin: 5px 0;
          font-size: 15px;
        }
        .desc {
          display: none;
          color: #666;
          font-size: 15px;
          width: 198px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .date {
          width: 100%;
          display: block;
          position: relative;
          color: #666;
          font-size: 15px;
          position: absolute;
          bottom: 0;
          left: 0;
          .update-time {
            margin: 5px 0;
          }
          span {
            display: block;
            margin: 10px 0;
          }
        }
      }
    }
    .page {
      text-align: center;
      margin: 30px 0;
    }
  }
}
</style>
<template>
  <loading v-if="!loaded"></loading>
  <div class="right" v-else>

    <div class="no-data" v-if="!listData.length">
      <p> 暂无数据...</p>
    </div>
    <div v-else>
      <div class="right-list" v-for="(item,index) in listData" :key="index">
        <router-link :to="{name:'guideDetail',params: {id:item.id}}" class="link">
          <div class="img" :style="backgroundImgStyle(`http://wxoss.skywen.cn/${item.img}`)"></div>
          <div class="info">
            <h3>{{item.title}}</h3>
            <div class="desc">{{item.intro}}</div>
            <div class="date">
              <span>发布时间：</span>
              <span>{{item.updatetime | formatDate}}</span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="page">
        <pagination :pages="total" @pageChange="pageItemClick"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import loading from 'component/loading';
import pagination from 'component/pagination';
import { getArticles } from '@/api/data';

export default {
  created() {
    getArticles({ id: 17 }).then(res => {
      console.log(res);
      if (res) {
        this.loaded = true;
        this.listData = res.data;
        this.total = Math.ceil(parseInt(res.count) / 10);
      }
    });
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
    },
  },
  data() {
    return {
      current: 0,
      listData: [],
      loaded: false,
      total: 1
    };
  },
  components: {
    pagination,
    loading
  },
  methods: {
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




<template>
  <div class="right">
    <div class="no-data" v-if="!detailData.length">
      <p> 暂无数据...</p>
    </div>
    <div v-else>
      <div class="detail" v-for="(item,index) in detailData" :key="index">
        <router-link :to="{name:'ActivityDetail',params: {id:item.id}}" class="link">
          <div class="img" :style="backgroundImgStyle(item.photo)"></div>
        </router-link>
        <div class="info">
          <h3>{{item.title}}</h3>
          <div class="desc">{{item.desc}}</div>
          <div class="date">
            <span>发布时间：</span>
            <span>{{item.date}}</span>
          </div>
        </div>
      </div>
      <div class="page">
        <pagination :pages="15" @pageChange="pageItemClick"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from 'component/pagination';

export default {
  data() {
    return {
      current: 0,
      detailData: []
    };
  },
  components: {
    pagination
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

<style lang="scss" scoped>
.right {
  width: 900px;
  .no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    height: 500px;
  }
  .detail {
    width: 870px;
    height: 200px;
    padding: 15px;
    border: 1px solid #e6e6e6;
    .img {
      display: inline-block;
      width: 260px;
      height: 180px;
      background-size: cover;
      background-repeat: no-repeat;
      vertical-align: middle;
    }
    .info {
      display: inline-block;
      vertical-align: middle;
      height: 200px;
      width: 590px;
      margin-left: 10px;
      position: relative;
      .desc {
        color: #666;
        font-size: 15px;
      }
      .date {
        position: absolute;
        color: #666;
        font-size: 15px;
        bottom: 20px;
      }
    }
  }
  .page {
    text-align: center;
    margin: 30px 0;
  }
}
</style>


<template>
  <div>
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
import pagination from '@/component/pagination';

export default {
  components: {
    pagination
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
  props: {
    listData: { type: Array, default: function () { return [] } },
    total: Number
  },
  methods: {
    backgroundImgStyle(image) {
      return {
        'background-image': `url(${image})`
      };
    },
    pageItemClick(page) {
      console.log(page);
    },

  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/prepare.scss';
.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 500px;
}
</style>


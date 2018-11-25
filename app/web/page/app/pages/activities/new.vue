<template>
  <loading v-if="!loaded"></loading>
  <div class="right" v-else>
    <div class="no-data" v-if="!newActivities.length">
      <p> 暂无数据...</p>
    </div>
    <div v-else>
      <div class="new">
        <div class="new-activity" v-for="(item,index) in newActivities" :key="index">
          <router-link :to="{name:'ActivityDetail',params: {id:item.id}}" class="link">
            <div class="img" :style="backgroundImgStyle(`http://wxoss.skywen.cn/${item.img}`)"></div>
          </router-link>
          <div class="activity-info">
            <div class="info-top">
              <h3>{{item.title}}</h3>
              <!-- <p>{{item.desc}}</p> -->
            </div>
            <div class="info-bottom">
              <p class="place">
                <span>活动地点：</span>
                <span>{{item.act_address}}</span>
              </p>
              <p>
                <span>活动时间：</span>
                <span>{{item.act_time}}</span>

              </p>
              <p>
                <span>咨询热线：</span>
                <span class="tel">{{item.act_phone}}</span>
              </p>
              <div class="buttons">
                <router-link :to="{name:'Quotation'}" class="link">
                  <span class="online-consult">在线咨询</span>
                </router-link>
                <router-link :to="{name:'ActivityDetail',params: {id:item.id}}" class="link">
                  <span class="view-more">查看详情</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page">
        <pagination :pages="totalpage" @pageChange="pageItemClick"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import planBar from 'component/planBar';
import pagination from 'component/pagination';
import loading from 'component/loading';
import { getArticles } from '@/api/data';

export default {
  created() {
    getArticles({ id: 1 }).then(res => {
      // console.log(res);
      if (res) {
        this.loaded = true;
        this.newActivities = res.data;
        this.totalpage = Math.ceil(parseInt(res.count) / 20);
      }
    });
  },
  components: {
    planBar,
    pagination,
    loading
  },
  data() {
    return {
      newActivities: [],
      totalpage: 1,
      loaded: false
    };
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
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/css/activities.scss";
.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 500px;
}
</style>


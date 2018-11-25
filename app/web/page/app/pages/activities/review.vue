<template>
  <loading v-if="!loaded"></loading>
  <div class="right" v-else>
    <div class="no-data" v-if="!reviewActivities.length">
      <p> 暂无数据...</p>
    </div>
    <div v-else>
      <div class="review">
        <div class="review-activity" v-for="(item,index) in reviewActivities" :key="index">
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
    getArticles({ id: 2 }).then(res => {
      if (res) {
        this.loaded = true;
        this.reviewActivities = res.data;
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
      totalpage: 1,
      loaded: false,
      reviewActivities: [
        // {
        //   id: 1,
        //   title: 'titletitletitletitletitletitletitletitletitletitle',
        //   desc: 'descdescdescdescdescdescdescdescdesc',
        //   date: '2018-10-31',
        //   photo: 'http://wx.skywen.cn/attachment/images/164/2018/10/Ohz5i56W5cB7Ze5Ez5iHHg55779rJ5.jpg'
        // }
      ]
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
    storage(category) {
      sessionStorage.setItem('activity', JSON.stringify(category));
    }
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


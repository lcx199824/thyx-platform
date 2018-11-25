<template>
  <div id="activities">
    <div class="container">
      <div class="content">
        <div class="left">
          <div class="left-top">
            <router-link tag="div" class="option" to="/activities/new" :class="{'ac-active':page==='/activities/new'}">
              <div>
                <img src="/public/new-active.png" alt="" v-if="page==='/activities/new'">
                <img src="/public/new.png" alt="" v-else>
                <span>最新活动</span>
              </div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>
            <router-link tag="div" class="option" to="/activities/review" :class="{'ac-active':page==='/activities/review'}">
              <div>
                <img src="/public/review-active.png" alt="" v-if="page==='/activities/review'">
                <img src="/public/review.png" alt="" v-else>
                <span class="less">活动回顾</span>
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
import pagination from 'component/pagination';

export default {
  components: {
    planBar,
    pagination
  },
  data() {
    return {
      page: '/activities/new'
    };
  },
  watch: {
    $route(to, from) {
      const tmp = to.path.split('/');
      if (tmp[1] === 'activities' && tmp[2]) {
        this.page = to.path;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/css/activities.scss";
.ac-active {
  color: #e60012;
}
</style>

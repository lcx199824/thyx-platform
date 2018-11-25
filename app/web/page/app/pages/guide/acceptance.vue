<template>
  <div class="right">
    <loading v-if="!loaded"></loading>
    <right-list :listData='rightData' :total='totalpage' v-else></right-list>
  </div>
</template>

<script>
import loading from 'component/loading';
import rightList from 'component/rightList';
import { getArticles } from '@/api/data';

export default {
  created() {
    getArticles({ id: 11 }).then(res => {
      // console.log(res);
      if (res) {
        this.loaded = true;
        this.rightData = res.data;
        this.totalpage = Math.ceil(parseInt(res.count) / 8);
      }
    });
  },
  components: {
    rightList,
    loading
  },
  data() {
    return {
      rightData: [],
      totalPage: 1,
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
@import '../../../../assets/css/prepare.scss';
</style>



<template>
  <div class="right">
    <loading v-if="!loaded"></loading>
    <right-list :listData='rightData' :total='totalpage' v-else></right-list>
  </div>
</template>

<script>
import loading from 'component/loading';
import rightList from 'component/rightList';
import { getArticles, jzarticle } from '@/api/data'

export default {
  created() {
    getArticles({ id: 7 }).then(res => {
      if (res) {
        // console.log(res);

        this.loaded = true;
        this.rightData = res.data;
        this.totalpage = Math.ceil(parseInt(res.count) / 8);
      }
    })
    jzarticle({ page: 1 }).then(res => {
      console.log(res);
    })
  },
  components: {
    rightList,
    loading
  },
  data() {
    return {
      rightData: [],
      totalpage: 1,
      loaded: false
    }
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
@import "../../../../assets/css/prepare.scss";
</style>



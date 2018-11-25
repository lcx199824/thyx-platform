<template>
  <div class="right">
    <loading v-if="!loaded"></loading>
    <right-list :listData='rightData' :total='totalpage' v-else></right-list>
  </div>
</template>

<script>
import loading from 'component/loading';
import rightList from 'component/rightList';
import { getArticles } from '@/api/data'

export default {
  created() {
    getArticles({ id: 12 }).then(res => {
      // console.log(res);
      if (res) {
        this.loaded = true;
        this.rightData = res.data;
        this.totalpage = Math.ceil(parseInt(res.count) / 8);
      }
    })
  },
  components: {
    rightList,
    loading
  },
  filters: {
    formatDate: function (value) {
      let date = new Date(parseInt(value) * 1000);
      let y = date.getFullYear();
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



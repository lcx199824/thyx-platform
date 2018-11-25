<template>
  <loading v-if="!loaded"></loading>
  <right-intro :detailData='detailData' v-else></right-intro>
</template>

<script>
import loading from 'component/loading';
import rightIntro from 'component/rightIntro';
import { getArticles } from '@/api/data';

export default {
  created() {
    getArticles({ id: 4 }).then(res => {
      // console.log(res.data);
      if (res) {
        this.loaded = true;
        if (res.data instanceof Array) {
          this.detailData = {};
        } else {
          this.detailData = res.data;
        }
      }
    });
  },
  data() {
    return {
      detailData: {},
      loaded: false
    };
  },
  components: {
    rightIntro,
    loading
  },
};
</script>



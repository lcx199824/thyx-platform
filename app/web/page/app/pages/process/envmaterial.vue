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
    getArticles({ id: 3 }).then(res => {
      if (res) {
        // console.log(res);
        this.loaded = true;
        if (res.data) {
          this.detailData = res.data;
        } else {
          this.detailData = {};
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



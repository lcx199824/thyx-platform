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
    getArticles({ id: 5 }).then(res => {
      if (res) {
        this.loaded = true;
        if (res.data instanceof Array) {
          this.detailData = null;
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


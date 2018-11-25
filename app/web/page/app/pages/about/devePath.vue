<template>
  <loading v-if="!loaded"></loading>
  <right-intro :detailData='detail' v-else></right-intro>
</template>

<script>
import loading from 'component/loading';
import { getArticles } from '@/api/data';
import rightIntro from 'component/rightIntro';

export default {
  created() {
    getArticles({ id: 16 }).then(res => {
      // console.log(res);
      if (res) {
        this.loaded = true;
        this.detail = res.data;
      }
    });
  },
  data() {
    return {
      detail: {},
      loaded: false
    };
  },
  components: {
    rightIntro,
    loading
  }
};
</script>

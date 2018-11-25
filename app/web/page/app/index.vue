<template>
  <Layout :title="seo.title" :description="seo.description" :keywords="seo.keywords">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </Layout>
</template>
<script type="text/babel">
import Layout from 'component/layout/app/index.vue';
import { mapState, mapMutations } from 'vuex';
import { getSeo } from '@/api/data';
export default {
  computed: {
    ...mapState(['seoData']),
    seo() {
      const currentUrl = this.$route.path;
      // console.log(this.$route.path);
      for (const i in this.seoData) {
        if (this.seoData[i].url === currentUrl) {
          return this.seoData[i];
        }
      }
      return {};
    },
    isNode() {
      return EASY_ENV_IS_NODE;
    }
  },
  components: {
    Layout
  },
};
</script>

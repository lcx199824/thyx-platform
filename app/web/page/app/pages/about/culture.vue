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
    getArticles({ id: 18 }).then(res => {
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
<style lang="scss" scoped>
.right {
  .no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    height: 500px;
  }
  width: 900px;
  border: 1px solid #e6e6e6;
  margin-bottom: 20px;
  .top {
    text-align: center;
    p {
      color: #a9a9a9;
      font-size: 15px;
      .detail {
        margin: 0 5px;
      }
    }
  }
  .main {
    width: 800px;
    margin: 30px 50px;
    .desc {
      color: #666666;
      font-size: 16px;
      line-height: 30px;
    }
    .images {
      text-align: center;
      margin: 15px 0;
    }
  }
  .bottom {
    text-align: center;
    border-top: 1px solid #e6e6e6;
    height: 100px;
    line-height: 100px;
    margin-top: 10px;
    font-size: 15px;
    .item {
      margin: 0 30px;
      .case-name {
        color: #a9a9a9;
      }
    }
    .insert {
      border-left: 1px solid #e6e6e6;
    }
  }
}
</style>

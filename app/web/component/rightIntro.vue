<style lang="scss" scoped>
.right-intro {
  width: 900px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  border: 1px solid #e6e6e6;
  .no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    height: 500px;
  }
  .data-loaded {
    width: 86%;
  }
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
    width: 100%;
    .desc {
      color: #666666;
      font-size: 16px;
      line-height: 30px;
    }
    .images {
      text-align: center;
      margin: 15px 0;
      img {
        width: 100%;
        height: 600px;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .right-intro {
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #e6e6e6;

    .no-data {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      height: 500px;
    }
    .data-loaded {
      width: 78%;
    }
    .top {
      text-align: center;
      p {
        color: #a9a9a9;
        font-size: 15px;
        .detail {
          margin: 0 5px;
        }
        .from {
          display: none;
        }
      }
    }
    .main {
      width: 90%;
      margin: 30px 20px;
      .desc {
        color: #666666;
        font-size: 16px;
        line-height: 30px;
      }
      .images {
        text-align: center;
        margin: 15px 0;
        img {
          width: 100%;
          height: 282px;
        }
      }

      .detail {
        // border: 1px solid black;
        overflow: hidden;
        img {
          width: 100%;
          display: none;
        }
      }
    }
  }
}
</style>
<template>
  <div class="right-intro">
    <div class="no-data" v-if="detailData.detail===''">
      <p> 暂无数据...</p>
    </div>
    <div v-else class="data-loaded">
      <div class="top">
        <h2>{{detailData.title}}</h2>
        <p>
          <span class="detail from">
            <span>来源:</span>
            <span>北京泰合印象</span>
          </span>
          <span class="detail">
            <span>浏览人数:</span>
            <span>{{detailData.readnum}}人</span>
          </span>
          <span class="detail">
            <span>更新时间:</span>
            <span>{{detailData.updatetime | formatDate}}</span>
          </span>
        </p>
      </div>
      <div class="main">
        <div class="desc">{{detailData.intro}}</div>
        <div class="images">
          <img :src="`http://wxoss.skywen.cn/${detailData.img}`" alt="" />
          <span v-html="detailData.detail"></span>
        </div>
        <!-- <div class="detail" v-html="detailData.detail"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailData: { type: Object, default: function () { return {} } }
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
}
</script>




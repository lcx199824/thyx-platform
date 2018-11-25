<template>
  <div id="guide">
    <div class="container">
      <!-- <div class="here">当前位置：首页>家装指南>家装准备</div> -->
      <div class="content">
        <div class="left">
          <div class="left-top">
            <router-link tag="div" :to="item.url" class="option" v-for="(item,index) in children" :key="index" :class="{'left-active':item.url===page}">
              <span>{{item.name}}</span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </router-link>
          </div>
        </div>
        <!-- <router-view></router-view> -->
        <div class="right">
          <loading v-if="!loaded"></loading>
          <div v-else>
            <div class="no-data" v-if="!listData.length">
              <p> 暂无数据...</p>
            </div>
            <div v-else>
              <div class="right-list" v-for="(item,index) in listData" :key="index">
                <router-link :to="{name:'guideDetail',params: {id:item.id}}" class="link">
                  <div class="img" :style="backgroundImgStyle(`http://wxoss.skywen.cn/${item.img}`)"></div>
                  <div class="info">
                    <h3>{{item.title}}</h3>
                    <div class="desc">{{item.intro}}</div>
                    <div class="date">
                      <span class="type">{{item.typename}}</span>
                      <span class="update-time">{{item.updatetime | formatDate}}</span>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="page">
                <pagination :pages="total" @pageChange="pageItemClick"></pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from 'component/loading';
import pagination from 'component/pagination';
import { jzarticle } from '@/api/data';


export default {
  components: {
    pagination,
    loading
  },
  created() {
    jzarticle({ page: 1 }).then(res => {
      if (res) {
        this.loaded = true;
        this.listData = res.data;
        this.total = Math.ceil(parseInt(res.count) / 10);
      }
    });
  },
  data() {
    return {
      children: [
        {
          url: '/guide/prepare',
          name: '装修准备'
        },
        {
          url: '/guide/design',
          name: '装修设计'
        },
        {
          url: '/guide/material',
          name: '装修材料'
        },
        {
          url: '/guide/construction',
          name: '装修施工'
        },
        {
          url: '/guide/acceptance',
          name: '装修验收'
        },
        {
          url: '/guide/decoration',
          name: '家居装饰'
        },
        {
          url: '/guide/raiders',
          name: '装修攻略'
        },
        {
          url: '/guide/envprotect',
          name: '环保装修'
        },
      ],
      page: '/guide/prepare',
      listData: [],
      total: 1,
      loaded: false
    };
  },
  filters: {
    formatDate(value) {
      const date = new Date(parseInt(value) * 1000);
      const y = date.getFullYear();
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
    },
  },
  watch: {
    $route(to, from) {
      const tmp = to.path.split('/');
      if (tmp[1] === 'guide' && tmp[2]) {
        this.page = to.path;
      }
    }
  },
  methods: {
    backgroundImgStyle(image) {
      return {
        'background-image': `url(${image})`
      };
    },
    pageItemClick(page) {
      jzarticle({ page }).then(res => {
        if (res) {
          this.loaded = true;
          this.listData = res.data;
          this.total = Math.ceil(parseInt(res.count) / 10);
        }
      });
    },

  },
};
</script>

<style lang="scss" scoped>
@import '../../../../assets/css/guide.scss';
@import '../../../../assets/css/prepare.scss';
.left-active {
  color: #e60012;
}
.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 500px;
}
</style>



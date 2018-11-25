<template>
  <div id="case">
    <div class="container">
      <sort-list :styleFromIndex='fgid' :houseStyles="houseStyles" :decorStyles="decorStyles" :spaceStyles="spaceStyles" :places="places" @houseStyleChange="houseStyleClick" @decorChange="decorClick" @areaChange="areaClick" @departChange="departClick"></sort-list>
      <div class="filter-bar" ref="filter" :class="{fixed:fix===true}">
        <div class="filter">
          <div class="shift">当前筛选：</div>
          <div class="select">
            <select v-model="hxid">
              <option value="0">全部户型</option>
              <option v-for="item in houseStyles" :key="item.tid" v-bind:value="item.tid">{{item.tname}}</option>
            </select>
          </div>
          <div class="and">+</div>
          <div class="select">
            <select v-model="fgid">
              <option value="0">全部风格</option>
              <option v-for="item in decorStyles" :key="item.tid" v-bind:value="item.tid">{{item.tname}}</option>
            </select>
          </div>
          <div class="and">+</div>
          <div class="select">
            <select v-model="mjid">
              <option value="0">全部面积</option>
              <option v-for="item in spaceStyles" :key="item.tid" v-bind:value="item.tid">{{item.tname}}</option>
            </select>
          </div>
          <!-- <div class="and">+</div>
          <div class="select">
            <select v-model="dpid">
              <option value="0">全部城市</option>
              <option v-for="item in places" :key="item.tid" v-bind:value="item.tid">{{item.tname}}</option>
            </select>
          </div> -->
          <div class="all-cases">共找到
            <span>{{count}}</span> 套装修案例</div>
        </div>
        <div class="search">
          <input type="text" placeholder="关键词" v-model="key">
          <div class="search-btn" @click="searchCases">搜案例</div>
        </div>
      </div>
      <div class="case-list">
        <div class="case-wrapper" v-for="(item,index) in casesData" :key="index">
          <div class="case">
            <router-link :to="{name:'CaseDetail',params: {id:item.exampleid}}" class="link">
              <div class="image" :style="backgroundImgStyle(`http://wxoss.skywen.cn/${item.img}`)"></div>
              <div class="intro">
                <div class="intro-bar">
                  <div class="top-bar">
                    <span class="name">{{item.title}}</span>
                    <span>-</span>
                    <span class="space">
                      <span>{{item.mianji}}</span>平方米</span>
                    <span>-</span>
                    <span class="decor-style">{{item.fgname}}</span>
                  </div>
                  <div class="bottom-bar">
                    <span class="house-style">{{item.hxname}}</span>
                    <span class="decor-style">{{item.fgname}}</span>
                    <span class="space">{{item.mianji}}
                      <span>平</span>
                    </span>
                    <span class="place">{{item.address}}</span>
                  </div>
                </div>
                <div class="designer" :style="backgroundImgStyle(`http://wxoss.skywen.cn/${item.simg}`)"></div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="page">
        <pagination :pages="totalpage" :current="currentpage" @pageChange="pageItemClick"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from 'component/pagination';
import sortList from 'component/sortList';
import { mapState, mapMutations } from 'vuex';
import { getFilterData, getCasesData } from '@/api/data';
export default {
  created() {
    // 通过路由根据关键字
    this.key = this.$route.query.headKey;
    // console.log(this.key);
    const tid = this.$route.params.tid;
    if (tid) this.fgid = tid;

    getFilterData().then(res => {
      if (res) {
        this.houseStyles = res.hx;
        this.decorStyles = res.fg;
        this.spaceStyles = res.mj;
        this.places = res.dp;
      }
    });
    if (this.key || tid) {
      this.setCurrPage(1);
    }
    // this.currentpage = 2;
    console.log('******created*******');
    console.log(this.currPage);
    this.currentpage = this.currPage;
    this.getCasesByKey();

  },
  computed: {
    ...mapState(['currPage']),
  },
  watch: {
    $route(to, from) {
      const tid = this.$route.params.tid;
      this.key = this.$route.query.headKey;
      // console.log(this.key);
      if (tid) this.fgid = tid;
      this.getCasesByKey();
    },
  },
  data() {
    return {
      fix: false,
      hxid: '0',
      fgid: '0',
      mjid: '0',
      dpid: '0',
      count: 0,
      currentpage: 1,
      totalpage: 1,
      key: '',
      houseStyles: [],
      decorStyles: [],
      spaceStyles: [],
      places: [],
      casesData: [],
      search: []
    };
  },
  components: {
    pagination,
    sortList
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    ...mapMutations({ setCurrPage: 'SET_CURR_PAGE' }),
    handleScroll() {
      if (document.getElementsByClassName('sort-list').length === 0) {
        return;
      }
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const listHeight = document.getElementsByClassName('sort-list')[0].offsetHeight;
      // const top = this.$refs.filter.offsetTop;
      const top = listHeight + 190;
      if (scrollTop > top) {
        // const moveDis = scrollTop - 408;
        // this.$refs.filter.style.top = moveDis + 'px';
        this.fix = true;
      } else {
        // this.$refs.filter.style.top = 0;
        // return;
        this.fix = false;
      }

    },
    backgroundImgStyle(image) {
      return {
        'background-image': `url(${image})`
      };
    },
    getCasesByKey() {
      if (this.key) {
        getCasesData({ hxid: this.hxid, fgid: this.fgid, mjid: this.mjid, dpid: this.dpid, sid: 0, page: this.currentpage, key: this.key }).then(res => {
          if (res) {
            this.count = parseInt(res.count);
            this.totalpage = Math.ceil(parseInt(res.count) / 20);
            this.casesData = res.example;
          }
        });
      } else {
        getCasesData({ hxid: this.hxid, fgid: this.fgid, mjid: this.mjid, dpid: this.dpid, sid: 0, page: this.currentpage, key: '' }).then(res => {
          if (res) {
            this.count = parseInt(res.count);
            this.totalpage = Math.ceil(parseInt(res.count) / 20);
            this.casesData = res.example;
          }
        });
      }
    },
    getCases() {
      this.setCurrPage(1);
      console.log(this.currPage);
      this.currentpage = this.currPage;
      console.log("++++++++++++");
      // console.log(this.currentpage);
      getCasesData({ hxid: this.hxid, fgid: this.fgid, mjid: this.mjid, dpid: this.dpid, sid: 0, page: this.currentpage, key: '' }).then(res => {
        if (res) {
          this.totalpage = Math.ceil(parseInt(res.count) / 20);
          this.casesData = res.example;
        }
      });
    },
    houseStyleClick(style) {
      this.hxid = style.tid;
      this.getCases();
    },

    decorClick(decoration) {
      this.fgid = decoration.tid;
      this.getCases();
    },
    areaClick(area) {
      this.mjid = area.tid;
      this.getCases();
    },
    departClick(department) {
      this.dpid = department.tid;
      this.getCases();
    },
    searchCases() {
      getCasesData({ hxid: this.hxid, fgid: this.fgid, mjid: this.mjid, dpid: this.dpid, sid: 0, page: 1, key: this.key }).then(res => {
        if (res) {
          this.totalpage = Math.ceil(parseInt(res.count) / 20);
          this.casesData = res.example;
        }
      });
    },
    pageItemClick(page) {
      if (page) {
        this.currentpage = page;
        if (this.key) {
          getCasesData({ hxid: this.hxid, fgid: this.fgid, mjid: this.mjid, dpid: this.dpid, sid: 0, page, key: this.key }).then(res => {
            if (res) {
              this.casesData = res.example;
            }
          });
        } else {
          getCasesData({ hxid: this.hxid, fgid: this.fgid, mjid: this.mjid, dpid: this.dpid, sid: 0, page, key: '' }).then(res => {
            if (res) {
              this.casesData = res.example;
            }
          });
        }
        // console.log(this.casesData);

      }
      window.scrollTo(0, 0);
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import '../../../../assets/css/case.scss';
.fixed {
  width: 1200px !important;
  position: fixed;
  top: 0;
}
</style>


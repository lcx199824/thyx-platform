<template>
  <div id="design">
    <div class="container">
      <!-- <div class="here">当前位置：首页>家装设计师</div> -->
      <sort-list :styleFromIndex='0' :houseStyles="houseStyles" :decorStyles="decorStyles" :spaceStyles="spaceStyles" :places="places" @houseStyleChange="houseStyleClick" @decorChange="decorClick" @areaChange="areaClick" @departChange="departClick"></sort-list>
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
            <select v-model="dpid">
              <option value="0">全部部门</option>
              <option v-for="item in places" :key="item.tid" v-bind:value="item.tid">{{item.tname}}</option>
            </select>
          </div>
          <div class="all-designers">共找到
            <span>{{count}} </span>装修设计师</div>
        </div>
        <div class="search">
          <input type="text" placeholder="关键词" v-model="key">
          <div class="search-btn" @click="searchDesigner">找设计师</div>
        </div>
      </div>
      <div class="designer-list">
        <div class="designer-wrapper" v-for="(item,index) in designers" :key="index">
          <div class="designer">
            <router-link :to="{name:'DesignerDetail',params: {id:item.sid}}" class="link">
              <div class="photo" :style="backgroundImgStyle(`http://wxoss.skywen.cn/${item.img}`)">
                <div class="contact">
                  <div class="free-consult">免费咨询</div>
                  <div class="free-plan">免费规划</div>
                </div>
              </div>
              <div class="desc">
                <div class="content">
                  <div class="top-desc">
                    <span class="name">{{item.name}}</span>
                    <span class="job">{{item.job}}</span>
                  </div>
                  <div class="bottom-desc">
                    <div class="exp">
                      <div>
                        <span>案例作品:</span>
                        <span class="works">{{item.examplenum}}</span>
                        <span>套</span>
                      </div>
                      <div>
                        <span>从业经验:</span>
                        <span class="year">{{item.jingyan}}</span>
                        <span>年</span>
                      </div>
                    </div>
                    <div class="dept">所属店面:
                      <span>{{item.departname}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="page">
        <pagination :pages='totalpage' @pageChange="pageItemClick"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import sortList from 'component/sortList';
import pagination from 'component/pagination';
import { getFilterData, getDesigners } from '@/api/data';

export default {
  created() {
    // 通过路由获取关键字
    this.key = this.$route.query.headKey;

    getFilterData().then(res => {
      if (res) {
        this.houseStyles = res.hx;
        this.decorStyles = res.fg;
        this.spaceStyles = res.mj;
        this.places = res.dp;
      }
    });
    this.getDesignersByKey();

  },
  watch: {
    $route(to, from) {
      this.key = this.$route.query.headKey;
      this.getDesignersByKey();
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
      designers: [],
    };
  },
  components: {
    sortList,
    pagination,
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
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
    getDesignersByKey() {
      if (this.key) {
        getDesigners({ hxid: 0, fgid: 0, mjid: 0, dpid: 0, page: 1, key: this.key }).then(res => {
          this.count = parseInt(res.count);
          this.totalpage = Math.ceil(parseInt(res.count) / 20);
          this.designers = res.designer;

        });
      } else {
        getDesigners({ hxid: 0, fgid: 0, mjid: 0, dpid: 0, page: 1, key: '' }).then(res => {
          this.count = parseInt(res.count);
          this.totalpage = Math.ceil(parseInt(res.count) / 20);
          this.designers = res.designer;
        });
      }
    },
    searchDesigner() {
      getDesigners({ hxid: this.hxid, fgid: this.fgid, mjid: this.mjid, dpid: this.dpid, page: 1, key: this.key }).then(res => {
        this.count = parseInt(res.count);
        this.totalpage = Math.ceil(parseInt(res.count) / 20);
        this.designers = res.designer;
      });
    },
    getDesigners() {
      getDesigners({ hxid: this.hxid, fgid: this.fgid, mjid: this.mjid, dpid: this.dpid, page: 1, key: '' }).then(res => {
        if (res) {
          this.totalpage = Math.ceil(parseInt(res.count) / 20);
          this.designers = res.designer;
        }
      });
    },
    houseStyleClick(style) {
      this.hxid = style.tid;
      this.getDesigners();
    },

    decorClick(decoration) {
      this.fgid = decoration.tid;
      this.getDesigners();
    },
    areaClick(area) {
      this.mjid = area.tid;
      this.getDesigners();
    },
    departClick(department) {
      this.dpid = department.tid;
      this.getDesigners();
    },
    pageItemClick(page) {
      this.currentpage = page;
      if (this.key) {
        getDesigners({ hxid: this.hxid, fgid: this.fgid, mjid: this.mjid, dpid: this.dpid, page, key: this.key }).then(res => {
          if (res) {
            console.log(res);

            this.totalpage = Math.ceil(parseInt(res.count) / 20);
            this.designers = res.designer;
          }
        });
      } else {
        getDesigners({ hxid: this.hxid, fgid: this.fgid, mjid: this.mjid, dpid: this.dpid, page, key: '' }).then(res => {
          if (res) {
            this.totalpage = Math.ceil(parseInt(res.count) / 20);
            this.designers = res.designer;
          }
        });
      }
      window.scrollTo(0, 0);
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import '../../../../assets/css/designer.scss';
.fixed {
  width: 1200px !important;
  position: fixed;
  top: 0;
}
</style>


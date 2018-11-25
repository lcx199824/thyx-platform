<template>
  <div id="designer-detail">
    <div class="info-bar">
      <div class="cover"></div>
      <div class="content">
        <div class="wrapper">
          <!-- <div class="here">
            当前位置：首页>设计团队>陈好好装修案例
          </div> -->
          <div class="info">
            <div class="info-wrapper">
              <div class="avatar" :style="bgImg(`http://wxoss.skywen.cn/${data.img}`)"></div>
              <div class="name">{{data.name}}</div>
              <div class="job">
                <span>{{data.departname}}</span>
                <span>{{data.level}}</span>
              </div>
              <div class="exp">
                <span>从业经验:</span>
                <span>{{data.jingyan}}</span>
                <span>年</span>
                <span class="middle"></span>
                <span>案例作品:</span>
                <span>{{data.examplenum}}</span>
                <span>套</span>
                <span class="middle"></span>
                <span>擅长风格:</span>
                <span>{{data.goodstyle}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="tab-bar">
      <div class="container">
        <div class="tab" :class="{active_tab:activeBar===0}" @click="changeActive(0)">案例作品</div>
        <div class="tab" :class="{active_tab:activeBar===1}" @click="changeActive(1)">户型解析</div>
        <div class="tab" :class="{active_tab:activeBar===2}" @click="changeActive(2)">关于TA</div>
        <!-- <div class="tab" :class="{active_tab:activeBar===3}" @click="changeActive(3)">在线咨询</div> -->
        <router-link tag="div" class="tab" to="/quotation">在线咨询</router-link>
        <router-link tag="div" class="tab" to="/quotation">到店咨询</router-link>
        <!-- <div class="tab last" :class="{active_tab:activeBar===4}" @click="changeActive(4)"></div> -->
      </div>
    </div>
    <div class="main">
      <div class="main-content">

        <div class="main-left">
          <loading v-if="!loaded"></loading>
          <div v-else>
            <div class="works-list" v-show="activeBar===0">
              <div class="top">
                <span class="title">
                  <span>{{data.name}}</span>的案例作品 (
                  <span>{{casenum}}</span>套 )
                </span>
              </div>
              <div class="works">
                <router-link tag="div" v-for="(item,index) in casesData" :key="index" :to="{name:'CaseDetail',params: {id:item.exampleid}}" class="work">
                  <div class="photo" :style="bgImg(`http://wxoss.skywen.cn/${item.img}`)"></div>
                  <div class="work-info">
                    <div class="info-top">
                      <span class="title">{{item.title}}</span>
                      <span>-</span>
                      <span class="area">{{item.mianji}}平</span>

                      <span>-</span>
                      <span class="style">{{item.fgname}}</span>
                    </div>
                    <div class="info-bottom">
                      <span>{{item.hxname}}</span>
                      <span>{{item.fgname}}</span>
                      <span>{{item.mianji}}平</span>
                      <span>{{item.address}}</span>
                    </div>
                  </div>
                  <div class="avatar" :style="bgImg(`http://wxoss.skywen.cn/${item.simg}`)"></div>
                </router-link>
              </div>
              <div class="page" v-if="casesData.length">
                <pagination :pages="casePageNum" @pageChange="pageItemClick"></pagination>
              </div>
              <div class="no_data" v-else>
                暂无数据
              </div>
            </div>
            <div class="house-anal" v-show="activeBar===1">
              <div class="top">
                <span class="title">
                  <span>{{data.name}}</span>的户型解析 (
                  <span>{{analysnum}}</span>套 )
                </span>
              </div>
              <div class="page" v-if="analysData.length">
                <pagination :pages="analysPageNum" @pageChange="pageItemClick"></pagination>
              </div>
              <div class="no_data" v-else>
                暂无数据
              </div>
            </div>
            <div class="about" v-show="activeBar===2">
              <div class="top">
                <span class="title">
                  <span>{{data.name}}</span>的简介
                </span>
              </div>
              <div class="content">
                <div class="avatar" :style="bgImg(`http://wxoss.skywen.cn/${data.img}`)"></div>
                <div class="info">
                  <h3>
                    <span>{{data.name}}</span>
                    <span>-</span>
                    <span>{{data.departname}}</span>
                    <span>-</span>
                    <span>{{data.level}}</span>
                  </h3>
                  <p>
                    <span>从业经验:</span>
                    <span>{{data.jingyan}}年</span>
                    <span> 案例作品:</span>
                    <span>{{data.examplenum}}套</span>
                  </p>
                  <p>
                    <span>擅长风格:</span>
                    <span>{{data.goodstyle}}</span>
                  </p>
                  <p>
                    <span>所在部门:</span>
                    <span>{{data.departname}}</span>
                  </p>
                  <p>
                    <span>部门地址:</span>
                    <span>{{data.departaddress}}</span>
                  </p>
                  <div class="more">
                    <p>个人简介</p>
                    <div class="idea">
                      <!-- <span>设计理念：</span> -->
                      <span>
                        {{data.intro}}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-right">
          <plan-bar></plan-bar>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import pagination from 'component/pagination';
import planBar from 'component/planBar';
import loading from 'component/loading';
import { getDesignerDetail, getArticles, getCasesData } from '@/api/data';

export default {
  watch: {
    $route(to, from) {
      this.getInitialData();
    }
  },
  created() {
    this.getInitialData();
  },
  data() {
    return {
      data: {},
      casesData: [],
      analysData: [],
      activeBar: 0,
      casePageNum: 1,
      analysPageNum: 1,
      casenum: 0,
      analysnum: 0,
      loaded: false
    };
  },
  methods: {
    getInitialData() {
      this.data = {};
      this.casesData = {};
      this.loaded = false;
      const id = this.$route.params.id;
      if (id) {
        getDesignerDetail({ id }).then(res => {
          if (res) {
            this.data = res;
            console.log(res);
          }
        });
        // 获取设计师的案例作品
        getCasesData({ hxid: 0, fgid: 0, mjid: 0, dpid: 0, sid: id, page: 1, key: '' }).then(res => {
          if (res) {
            // console.log(res.example);
            this.casenum = parseInt(res.count);
            this.casePageNum = Math.ceil(parseInt(res.count) / 12);
            this.casesData = res.example;
            this.loaded = true;

          }
        });
      }
      // if (!this.data && !this.casesData) {
      // }
      // 获取设计师的户型分析
      getArticles({ id: 33 }).then(res => {
        if (res) {
          // console.log(res);
          this.analysnum = res.count;
          this.analysPageNum = Math.ceil(parseInt(res.count) / 4);
          this.analysData = res.data;
        }
      });
    },
    bgImg(image) {
      return {
        'background-image': `url(${image})`
      };
    },
    pageItemClick(page) {
      console.log(page);
    },
    changeActive(num) {
      this.activeBar = num;
    }
  },
  components: {
    pagination,
    planBar,
    loading
  }
};
</script>

<style lang="scss" scoped>
@import '../../../../assets/css/designerDetail.scss';
</style>


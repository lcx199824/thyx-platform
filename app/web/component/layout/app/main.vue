<template>
  <div>
    <div class="head-mini">
      <div class="main">
        <div class="menu-btn" @click="showMiniMenu">
          <img src="/public/menu-btn.png" alt="">
        </div>
        <div class="logo-mini">
          <router-link to="/index">
            <img src="/public/logo.png" alt="logo" class="logo">
          </router-link>
        </div>
        <div class="none"></div>
      </div>
      <div class="boundary"></div>
    </div>
    <div class="mini-menu" v-show="miniShow">
      <div class="menu">
        <div class="close" @click="closeMiniMenu">
          <span class="close-btn"><i class="fa fa-times" aria-hidden="true"></i> </span>
        </div>

        <ul class="first">
          <router-link tag="li" v-for="(item,index) in listData" :key="index" :to="item.url" :class="{miniActive:index===currentIndex}" @click.native="toggleSubMenu(index);activeMini(index)">
            <div class="li-top">
              <div>{{item.name}}</div>
              <!-- <div v-show="item.children.length">
                <span class="hint" v-if="!item.showSub" @click="item.showSub=true"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                <span class="hint" v-else @click="item.showSub=false"><i class="fa fa-angle-up" aria-hidden="true"></i></span>
              </div> -->
            </div>
            <!-- <ul class="sub" v-show="item.showSub">
              <router-link tag="li" v-for="(child,index) in item.children" :key="index" :to="child.url" @click.native="closeMiniMenu">{{child.name}}</router-link>
            </ul> -->
          </router-link>
          <router-link tag="li" to="/quotation" @click.native="activeMini(8)" :class="{miniActive:currentIndex===8}">快速家装报价</router-link>
        </ul>
      </div>
      <div class="cover" @click="closeMiniMenu"></div>
    </div>
    <div class="head">
      <div class="top">
        <div class="container">
          <router-link to="/index">
            <img src="/public/logo.png" alt="logo" class="logo">
          </router-link>
          <div class="search-bar">
            <div class="content">
              <div class="option" @mouseover="iconToggle=true" @mouseout="iconToggle=false">
                <span>{{options[optionIndex].name}}</span>
                <i class="fa fa-angle-down" aria-hidden="true" v-if="!iconToggle"></i>
                <i class="fa fa-angle-up" aria-hidden="true" v-else></i>
                <div class="items">
                  <div class="item" v-for="(item,index) in options" :key="index" @click="select(item.id,index)">{{item.name}}</div>
                </div>
              </div>
              <input type="text" placeholder="请输入关键词搜索" v-model="key">
              <div class="search" @click="search">搜索</div>
            </div>
          </div>

          <div class="consult">
            <img src="/public/tel.png" alt="tel" class="tel">
            <div>
              <div class="title">24小时家装咨询</div>
              <div class="num">400-6562-678</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="menu">
          <ul class="primary">
            <router-link tag="li" v-for="(item,index) in listData" :key="index" :to="item.url" @click.native="active(index)" :class="{active:index===currentIndex}">
              <div>{{item.name}}</div>
              <ul class="children" v-show="item.children.length">
                <router-link tag="li" v-for="(child,index) in item.children" :key="index" :to="child.url">{{child.name}}</router-link>
              </ul>
            </router-link>
          </ul>
          <router-link tag="div" class="price" to="/quotation" @click.native="active(8)" :class="{active:currentIndex===8}">家装快速报价</router-link>
          <!-- <div class="price"></div> -->
        </div>
      </div>
      <!-- <breadcrumbs></breadcrumbs> -->
    </div>
    <div class="content">
      <div class="right_fixbar">
        <div class="phone">
          <div class="no-hover">
            <img src="/public/phone.png" alt="" />
          </div>
          <div class="hover-effect">
            <img src="/public/phone.png" alt="" />
            <div class="num">
              <div>400-6562-678</div>
              <div>0575-85170577</div>
            </div>
          </div>
        </div>

        <div class="qq">
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3477965598&site=qq&menu=yes">
            <img src="/public/q.png" alt="" />
          </a>
        </div>
        <div class="mini-program">
          <img src="/public/miniProgram.png" alt="" @click="showTinyCode" />
          <div class="code" ref="code" v-show="codeShow">
            <div class="tinycode">
              <div class="close-btn" @click="codeShow=false">
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="to-top" @click="backTop">
          <img src="/public/toTop.png" alt="" />
        </div>
      </div>
      <slot name="main"></slot>
      <!-- <keep-alive> -->
      <!-- <router-view /> -->
      <!-- </keep-alive> -->
    </div>
    <div class="foot">
      <div class="top">
        <div class="ad"></div>
      </div>
      <div class="middle">
        <div class="content">
          <div class="lists">

            <ul>
              <li class="bold">了解我们</li>
              <router-link tag="li" to="/about/aboutUs">关于我们</router-link>
              <router-link tag="li" to="/about/devePath">发展历程</router-link>
              <router-link tag="li" to="/about/news">企业动态</router-link>
              <router-link tag="li" to="/about/culture">企业文化</router-link>
            </ul>
            <ul>
              <li class="bold">装修服务</li>
              <router-link tag="li" to="/case">家装案例</router-link>
              <router-link tag="li" to="/designer">设计团队</router-link>
              <router-link tag="li" to="/process/envmaterial">施工工艺</router-link>
              <router-link tag="li" to="/process/construct">精湛工艺</router-link>
            </ul>
            <ul>
              <li class="bold">家装指南</li>
              <router-link tag="li" to="/guide/design">装修设计</router-link>
              <router-link tag="li" to="/guide/material">装修材料</router-link>
              <router-link tag="li" to="/guide/raiders">装修攻略</router-link>
              <router-link tag="li" to="/guide/envprotect">环保装修</router-link>
            </ul>
          </div>
          <div class="contacts">

            <div>
              <span>公司地址:</span>
              <span class="address">浙江省绍兴市二环北路135号金德隆北区B座2楼</span>
            </div>
            <div>
              <span>家装咨询:</span>
              <span>0575-85175277</span>
            </div>
            <div>
              <span>家装咨询:</span>
              <span>0575-85170577</span>
            </div>
            <div>
              <span>家装咨询:</span>
              <span>400-6562-678</span>
            </div>

          </div>
          <div class="QRCodes">
            <div class="qrCode">
              <!-- <img src="/static/wechat.png" alt="wechat"> -->
              <div class="wechat-code"></div>
              <p>公众号二维码</p>
            </div>
            <div class="qrCode">
              <!-- <img src="/static/weibo.png" alt="weibo"> -->
              <div class="tinyprogram-code"></div>
              <p>小程序二维码</p>
            </div>
          </div>
        </div>

      </div>
      <div class="bottom">
        <div class="wrapper">
          <div class="info"><span> Copyright ©2016-2018 备案号：京ICP备18050142号-1 </span> <span class="company">北京泰合印象装饰设计有限公司</span></div>
          <!-- <div class="creator">网站建设:天问信息</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { search } from '@/api/data'
export default {
  name: 'App',
  data() {
    return {
      miniShow: false,
      showSub: false,
      currentIndex: 0,
      optionIndex: 0,
      iconToggle: false,
      codeShow: false,
      listData: [
        {
          url: '/index',
          name: '首页',
          children: [],
          showSub: false
        },
        {
          url: '/case',
          name: '家装案例',
          children: [],
          showSub: false
        },
        {
          url: '/activities/new',
          name: '优惠活动',
          children: [
            {
              url: '/activities/new',
              name: '最新活动'
            },
            {
              url: '/activities/review',
              name: '活动回顾'
            }
          ],
          showSub: false
        },
        {
          url: '/designer',
          name: '设计团队',
          children: [],
          showSub: false
        },
        {
          url: '/process/envmaterial',
          name: '施工工艺',
          children: [
            {
              url: '/process/envmaterial',
              name: '环保材料'
            },
            {
              url: '/process/construct',
              name: '精湛工艺'
            },
            {
              url: '/process/strictAccept',
              name: '严苛验收'
            },
            {
              url: '/process/fineSite',
              name: '精品工地'
            },
          ],
          showSub: false
        },

        // {
        //   url: "",
        //   name: '配套产品',
        //   children: [
        //     {
        //       url: '/introduce',
        //       name: '产品介绍'
        //     },
        //     {
        //       url: '/advantage',
        //       name: '产品优势'
        //     },
        //     {
        //       url: '/serviceTeam',
        //       name: '产品服务团队'
        //     },
        //     {
        //       url: '/serviceFlow',
        //       name: '产品服务流程'
        //     },
        //   ]
        // },
        {
          url: '/guide',
          name: '家装指南',
          children: [],
          showSub: false
        },
        {
          url: '/about/aboutUs',
          name: '了解我们',
          children: [
            {
              url: '/about/aboutUs',
              name: '关于我们'
            },
            {
              url: '/about/devePath',
              name: '发展历程'
            },
            {
              url: '/about/news',
              name: '企业动态'
            },
            {
              url: '/about/culture',
              name: '企业文化'
            },
          ],
          showSub: false
        }
      ],
      options: [
        {
          id: 1,
          name: '家装案例'
        },
        {
          id: 2,
          name: '设计师'
        },
      ],
      key: '',
      searchId: 1
    };
  },
  methods: {

    showMiniMenu() {
      this.miniShow = true;
    },
    closeMiniMenu() {
      this.miniShow = false;
    },
    toggleSubMenu(index) {
      this.listData[index].showSub = !this.listData[index].showSub;
      // console.log(this.listData[index]);
    },
    activeMini(index) {
      this.currentIndex = index;
      if (index === 8) {
        this.miniShow = false;
      } else {
        this.miniShow = false;
      }
    },
    active(index) {
      this.currentIndex = index;
    },
    select(id, index) {
      this.searchId = id;
      this.optionIndex = index;
    },
    search() {
      if (this.key) {
        // 按条件按搜索家装案例
        if (this.searchId === 1) {
          // this.$router.push({ name: 'Case', params: { headKey: this.key } });
          this.$router.push({ name: 'Case', query: { headKey: this.key } });
        }
        // 按条件搜索家装设计师
        if (this.searchId === 2) {
          // this.$router.push({ name: 'Designer', params: { headKey: this.key } });
          this.$router.push({ name: 'Designer', query: { headKey: this.key } });
        }
      }
    },
    backTop() {
      window.scrollTo(0, 0);
    },
    showTinyCode() {
      const bodywidth = document.body.clientWidth;
      this.$refs.code.style.right = (bodywidth / 2 - 100) + 'px';
      this.codeShow = !this.codeShow;
    },
    handleResize() {
      const bodywidth = document.body.clientWidth;
      this.$refs.code.style.right = (bodywidth / 2 - 100) + 'px';
    },
  },
  watch: {
    $route(to, from) {
      // console.log(this.$route.path);
      this.key = '';
      const currentPath = this.$route.path;
      const key = currentPath.split('/');
      if (key[1] === 'index') {
        this.currentIndex = 0;
      }
      if (key[1] === 'case' || key[1] === 'caseDetail') {
        this.currentIndex = 1;
      }
      if (key[1] === 'newActivity' || key[1] === 'activityReview' || key[1] === 'activityDetail') {
        this.currentIndex = 2;
      }
      if (key[1] === 'designer' || key[1] === 'designerDetail') {
        this.currentIndex = 3;
      }
      if (key[1] === 'process') {
        this.currentIndex = 4;
      }
      // if (key[1] === 'introduce' || key[1] === 'advantage' || key[1] === 'serviceTeam' || key[1] === 'serviceFlow') {
      //   this.currentIndex = 5;
      // }
      if (key[1] === 'guide') {
        this.currentIndex = 5;
      }
      if (key[1] === 'about') {
        this.currentIndex = 6;
      }
      if (key[1] === 'quotation') {
        this.currentIndex = 8;
      }
    }
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
    window.addEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss">
@import "../../../assets/css/app.scss";
@import "../../../assets/css/font-awesome.min.css";
</style>

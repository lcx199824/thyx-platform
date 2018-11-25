<template>
  <div id="index">
    <div class="banner"></div>
    <div class="main-intro">
      <div class="container">
        <div class="brand">
          <div class="intro">
            <div class="title">品牌实力</div>
            <div class="desc">(发展，源于对客户的忠诚，我们感恩每一位客户)</div>
          </div>
          <div class="detail">
            <router-link v-for="(item,index) in brands" :key="index" :to="item.url" tag="div" class="brand-item" @mouseover.native="item.active=true" @mouseleave.native="item.active=false">
              <div class="brand">
                <img :src="item.img" alt="" v-if="!item.active">
                <img :src="item.active_img" alt="" v-else>
                <p class="title">
                  <span>{{item.title}}</span>
                </p>
                <p class="desc">{{item.desc}}</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="decoration">
          <div class="intro">
            <div class="title">家装案例</div>
            <div class="desc">(优选当下主流装修风格，超10万张设计图供您赏析)</div>
          </div>
          <div class="samples">
            <div class="sample" v-for="(sample,index) in samples" :style="backgroundImgStyle(`http://wxoss.skywen.cn/${sample.img}`)" :key="index">
              <router-link :to="{name:'Case',params:{tid:sample.tid}}">
                <div class="content">
                  <div>
                    <h2>{{sample.tname}}</h2>
                    <p>{{sample.etname}}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <!-- <div class="rooms">
          <div class="wrapper">
            <div class="room" v-for="(room,index) in rooms" :key="index">
              <img :src="room.img">
              <p>{{room.name}}</p>
            </div>
            <div class="more">
              <div class="image">
                <div class="cover">
                  <img src="/public/add.png" alt="">
                </div>
                </div>
                <p>更多</p>
              </div>
            </div>
          </div> -->
        <div class="view-more">
          <router-link to="/case" tag="div" class="view-btn">
            <!-- <div class="view-btn"> -->
            查看全部案例
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <!-- </div> -->
          </router-link>
        </div>
      </div>
    </div>
    <div class="designer-intro">
      <div class="wrapper">
        <div class="top">
          <div class="title">设计团队</div>
          <div class="desc">(甄选一线优秀设计师，为您提供专业家装设计)</div>
          <div class="view-all">
            <router-link to="/designer">全部
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </router-link>

          </div>
        </div>
        <div class="middle">
          <router-link tag="div" class="left" :to="{name:'DesignerDetail',params: {id:designers[0].sid}}" :style="backgroundImgStyle(`http://wxoss.skywen.cn/${designers[0].img}`)">
            <div class="info-bar">
              <p>
                <span class="name">{{designers[0].name}}</span>

                <span class="place">({{designers[0].departname}})</span>

              </p>
              <p>
                <span class="work">作品:</span>
                <span class="num">{{designers[0].examplenum}}套</span>
              </p>
            </div>
            <!-- </div> -->
          </router-link>
          <div class="right">
            <router-link class="designer" v-for="(item,index) in designers.slice(1,7)" :key="index" :to="{name:'DesignerDetail',params: {id:item.sid}}" tag="div" :style="backgroundImgStyle(`http://wxoss.skywen.cn/${item.img}`)">
              <div class="info-bar">
                <p>
                  <span class="name">{{item.name}}</span>

                  <span class="place">({{item.departname}})</span>

                </p>
                <p>
                  <span class="work">作品:</span>
                  <span class="num">{{item.examplenum}}套</span>
                </p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="bottom">
          <router-link to="/designer" tag="div" class="select">选择适合我的设计师</router-link>
          <!-- <div class="select">选择适合我的设计师</div> -->
          <!-- <div class="consult">家装疑难免费咨询</div> -->
        </div>
      </div>
    </div>
    <div class="brand-protect">
      <div class="wrapper">
        <div class="intro">
          <div class="title">品牌保障</div>
          <div class="desc">(产品全球甄选安全环保，家装行业中值得信赖的品牌)</div>
        </div>
        <div class="detail">
          <!-- <div class="item" v-for="(intro,index) in intros" :key="index"> -->
          <router-link :to="intro.url" tag="div" class="item" v-for="(intro,index) in intros" :key="index">
            <div class="photo" :style="backgroundImgStyle(intro.img)"></div>
            <div class="info">
              <h3 class="name">{{intro.name}}</h3>
              <div class="more-info">
                <div class="nameCn">{{intro.nameCn}}</div>
                <div>
                  <router-link :to="intro.url">
                    查看更多
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </router-link>

                </div>
              </div>
            </div>
          </router-link>
          <!-- </div> -->
        </div>
      </div>
    </div>
    <div class="guide">
      <div class="wrapper">
        <div class="top">
          <div class="guide-title">家装指南</div>
          <div class="view-all">
            <router-link to="/guide/prepare">全部
              <i class="fa fa-angle-double-right" aria-hidden="true"></i></router-link>

          </div>
        </div>
        <div class="content">
          <!-- <div class="news-detail"> -->
          <router-link tag="div" :to="{name:'guideDetail',params: {id:news[0].id}}" class="news-detail">
            <div class="img" :style="backgroundImgStyle(`http://wxoss.skywen.cn/${news[0].img}`)"></div>
            <div class="info-bar">
              <div class="top-bar">
                <div class="info-title">{{news[0].title}}</div>
                <div class="info-date">{{news[0].updatetime}}</div>
              </div>
              <div class="bottom-bar">{{news[0].intro}}</div>
            </div>
            <!-- </div> -->
          </router-link>
          <div class="news">
            <!-- <div class="news-item" v-for="(item,index) in news" :key="index"> -->
            <router-link tag="div" v-for="(item,index) in news" :key="index" :to="{name:'guideDetail',params: {id:item.id}}" class="news-item">
              <div class="index">{{index + 1}}</div>
              <span class="space"></span>
              <div class="item-detail">
                <div class="detail-top">
                  <div class="title">{{item.title}}</div>
                  <div class="date">{{item.updatetime}}</div>
                </div>
                <div class="detail-bottom">{{item.intro}}</div>
              </div>
            </router-link>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getIndexData } from '@/api/data';
export default {
  created() {
    getIndexData().then(res => {
      if (res) {
        this.samples = res.fg;
        this.designers = res.designer;
        this.news = res.article;
      }
    });
  },

  data() {
    return {
      brands: [
        {
          img: '/public/brand1.png',
          active_img: '/public/brand1_active.png',
          title: '家装案例',
          desc: '1.6万+套精选案例助您找到装修灵感',
          url: '/case',
          active: false
        },
        {
          img: '/public/brand2.png',
          active_img: '/public/brand2_active.png',
          title: '精湛工艺',
          desc: '精湛的家装工艺，为客户提供最优质服务',
          url: '/process/construct',
          active: false
        },
        {
          img: '/public/brand3.png',
          active_img: '/public/brand3_active.png',
          title: '环保材料',
          desc: '用心甄选全球优质环保材料',
          url: '/process/envmaterial',
          active: false
        },
        {
          img: '/public/brand4.png',
          active_img: '/public/brand4_active.png',
          title: '贴心服务',
          desc: '7x24小时管家式服务只会让您省心',
          url: '/quotation',
          active: false
        }
      ],
      samples: [
        {
          tid: 0,
          img: ''
        }
      ],
      rooms: [
        {
          img: 'http://icon.dyrs.cc/index-img13.jpg!c',
          name: '客厅'
        },
        {
          img: 'http://icon.dyrs.cc/index-img13.jpg!c',
          name: '客厅'
        },
        {
          img: 'http://icon.dyrs.cc/index-img13.jpg!c',
          name: '客厅'
        },
        {
          img: 'http://icon.dyrs.cc/index-img13.jpg!c',
          name: '客厅'
        },
        {
          img: 'http://icon.dyrs.cc/index-img13.jpg!c',
          name: '客厅'
        },
        {
          img: 'http://icon.dyrs.cc/index-img13.jpg!c',
          name: '客厅'
        },
        {
          img: 'http://icon.dyrs.cc/index-img13.jpg!c',
          name: '客厅'
        }
      ],
      designers: [
        {
          tid: 0,
          img: ''
        }
      ],
      intros: [
        {
          url: '/process/envmaterial',
          img: '/public/material.png',
          name: 'Materials',
          nameCn: '环保材料',
        },

        {
          url: '/process/construct',
          img: '/public/888.png',
          name: 'Construction',
          nameCn: '精湛工艺',
        },
        {
          url: '/process/strictAccept',
          img: '/public/accept.png',
          name: 'Acceptance',
          nameCn: '严苛验收',
        },
        {
          url: '/process/fineSite',
          img: '/public/building.png',
          name: 'BuildingSite',
          nameCn: '精品工地',
        }
      ],
      news: [
        {
          id: '01',
          title: '房屋装修风格有哪些？哪些装修风格受欢迎？',
          date: '2018-09-05',
          desc: '现如今人们对于家居装修要求越来越高，每位业主也都在追求个性化需求，希...'
        },
        {
          id: '02',
          title: '房屋装修风格有哪些？哪些装修风格受欢迎？',
          date: '2018-09-05',
          desc: '现如今人们对于家居装修要求越来越高，每位业主也都在追求个性化需求，希...'
        },
        {
          id: '03',
          title: '房屋装修风格有哪些？哪些装修风格受欢迎？',
          date: '2018-09-05',
          desc: '现如今人们对于家居装修要求越来越高，每位业主也都在追求个性化需求，希...'
        },
        {
          id: '04',
          title: '房屋装修风格有哪些？哪些装修风格受欢迎？',
          date: '2018-09-05',
          desc: '现如今人们对于家居装修要求越来越高，每位业主也都在追求个性化需求，希...'
        }
      ]
    };
  },
  methods: {
    backgroundImgStyle(image) {
      return {
        'background-image': `url(${image})`
      };
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/index.scss";
</style>

<template>
  <div id="case-detail">
    <div class="container">
      <!-- <div class="here">当前位置：首页>家装案例</div> -->
      <loading v-show="!loaded"></loading>

      <div class="main" v-show="loaded">
        <div class="left">
          <h2>
            <span>{{data.title}}</span>
            <span>-</span>
            <span>{{data.mianji}}</span>
            <span>平米</span>
            <span>-</span>
            <span>{{data.fgname}}</span>
          </h2>
          <div class="system-info">
            <div>
              <span>来源：</span>
              <span>北京泰合印象</span>
            </div>
            <div>
              <span>浏览人数：</span>
              <span>{{data.readnum}}</span>
              <span>人</span>
            </div>
            <div>
              <span>更新时间：</span>
              <span>{{data.create}}</span>
            </div>
          </div>
          <div class="case-detail">
            <div class="desc">
              <div class="desc-bar">
                <div class="title">案例风格</div>
                <div class="content1">{{data.fgname}}</div>
              </div>
              <div class="desc-bar">
                <div class="title">案例户型</div>
                <div class="content2">{{data.hxname}}</div>
              </div>
              <div class="desc-bar">
                <div class="title">案例面积</div>
                <div class="content2">{{data.mianji}}</div>
              </div>
              <div class="desc-bar">
                <div class="title">案例名称</div>
                <div class="content1">{{data.title}}</div>

              </div>
              <div class="desc-bar">
                <div class="title">所在城市</div>
                <div class="content2 city">{{data.address}}</div>

              </div>
              <div class="desc-bar">
                <div class="title">案例造价</div>
                <div class="content2">{{data.price}}</div>
              </div>
              <div class="desc-bar">
                <div class="title">服务店面</div>
                <div class="content1">{{data.departname}}</div>
              </div>
              <div class="desc-bar">
                <div class="title">设计师</div>
                <div class="content2">{{data.sname}}</div>
              </div>
              <div class="desc-bar">
                <div class="title">施工队长</div>
                <div class="content2">{{data.workername}}</div>
              </div>
            </div>
            <div class="idea">
              <span class="idea-title">设计理念：</span>
              <span class="idea-desc">{{data.intro}}</span>
            </div>
            <div class="detail-photos" v-html="data.pics">
              <!-- <img src="/static/caseDetail1.png" alt="">
              <img src="/static/caseDetail2.png" alt="">
              <img src="/static/caseDetail3.png" alt=""> -->
            </div>
            <div class="adjacent-case">
              <div class="item">
                <div class="title">上一个案例：</div>

                <div v-if="!sOtherCases">
                  <div class="case-name" v-if="!data.preid">无</div>
                  <router-link tag="div" :to="{name:'CaseDetail',params: {id:data.preid}}" class="case-name" v-else>
                    {{data.prename}}
                  </router-link>
                </div>

                <div v-else>
                  <div class="case-name" v-if="!data.spreid">无</div>
                  <router-link tag="div" :to="{name:'CaseDetail',params: {id:data.spreid}}" class="case-name" v-else>
                    {{data.sprename}}
                  </router-link>
                </div>

              </div>
              <div class="insert"></div>
              <div class="item">
                <div class="title">下一个案例：</div>

                <div v-if="!sOtherCases">
                  <router-link tag="div" :to="{name:'CaseDetail',params: {id:data.nextid}}" class="case-name">
                    {{data.nextname}}
                  </router-link>
                </div>

                <div v-else>
                  <router-link tag="div" :to="{name:'CaseDetail',params: {id:data.snextid}}" class="case-name">
                    {{data.snextname}}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-mini">
          <h3>本案设计师简介</h3>
          <div class="designer-intro">
            <div class="img" :style="bgImg(`http://wxoss.skywen.cn/${data.simg}`)"></div>
            <div class="info">
              <p class="designer-name">
                <span>姓名：</span>
                <span>{{data.sname}}</span>
              </p>
              <p>
                <span>从业经验：</span>
                <span>{{data.jingyan}}年</span>
              </p>
              <p>
                <span>案例作品：</span>
                <span>{{data.examplenum}}套</span>
              </p>
              <p>
                <span>擅长风格：</span>
                <span>{{data.goodstyle}}</span>
              </p>
            </div>

          </div>
          <router-link tag="div" class="view-cases" :to="{name:'DesignerDetail',params: {id:data.sid}}">
            <!-- <div class="view-cases"> -->
            <span class="view-btn">查看TA其他案例</span>
            <!-- </div> -->
          </router-link>
          <div class="right-bottom">
            <plan-bar></plan-bar>
          </div>
        </div>
        <div class="right-wrapper" ref="rightWrapper">
          <div class="right" ref="right">
            <h3>本案设计师简介</h3>
            <div class="designer-intro">
              <div class="img" :style="bgImg(`http://wxoss.skywen.cn/${data.simg}`)"></div>
              <div class="info">
                <p class="designer-name">
                  <span>姓名：</span>
                  <span>{{data.sname}}</span>
                </p>
                <p>
                  <span>从业经验：</span>
                  <span>{{data.jingyan}}年</span>
                </p>
                <p>
                  <span>案例作品：</span>
                  <span>{{data.examplenum}}套</span>
                </p>
                <p>
                  <span>擅长风格：</span>
                  <span>{{data.goodstyle}}</span>
                </p>
              </div>

            </div>
            <router-link tag="div" class="view-cases" :to="{name:'DesignerDetail',params: {id:data.sid}}">
              <!-- <div class="view-cases"> -->
              <span class="view-btn">查看TA其他案例</span>
              <!-- </div> -->
            </router-link>
            <div class="right-bottom">
              <plan-bar></plan-bar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import planBar from 'component/planBar';
import loading from 'component/loading';
import { getCaseDetail } from '@/api/data';

export default {
  created() {
    this.loaded = false;
    this.caseDetail();


  },
  watch: {
    $route(to, from) {
      this.loaded = false;
      this.caseDetail();
      if (from.name === 'DesignerDetail') {
        this.sOtherCases = true;
      }
    }
  },

  data() {
    return {
      loaded: false,
      data: {},
      sOtherCases: false,
    };
  },
  components: {
    planBar,
    loading
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    caseDetail() {
      this.data = {};
      const id = this.$route.params.id;
      if (id) {
        getCaseDetail({ id }).then(res => {
          if (res) {
            // console.log(res);
            this.data = res;
            this.loaded = true;
          }
        });
      }
    },
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const top = this.$refs.rightWrapper.offsetTop;
      if (scrollTop < top) {
        this.$refs.right.style.top = 0;
        return;
      }
      const bottomHeight = document.body.offsetHeight - (this.$refs.right.offsetHeight + 583);
      if (scrollTop > bottomHeight) {
        this.$refs.right.style.top = bottomHeight - top + 'px';
        return;
      }
      const moveDis = scrollTop - top;
      // console.log(moveDis);
      this.$refs.right.style.top = moveDis + 'px';
    },
    bgImg(image) {
      return {
        'background-image': `url(${image})`
      };
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/css/caseDetail.scss";
</style>

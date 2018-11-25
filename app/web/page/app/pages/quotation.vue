<template>
  <div id="quotation">
    <div class="container">
      <!-- <div class="here">当前位置：首页>家装报价>获取家装报价</div> -->
      <div class="options">
        <div class="item" @click="select(0)" :class="{active:option===0}">获取家装报价</div>
        <div class="item" @click="select(1)" :class="{active:option===1}">在线预约家装服务</div>
        <div class="item" @click="select(2)" :class="{active:option===2}">申请售后服务</div>
      </div>
      <div class="content">
        <div class="wrapper" v-if="option===0">
          <div class="left">
            <h2>做到心中有数！只需三步！</h2>
            <p class="slogan">
              三步，轻松获取报价清单！<br> 专业公司，价格更透明
              <br> 电子报价，避免增项
            </p>
            <div class="steps">
              <p>预约报价只需三步</p>
              <p class="detail">
                <span>提交装修信息
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
                <span>客服电话沟通
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
                <span>获取智能报价
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="right">
            <p class="title">免费快速智能报价</p>
            <p class="desc">已有
              <span>1344</span>位业主通过此功能获取报价</p>
            <input type="text" placeholder="请输入您的称呼" v-model="name_quote">
            <input type="text" placeholder="请输入房屋面积" v-model="area_quote">
            <input type="text" placeholder="请输入您的电话号码" v-model="phone_quote">
            <div class="btn" @click="quote">免费申请报价</div>
            <p>
              <span>免费电话报价：</span>
              <span class="num">400-6562-678</span>
            </p>
          </div>
        </div>
        <div class="wrapper" v-else-if="option===1">
          <div class="left">
            <h2>打造业内标杆设计服务团队</h2>
            <p class="slogan">
              潜心研究国人家居生活方式，引领家居设计潮流英国皇室设计师、意大利知名设计师毕达宁领衔斩获国内设计特等奖、一等奖等近百项殊荣
            </p>
            <div class="steps">
              <!-- <p>预约报价只需三步</p> -->
              <p class="detail">
                <span>专业公司品质保障
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
                <span>价格头目全国统一
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
                <span>专业报价贴心舒心
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="right">
            <p class="title">提交预约信息的家装规划</p>
            <p class="desc">专业家装设计师一对一服务</p>
            <input type="text" placeholder="请输入您的称呼" v-model="name_apply">
            <input type="text" placeholder="请输入您的楼盘" v-model="address">
            <input type="text" placeholder="请输入房屋面积" v-model="area_apply">
            <input type="text" placeholder="请输入您的电话号码" v-model="phone_apply">
            <div class="btn" @click="apply">免费申请预约</div>
            <p>
              <span>免费电话报价：</span>
              <span class="num">400-6562-678</span>
            </p>
          </div>
        </div>
        <div class="wrapper" v-else>
          <div class="left">
            <h2>坚持"表里如一",用心服务客户</h2>
            <p class="slogan">
              用一丝不苟的态度，打造个性化尊贵服务更加朴实真挚的服务，真正的个性化服务 保持"表里如一",赢得客户认可与尊重
            </p>
            <div class="steps">
              <p>在线投诉保修流程</p>
              <p class="detail">
                <span>提交投诉保修信息
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
                <span>客服电话沟通
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
                <span>安排人员处理
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
                <span>客服定期回访
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="right">
            <p class="title">客户服务快速处理通道</p>
            <p class="desc">提交服务需求客服人员会尽快与您联系</p>
            <input type="text" placeholder="请输入您的称呼" v-model="name_service">
            <!-- <div type="text" placeholder="反馈问题类型"> -->
            <!-- <select v-model="selected">
              <option disabled value="">反馈问题类型</option>
              <option v-for="item in questStyle" :key="item.id">{{item.question}}</option>
            </select> -->
            <input type="text" placeholder="反馈问题描述" v-model="desc_service">
            <input type="text" placeholder="请输入您的电话号码" v-model="phone_service">
            <div class="btn" @click="service">提交申请</div>
            <p>
              <span>免费电话报价：</span>
              <span class="num">400-6562-678</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { quote, apply, service } from '@/api/data';
export default {
  data() {
    return {
      option: 0,
      selected: '',
      questStyle: [
        {
          id: 1,
          question: '类型A'
        },
        {
          id: 2,
          question: '类型B'
        },
        {
          id: 3,
          question: '类型C'
        }
      ],
      name_quote: '',
      area_quote: '',
      phone_quote: '',
      name_apply: '',
      address: '',
      area_apply: '',
      phone_apply: '',
      name_service: '',
      desc_service: '',
      phone_service: ''
    };
  },
  methods: {
    select(option) {
      this.option = option;
    },
    quote() {
      quote({ name: this.name_quote, mianji: this.area_quote, phone: this.phone_quote }).then(res => {
        this.$toasted.show('您已申请成功，我们会尽快联系您！');
      });
    },
    apply() {
      apply({ name: this.name_apply, address: this.address, mianji: this.area_apply, phone: this.phone_apply }).then(res => {
        this.$toasted.show('您已申请成功，我们会尽快联系您！');
      });
    },
    service() {
      service({ name: this.name_service, desc: this.desc_service, phone: this.phone_service }).then(res => {
        console.log(res);

        this.$toasted.show('您的售后申请已提交，我们会尽快为您处理！');
      });
    }
  },
};
</script>
<style lang="scss" scoped>
#quotation {
  display: flex;
  justify-content: center;
  .container {
    width: 1200px;
    .options {
      height: 60px;
      display: flex;
      margin-top: 30px;
      border: 1px solid #e6e6e6;
      border-bottom: none;
      .item {
        line-height: 60px;
        width: 33.3%;
        min-width: 300px;
        color: #666;
        text-align: center;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .active {
      background-color: #e60012;
      color: #fff;
    }
    .content {
      height: 530px;
      background-image: url("/public/quotation.png");
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 30px;
      .wrapper {
        padding: 40px;
        height: 420px;
        color: #fff;
        position: relative;
        .left {
          height: 356px;
          color: #fff;
          h2 {
            margin-bottom: 40px;
          }
          p {
            font-size: 18px;
            line-height: 35px;
          }
          .slogan {
            width: 300px;
          }
          .steps {
            margin-top: 90px;
            .detail {
              font-size: 14px;
              span {
                margin-right: 15px;
              }
            }
          }
        }
        .right {
          width: 300px;
          // height: 310px;
          position: absolute;
          top: 40px;
          right: 40px;
          color: #999;
          text-align: center;
          background-color: #fff;
          padding: 20px;
          p {
            margin: 10px 0;
          }
          .title {
            color: #e60012;
            font-size: 20px;
          }

          input,
          select {
            height: 40px;
            width: 276px;
            padding-left: 5px;
            font-size: 15px;
            margin-bottom: 16px;
          }
          select {
            width: 284px;
            color: #757575;
          }
          .btn {
            display: inline-block;
            width: 280px;
            height: 40px;
            line-height: 40px;
            color: #fff;
            background-color: #e60012;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  #quotation {
    display: flex;
    justify-content: center;
    .container {
      width: 100%;
      .options {
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 30px;
        padding: 10px;
        border: 1px solid #e6e6e6;
        border-bottom: none;
        .item {
          line-height: 60px;
          width: 75%;
          min-width: 0px;
          color: #666;
          text-align: center;
          border: 1px solid #e6e6e6;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .active {
        background-color: #e60012;
        color: #fff;
      }
      .content {
        height: auto;
        background-image: url("/public/quotation.png");
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 30px;
        .wrapper {
          padding: 40px;
          height: auto;
          color: #fff;
          position: relative;
          .left {
            height: 356px;
            color: #fff;
            h2 {
              margin-bottom: 40px;
            }
            p {
              font-size: 18px;
              line-height: 35px;
            }
            .slogan {
              width: 300px;
            }
            .steps {
              margin-top: 10px;
              .detail {
                font-size: 14px;
                span {
                  margin-right: 15px;
                }
              }
            }
          }
          .right {
            width: 300px;
            // height: 310px;
            position: relative;
            top: 25px;
            right: 20px;
            color: #999;
            text-align: center;
            background-color: #fff;
            padding: 20px;
            p {
              margin: 5px 0;
            }
            .title {
              color: #e60012;
              font-size: 20px;
            }

            input,
            select {
              height: 40px;
              width: 276px;
              padding-left: 5px;
              font-size: 15px;
              margin-bottom: 5px;
            }
            select {
              width: 284px;
              color: #757575;
            }
            .btn {
              display: inline-block;
              width: 280px;
              height: 40px;
              line-height: 40px;
              color: #fff;
              background-color: #e60012;
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
</style>


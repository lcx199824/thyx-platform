 <style lang="scss" scoped>
.active_bar {
  color: #e60012;
}
.services {
  display: inline-block;
  font-size: 17px;
  width: 170px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  &:hover {
    cursor: pointer;
  }
  .middle {
    border-left: 1px solid #e60012;
    margin: 0 10px;
  }
}
.service-desc {
  margin: 10px 0;
  color: #747474;
  font-size: 14px;
}
.input-data {
  input {
    width: 190px;
    min-width: 190px;
    height: 30px;
    margin: 5px 0;
    padding-left: 5px;
  }
}
.view-price {
  height: 45px;
  text-align: center;
  margin: 5px 0 20px 0;
  .view-btn {
    display: inline-block;
    height: 45px;
    line-height: 45px;
    width: 200px;
    min-width: 200px;
    color: #fff;
    background-color: #e60012;
    &:hover {
      cursor: pointer;
    }
  }
}
.apply {
  font-size: 14px;
  color: #747474;
  margin-bottom: 30px;
  p {
    margin: 0;
    .tel {
      color: #e60012;
    }
  }
}
@media only screen and (max-width: 600px) {
  .plan-bar {
    display: none;
  }
}
</style>
<template>
  <div class="plan-bar">
    <div class="services">
      <span class="type" @click="priceBar=true" :class="{active_bar:priceBar}">家装报价</span>
      <span class="middle"></span>
      <span class="type" @click="priceBar=false" :class="{active_bar:!priceBar}">户型规划</span>
    </div>
    <div class="give-price" v-if="priceBar">
      <div class="service-desc">智能报价0误差保障</div>
      <div class="input-data">
        <input type="text" placeholder="请输入您的称呼" v-model="name_quote">
        <input type="text" placeholder="请输入房屋面积" v-model="area">
        <input type="text" placeholder="请输入您的电话号码" v-model="phone_quote">
      </div>
      <div class="view-price">
        <span class="view-btn" @click="quote">免费报价</span>
      </div>
    </div>
    <div class="give-plan" v-else>
      <div class="service-desc">明星设计师一对一</div>
      <div class="input-data">
        <input type="text" placeholder="请输入您的称呼" v-model="name_apply">
        <input type="text" placeholder="请输入您的楼盘" v-model="address">
        <input type="text" placeholder="请输入您的电话号码" v-model="phone_apply">
      </div>
      <div class="view-price">
        <span class="view-btn" @click="apply">免费申请</span>
      </div>
    </div>
    <div class="apply">
      <p>
        <span>免费申请电话：</span>
        <span class="tel">400-6562-678</span>
      </p>
      <!-- <p>
            <span>申请即送</span>
            <span class="award">XXX</span>
          </p> -->
    </div>

  </div>
</template>

<script>
import { quote, apply } from '@/api/data';
export default {
  data() {
    return {
      priceBar: true,
      name_quote: '',
      area: '',
      phone_quote: '',
      name_apply: '',
      address: '',
      phone_apply: ''
    };
  },
  methods: {
    quote() {
      quote({ name: this.name_quote, mianji: this.area, phone: this.phone_quote }).then(res => {
        this.$toasted.show('您已申请成功，我们会尽快联系您！');
      });
    },
    apply() {
      apply({ name: this.name_apply, address: this.address, mianji: '', phone: this.phone_apply }).then(res => {
        this.$toasted.show('您已申请成功，我们会尽快联系您！');
      });
    }
  }
}
</script>



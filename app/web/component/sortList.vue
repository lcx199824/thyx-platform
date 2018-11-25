<template>
  <div class="sort-list">
    <div class="sort">
      <div class="sort-name">案例户型</div>
      <div class="sort-item">
        <div class="all" :class="{op_active:style===-1}" @click="houseStyle(-1,-1)">全部</div>
        <div class="options">
          <div class="option" v-for="(item,index) in houseStyles" :key="index" @click="houseStyle(item.tid,index)" :class="{op_active:style===item.tid}">{{item.tname}}</div>
        </div>
      </div>
    </div>
    <div class="sort">
      <div class="sort-name">装修风格</div>
      <div class="sort-item">
        <div class="all" :class="{op_active:decor===-1}" @click="decoration(-1,-1)">全部</div>
        <div class="options">
          <div class="option" v-for="(item,index) in decorStyles" :key="index" @click="decoration(item.tid,index)" :class="{op_active:decor===item.tid}">{{item.tname}}</div>
        </div>
      </div>
    </div>
    <div class="sort">
      <div class="sort-name">房屋面积</div>
      <div class="sort-item">
        <div class="all" :class="{op_active:area===-1}" @click="areaType(-1,-1)">全部</div>
        <div class="options">
          <div class="option" v-for="(item,index) in spaceStyles" :key="index" @click="areaType(item.tid,index)" :class="{op_active:area===item.tid}">{{item.tname}}</div>
        </div>
      </div>
    </div>
    <!-- <div class="places">
      <div class="place-name">所属分站</div>
      <div class="place-item">
        <div class="all" :class="{op_active:depart===-1}" @click="department(-1)">全部</div>
        <div class="options">
          <div class="item" v-for="(item,index) in places" :key="index" @click="department(index)" :class="{op_active:depart===index}">{{item.tname}}</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  created() {
    this.init();
  },
  watch: {
    $route(to, from) {
      this.init();
    }
  },
  props: {
    houseStyles: { type: Array, default: function () { return [] } },
    decorStyles: { type: Array, default: function () { return [] } },
    spaceStyles: { type: Array, default: function () { return [] } },
    places: { type: Array, default: function () { return [] } },
    styleFromIndex: 0,
  },
  data() {
    return {
      style: -1,
      decor: -1,
      area: -1,
      depart: -1
    };
  },
  methods: {
    init() {
      this.style = -1;
      this.area = -1;
      this.depart = -1;
      if (this.styleFromIndex > 0) {
        this.decor = this.styleFromIndex;
      } else {
        this.decor = -1;
      }
    },
    houseStyle(id, index) {
      if (id === -1) {
        this.style = -1;
        const style = { tid: 0 };
        this.$emit('houseStyleChange', style);
      } else {
        this.style = id;
        const style = this.houseStyles[index];
        if (style) {
          this.$emit('houseStyleChange', style);
        }
      }
    },
    decoration(id, index) {
      if (id === -1) {
        this.decor = -1;
        const decoration = { tid: 0 };
        this.$emit('decorChange', decoration);
      } else {
        this.decor = id;
        const decoration = this.decorStyles[index];
        if (decoration) {
          this.$emit('decorChange', decoration);
        }
      }
    },
    areaType(id, index) {
      if (id === -1) {
        this.area = -1;
        const area = { tid: 0 };
        this.$emit('areaChange', area);
      } else {
        this.area = id;
        const area = this.spaceStyles[index];
        if (area) {
          this.$emit('areaChange', area);
        }
      }
    },
    // department(index) {
    //   if (index === -1) {
    //     this.depart = -1;
    //     const department = { tid: 0 };
    //     this.$emit('departChange', department);
    //   } else {
    //     this.depart = index;
    //     const department = this.places[index];
    //     if (department) {
    //       this.$emit('departChange', department)
    //     }
    //   }
    // }
  }
};
</script>

<style lang="scss">
.sort-list {
  font-size: 14px;
  margin: 20px 0;
  padding: 5px;
  .op_active {
    color: #e60012;
  }
  .sort {
    display: flex;
    align-items: center;
    background-color: #f8f8f8;
    border: 1px solid #eaeaea;
    .sort-name {
      width: 10%;
      min-width: 100px;
      height: auto;
      color: #b8b8b8;
      text-align: center;
    }
    .sort-item {
      width: 90%;
      min-width: 1008px;
      height: auto;
      line-height: 40px;
      display: flex;
      border-left: 1px solid #eaeaea;
      background-color: #fff;
      .all {
        text-align: center;
        width: 10%;
        min-width: 90px;
        &:hover {
          cursor: pointer;
        }
      }
      .options {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 90%;
        min-width: 950px;
        .option {
          margin: 0 15px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .places {
    display: flex;
    .place-name {
      width: 10%;
      min-width: 100px;
      line-height: 45px;
      color: #b8b8b8;
      text-align: center;
      border: 1px solid #eaeaea;
      background-color: #f8f8f8;
    }
    .place-item {
      width: 90%;
      min-width: 1100px;
      display: flex;
      border: 1px solid #eaeaea;
      .all {
        text-align: center;
        width: 10%;
        min-width: 90px;
        height: 45px;
        line-height: 45px;
        &:hover {
          cursor: pointer;
        }
      }
      .options {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 90%;
        min-width: 950px;
        .item {
          margin: 0 15px;
          height: 45px;
          line-height: 45px;
          text-align: center;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .sort-list {
    font-size: 14px;
    margin: 20px 0;
    .op_active {
      color: #e60012;
    }
    .sort {
      display: flex;
      align-items: center;
      background-color: #f8f8f8;
      border: 1px solid #eaeaea;
      .sort-name {
        width: 10%;
        min-width: 100px;
        height: auto;
        color: #b8b8b8;
        text-align: center;
      }
      .sort-item {
        width: 90%;
        min-width: 0px;
        height: auto;
        line-height: 30px;
        display: flex;
        border-left: 1px solid #eaeaea;
        background-color: #fff;
        .all {
          text-align: center;
          width: 15%;
          min-width: 20px;
          height: 40px;
          &:hover {
            cursor: pointer;
          }
        }
        .options {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          width: 90%;
          min-width: 0px;
          .option {
            margin: 0 5px;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
    .places {
      display: flex;
      .place-name {
        width: 10%;
        min-width: 0;
        line-height: 45px;
        color: #b8b8b8;
        text-align: center;
        border: 1px solid #eaeaea;
        background-color: #f8f8f8;
      }
      .place-item {
        width: 90%;
        min-width: 0;
        display: flex;
        border: 1px solid #eaeaea;
        .all {
          text-align: center;
          width: 10%;
          min-width: 0;
          height: 45px;
          line-height: 45px;
          &:hover {
            cursor: pointer;
          }
        }
        .options {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          width: 90%;
          min-width: 950px;
          .item {
            margin: 0 15px;
            height: 45px;
            line-height: 45px;
            text-align: center;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>

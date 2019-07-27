<template>
  <div style="height:100%;overflow:hidden">
    <p class="pd_lf">幸运大转盘</p>
    <div class="lucky-wheel">
      <div class="jls"></div>
      <div class="wheel-main">
        <div class="wheel-pointer-box">
          <div
            class="wheel-pointer"
            @click="rotate_handle()"
            :style="{transform:rotate_angle_pointer,transition:rotate_transition_pointer}"
          ></div>
        </div>
        <div class="wheel-bg" :style="{transform:rotate_angle,transition:rotate_transition}">
          <div class="prize-list">
            <div class="prize-item" v-for="(item,index) in prize_list" :key="index">
              <div class="prize-pic">
                <div class="top"></div>
              </div>
              <!-- <div class="prize-count" v-if="item.count">
                                        {{item.count}}
              </div>-->
              <div class="prize-type">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      prize_list: [], //奖品列表
      start_rotating_degree: 0, //初始旋转角度
      rotate_angle: 0, //将要旋转的角度
      start_rotating_degree_pointer: 0, //指针初始旋转角度
      rotate_angle_pointer: 0, //指针将要旋转的度数
      rotate_transition: "transform 6s ease-in-out", //初始化选中的过度属性控制
      rotate_transition_pointer: "transform 12s ease-in-out", //初始化指针过度属性控制
      click_flag: true, //是否可以旋转抽奖
      index: 1,
      indexArr:[1,4,7]
    };
  },
  created(){      
      //  this.http.post('https://www.cxzjpec.com/huzhu/api/service?json='+JSON.stringify({cmd:'getPrizeList'})).then((res)=>{
      //      console.log(res)   
      //      this.prize_list=res.data.dataList;  
      //   })
      this.prize_list=[{name:'苹果xr'},{name:'谢谢惠顾'},{name:'苹果xr'},{name:'苹果xr'},{name:'谢谢惠顾'},{name:'苹果xr'},{name:'苹果xs'},{name:'谢谢惠顾'}]
  },
  methods: {
    rotate_handle() {
        this.rotating();
    },
    rotating() {
      this.index = this.indexArr[Math.floor((Math.random()*this.indexArr.length))]      
      if (!this.click_flag) return;
      var type = 0; // 默认为 0  转盘转动 1 箭头和转盘都转动(暂且遗留)
      var during_time = 5; // 默认为1s
      var random = Math.floor(Math.random() * 7);
      var result_index = this.index; // 最终要旋转到哪一块，对应prize_list的下标
      var result_angle = [337.5, 292.5, 247.5, 202.5, 157.5, 112.5, 67.5, 22.5]; //最终会旋转到下标的位置所需要的度数
      var rand_circle = 6; // 附加多转几圈，2-3
      this.click_flag = false; // 旋转结束前，不允许再次触发
      if (type == 0) {
        // 转动盘子
        var rotate_angle =
          this.start_rotating_degree +
          rand_circle * 360 +
          result_angle[result_index] -
          (this.start_rotating_degree % 360) +
          45;
        this.start_rotating_degree = rotate_angle;
        this.rotate_angle = "rotate(" + rotate_angle + "deg)";
        // // //转动指针
        // this.rotate_angle_pointer = "rotate("+this.start_rotating_degree_pointer + 360*rand_circle+"deg)";
        // this.start_rotating_degree_pointer =360*rand_circle;
        var that = this;
        // 旋转结束后，允许再次触发
        setTimeout(function() {
          that.click_flag = true;
          that.game_over();
        }, during_time * 1000 + 1500); // 延时，保证转盘转完
      } else {
        //
      }
    },
    game_over() {
      this.toast_control = true;
    },
    //关闭弹窗
    close_toast() {
      this.toast_control = false;
    },
    goBack() {
      this.$router.go(-1);
    },
    //购买弹窗关闭
    close() {
      this.show = false;
    }
  }
};
</script>
<style scoped>
.pd_lf{padding-left: 10px;}
.lucky-wheel {
  width: 100%;
  height: 24.4625rem;
  position: relative;
  /* background: rgb(252, 207, 133) url("../assets/img/color_pillar.png") no-repeat
            center bottom; */

  background: url("../../public/images/c2.png") no-repeat center bottom;
  background-size: 80%;
  /* padding-top: 1.5625rem; */
}
.lucky-title {
  width: 100%;
  height: 8.125rem;
  /* background: url("../assets/img/lucky_title.png") no-repeat center top; */
  background-size: 100%;
}
.wheel-main {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.wheel-bg {
  width: 18.4375rem;
  height: 18.4375rem;
  background: url("../assets/img/draw_wheel.png") no-repeat center top;
  background-size: 100%;
  color: #fff;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  transition: transform 3s ease;
}
.wheel-pointer-box {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -60%);
  width: 5.3125rem;
  height: 5.3125rem;
}
.wheel-pointer {
  width: 5.3125rem;
  height: 5.3125rem;
  background: url("../assets/img/draw_btn.png") no-repeat center top;
  background-size: 100%;
  transform-origin: center 60%;
}
.wheel-bg div {
  text-align: center;
}
.prize-list {
  width: 100%;
  height: 100%;
  position: relative;
}
.prize-list .prize-item {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.prize-list .prize-item:first-child {
  top: -2rem;
  left: 6.1125rem;
  transform: rotate(-30deg);
}
.prize-list .prize-item:nth-child(2) {
  top: 0.5rem;
  left: 10.7rem;
  transform: rotate(30deg);
}
.prize-list .prize-item:nth-child(3) {
  top: 4.4rem;
  left: 13.1rem;
  transform: rotate(-300deg);
}
.prize-list .prize-item:nth-child(4) {
  top: 9rem;
  left: 10.9125rem;
  transform: rotate(-250deg);
}
.prize-list .prize-item:nth-child(5) {
  top: 10.7125rem;
  left: 6.3rem;
  transform: rotate(-207deg);
}
.prize-list .prize-item:nth-child(6) {
  top: 9.3875rem;
  left: 1.7rem;
  transform: rotate(-158.2deg);
}
.prize-list .prize-item:nth-child(7) {
  top: 4.8rem;
  left: -0.1875rem;
  transform: rotate(-120deg);
}
.prize-list .prize-item:nth-child(8) {
  top: 0;
  left: 1.5rem;
  transform: rotate(-73deg);
}
.prize-item {
  width: 5.875rem;
  height: 9rem;
}
.prize-pic .top {
  width: 4.0625rem;
  height: 2.5rem;
  margin-top: 1.5625rem;
}
.prize-count {
  font-size: 0.875rem;
}
.prize-type {
  font-size: 0.75rem;
  writing-mode: tb-rl;
  color: #6261fe;
}
</style>

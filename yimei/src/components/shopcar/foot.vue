<template>
    <div class="footer">
        <div class="tab">
        <div class="transition">
          <div class="f1">
            <div @click="taggle">
              <img src="../../common/images/img/ios/shopcar/组6@1x (2).png" alt style="width:.5rem;height:.5rem;margin-top:1.1rem;margin-left:.25rem;" v-if="show">
              <img src="../../common/images/img/ios/shopcar/组5@1x (2).png" alt style="width:.5rem;height:.5rem;margin-top:1.1rem;margin-left:.25rem;" v-else>
            </div>
            <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt style="margin-left:.25rem;">
            <div class="Right">
              <div class="ttitle">【切双眼皮】专利项目 肿胀轻 恢复快 效果持久</div>
              <div class="content">
                <div>杨院长：整形外科副主任医师，整形30年</div>
                <div>杨院长 上海西子曰医疗美容门诊部</div>
              </div>
              <div class="foot">
                <span class="money">
                  ￥
                  <span class="price">10000</span>
                </span>
                <span class="yue">预约数：30</span>
              </div>
            </div>
          </div>
          <!-- <div class="f1">
            <img src="../../common/images/img/ios/shopcar/组6@1x (2).png" alt style="width:.5rem;height:.5rem;margin-top:1.1rem;margin-left:.25rem;">
            <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt style="margin-left:.25rem;">
            <div class="Right">
              <div class="ttitle">【切双眼皮】专利项目 肿胀轻 恢复快 效果持久</div>
              <div class="content">
                <div>杨院长：整形外科副主任医师，整形30年</div>
                <div>杨院长 上海西子曰医疗美容门诊部</div>
              </div>
              <div class="foot">
                <span class="money">
                  ￥
                  <span class="price">10000</span>
                </span>
                <span class="yue">预约数：30</span>
              </div>
            </div>
          </div> -->
          <!-- <div class="f1">
            <img src="../../common/images/img/ios/shopcar/组6@1x (2).png" alt style="width:.5rem;height:.5rem;margin-top:1.1rem;margin-left:.25rem;">
            <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt style="margin-left:.25rem;">
            <div class="Right">
              <div class="ttitle">【切双眼皮】专利项目 肿胀轻 恢复快 效果持久</div>
              <div class="content">
                <div>杨院长：整形外科副主任医师，整形30年</div>
                <div>杨院长 上海西子曰医疗美容门诊部</div>
              </div>
              <div class="foot">
                <span class="money">
                  ￥
                  <span class="price">10000</span>
                </span>
                <span class="yue">预约数：30</span>
              </div>
            </div>
          </div>
          <div class="f1">
            <img src="../../common/images/img/ios/shopcar/组6@1x (2).png" alt style="width:.5rem;height:.5rem;margin-top:1.1rem;margin-left:.25rem;">
            <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt style="margin-left:.25rem;">
            <div class="Right">
              <div class="ttitle">【切双眼皮】专利项目 肿胀轻 恢复快 效果持久</div>
              <div class="content">
                <div>杨院长：整形外科副主任医师，整形30年</div>
                <div>杨院长 上海西子曰医疗美容门诊部</div>
              </div>
              <div class="foot">
                <span class="money">
                  ￥
                  <span class="price">10000</span>
                </span>
                <span class="yue">预约数：30</span>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      show:true
    }
  },
  methods:{
    taggle(){
      if(this.show){
        this.show = false
      }else{
        this.show = true
      }
    }
  }
}
</script>

<style>
.footer{width: 100%;height:600px;position: relative;margin-top: -0.3rem;}
.footer .tab{position: absolute;top:.4rem;width: 9.9rem;background: rgba(255,255,255,1);}
.footer .tab .transition .f1{height: 3rem;display: flex;justify-content: space-between;padding-bottom: .4rem;}
.footer .tab .transition .f1 img{height: 3rem;}
.footer .tab .transition .f1 .Right{width: 6.4rem;margin-left: .2rem;}
.footer .tab .transition .f1 .Right .ttitle{font-size:.38rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.footer .tab .transition .f1 .Right .content{padding-top: .1rem;font-size: .28rem;color:rgba(102,102,102,1);}
.footer .tab .transition .f1 .Right .foot{padding-top: .2rem;}
.footer .tab .transition .f1 .Right .foot .money{color:rgba(255,0,0,1);font-size: .28rem;}
.footer .tab .transition .f1 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .4rem;}
.footer .tab .transition .f1 .Right .foot .yue{padding-left: 2rem;color:rgba(102,102,102,1);font-size: .28rem;}
</style>

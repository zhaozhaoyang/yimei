<template>
    <div class="mykeep">
        <div class="Title">
          <div class="back">
              <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
              <p>邀请好友</p>
          </div>
            <section class="category_ttitle" style="width:8rem;;margin-top:-.6rem;font-size:.4rem;display:flex;justify-content:space-around;margin-left:.8rem;">
                <span :class="{choosed:categoryType === 1}" @click="categoryType = 1">商品</span>
                <span :class="{choosed:categoryType === 2}" @click="categoryType = 2">日记</span>
            </section>
        </div>
        <transition name="router-fade" >
        <section v-if="categoryType === 1" class="transition" style="margin-top:2.5rem;">
          <div class="f1">
            <img src="../common/images/img/ios/矩形7拷贝4@2x.png" alt>
            <div class="Right">
              <div class="ttitle">【切双眼皮】专利项目 肿胀轻 恢复快 效果持久杨承禹院长亲自主刀</div>
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
            <img src="../common/images/img/ios/矩形7拷贝4@2x.png" alt>
             <div class="Right">
              <div class="ttitle">【切双眼皮】专利项目 肿胀轻 恢复快 效果持久杨承禹院长亲自主刀</div>
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
            <img src="../common/images/img/ios/矩形7拷贝4@2x.png" alt>
              <div class="Right">
              <div class="ttitle">【切双眼皮】专利项目 肿胀轻 恢复快 效果持久杨承禹院长亲自主刀</div>
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
            <img src="../common/images/img/ios/矩形7拷贝4@2x.png" alt>
            <div class="Right">
              <div class="ttitle">【切双眼皮】专利项目 肿胀轻 恢复快 效果持久杨承禹院长亲自主刀</div>
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
        </section>
      </transition>
       <transition name="router-fade">
        <section v-if="categoryType === 2" class="Left" style="margin-top:2.5rem;">
          <div class="f2">
            <div class="Heard">
              <div class="img">
                <img src="../common/images/img/ios/look/椭圆6@1x.png" alt>
              </div>
              <div class="Title1">
                <p class="ff1">宝爸宝妈</p>
                <p class="month">容4月3号</p>
              </div>
            </div>
            <div class="Content">
               <div class="bigimg">
                <img src="../common/images/img/ios/ios/圆角矩形11拷贝6@2x.png" alt>
              </div>
              <div class="bigimg1">
                <img src="../common/images/img/ios/look/talk/圆角矩形3拷贝3@1x.png" alt>
              </div>
            </div>
            <p>挺喜欢的一句话，因为放弃过所以知道坚持有多难，字字入心，针针见血。我很庆幸对于美，我一直在追求，撑着还...</p>
            <div class="Foot">
              <span>1200人已看</span>
              <div class="after">
                <span class="comment">
                  <img src alt>
                  <span>200</span>
                </span>
                <span class="dianzan">
                  <img src alt>
                  <span>200</span>
                </span>
              </div>
            </div>
          </div>
          <div class="f2">
            <div class="Heard">
              <div class="img">
                <img src="../common/images/img/ios/look/椭圆6@1x.png" alt>
              </div>
              <div class="Title1">
                <p class="ff1">宝爸宝妈</p>
                <p class="month">容4月3号</p>
              </div>
            </div>
            <div class="Content">
              <div class="bigimg">
                <img src="../common/images/img/ios/ios/圆角矩形11拷贝7@2x_28.png" alt>
              </div>
              <div class="bigimg1">
                <img src="../common/images/img/ios/ios/圆角矩形11拷贝7@2x_43.png" alt>
              </div>
            </div>
            <p>挺喜欢的一句话，因为放弃过所以知道坚持有多难，字字入心，针针见血。我很庆幸对于美，我一直在追求，撑着还...</p>
            <div class="Foot">
              <span>1200人已看</span>
              <div class="after">
                <span class="comment">
                  <img src alt>
                  <span>200</span>
                </span>
                <span class="dianzan">
                  <img src alt>
                  <span>200</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // tab切换
            categoryType: 1
        }
    },
    methods:{
      back(){
            this.$router.push('/my')
        },
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.mykeep{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.mykeep .Title{position: fixed;top:0;left: 0;width: 100%;height: 2rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.mykeep .Title .back{overflow: hidden;width: 100%;}
.mykeep .Title .back p{float: left;margin-left: 35%}
.mykeep .Title .back img{float: left;margin-left: .25rem;margin-top: .5rem}
/* .category_ttitle{padding-top:.3rem;width: 5rem;height: 1rem;font-size: .4rem;padding-left: 2rem;display: flex;justify-content: space-between;margin-left: 0.25rem;} */
.category_ttitle .choosed{border-bottom-color:rgba(35,183,172,1);border-radius:2px;font-weight:bold;color:rgba(17,17,17,1);font-size: .45rem;margin-left: 0.25rem;}
.transition .f1{height: 3rem;display: flex;justify-content: space-between;padding-bottom: .4rem;background: #fff;}
.transition .f1 img{width: 2.8rem;height: 3rem;margin-left: 0.25rem;}
.transition .f1 .Right{margin-right: -.1rem;width: 6.8rem;}
.transition .f1 .Right .ttitle{font-size:.4rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.transition .f1 .Right .content{padding-top: .2rem;font-size: .28rem;color:rgba(102,102,102,1);}
.transition .f1 .Right .foot{padding-top: .2rem;}
.transition .f1 .Right .foot .money{color:rgba(255,0,0,1);font-size: .28rem;}
.transition .f1 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .4rem;}
.transition .f1 .Right .foot .yue{padding-left: 2.75rem;color:rgba(102,102,102,1);font-size: .28rem;}
.Left{width: 100%;padding-bottom: .2rem;}
.Left .f2{height: 9rem;background: #fff;}
.Left .f2 .Heard{width: 3rem;display: flex;justify-content: space-between;margin-left: .13rem;}
.Left .f2 .Heard .img{width: .8rem;height: .8rem;border-radius: 50%;margin-top: .3rem;}
.Left .f2 .Heard .img img{width: 100%;height: 100%;border-radius:50%;}
.Left .f2 .Heard .ttitle1{width: 2rem;}
.Left .f2 .Heard .ttitle1 .ff1{font-size:.35rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.Left .f2 .Heard .ttitle1 .month{font-size:.3px;font-weight:500;color:rgba(153,153,153,1);margin-top: -.5rem;}
.Left .f2 .Content{width: 100%;overflow: hidden;margin-left: .13rem;margin-top:.3rem;}
.Left .f2 .Content .bigimg{float: left;margin-left: .25rem;position: relative; }
.Left .f2 .Content .bigimg img{width: 4.5rem;height: 4.5rem;}
.Left .f2 .Content .xiabaio{float: left;position: absolute;top: 7rem;left: .22rem;}
.Left .f2 .Content .xiabaio img{width:1.5rem;height:.6rem;opacity: .8;}
.Left .f2 .Content .xiabaio .font{margin-top: -.55rem;margin-left: .2rem;color: #fff;}
.Left .f2 .Content .bigimg1{float: left;margin-left: .25rem;position: relative; }
.Left .f2 .Content .bigimg1 img{width: 4.5rem;height: 4.5rem;}
.Left .f2 .Content .xiabaio1{float: left;position: absolute;top: 7rem;left:5rem;}
.Left .f2 .Content .xiabaio1 img{width:1.5rem;height:.6rem;opacity: .8;}
.Left .f2 .Content .xiabaio1 .font{margin-top: -.55rem;margin-left: .1rem;color: #fff;}
.Left .f2 p{font-size: .35rem;margin-left: .28rem;}
.Left .f2 .Foot{width: 9.2rem;margin-top: .6rem;margin-left: .28rem;display: flex;justify-content: space-between;color:rgba(153,153,153,1);font-size: .3rem;}
.Left .f2 .Foot .after{width: 3.5rem;;display: flex;justify-content: space-around;}
.Left .f2 .Foot .after .comment img{width: 0.3rem;height: 0.3rem;background: #000;}
.Left .f2 .Foot .after .dianzan img{width: 0.3rem;height: 0.3rem;background: #000;}
</style>

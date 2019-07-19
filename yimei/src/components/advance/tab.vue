<template>
  <!-- tab切换开始 -->
  <div class="footer">
    <div class="tab">
      <section class="category_ttitle">
        <span :class="{choosed:categoryType === 1}" @click="categoryType = 1">推荐项目</span>
        <span :class="{choosed:categoryType === 2}" @click="categoryType = 2">精选日记</span>
      </section>
      <transition name="router-fade">
        <section v-if="categoryType === 1" class="transition">
          <div class="f1">
            <!-- <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt> -->
            <router-link to="/">
                <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt>
            </router-link>
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
            <router-link to="/detail">
                <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt>
            </router-link>
            <router-link to="/detail" class="Right">
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
            </router-link>
          </div>
          <div class="f1">
            <router-link to="/detail">
                <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt>
            </router-link>
            <router-link to="/detail" class="Right">
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
            </router-link>
          </div>
          <div class="f1">
            <router-link to="/detail">
                <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt>
            </router-link>
            <router-link to="/detail" class="Right">
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
            </router-link>
          </div>
        </section>
      </transition>
      <transition name="router-fade">
        <section v-if="categoryType === 2" class="Left">
          <div class="f2">
            <router-link to="/look" style="text-decoration:none;color:rgba(17,17,17,1)">
              <div class="Heard">
              <div class="img">
                <img src="../../common/images/img/ios/look/椭圆6@1x.png" alt>
              </div>
              <div class="Title1">
                <p class="ff1">宝爸宝妈</p>
                <p class="month">容4月3号</p>
              </div>
              </div>
              <div class="Content">
                <div class="bigimg">
                  <img src="../../common/images/img/ios/look/talk/圆角矩形3拷贝3@1x_90.png" alt>
                </div>
                <div class="bigimg1">
                  <img src="../../common/images/img/ios/look/talk/圆角矩形3拷贝3@1x.png" alt>
                </div>
              </div>
              <p>挺喜欢的一句话，因为放弃过所以知道坚持有多难，字字入心，针针见血。我很庆幸对于美，我一直在追求，撑着还...</p>
            </router-link>
            <div class="Foot">
              <span>1200人已看</span>
              <div class="after">
                <span class="comment">
                  <img src="../../common/images/img/ios/ios/资源10@2x@1x_67.png" alt>
                  <span>200</span>
                </span>
                <span class="dianzan">
                  <img src="../../common/images/img/ios/ios/资源15@2x@1x.png" alt>
                  <span>200</span>
                </span>
              </div>
            </div>
          </div>
          <div class="f2">
            <router-link to="/look" style="text-decoration:none;color:rgba(17,17,17,1)">
              <div class="Heard">
              <div class="img">
                <img src="../../common/images/img/ios/look/椭圆6@1x.png" alt>
              </div>
              <div class="Title1">
                <p class="ff1">宝爸宝妈</p>
                <p class="month">容4月3号</p>
              </div>
              </div>
              <div class="Content">
                <div class="bigimg">
                  <img src="../../common/images/img/ios/look/talk/圆角矩形3拷贝3@1x_90.png" alt>
                </div>
                <div class="bigimg1">
                  <img src="../../common/images/img/ios/look/talk/圆角矩形3拷贝3@1x.png" alt>
                </div>
              </div>
              <p>挺喜欢的一句话，因为放弃过所以知道坚持有多难，字字入心，针针见血。我很庆幸对于美，我一直在追求，撑着还...</p>
            </router-link>
            <div class="Foot">
              <span>1200人已看</span>
              <div class="after">
                <span class="comment">
                  <img src="../../common/images/img/ios/ios/资源10@2x@1x_67.png" alt>
                  <span>200</span>
                </span>
                <span class="dianzan">
                  <img src="../../common/images/img/ios/ios/资源15@2x@1x.png" alt>
                  <span>200</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </transition>
      <!-- tab切换结束 -->
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // tab切换
            categoryType: 1
        }
    }
};
</script>

<style>
.footer{width: 100%;height:530px;position: relative;margin-top: -0.3rem;}
.footer .tab{position: absolute;top:.3rem;width: 100%;background: rgba(255,255,255,1);}
.footer .tab .category_ttitle{padding-top:.3rem;width: 5rem;height: 1rem;font-size: .4rem;padding-left: 2rem;display: flex;justify-content: space-between;margin-left: 0.25rem;}
.footer .tab .category_ttitle .choosed{border-bottom-color:rgba(35,183,172,1);border-radius:2px;font-weight:bold;color:rgba(17,17,17,1);font-size: .45rem;margin-left: 0.25rem;}
.footer .tab .transition{height: 13.5rem;}
.footer .tab .transition .f1{height: 3rem;display: flex;justify-content: space-between;padding-bottom: .4rem;}
.footer .tab .transition .f1 img{height: 3rem;margin-left: 0.25rem;}
.footer .tab .transition .f1 .Right{width: 6.6rem;text-decoration:none;}
.footer .tab .transition .f1 .Right .ttitle{font-size:.4rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.footer .tab .transition .f1 .Right .content{padding-top: .2rem;font-size: .28rem;color:rgba(102,102,102,1);}
.footer .tab .transition .f1 .Right .foot{padding-top: .2rem;}
.footer .tab .transition .f1 .Right .foot .money{color:rgba(255,0,0,1);font-size: .28rem;}
.footer .tab .transition .f1 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .4rem;}
.footer .tab .transition .f1 .Right .foot .yue{padding-left: 2.75rem;color:rgba(102,102,102,1);font-size: .28rem;}

.footer .tab .Left{width: 100%;padding-bottom: .2rem;}
.footer .tab .Left .f2{height: 9rem;}
.footer .tab .Left .f2 .Heard{width: 3rem;display: flex;justify-content: space-between;margin-left: .13rem;}
.footer .tab .Left .f2 .Heard .img{width: .8rem;height: .8rem;border-radius: 50%;margin-top: .3rem;}
.footer .tab .Left .f2 .Heard .img img{width: 100%;height: 100%;border-radius:50%;}
.footer .tab .Left .f2 .Heard .ttitle1{width: 2rem;}
.footer .tab .Left .f2 .Heard .ttitle1 .ff1{font-size:.35rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.footer .tab .Left .f2 .Heard .ttitle1 .month{font-size:.3px;font-weight:500;color:rgba(153,153,153,1);margin-top: -.5rem;}
.footer .tab .Left .f2 .Content{width: 100%;overflow: hidden;margin-left: .13rem;}
.footer .tab .Left .f2 .Content .bigimg{float: left;margin-left: .25rem;position: relative; }
.footer .tab .Left .f2 .Content .bigimg img{width: 4.5rem;height: 4.5rem;}
.footer .tab .Left .f2 .Content .xiabaio{float: left;position: absolute;top: 7rem;left: .22rem;}
.footer .tab .Left .f2 .Content .xiabaio img{width:1.5rem;height:.6rem;opacity: .8;}
.footer .tab .Left .f2 .Content .xiabaio .font{margin-top: -.55rem;margin-left: .2rem;color: #fff;}
.footer .tab .Left .f2 .Content .bigimg1{float: left;margin-left: .25rem;position: relative; }
.footer .tab .Left .f2 .Content .bigimg1 img{width: 4.5rem;height: 4.5rem;}
.footer .tab .Left .f2 .Content .xiabaio1{float: left;position: absolute;top: 7rem;left:5rem;}
.footer .tab .Left .f2 .Content .xiabaio1 img{width:1.5rem;height:.6rem;opacity: .8;}
.footer .tab .Left .f2 .Content .xiabaio1 .font{margin-top: -.55rem;margin-left: .1rem;color: #fff;}
.footer .tab .Left .f2 p{height: .7rem;font-size: .35rem;margin-left: .28rem;}
.footer .tab .Left .f2 .Foot{width: 9.2rem;margin-top: .6rem;margin-left: .28rem;display: flex;justify-content: space-between;color:rgba(153,153,153,1);font-size: .3rem;}
.footer .tab .Left .f2 .Foot .after{width: 3.5rem;;display: flex;justify-content: space-around;}
.footer .tab .Left .f2 .Foot .after .comment img{width: 0.4rem;height: 0.4rem;}
.footer .tab .Left .f2 .Foot .after .dianzan img{width: 0.4rem;height: 0.4rem;}
.footer .tab .Left .f2 .Foot .after .comment{width: 1.2rem;display: flex;justify-content:space-between;}
.footer .tab .Left .f2 .Foot .after .dianzan{width: 1.2rem;display: flex;justify-content:space-between;}
</style>


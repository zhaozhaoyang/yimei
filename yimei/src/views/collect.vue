<template>
    <div class="mykeep">
        <div class="Tiitle">
            <div class="back">
              <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
              <p>我的收藏</p>
          </div>
            <section class="category_ttitle" style="width:8rem;;margin-top:-.6rem;font-size:.4rem;display:flex;justify-content:space-around;margin-left:.8rem;">
                <span :class="{choosed:categoryType === 1}" @click="categoryType = 1">商品</span>
                <span :class="{choosed:categoryType === 2}" @click="categoryType = 2">日记</span>
            </section>
        </div>
        <transition name="router-fade" >
        <section v-if="categoryType === 1" class="transition" style="margin-top:2.2rem;">
          <div class="f15" v-for="(item,index) in types" :key="index">
            <img :src="item.proimage" alt>
            <div class="Right">
              <div class="ttitle">【{{item.classname}}】{{item.proname}}</div>
              <div class="content">
                <div>{{item.doctorname}}：{{item.doctordesc}}</div>
                <div>{{item.doctorname}} {{item.hospital}}</div>
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
        <section v-if="categoryType === 2" class="Left" style="margin-top:2.2rem;">
          <div class="fC" v-for="(items,index) in itemes" :key="index">
            <div class="Hearded">
              <div class="img">
                <img :src="items.usericon" alt>
              </div>
              <div class="TitleMPVUE">
                <p class="ff1">{{items.username}}</p>
                <p class="month">{{items.diarytime}}</p>
              </div>
            </div>
            <div class="Content">
               <div class="bigimg">
                <img :src="items.beforeimage" alt>
              </div>
              <div class="bigimg1">
                <img :src="items.afterimage" alt>
              </div>
            </div>
            <p>{{items.diarycontent}}...</p>
            <div class="Foot">
              <span>{{items.viewcount}}人已看</span>
              <div class="after">
                <span class="comment">
                  <img src alt>
                  <span>{{items.commentscount}}</span>
                </span>
                <span class="dianzan">
                  <img src alt>
                  <span>{{items.zancount}}</span>
                </span>
              </div>
            </div>
          </div>
          <!-- <div class="f2">
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
                <img src="../common/images/img/ios/look/talk/圆角矩形3拷贝3@1x_90.png" alt>
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
                  <img src=“” alt>
                  <span>200</span>
                </span>
                <span class="dianzan">
                  <img src alt>
                  <span>200</span>
                </span>
              </div>
            </div>
          </div> -->
        </section>
      </transition>
    </div>
</template>

<script>
import axios from '../axios'
export default {
    data(){
        return {
            // tab切换
            categoryType: 1,
            uid:'',
            nowPage:'1',
            itemes:[],
            types:[]
        }
    },
   methods:{
        all(){
          let page = {
              cmd:'myCollectionsGoods',
              uid:this.uid,
              nowPage:this.nowPage
          }
          axios(page).then(res => {
            if(res.result == '0'){
              console.log(res)
              this.types = res.dataList
            }
        })

          let pages = {
            cmd:'myCollectionsDiary',
            uid:this.uid,
            nowPage:this.nowPage
          }
          axios(pages).then(res => {
            if(res.result == '0'){
              console.log(res)
              this.itemes = res.dataList
              console.log(this.itemes)
            }
          })
        },
        back(){
                this.$router.push('/my')
        },
   },
   created(){
     this.uid = localStorage.getItem('uid')
     this.all()
   }
}
</script>

<style>
*{margin: 0;padding: 0;}
.mykeep{font-family: 'PingFang-SC-Bold';width: 100%;background: #fff;height: 100%;}
.mykeep .Tiitle{position: fixed;top:0;left: 0;width: 100%;height: 2rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.mykeep .Tiitle .back{overflow: hidden;width: 100%;}
.mykeep .Tiitle .back p{float: left;margin-left: 35%}
.mykeep .Tiitle .back img{float: left;margin-left: .25rem;margin-top: .5rem}
.category_ttitle{font-weight: normal;height: 1.1rem;}
.category_ttitle .choosed{border-bottom:.01rem solid rgba(35,183,172,1);border-radius:2px;color:rgba(17,17,17,1);font-weight: bold;height: 1rem;}
.transition .f15{height: 3rem;display: flex;justify-content: space-between;padding-bottom: .4rem;background: #fff;}
.transition .f15 img{width: 3rem;height: 3rem;margin-left: 0.25rem;}
.transition .f15 .Right{margin-right: -.1rem;width: 6.8rem;}
.transition .f15 .Right .ttitle{font-size:.4rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.transition .f15 .Right .content{padding-top: .2rem;font-size: .28rem;color:rgba(102,102,102,1);width: 5rem;margin-left: .2rem;}
.transition .f15 .Right .foot{padding-top: .2rem;width: 7rem;}
.transition .f15 .Right .foot .money{color:rgba(255,0,0,1);font-size: .28rem;}
.transition .f15 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .4rem;}
.transition .f15 .Right .foot .yue{padding-left: 2.75rem;color:rgba(102,102,102,1);font-size: .28rem;}
.Left{width: 100%;padding-bottom: .2rem;}
.Left .fC{height: 9rem;background: #fff;}
.Left .fC .Hearded{width: 3rem;display: flex;justify-content: space-between;margin-left: .13rem;}
.Left .fC .Hearded .img{width: 1rem;height: .8rem;border-radius: 50%;margin-top: .2rem;}
.Left .fC .Hearded .TitleMPVUE{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top:.2rem;width:6}
.Left .fC .Hearded .TitleMPVUE p{}
.Left .fC .Hearded .img img{width: 100%;height: 100%;border-radius:50%;}
.Left .fC .Hearded .ttitle1{width: 2rem;}
.Left .fC .Hearded .ttitle1 .ff1{font-size:.35rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.Left .fC .Hearded .ttitle1 .month{font-size:.3px;font-weight:500;color:rgba(153,153,153,1);margin-top: -.5rem;}
.Left .fC .Content{width: 100%;overflow: hidden;margin-left: .13rem;margin-top:.3rem;}
.Left .fC .Content .bigimg{float: left;margin-left: .25rem;position: relative;     width: 4.5rem;
    height: 4.5rem;}
.Left .fC .Content .bigimg img{width: 4.5rem;height: 4.5rem;}
.Left .fC .Content .xiabaio{float: left;position: absolute;top: 7rem;left: .22rem;}
.Left .fC .Content .xiabaio img{width:1.5rem;height:.6rem;opacity: .8;}
.Left .fC .Content .xiabaio .font{margin-top: -.55rem;margin-left: .2rem;color: #fff;}
.Left .fC .Content .bigimg1{float: left;margin-left: .25rem;position: relative;    width: 4.5rem;
    height: 4.5rem; }
.Left .fC .Content .bigimg1 img{width: 4.5rem;height: 4.5rem;}
.Left .fC .Content .xiabaio1{float: left;position: absolute;top: 7rem;left:5rem;}
.Left .fC .Content .xiabaio1 img{width:1.5rem;height:.6rem;opacity: .8;}
.Left .fC .Content .xiabaio1 .font{margin-top: -.55rem;margin-left: .1rem;color: #fff;}
/* .Left .fC p{font-size: .35rem;margin-left: .28rem;} */
.Left .fC .Foot{width: 9.2rem;margin-top: .6rem;margin-left: .28rem;display: flex;justify-content: space-between;color:rgba(153,153,153,1);font-size: .3rem;}
.Left .fC .Foot .after{width: 3.5rem;;display: flex;justify-content: space-around;}
.Left .fC .Foot .after .comment img{width: 0.3rem;height: 0.3rem;background: #000;}
.Left .fC .Foot .after .dianzan img{width: 0.3rem;height: 0.3rem;background: #000;}
</style>

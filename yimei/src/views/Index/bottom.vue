<template>
  <!-- tab切换开始 -->
  <div class="footerb" >
    <div class="tab">
      <section  :class="[isfixed?'fixed':'nofixed','category_title']" ref="sct">
        <p :class="{choosed:categoryType === 1}" @click="changeCategoryType(1)">推荐项目</p>
        <p :class="{choosed:categoryType === 2}" @click="changeCategoryType(2)">精选日记</p>
      </section>
      <transition name="router-fade">
        <section v-if="categoryType === 1" class="transition" ref="content">
          <router-link :to="{path:'/detail',query:{proid:item.proid}}" class="f22" v-for="(item,index) in types" :key="index">
            <!-- <img src="../common/images/img/ios/矩形7拷贝4@2x.png" alt> -->
            <img :src="item.proimage" alt>
            <div class="Right">
              <div class="ttitle">【{{item.classname}}】{{item.proname}}</div>
              <div class="contenty">
                <div>{{item.doctorname}}亲自主刀</div>
                <div class="overflow">{{item.doctorname}}：{{item.doctordesc}}</div>
                <div class="overflow">{{item.doctorname}} {{item.hospital}}</div>
              </div>
              <div class="foot">
                <div class="money">
                  <p class="price">￥{{item.price}}</p>
                </div>
                <p class="yue">预约数：{{item.salenum}}</p>
              </div>
            </div>
          </router-link>
        </section>
      </transition>
      <transition name="router-fade">
        <section v-if="categoryType === 2" class="Left" ref="content">
          <router-link :to="{path:'/look',query:{diaryid:items.diaryid,userid:items.userid,proid:items.proid}}" class="f2" v-for="(items,index) in pass" :key="index">
          <!-- {{index}} -->
            <div class="Heard">
              <div class="img">
                <img :src="items.usericon" alt>
              </div>
              <div class="Title1">
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
            <p>{{items.diarycontent}}</p>
            <div class="Foot">
              <span>{{items.viewcount}}人已看</span>
              <div class="after">
                <span class="comment">
                  <img src="../../common/images/img/ios/ios/资源10@2x@1x_67.png" alt>
                  <span>{{items.commentscount}}</span>
                </span>
                <span class="dianzan">
                  <img src="../../common/images/img/ios/ios/资源15@2x@1x.png" alt>
                  <span>{{items.zancount}}</span>
                </span>
              </div>
            </div>
          </router-link>
        </section>
      </transition>
      <!-- tab切换结束 -->
    </div>
  </div>
</template>

<script>
import axios from '../../axios'
import { Toast } from 'vant';
export default {
    data(){
        return {
            // tab切换
            categoryType: 1,
            nowPage:'1', 
            totalPage:1,
            scroll:'',
            types:[],
            pass:[],
            flag:true,
            isfixed:false
        }
    },
    beforeRouteLeave:function(to, from, next){
      console.log(to)
    },
    created(){
      this.getTuidata()
      const pass = {
        cmd:"selectedDiary",
        nowPage:this.nowPage
      }
      axios(pass).then(res=>{
        if(res.result == '0'){
          console.log(res)
          this.pass = res.dataList

        }
      })
    },
    mounted(){
        window.addEventListener('scroll',this.scrollLoad,true)
    },
    methods:{
      getTuidata(){
        if(this.nowPage!=1 && this.nowPage>this.totalPage){
              Toast('没有更多数据了.')
              return;
          }
        this.flag = false 
        let params = {
          cmd:"recommendPro",
          nowPage:this.nowPage
        }
        axios(params).then(res=>{
          this.flag = true 
          console.log(res)
          if(res.result == '0'){
            this.types = this.types.concat(res.dataList)
            this.totalPage = res.totalPage
            this.nowPage++
          }
        })
      },
      scrollLoad(){
        
        this.$nextTick(() => {
          var scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
          var clientHeight=document.compatMode == "CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight;
          var scrollHeight=document.body.scrollHeight|| document.documentElement.scrollHeight;
          //滚动的距离（动态） +  页面可视高度 （固定） 》= 页面总高度 （固定）
            if(scrollTop + (clientHeight - 0) >=scrollHeight - 0){    
              console.log('底部...')      
              this.getTuidata()              
            }
            // 吸顶
            if(scrollTop>999){
              this.isfixed = true
            }else{
              this.isfixed =false
            }
          })
        
      },
      changeCategoryType (type) {
        if(type == 1) {
          this.categoryType = type
          this.nowPage = '1'
        }else if(type == 2) {
          this.categoryType = type
          this.nowPage = '1'
        }
      }
    },      
    destroyed() {
      window.removeEventListener('scroll',this.scrollLoad,true)
    }
};
</script>

<style>
.fixed{position: fixed;top: 0;left: 0;z-index: 9999;box-shadow:0px -2px 9px 2px rgba(217,217,217,0.45);}
.nofixed{position:relative;}
.footerb{width: 100%;height:600px;background: rgba(248,248,248,1);position: relative;margin-top: -0.3rem;font-family:'PingFang-SC-Medium';}
.footerb .tab{position: absolute;top:.4rem;width: 100%;background: rgba(255,255,255,1);}
.footerb .tab .category_title{background: #fff;padding-top:.3rem;width: 5rem;height: 1rem;font-size: .43rem;display: flex;width: 100%;justify-content: space-evenly;}
.footerb .tab .category_title .choosed{height: .7rem;border-bottom:.05rem solid rgba(35,183,172,1);border-radius:2px;font-weight:bold;color:rgba(17,17,17,1);font-size: .45rem;}
.footerb .tab .category_title p{text-align: center;}
/* .footerb .tab .transition{height: 15rem;} */
.footerb .tab .transition{padding-bottom: 50px;}
.footerb .tab .transition .f22{height: 3rem;display: flex;justify-content: space-between;padding-bottom: .4rem;text-decoration:none;font-weight: 500}
.footerb .tab .transition .f22 img{width: 3.1rem;height: 3rem;margin-left: 0.25rem;}
.footerb .tab .transition .f22 .Right{margin-right: .1rem;width: 6rem;}
.footerb .tab .transition .f22 .Right .ttitle{font-size:.4rem;font-family:'PingFang-SC-Medium';color: rgba(17,17,17,1);color:#333;word-wrap:break-word;font-weight: 500}
.footerb .tab .transition .f22 .Right .contenty{line-height: .6rem;padding-left: .3rem;font-size: .4rem;color:#333;color: rgba(17,17,17,1)}
.footerb .tab .transition .f22 .Right .contenty div{width: 5.6rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.overflow{color: #636363;font-size: .28rem;font-weight: normal}
.footerb .tab .transition .f22 .Right .foot{width: 95%;padding-top: .2rem;display: flex;justify-content: space-between;}
.footerb .tab .transition .f22 .Right .foot .money{color:rgba(255,0,0,1);font-size: .28rem;float: left;width: 3rem;}
.footerb .tab .transition .f22 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .45rem;}
.footerb .tab .transition .f22 .Right .foot .yue{color:rgba(102,102,102,1);font-size: .28rem;float: left;}
.footerb .tab .Left{width: 100%;padding-bottom: .2rem;}
.footerb .tab .Left .f2{height: 10rem;text-decoration: none;color:rgba(17,17,17,1)}
.footerb .tab .Left .f2 p{width: 95%;}
.footerb .tab .Left .f2 .Heard{width: 7rem;display: flex;justify-content: space-between;margin-left: .13rem;}
.footerb .tab .Left .f2 .Heard .img{width: .8rem;height: .8rem;border-radius: 50%;margin-top: .3rem;}
.footerb .tab .Left .f2 .Heard .img img{width: 100%;height: 100%;border-radius:50%;}
.footerb .tab .Left .f2 .Heard .Title1{width: 6rem;text-align: left;}
.footerb .tab .Left .f2 .Heard .Title1 .ff1{font-size:.35rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.footerb .tab .Left .f2 .Heard .Title1 .month{font-size:.3px;font-weight:500;color:rgba(153,153,153,1);margin-top: -.5rem;}
.footerb .tab .Left .f2 .Content{overflow: hidden;margin-left: .13rem;}
.footerb .tab .Left .f2 .Content .bigimg{float: left;margin-left: .25rem;}
.footerb .tab .Left .f2 .Content .bigimg img{width: 4.5rem;height: 4.5rem;border-radius: .1rem;}
.footerb .tab .Left .f2 .Content .xiabaio{float: left;position: absolute;top: 7rem;left: .22rem;}
.footerb .tab .Left .f2 .Content .xiabaio img{width:1.5rem;height:.6rem;opacity: .8;}
.footerb .tab .Left .f2 .Content .bigimg1{float: left;margin-left: .25rem;position: relative; }
.footerb .tab .Left .f2 .Content .bigimg1 img{width: 4.5rem;height: 4.5rem;border-radius: .1rem;}
.footerb .tab .Left .f2 .Content .xiabaio1{float: left;position: absolute;top: 7rem;left:5rem;}
.footerb .tab .Left .f2 .Content .xiabaio1 img{width:1.5rem;height:.6rem;opacity: .8;}
.footerb .tab .Left .f2 p{height: 1rem;font-size: .35rem;margin-top: .3rem;margin-left: .28rem;}
.footerb .tab .Left .f2 .Foot{width: 9.2rem;margin-top: .1rem;margin-left: .28rem;display: flex;justify-content: space-between;color:rgba(153,153,153,1);font-size: .3rem;}
.footerb .tab .Left .f2 .Foot .after{width: 3rem;;display: flex;justify-content: space-around;}
.footerb .tab .Left .f2 .Foot .after .comment{width: .8rem;display: flex;justify-content:space-between;}
.footerb .tab .Left .f2 .Foot .after .dianzan{width: .8rem;display: flex;justify-content:space-between;}
.footerb .tab .Left .f2 .Foot .after .comment img{width: 0.4rem;height: 0.4rem;}
.footerb .tab .Left .f2 .Foot .after .dianzan img{width: 0.4rem;height: 0.4rem;}
</style>

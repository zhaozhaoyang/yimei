<template>
  <!-- tab切换开始 -->
  <div class="footerv" >
    <div class="tab">
      <section class="category_title">
        <span :class="{choosed:categoryType === 1}" @click="changeCategoryType(1)">推荐项目</span>
        <span :class="{choosed:categoryType === 2}" @click="changeCategoryType(2)">精选日记</span>
      </section>
      <transition name="router-fade">
        <section v-if="categoryType === 1" class="transition" ref="content">
          <router-link to="/detail" class="f17" v-for="(item,index) in types" :key="index">
            <!-- <img src="../common/images/img/ios/矩形7拷贝4@2x.png" alt> -->
            <img :src="item.proimage" alt>
            <div class="Right">
              <div class="Title">【{{item.classname}}】{{item.proname}}</div>
              <div class="content">
                <div>{{item.doctorname}}亲自主刀</div>
                <div>{{item.doctorname}}：{{item.doctordesc}}</div>
                <div>{{item.doctorname}} {{item.hospital}}</div>
              </div>
              <div class="foot">
                <span class="money">
                  ￥
                  <span class="price">{{item.price}}</span>
                </span>
                <span class="yue">预约数：{{item.salenum}}</span>
              </div>
            </div>
          </router-link>
        </section>
      </transition>
      <transition name="router-fade">
        <section v-if="categoryType === 2" class="Left" ref="content">
          <div class="f2" v-for="(items,index) in pass" :key="index" @click="jump">
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
              <div class="afteres">
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
          </div>
        </section>
      </transition>
      <!-- tab切换结束 -->
    </div>
  </div>
</template>

<script>
import axios from '../../axios'
export default {
  beforeRouteLeave:function(to, from, next){
    // console.log(to)
  },
    data(){
        return {
            // tab切换
            categoryType: 1,
            nowPage:'1', 
            totalPage:'1',
            scroll:'',
            types:[],
            uid:'',
            diaryid:'',
            proid:null,
            pass:[],
            flag:true
        }
    },
    created(){
      // 获取信息
        this.uid = localStorage.getItem('uid')
        this.proid = this.$route.query.proid
        // console.log(this.$route.query.proid)
      this.getdata()
    // 精选日记
      const pass = {
        cmd:"selectedDiary",
        proid:this.proid,
        diaryid:this.diaryid,
        nowPage:this.nowPage
      }
      axios(pass).then(res=>{
        if(res.result == '0'){
          // console.log(res)
          this.pass = res.dataList
          // console.log(this.pass)
        }
      })
    
    },
    mounted(){
    },
    methods:{
      getdata(){
        // 推荐项目
          let params = {
            cmd:"prodetailrecommend",
            proid:this.proid,
            nowPage:this.nowPage,
            pageCount:10
          }
          axios(params).then(res=>{
            if(res.result == '0'){
              this.types = res.dataList
            }
          })
      },
      jump(){
        for(var i = 0;i<this.pass.length;i++){
          this.$router.push({ path: '/look', query: {diaryid: this.pass[i].diaryid,userid:this.pass[i].userid}})
        }
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
    }
};
</script>

<style>
.footerv{width: 100%;background:linear-gradient(0deg,rgba(255,255,255,1),rgba(242,242,242,1));position: relative;margin-top: -0.4rem;}
.footerv .tab{position: absolute;top:.4rem;width: 100%;background: rgba(255,255,255,1);}
.footerv .tab .category_title{padding-top:.3rem;width: 5rem;height: 1rem;font-size: .4rem;padding-left: 2rem;display: flex;justify-content: space-between;margin-left: 0.25rem;}
.footerv .tab .category_title .choosed{border-bottom-color:rgba(35,183,172,1);border-radius:2px;font-weight:bold;color:rgba(17,17,17,1);font-size: .45rem;margin-left: 0.25rem;}
/* .footerv .tab .transition{height: 15rem;} */
.footerv .tab .transition .f17{height: 3rem;display: flex;justify-content: space-between;padding-bottom: .4rem;text-decoration:none;}
.footerv .tab .transition .f17 img{width: 3.1rem;height: 3rem;margin-left: 0.25rem;}
.footerv .tab .transition .f17 .Right{margin-right: .1rem;}
.footerv .tab .transition .f17 .Right .Title{font-size:.4rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);word-wrap:break-word;}
.footerv .tab .transition .f17 .Right .content{padding-top: .2rem;font-size: .28rem;color:rgba(102,102,102,1);}
.footerv .tab .transition .f17 .Right .foot{padding-top: .2rem;}
.footerv .tab .transition .f17 .Right .foot .money{color:rgba(255,0,0,1);font-size: .28rem;}
.footerv .tab .transition .f17 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .4rem;}
.footerv .tab .transition .f17 .Right .foot .yue{padding-left: 2.4rem;color:rgba(102,102,102,1);font-size: .28rem;}
.footerv .tab .Left{width: 100%;padding-bottom: .2rem;}
.footerv .tab .Left .f2{text-decoration: none;color:rgba(17,17,17,1)}
.footerv .tab .Left .f2 p{width: 95%;}
.footerv .tab .Left .f2 .Heard{width: 7rem;display: flex;justify-content: space-between;margin-left: .13rem;}
.footerv .tab .Left .f2 .Heard .img{width: .8rem;height: .8rem;border-radius: 50%;margin-top: .3rem;}
.footerv .tab .Left .f2 .Heard .img img{width: 100%;height: 100%;border-radius:50%;}
.footerv .tab .Left .f2 .Heard .Title1{width: 6rem;text-align: left;}
.footerv .tab .Left .f2 .Heard .Title1 .ff1{font-size:.35rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.footerv .tab .Left .f2 .Heard .Title1 .month{font-size:.3px;font-weight:500;color:rgba(153,153,153,1);margin-top: -.5rem;}
.footerv .tab .Left .f2 .Content{overflow: hidden;margin-left: .13rem;}
.footerv .tab .Left .f2 .Content .bigimg{float: left;margin-left: .25rem;}
.footerv .tab .Left .f2 .Content .bigimg img{width: 4.5rem;height: 4.5rem;border-radius: .1rem;}
.footerv .tab .Left .f2 .Content .xiabaio{float: left;position: absolute;top: 7rem;left: .22rem;}
.footerv .tab .Left .f2 .Content .xiabaio img{width:1.5rem;height:.6rem;opacity: .8;}
.footerv .tab .Left .f2 .Content .bigimg1{float: left;margin-left: .25rem;position: relative; }
.footerv .tab .Left .f2 .Content .bigimg1 img{width: 4.5rem;height: 4.5rem;border-radius: .1rem;}
.footerv .tab .Left .f2 .Content .xiabaio1{float: left;position: absolute;top: 7rem;left:5rem;}
.footerv .tab .Left .f2 .Content .xiabaio1 img{width:1.5rem;height:.6rem;opacity: .8;}
.footerv .tab .Left .f2 p{height: 1rem;font-size: .35rem;margin-top: .3rem;margin-left: .28rem;}
.footerv .tab .Left .f2 .Foot{width: 9.2rem;margin-top: .1rem;margin-left: .28rem;display: flex;justify-content: space-between;color:rgba(153,153,153,1);font-size: .3rem;}
.footerv .tab .Left .f2 .Foot .afteres{width: 3rem;;display: flex;justify-content: space-around;}
.footerv .tab .Left .f2 .Foot .afteres .comment{width: .8rem;display: flex;justify-content:space-between;}
.footerv .tab .Left .f2 .Foot .afteres .dianzan{width: .8rem;display: flex;justify-content:space-between;}
.footerv .tab .Left .f2 .Foot .afteres .comment img{width: 0.4rem;height: 0.4rem;}
.footerv .tab .Left .f2 .Foot .afteres .dianzan img{width: 0.4rem;height: 0.4rem;}
</style>
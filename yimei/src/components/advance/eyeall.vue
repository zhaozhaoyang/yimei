<template>
  <div class="all">
    <div class="Title">
      <img src="../../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
      <p>{{secondname}}</p>
    </div>
      <van-tabs v-model="active" swipeable  @click="tabData($event)" @change="slide($event)">
        <van-tab v-for="(item,index) in types" :title="item.thirdname" :key="index" >
          <!-- 内容 {{ index }} -->
          <van-list v-model="loading1" :finished="finished" finished-text="没有更多了"  @load="onLoad" >
            <van-cell>
              <div class="bk">
                <div class="bgGlass">
                  <div>眼综合四项</div>
                  <div class="info">
                      <!-- <p @click="detail">《项目介绍》</p> -->
                      <p @click="present">《项目介绍》</p>
                      <p @click="preoperative">《术前须知》</p>
                      <p @click="postoperative">《术后须知》</p>
                      <p @click="nurse">《术后护理》</p>
                  </div>
                </div>
              </div>
            </van-cell>
            <van-cell v-for="(item,index) in itemss" :key="index" >
              <div class="data">
                <img :src="item.proimage" alt="" class="tupianShow">
                <div class="def">
                  <div class="eyedetail">【{{item.classname}}】{{item.proname}}</div>
                  <div class="doctorer">
                    <div class="Color">{{item.doctorname}}：{{item.doctordesc}}</div>
                    <div class="Color">{{item.doctorname}} {{item.hospital}}</div>
                  </div>
                  <div class="pmic">
                    <p style="color:rgba(255,0,0,1);">￥<span style="font-size:.55rem">{{item.price}}</span></p>
                    <p class="f">预约数：{{item.salenum}}</p>
                  </div>
                </div>
              </div>
            </van-cell>
          </van-list>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs ,List ,cell} from 'vant';
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import axios from '../../axios'
export default {
  components: {
    swiper,
    swiperSlide,
    'van-tab': Tab,  
    'van-tabs': Tabs,  
    'van-list': List, 
    'van-cell': cell,
  },
   data(){
        return {
            list: [],
            loading1: false,
            finished: false,
            active: 2, // vant
            thirdid:'',
            secondid:'',
            secondname:'',
            fid:'',
            nowPage:'1',
            pageCount:'10',
            items:[],
            types:[],
            itemss:[],
            id:[],
            url1:'',
            url2:'',
            url3:'',
            url4:'',
        }
    },
    created(){
      // this.secondid = localStorage.getItem('secondid')
      // this.fid = this.$route.query.fid
      this.secondid = this.$route.query.secondid
      this.secondname = this.$route.query.secondname
      this.thirdid = this.$route.query.thirdid
      // this.fid = localStorage.getItem('fid')
      console.log(this.secondid)
      console.log(this.secondname)
      console.log(this.thirdid)
      // console.log(this.fid)
      axios({cmd:'getthirdclassification',secondid:this.secondid}).then(res => {
          if(res.result == '0'){
            console.log(res)
            this.types = res.dataList
            var a=0;
            for(var i = 0;i<this.types.length;i++){
              if(this.thirdid==this.types[i].thirdid){
                a=1;
              }
            }
            if(a==0){
              this.thirdid=this.types[i][0];
            }
            this.alls()
          }
        })      
    },
    mounted(){
        
        // 初始化swiper
        // this.getSwiper();
    },
    methods:{
      // vant
      onLoad() {
        var _vm = this
        _vm.loading1 = false
        let params = {
          cmd:'getProList',
          thirdid:_vm.thirdid,
          nowPage:_vm.nowPage,
          pageCount:_vm.pageCount
        }
        console.log(params)
        axios(params).then(res=>{
          if(res.result=='0'){
            console.log(res)
             _vm.url1 = res.dataobject.prointroduceurl
             _vm.url2 = res.dataobject.beforeinstructurl
             _vm.url3 = res.dataobject.afterinstructurl
             _vm.url4 = res.dataobject.afternursingurl
            // if(_vm.nowPage > 1 && pageCount >10){
            //   _vm.nowPage ++
              this.itemss = res.dataList
              console.log(this.itemss)
              // if(itemss){
              //   _vm.items.push(...itemss);
              //   _vm.loading1 = false
              // }
            // }else{
              _vm.loading1 = false
              _vm.finished = true;
            // }
          }
        })
      },
      tabData(index,title){
        console.log(index)
        // console.log(title)
          var _vm = this
          _vm.loading1 = true
          let thirdids = _vm.types[index].thirdid
          let params = {
            cmd:'getProList',
            thirdid:thirdids,
            nowPage:_vm.nowPage,
            pageCount:_vm.pageCount
          }
          console.log(params)
          axios(params).then(res=>{
              if(res.result=='0'){
                console.log(res)
                _vm.itemss = res.dataList
                _vm.loading1 = false
                _vm.finished = true;
            }
          })

        },
        slide(index){
          console.log(index)
           var _vm = this
          _vm.loading1 = true
          let thirdids = _vm.types[index].thirdid
          let params = {
            cmd:'getProList',
            thirdid:thirdids,
            nowPage:_vm.nowPage,
            pageCount:_vm.pageCount
          }
          console.log(params)
          axios(params).then(res=>{
              if(res.result=='0'){
                console.log(res)
                _vm.itemss = res.dataList
                _vm.loading1 = false
                _vm.finished = true;
            }
          })
        },
      // 
//       liseGo(index) {
//           this.isActive = index;
//           this.mySwiper.slideTo(index, 500, false); //切换到第index个slide，速度为0.5秒
//       },
//       //封装swiper
//       getSwiper() {
//            var that = this;
//            // swiper-container  class名称
//            this.mySwiper = new Swiper('.swiper-container', {
//                 autoplay: false, //可选选项，自动滑动
//                 on: {
//                      slideChangeTransitionEnd: function(){
//                      // this指向的是当前的swiper实例，that指向的是vue实例
//                      that.isActive = this.activeIndex; //切换结束时，告诉我现在是第几个slide
//                     },
//                 },
//            })
//       },
      alls(){
        let params = {
          cmd:'getProList',
          thirdid:this.thirdid,
          nowPage:this.nowPage
        }
        console.log(params)
        axios(params).then(res=>{
          if(res.result=='0'){
            console.log(res)
            this.items = res
            console.log(this.items)
          }
        })
      },
      present(){
        window.location.href = this.url1
      },
      preoperative(){
        window.location.href = this.url2
      },
      postoperative(){
        window.location.href = this.url3
      },
      nurse(){
        window.location.href = this.url4
      },
      back(){
        // this.$router.push({ path: '/menu'})
        history.back(-1)
      }
    },
    watch:{

    }
};
</script>

<style>
*{margin: 0;padding: 0;}
.all{font-family: 'PingFang-SC-Bold';height: 17.78rem;background: #fff}
.all .Title{width: 100%;height: 1.2rem;overflow: hidden;line-height: 1.05rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;}
.all .Title p{float: left;margin-left: 36%;}
.all .Title img{float: left;margin-top: .4rem;margin-left: .5rem;width: .3rem;height: .5rem;}

.bk{width: 100%;position: relative;top:0;left:0;height: 3.3rem;}
.bgGlass{position: absolute;top:.5rem;background: url('../../common/images/img/ios/1/ios/圆角矩形2拷贝4@2x.png') center;width: 95%;height: 2rem;border-radius: 5px;left: .25rem;}
.bgGlass div{padding-top:.4rem;padding-left: .35rem;font-size:.35rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(63,32,138,1);}
.bgGlass .info{width: 8rem;margin-top: -.45rem}
.bgGlass .info p{text-decoration: none;display: inline;padding-bottom: .5rem;line-height: .6rem;text-decoration: none;color:rgba(63,32,138,1);font-size: .26rem;}
.navList {width: 100%;height: 1rem;margin-top: .85rem;}
/* 
.van-tabs__content {
    margin-top: .8rem;
}
.van-tabs--line .van-tabs__wrap{height:1rem;}
.van-cell{padding: 0;}
.van-cell:nth-child(2){margin-top: -.5rem}
.van-tabs--line .van-tabs__wrap{    position: absolute;
    top: 1rem;
    right: 0;
    left: 0;
    z-index: 9999;
    overflow: hidden;}
.van-tabs__line{background: rgba(35,183,172,1);z-index: 2;}
.van-cell__title{display: none} */
/* .van-cell__value{overflow: hidden;} */
.van-cell__value .data{height: 3rem;overflow: hidden;}
.van-cell__value .tupianShow{width: 3rem;height: 3rem;float: left;margin-left: .25rem}
.van-cell__value .def{width: 6rem;margin-left: 3.2rem}
.van-cell__value  .def .eyedetail{font-size: .39rem;font-weight: 500;height: .5rem;;}
.van-cell__value  .def .doctorer{font-size: .3rem;margin-top: .2rem;    margin-left: .2rem;}
.van-cell__value  .def .doctorer p{margin-top: .2rem;}
.van-cell__value  .def .pmic{    width: 5.5rem;
    display: flex;
    justify-content: space-between;
    margin-top: .2rem;}
.van-cell__value .tupianShow{width: 3rem;height: 3rem;float: left;margin-left: .25rem}
.Color{color:#636363;width: 5.5rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.f{margin-top: .05rem;color:rgba(102,102,102,1);}
/* .van-tabs__wrap.van-hairline--top-bottom{border: none} */
</style>

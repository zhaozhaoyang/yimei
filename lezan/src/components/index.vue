<template>
  <div class="box">
    <myheader tit="乐赞热门"></myheader>    
    <div class="wrapper" :style="{'top':positionTop}">
      <myswiper :bannerlist='bannerlist'/>  
      <div class="middlebox">      
        <noticebar :textArr='textArr'/>
        <div class="tastlist">
          <div class="ti">
            <p :class="[Tabactive==0?'actived':'']" @click="tabselect(0)">可领任务</p>
            <p :class="[Tabactive==1?'actived':'']" @click="tabselect(1)">进度查询</p>
          </div>
          <ul class="ullist" v-if="Tabactive==0">
            <li class="flex" v-for="i in 20">
              <img src="../assets/images/touxiang.png" alt style="height:30px;width:30px;"/>
              <div class="c_middle">
                <p class="f1"> 牵连营销—视频点赞</p>
                <p class="p1">
                  <span class="f2">抖音点赞</span>
                  <span class="f3">剩余数量：<font class="red small">1231</font></span>                  
                </p>                
              </div>
              <div class="flex red">
                <span class="b1">+1.00 </span><sup class="f4">元</sup>                
              </div>
            </li>
          </ul>
          <ul class="ullist" v-if="Tabactive==1">
            <li class="flex" v-for="i in 20">
              <img src="../assets/images/touxiang.png" alt style="height:30px;width:30px;"/>
              <div class="c_middle">
                <p class="f1"> 牵连营销—视频点赞</p>
                <p class="p1">
                  <span class="f2">抖音点赞</span>
                  <span class="f3">待完成</span>                  
                </p>                
              </div>
              <div class="flex red">
                <span class="b1">+1.00 </span><sup class="f4">元</sup>                
              </div>
            </li>
            <p class="nodata">暂时没有未完成任务</p>
          </ul>
        </div>
      </div>
    </div>
    <btmbar @goIndex="goto" :actived="actnum"></btmbar>    
  </div>
</template>

<script>
import btmbar from "./component/btmbar.vue";
import myheader  from './component/header.vue'
import Bscroll from "better-scroll";
import myswiper  from './component/myswiper.vue'
import noticebar  from './component/noticebar.vue'

export default {
  components: { btmbar, Bscroll ,myheader,myswiper,noticebar},
  data() {
    return {
      uid: this.$store.state.uid || window.sessionStorage.getItem("uid"),
      actnum: 0,
      bannerlist: '', //轮播图
      positionTop:'64px',
      textArr: [
                '1 第一条公告',
                '2 第二条公告第二条公告',
                '3 第三条公告第三条公告第三条公告'
              ],
      Tabactive:0
    };
  },
  created() {
    this.getIsIphonex() // 兼容
    this.positionTop = this.$store.state.ipx ? '84px':'64px'
    this.youke = window.sessionStorage.getItem("youke");
    this.getBannerImg(); 
    // this.$store.state.ipx
  },  
  mounted() {
    var first = null;
    mui.back = function() {
      if (!first) {
        first = new Date().getTime();
        mui.toast("再按一次退出应用");
        setTimeout(function() {
          first = null;
        }, 1000);
      } else {
        if (new Date().getTime() - first < 1000) {
          plus.runtime.quit();
        }
      }
    };
    
  },
  methods: {    
    getIsIphonex () {
        var u = navigator.userAgent;
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isIOS) {
            if (screen.height == 812 && screen.width == 375) {
                this.$store.commit('setIpx',true);
            }
            else {
                this.$store.commit('setIpx',false);
            }
        }
    },
    getBannerImg() {
      this.postRequest({ cmd: "bannerlist" }).then(res => {
        if (res.data.dataList) {
          console.log(res)
          var bannerlist = res.data.dataList;
          for (let i of bannerlist) {
            i.image = "http://122.114.48.61:8080/" + i.image;
          }
          window.localStorage.setItem("bannerlist", JSON.stringify(bannerlist));
          this.bannerlist = bannerlist;
        }
      });
    },
    tabselect(num){
      this.Tabactive = num-0
    }
  }
};
</script>

<style scoped>
.red{color: #e92322;}
.f1{font-size: 16px;color: #333;}
.f2{display: inline-block;height: 16px;width: 60px;color: #fff;background: orange;font-size: 10px;text-align: center;border-radius: 3px;line-height: 16px;margin-right: 5px;}
.f3{color: #999;font-size: 14px;}
.p1{margin-top: 8px;}
.small{font-size: 14px;}
.b1{font-size: 18px;}
.flex{
  display: flex;flex-flow: row;align-items: center;
}
.box {
  width: 100%;
  box-sizing: border-box;
  background: #fff;  
}
.wrapper {
  position: absolute;
  bottom: 1.3333rem;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #fff;
  
}
.middlebox{  
  width: 100%;   
  padding: 0 15px;
  margin: 20px 0;
  box-sizing: border-box;
}
.ti{
  width: 100%;
  display: flex;
  flex-flow: row;  
  border-radius: 5px;
}
.ti p{
  flex: 1;
  text-align: center;
  height: 35px;
  line-height: 35px;
  background: #f0f3f6;
  font-size: 16px;
}
.tastlist{
  border-radius: 3px;
  box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);
}
.actived{
  background: #fff!important;
}
.ullist{
  width: 100%;
  background: #fff;
  padding: 0 8px;
}
.ullist li{
  height: 60px;  
  padding: 0 8px;
}
.ullist li + li{
  border-top: 1px solid #DDDDDD;
}
.c_middle{
  flex: 1;
  margin: 0 10px;
}
.nodata{width: 100%;height: 50px;line-height: 50px;text-align: center;font-size: 13px;color: #999;}
</style>

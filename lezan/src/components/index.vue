<template>
  <div class="box">
    <myheader tit="乐赞热门"></myheader>    
    <div class="wrapper" :style="{'top':positionTop}">
      <myswiper :bannerlist='bannerlist'/>  
      <div class="middlebox">      
        <noticebar :textArr='textArr'/>
        <tasklist :tasklist='tasklist'/>
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
import tasklist  from './component/tasklist.vue'

export default {
  components: { btmbar, Bscroll ,myheader,myswiper,noticebar,tasklist},
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
     

      tasklist:[{name:'牵连营销—视频点赞'},{name:'333'},{name:'444'},{name:'555a'}]
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
  }
};
</script>

<style scoped>
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


</style>

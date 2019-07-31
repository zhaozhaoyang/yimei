<template>
  <div class="box">  
    <div class="wrapper">  
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> 
      <div class="middlebox"> 
        <div class="navbg">
          <p>乐赞APP</p>
          <myswiper :bannerlist='bannerlist'/>
        </div>        
        <div class="nav">
           <noticebar :textArr='textArr'/>
        </div>       
      </div>
      <div class="wImg">
         <img :src="homeImage" @click="gohomeUrl" class="middleImg" v-if="homeImage"/>
      </div>     
      <tasklist ref="task"/>              
      </van-pull-refresh>
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
      uid: this.$store.state.uid || window.localStorage.getItem("uid"),
      actnum: 0,
      bannerlist: '', //轮播图
      positionTop:'64px',
      textArr: [
                '1 第一条公告',
                '2 第二条公告第二条公告',
                '3 第三条公告第三条公告第三条公告'
      ],
     
      isLoading: false,
      tasklist:[{name:'牵连营销—视频点赞'},{name:'333'},{name:'444'},{name:'555a'}],
      homeImage:'',
      homeUrl:'',
      errsrc:'this.src="' + require('@/assets/images/banner.png') + '"'
    };
  },
  created() {
    this.getIsIphonex() // 兼容
    this.positionTop = this.$store.state.ipx ? '84px':'64px'
    this.getIndex();
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
    onRefresh(){  
      this.$refs.task.getList(1)
      setTimeout(() => {
        this.$toast.loading({
          message:'刷新中',
          loadingType:"spinner",
          duration:500
        });
        this.isLoading = false;
      }, 500);
    }, 
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
    getIndex() {      
      this.postRequest({ cmd: "index" }).then(res => {       
          var bannerlist = res.data.bannerList;
          // var bannerlist =[{image:require('../assets/images/task.png')},{image:require('../assets/images/task.png')}]
          this.bannerlist = bannerlist;
          this.textArr = res.data.bulletinList 
          this.homeImage = res.data.homeImage
          this.homeUrl = res.data.homeUrl
      });
      this.postRequest({ cmd: "userInfo",uid:this.uid}).then(res => {         
          window.localStorage.setItem("userInfo", JSON.stringify(res.data));          
      });
    },
    gohomeUrl(){
      this.$router.push({
        name:'webview',
        params:{
          src:this.homeUrl,
          title:'乐赞APP'
        }
      })
    },

  }
};
</script>

<style scoped>
*{
    font-family: 'MicrosoftYaHei';
}
.newbox{
  width: 100%;
  position: relative;  
}
.navbg p{
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: 16px;
  position: absolute;
  top: 44px;
  z-index: 2;
}
.nav{
  padding: 15px;
  position: absolute;
  width: 100%;
  top: 188px;
  z-index: 3
}
.navbg{
  width:100%;height:220px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);
  z-index: 1;position: relative;
}

.box {
  width: 100%;
  box-sizing: border-box;
  background: #fff;  
}
.wImg{
  width:100%;height:70px;margin: 35px 0 12px;display:block;
}
.middleImg{
  width:100%;height:70px;margin: 35px 0 12px;display:block;
}
.wrapper {
  position: absolute;
  top: 0;
  bottom: 1.3333rem;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #fff;
  
}
.middlebox{  
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
}


</style>

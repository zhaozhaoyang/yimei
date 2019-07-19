<template>
  <div class="advance">
    <div class="Ttitle">预购</div>
    <div class="header">
        <div class="topA">
            <router-link :to="{path:'/menu',query:{fid:item.fid}}" v-for="(item,index) in items" :key="index">
                <div class="img">
                    <img :src="item.fimage" alt="">
                </div>
                <p>{{item.fname}}</p>
            </router-link>
        </div>
    </div>
    <div class="ccontent">
        <div class="bgAfter">
            <div>医美消费指南</div>
            <div class="info">
                    <p @click="know">《术前共同须知》</p>
                    <p @click="common">《术后共同须知》</p>
                    <p @click="flag">《医美风险》</p>
                    <p @click="mouse">《医美陷阱》</p>
                    <p @click="point">《消费指导》</p>
            </div>
        </div>
    </div>
    <!-- tab切换开始 -->
    <tab></tab>
    <!--  -->
        <!-- 底部导航 -->
    <div class="fot">
        <router-link to="/index" class="bao">
            <img src="../common/images/img/pic/tab/资源12@2x@1x.png" alt="">
            <p>首页</p>
        </router-link>
        <router-link to="/advance" class="bao">
            <img src="../common/images/img/pic/tab/组150@2x.png" alt="">
            <p>预购</p>
        </router-link>
        <router-link to="/my" class="bao">
            <img src="../common/images/img/pic/tab/资源13@2x@1x.png" alt="">
            <p>我的</p>
        </router-link>
    </div>
    <!--  -->
  </div>
</template>

<script>
import tab from '@/views/Index/bottom'
import axios from '../axios'
// import bus from '@/bus.js'
export default {
    components:{
        tab
    },
    data(){
        return {
            items:[],
        }
    },
    created(){
        axios({cmd:"getfirstclassification"}).then(res=>{
            if(res.result == '0'){
                console.log(res)
                this.items = res.dataList
                // console.log(this.items.fid)
                for(var i =0;i<this.items.length;i++){
                    console.log(this.items[i].fid)
                }
            }
        })
    },
    mounted () {
        
    },
    methods:{
        //富文本
        know(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=4"
        },
        common(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=5"
        },
        flag(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=6"
        },
        mouse(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=7"
        },
        point(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=8"
        },
    }
};
</script>

<style>
*{margin: 0;padding: 0;}
.advance{font-family: 'PingFang-SC-Bold';}
.advance .Ttitle {position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;box-shadow:0 0 .1rem 0 rgba(0, 0, 0, 0.3);color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999}
.advance .header{width: 100%; margin-top: 1.5rem;background: #fff;}
.advance .header .topA{overflow: hidden;}
.advance .header .topA a{text-decoration: none;margin-top: .3rem;float: left;margin-left: 1rem;width: 1.5rem;text-align: center;}
.advance .header .topA a .img{width: 1rem;height: 1rem;border-radius: 50%;}
.advance .header .topA a img{width: 1rem;height: 1rem;}
.advance .header .topA a p{font-size: .38rem;font-weight:500;color:rgba(17,17,17,1);margin-left: -.28rem;}
.advance .ccontent{width: 100%;height: 2.85rem;background:rgba(248,248,248,1);}
.advance .ccontent .bgAfter{position: relative;top:.3rem;left: 0.25rem;background: url('../common/images/img/ios/1/ios/shouye/圆角矩形1拷贝5@1x.png') center;width: 9.5rem;height: 2.3rem;border-radius: 5px;}
.advance .ccontent .bgAfter div{padding-top:.35rem;padding-left: .35rem;font-size:.35rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(63,32,138,1);}
.advance .ccontent .bgAfter .info{width: 7.5rem;margin-top: -.3rem;margin-left: -.1rem;}
.advance .ccontent .bgAfter p{padding-bottom: .5rem;line-height: .6rem;display: inline;;color:rgba(63,32,138,1);font-size: .26rem;}
.advance .fot{position: fixed;bottom:0;left: 0;width: 100%;height: 1.3rem;background: #fff;display: flex;justify-content: space-around;}
.advance .fot .bao{width: 95%;height: 1.3rem;margin-left: 1.5rem;text-decoration: none}
.advance .fot .bao img{width: .6rem;height: .6rem;margin-top: .1rem;}
.advance .fot .bao p{font-size: .35rem;color: rgba(17,17,17,1)}
</style>

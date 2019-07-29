<template>
    <div>
        <div class="header" :class="[ipx?'ptipx':'pt',bg=='1'?'bg1':'bg2']">
            <div class="hd">
                <van-icon name="arrow-left" class="leftA" size="22" v-if="showL" @click="back"/>     
                <div class="title">{{tit}}</div> 
            </div>            
        </div>
        <div class="zhanwei" :class="[ipx?'ptipx':'pt']">
            <div class="zw"></div>
        </div>
    </div>   
</template>
<script>
export default {
    data() {
        return {
            ipx:false
        }
    },
    props:{
        tit:{},
        showL:{
            default:false
        },
        bg:{
            default:1
        }
    },
    created(){        
        this.getIsIphonex()
        this.ipx = this.$store.state.ipx
    },
    methods:{
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
    }
}
</script>
<style scoped>
 .bg1{
     background: #fff;color: #333;box-shadow: 0 1px 5px #e6e6e6;
 }
.bg2{
    background: #f78650;color: #fff;
 }
.ptipx{padding-top: 40px;}
.pt{padding-top: 20px;}
.header{width: 100%;position:fixed;left:0;top:0;z-index: 100;box-sizing: border-box;}
.hd{line-height: 44px;height:44px;text-align: center;font-size: .5rem;
    display: flex;flex-flow: row;align-content: center;justify-content: center;position: relative;
    }
.title{font-size: .48rem;}
.leftA{position: absolute;left: .15rem;top: .3rem;}
.zhanwei{position: relative;top: 0;left: 0;width: 100%;z-index: 1;}
.zw{height:44px;width: 100%}
</style>

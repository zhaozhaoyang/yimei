<template>
    <div class="help">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>帮助中心</p>
        </div>
        <!-- 规则中心 -->
        <div class="header">
            <div class="center">
                <div class="gz"><p>——<p>规则中心<p>——</p></div>
                <div class="rich">
                    <p>平台交易规则</p>
                    <img src="../common/images/img/ios/help/箭头(3)拷贝4@1x.png" alt="">
                </div>
                <div class="rich">
                    <p>发布日记奖励规则</p>
                    <img src="../common/images/img/ios/help/箭头(3)拷贝4@1x.png" alt="" style="margin-left:5.7rem;">
                </div>
                <div class="rich" style="border:none;">
                    <p>医生入驻规则</p>
                    <img src="../common/images/img/ios/help/箭头(3)拷贝4@1x.png" alt="">
                </div>
            </div>
        </div>
        <!--  -->
        <!-- 常见问题 -->
        <div class="content">
            <div class="up">
                <div class="wt"><p>——<p>常见问题<p>——</p></div>
                <div class="question" @click="updown" v-for="(item,index) in items" :key="index">
                    <p class="det">{{item.helptitle}}</p>
                    <img src="../common/images/img/ios/help/箭头(3)拷贝5@1x.png" alt="" style="margin-left:4.4rem;">
                    <p v-if="password">{{item.helpcontent}}</p>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="hd">
            <p style="color:rgba(5,70,65,1)">咨询投诉时间：每天9:00-21:00</p>
        </div>
        <div class="foot">
            <div class="ft">
                <div class="bao">
                    <div class="active">
                        <img src="../common/images/img/ios/help/资源11@2x@1x.png" alt="">
                        <p>电话咨询</p>
                    </div>
                    <div class="active">
                        <img src="../common/images/img/ios/help/资源10@2x拷贝2@1x.png" alt="">
                        <p style="margin-top:.025rem;">在线客服</p>
                    </div>
                    <div class="active" style="border:none;">
                        <img src="../common/images/img/ios/help/组127@1x.png" alt="">
                        <p style="margin-top:.13rem;">我要投诉</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../axios'
export default {
    data(){
        return {
            password:false,
            items:[]
        }
    },
    methods:{
        updown(){
            if(this.password){
                this.password = false
            }else{
                this.password = true
            }
        },
        back(){
            this.$router.push('/system')
        }
    },
    created(){
        axios({cmd:'gethelplist'}).then(res => {
            if(res.result == '0'){
                this.items = res.dataList
                console.log(res)
            }
        })
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.help{font-family: 'PingFang-SC-Bold';}
.help .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.help .Title p{float: left;margin-left: 35%}
.help .Title img{float: left;margin-top: .5rem;margin-left: .25rem}
.help .header{width: 100%;height: 5rem;background:rgba(242,242,242,1);margin-top: 2rem;}
.help .header .center{width: 100%;height: 4.7rem;background: #fff;}
.help .header .center .gz{display: flex;justify-content: space-around;width: 3.5rem;margin-left: 3.2rem;color:rgba(102,102,102,1);}
.help .header .center .rich{width: 9.5rem;height: 1.4rem;border-bottom:.02rem solid rgba(229,229,229,1);line-height:1.4rem;margin-left:.5rem;overflow:hidden;}
.help .header .center .rich p{font-size:.4rem;color:rgba(17,17,17,1);font-weight:500;float:left;}
.help .header .center .rich img{margin-top:.7rem;float:left;margin-left:6.5rem;}
.help .content{width: 100%;background:rgba(242,242,242,1);margin-top: .3rem;}
.help .content .up{width: 100%;height: auto;background: #fff;}
.help .content .up .wt{display: flex;justify-content: space-around;width: 3.5rem;margin-left: 3.2rem;color:rgba(102,102,102,1);}
.help .content .up .question{width: 9.5rem;height: auto;border-bottom:.02rem solid rgba(229,229,229,1);margin-left:.5rem;position: relative;}
.help .content .up .question .det{font-size:.4rem;color:rgba(17,17,17,1);font-weight:500;line-height:.8rem;}
.help .content .up .question img{margin-top:.7rem;margin-left:5.6rem;position: absolute;top: -.4rem;left: 4.4rem;}
.help .foot{height: 2.5rem;width: 100%;background: #fff;margin-top: -1.5rem;}
.help .hd{height: 1rem;width: 100%;text-align: center;font-size:.4rem;line-height:1rem;position: relative;top: -.5rem;}
.help .hd p{background:rgba(221,241,242,1);height: 1rem;}
.help .foot .ft{position: fixed;top:16.3rem;left:0;height: 1.5rem;width: 100%;background: rgba(35,183,172,1);}
.help .foot .ft .bao{width: 9.5rem;height: 1.5rem;;margin-left:.25rem;display:flex;justify-content:space-around;}
.help .foot .ft .bao .active{width: 3rem;height: 1rem;text-align: center;margin-top:.25rem;color:rgba(255,255,255,1);border-right:.01rem solid rgba(255,255,255,1);font-size: .35rem;}
.help .foot .ft .bao .active p{margin-top: .1rem;}
</style>

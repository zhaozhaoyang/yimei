<template>
    <div class="guide">
        <div class="TitleL">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p class="aboutzhinan">关于指南</p>
        </div>
        <img src="../common/images/img/ios/ios/图片1拷贝@1x.png" alt="">
        <p>杨承禹医美消费指南APP</p>
        <div class="all" @click="business">
            <div class="up">
                <p>营业执照</p>
                <img src="../common/images/img/ios/help/箭头(3)拷贝4@1x.png" alt="">
            </div>
        </div>
        <div class="all" @click="agreement">
            <div class="up">
                <p>用户服务协议</p>
                <img src="../common/images/img/ios/help/箭头(3)拷贝4@1x.png" alt="" style="margin-left: 6.4rem;">
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../axios'
export default {
    data(){
        return {
            items:[]
        }
    },
    methods:{
        business(){
            this.$router.push({path:'/business',query:{aboutGuide:this.items.aboutGuide}})
        },
        agreement(){
            window.location.href = 'http://122.114.49.242/plastic/display/agreement?id=16'
        },
        back(){
            this.$router.push('/system')
        }
    },
    created(){
        axios({cmd:'aboutGuide'}).then(res => {
            if(res.result == '0'){
                this.items = res.dataobject
                console.log(this.items)
            }
        })
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.guide{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.guide .TitleL{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.guide .TitleL .aboutzhinan{float: left;margin-left: 35%;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);}
.guide .TitleL img{float: left;margin-top: .5rem;margin-left: .25rem}
.guide img{margin-left: 38%;margin-top: 35%;border-radius:.5rem;}
.guide p{text-align: center;margin-top: .5rem;color:rgba(102,102,102,1);font-size: .4rem}
.guide .all{height: 1.5rem;width: 95%;border-bottom: .01rem solid rgba(226,226,226,1);margin-left: .5rem;}
.guide .all .up{overflow: hidden;;margin-top: .3rem;font-size: .35rem;line-height: .8rem;}
.guide .all .up p{float: left;}
.guide .all .up img{float: left;width: 0.2rem;height: 0.3rem;margin-top: .75rem;margin-left: 7.2rem;}

</style>

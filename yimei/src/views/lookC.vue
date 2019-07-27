<template>
    <div class="lookC">
        <headers></headers>

        <!-- 变美过程开始 -->
        <beauty></beauty>
        <!--  -->

        <!-- 评轮开始 -->
        <div class="speak">
            <div class="discuss">
                <p style="font-size:.4rem;color:rgba(17,17,17,1);font-weight:500;">评论</p>
                <p style="color:rgba(153,153,153,1);font-weight:500;width:2rem;" @click="alltalk">
                    <span style="margin-left:.-3rem;">查看更多</span><img src="../common/images/img/ios/look/箭头(3)拷贝4@1x.png" alt="" style="margin-left:.3rem;">
                </p>
            </div>
            <div class="start">
                <div class="top">
                    <img src="../common/images/img/ios/look/椭圆6@1x.png" alt="">
                    <input type="text" class="iptTB" placeholder="据说多发评论的人会更美哦~" @click="talk">
                </div>
            </div>
            <div class="all" v-for="(item,index) in items.dataList" :key="index">
                <img :src="items.usericon" alt="">
                <div class="front">
                    <p class="name">{{item.username}}</p>
                    <p class="conte">{{item.commentscontent}}</p>
                    <p class="times">{{item.commentstime}}</p>
                </div>
            </div>
        </div>
        <!--  -->

        <!-- 底部开始 -->
        <div class="footers">
            <div class="f2" style="">
                <p style="float:left;margin-left:.25rem;">1200<span>人已看</span></p>
                <div><img src="../common/images/img/ios/look/资源10@2x拷贝2@1x.png" alt="" style="width:.4rem;height:.4rem;margin-top:.5rem;"><span>200</span></div>
                <div><img src="../common/images/img/ios/look/组143@1x.png" alt="" style="width:.4rem;height:.4rem;margin-top:.5rem;"><span>200</span></div>
            </div>
        </div>
        <!--  -->

        <!-- 弹窗模块 -->
        <div v-show="popup">
            <!--这里是要展示的内容层-->
            <div class="loginTB">
                <div class="zhong">
                    <img src="../common/images/img/ios/look/del@1x.png" alt="" style="margin-left: .25rem;margin-top:.2rem;" @click="closepopup">
                    <span style="margin-left:8rem;color:rgba(35,183,172,1);font-size:.4rem;" @click="sendTo">发表</span>
                </div>
                <textarea v-model="content"></textarea>
                <!-- <input type="text" v-model="content"> -->
            </div>
            <!--这里是半透明背景层-->
            <div class="over"></div>
        </div>
    </div>
</template>

<script>
import headers from '@/components/look/head.vue'
import beauty from '@/components/look/beat.vue'
import axios from '../axios'
export default {
    components:{
        headers,
        beauty,
    },
    // beforeRouteLeave:function(to, from, next){
    //     console.log(to)
    // },
    data(){
        return {
            uid:'',
            ddid:null,
            items:[],
            types:[],
            // 弹框
            popup:0,
            popups:0,
            content:'',
            diaryid:null
        }
         
    },
    mounted(){
        this.all()
    },
    methods:{
         // 获取数据
        all(){
            let params = {
                cmd:'lookChildDiary',
                uid:this.uid,
                ddid:this.ddid
            }
            axios(params).then(res=>{
                if(res.result == '0'){
                    this.items = res
                    // for(var i = 0;i<this.items.dataList.lenght;i++){
                        // this.items = this.items[i]
                    // }
                    console.log(res)
                    this.popup=0
                }
            })
        },
        alltalk(){
            this.$router.push({path:'/alltalk', query:{ddid:this.items.dataobject.ddid,diaryid:this.diaryid}})
        },
        talk(){
            this.popup=1
        },
        closepopup(){
            this.popup=0
        },
        sendTo(){
            let pass = {
                cmd:'publishedComments',
                uid:this.uid,
                ddid:this.ddid,
                content:this.content
            }
            axios(pass).then(res=>{
                console.log(res)
                this.popup = 0                
                if(res.result == '0'){
                    this.types = res
                    console.log(res)
                    this.$router.go(0)
                }
            })
        }
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.ddid = this.$route.query.ddid
        console.log(this.$route.query.ddid)
        this.diaryid = this.$route.query.diaryid
        console.log(this.$route.query.diaryid)
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.lookC{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.lookC .speak{width: 100%;background: #fff;}
.lookC .speak .discuss{display: flex;justify-content: space-between;margin-left: .25rem;}
.lookC .speak .start{width: 9.5rem;margin-left: .25rem;}
.lookC .speak .start .top{display: flex;justify-content: space-between;margin-top: .3rem;}
.lookC .speak .start .top img{width: 0.9rem;height: 0.9rem;}
.lookC .speak .start .top .iptTB{padding-left: .2rem;padding-top: .1rem;width: 8.4rem;height: .8rem;;border-radius: .4rem;background:rgba(249,243,243,1);border:none;box-sizing:border-box;}
.lookC .speak .all{display: flex;justify-content: space-between;margin-top: .3rem;height: 3.5rem;margin-left: .25rem;}
.lookC .speak .all img{width: 0.9rem;height: 0.9rem;}
.lookC .speak .all .front{width: 8.3rem;height: 4.5rem;}

.footers{position: fixed;bottom:0;left: 0;width: 100%;height: 1.5rem;line-height: 1.5rem;background:rgba(255,255,255,1);box-shadow:0px .5rem 1.8rem 0px rgba(227,227,227,.8);}
.footers .f2{display:flex;justify-content:space-between;width:95%;margin-left:.25rem;}
.times{font-size:.3rem;color:rgba(204,204,204,1);margin-top:.3rem;border-bottom: .02rem solid rgba(226,226,226,1);height:1rem;}
.conte{font-size:.35rem;color:rgba(102,102,102,1);font-weight:500;margin-top:.3rem;}
.name{font-size:.4rem;color:rgba(17,17,17,1);font-weight:500;margin-top:.1rem;}

.loginTB {position: fixed;left: 50%;top:84%;height: 6rem;width: 100%;background-color: #fff;border-radius: 0.15rem;transform: translate(-50%, -50%);z-index: 9999;}
.loginTB .zhong{border-bottom:.01rem solid rgba(226,226,226,1);height:1rem;margin-top:.3rem;}
.loginTB textarea{width: 100%;height: 4rem;border: none;}
.over {position: fixed;width: 100%;height: 100%;opacity: 0.7;filter: alpha(opacity=70);top: 0;left: 0;z-index: 999;background-color: #111111;}
</style>

<template>
    <div class="alltalk">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="backes">
            <p>全部评论</p>
        </div>

        <!-- 评论全部展示 -->
        <ul class="conts">
            <li class="f22" v-for="(item,index) in types" :key="index">
                <img :src="item.usericon" alt>
                <div class="left">
                    <p>{{item.username}}</p>
                    <p style="font-size:.3rem;color:rgba(153,153,153,1);">{{item.commentscontent}}</p>
                    <p class="div">{{item.commentstime}}</p>
                </div>
            </li>
        </ul>
        <!--  -->

        <!-- 底部 -->
        <div class="footer">
            <div class="center">
                <input type="text" placeholder="据说多发评论的人会更美哦~" @click="talk">
                <div>评论</div>
            </div>
        </div>
        <!--  -->

        <!-- 弹窗模块 -->
        <div v-show="popup">
            <!--这里是要展示的内容层-->
            <div class="login">
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
import axios from '../axios'
export default {
    data(){
        return {
            uid:'',
            ddid:null,
            nowPage:'1',
            types:[],
            // 弹框
            popup:0,
            popups:0,
            content:'',
            items:[],
            diaryid:null
        }
    },
    methods:{
        // 获取全部数据
        all(){
            let params = {
                cmd:'allComments',
                uid:this.uid,
                ddid:this.ddid,
                nowPage:this.nowPage
            }
            axios(params).then(res=>{
                if(res.result == '0'){
                    this.types = res.dataList
                    console.log(res)
                }
            })
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
            console.log(111111)
            axios(pass).then(res=>{
                console.log(res)
                if(res.result == '0'){
                    this.items = res
                    console.log(res)
                    this.popup=0
                }
            })
        },
        backes(){
            history.back(-1)
            // this.$router.push({path:'/lookC',query:{ddid:this.ddid,diaryid:this.diaryid}})
        }
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.ddid = this.$route.query.ddid
        this.diaryid = this.$route.query.diaryid
        console.log(this.$route.query.ddid)
        console.log(this.$route.query.diaryid)
    },
    mounted(){
        this.all()
    }
};
</script>

<style>
*{margin: 0;padding: 0;}
.alltalk{font-family: 'PingFang-SC-Bold';width: 100%;background: #fff;height: 100%;}
.alltalk .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.alltalk .Title p{float: left;margin-left: 30%}
.alltalk .Title img{float: left;margin-top: .5rem;margin-left: .5rem}

.conts{width: 95%;text-align: center;margin-top: 1.5rem;margin-left: .5rem;}
.conts .f22{height: 100%;overflow: hidden;border-bottom: .01rem solid rgba(226,226,226,1);list-style: none;}
.conts .f22 img{width:1rem;height: 1rem;border-radius: 50%;margin-top: .5rem;float: left;}
.conts .f22 .left{width: 7rem;height: 2.2rem;margin-left: .5rem;;float: left;text-align: left;line-height: .7rem;margin-top: .3rem}
.conts .f22 .left p{font-weight:500;color:rgba(17,17,17,1);font-size: .38rem;}
.conts .f22 .left .div{font-weight:500;color:rgba(153,153,153,1);font-size: .35rem;float: left;}

.footer{width: 100%;height: 1.5rem;position: fixed;bottom: 0;left: 0;box-shadow:0px .03rem .2rem 0px rgba(221,221,221,0.45);background: #fff;}
.footer .center{width: 95%;margin-left: .25rem;overflow: hidden;line-height: 1.5rem}
.footer .center input{width: 85%;height: .9rem;background:rgba(249,243,243,1);border-radius: .6rem;font-size: .38rem;border:none;text-align: center;float: left;margin-top: .3rem;}
.footer .center div{float: left;font-size: .45rem;color:rgba(153,153,153,1);margin-left: .5rem;}

.login {position: fixed;left: 50%;top:84%;height: 6rem;width: 100%;background-color: #fff;border-radius: 0.15rem;transform: translate(-50%, -50%);z-index: 9999;}
.login .zhong{border-bottom:.01rem solid rgba(226,226,226,1);height:1rem;margin-top:.3rem;}
.login textarea{width: 100%;height: 4rem;border: none;}
.over {position: fixed;width: 100%;height: 100%;opacity: 0.7;filter: alpha(opacity=70);top: 0;left: 0;z-index: 999;background-color: #111111;}
</style>

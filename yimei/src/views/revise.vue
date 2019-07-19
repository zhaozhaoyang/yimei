<template>
    <div class="revise">
        <div class="Titlemar">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back" class="img">
            <p>修改昵称</p>
            <div @click="name" class="margin">
                <div style="" v-if="show">完成</div>
                <div style="" v-else>编辑</div>
            </div>
        </div>
        <div class="up">
            <input type="text" placeholder="123" v-if="flag" v-model="nickname">
        </div>
        <p style="color:rgba(204,204,204,1);font-size:.35rem;margin-left:7.8rem;">2-20个字符</p>
    </div>
</template>

<script>
import axios from '../axios'
import { Notify } from 'vant';
export default {
    data(){
        return {
            uid:'',
            nickname:null,
            show:true,
            flag:true,
            phone:null,
            icon:null
        }
    },
    components:{
        [Notify.Component]: Notify.Component
    },
    methods:{
        all(){
            let params = {
                cmd:'updateNickName',
                uid:this.uid,
                nickname:this.nickname
            }
            axios(params).then(res => {
                if(res.result == '0'){
                    console.log(res)
                    Notify({
                        message: res.resultNote,
                        duration: 1000,
                        background: '(17,17,17,.5)'
                    });
                }
            })
        },
        name(){
            if(this.show){
                this.show = false
                this.all()
                this.flag = true
            }else{
                this.show = true
            }
        },
        // 跳转页面
        back(){
            this.$router.push({path:"/set",query:{phone:this.phone,nickname:this.nickname,icon:this.icon}})
        }
    },
    mounted(){
        // this.all()
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.nickname = this.$route.query.nickname
        console.log(this.$route.query.nickname)
        this.phone= this.$route.query.phone
        console.log(this.$route.query.phone)
        this.icon= this.$route.query.icon
        console.log(this.$route.query.icon)
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.revise{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;background: #fff;;}
.revise .Titlemar{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);overflow: hidden;}
.revise .Titlemar p{float: left;margin-left: 32%;}
.revise .Titlemar .img{float: left;margin-top: .55rem;margin-left: .5rem;width: .3rem;height: .5rem;}
.revise .up{width: 95%;height: 1.5rem;border-bottom:.01rem solid rgba(226,226,226,1);margin-top: 1.5rem;line-height: 1.5rem;margin-left: .25rem;}
.revise .up input{font-size: .4rem;width: 95%;height: 1.2rem;border: none;}
.revise .Titlemar .margin{position: absolute;top: 0.1rem;right: 0.5rem;font-size: .35rem}
.van-popup.van-popup--top.van-notify{margin-top: 50%;background: rgba(17,17,17,.5);left: 25%;height: 1rem;width: 50%;line-height: .7rem;border-radius: .2rem;font-size: .3rem;}
</style>

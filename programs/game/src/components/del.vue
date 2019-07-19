<template>
    <div class="dels">
        <div class="title">核消</div>
        <img src="../component/img/return@1x.png" alt="" class="returnQ" @click="returness">
        <div class="itemsA">
            <div class="datatA">
                <div class="carsA">
                    <p>{{resultess.userName}} {{resultess.phone}}</p>
                </div>
                <div class="datattA">
                    <img :src="resultess.image" alt="" class="tupianA">
                    <div class="xuananA">
                        <div class="titlessA">
                            <p>{{resultess.name}}</p>
                            <p v-if="resultess.orderFlag == 2">未核消</p>
                            <p v-else>已核消</p>
                        </div>
                        <div class="aftersA">
                            <p>门票种类：{{resultess.cateName}}</p>
                            <div>出行日期：{{resultess.time}}<span>数量：{{resultess.number}}</span></div>
                        </div>
                    </div>
                </div>
            </div>             
        </div>
        <div class="btn" @click="kuang" v-show="hidden">确认核销</div>
    </div>
</template>

<script>
import { Dialog,Notify } from 'vant';
import request from '../http'
export default {
    components: {
        [Dialog.Component.name]: Dialog.Component,
        [Notify.Component]: Notify.Component
    },
    data(){
        return {
            resultes:null,
            resultess:[],
            id:'',
            uid:'',
            hidden:true
        }
    },
    methods:{
        returness(){
            history.back(-1)
        },
        kuang(){
            var that = this
            Dialog.confirm({
                message: '确认核销'
            }).then(() => {
                // on confirm
                let data = {
                    cmd:"checkId",
                    id:that.id,
                    uid:that.uid
                }
                // alert(JSON.stringify(data))
                request.postRequest(data).then(res=>{
                    // alert(JSON.stringify(data))
                    // alert(JSON.stringify(res.data))
                     Notify({
                        message: res.data.resultNote,
                        duration: 1000,
                        background: '(17,17,17,.5)'
                    })
                    if(res.data.result == '0'){
                        // alert(JSON.stringify(res))
                        that.$router.push('/index')
                    }   
                })
            }).catch(() => {
                // on cancel
            });
        },
        // 判断是否核销(如果核销隐藏按钮否则不隐藏)
        verification(){
            // alert(this.resultess.orderFlag)
            if(this.resultess.orderFlag == 1){
                this.hidden = false
            }else{
                this.hidden = true
            }
        }
    },
    created(){
        this.uid = localStorage.getItem('uid')
        console.log(this.uid) 
        
        // 获取连接
        this.resultes = this.$route.query.resultes
        // alert(this.resultes)
        request.post(this.resultes).then(res => {
            if(res.data.result == '0'){
                // alert(JSON.stringify(res.data))  
                this.resultess =res.data
                this.id = res.data.id
                // 调用
                // this.verification()
            }
        })
    }
}
</script>

<style lang="scss">
$color:rgba(153,153,153,1);
.dels{width: 100%;height: 100%;background:rgba(248,248,248,1);font-size: .45rem}
.returnQ{position: absolute;top: 2%;left: 2%;}
.itemsA{
    width: 100%;
    .datatA{
        width: 95%;margin-left: 2.5%;background:rgba(255,255,255,1);border-radius:.1rem;margin-top:2%;
        .carsA{height: 1rem;line-height: 1rem;border-bottom: .02rem solid rgba(227,227,227,0.45);font-size: .4rem;color: $color;
            p{margin-left: .2rem}
        }
        .datattA{
            width: 98%;margin-left:2%;margin-top:.2rem;overflow: hidden;height: 2.5rem;border-bottom: .02rem solid rgba(227,227,227,0.45);
            .tupianA{float: left;width: 2.1rem;height: 2.1rem;}
            .xuananA{
                float: left;width: 70%;margin-left:.3rem;
                .titlessA{
                    width: 100%;display: flex;justify-content: space-between;
                    p{font-size: .4rem}
                }
                .aftersA{
                    margin-top: .4rem;
                    p{font-size: .35rem;color: $color;}
                    div{font-size: .35rem;margin-top: .2rem;color: $color;display: flex;justify-content: space-between;}
                }
            }
        }
    }
}
.btn{width: 80%;height: 1rem;border-radius: .5rem;background:rgba(190,126,80,1);text-align: center;line-height: 1rem;color: #fff;margin-left: 1rem;margin-top: 35%;}
.van-dialog{height: 3.5rem;width: 75%;font-size: .45rem;}
.van-hairline--top::after{ margin-top: 3%;}
.van-button{margin: .4rem;}
.van-dialog__content>div{font-size: 0.45rem;}
.van-dialog__message{margin-top: .7rem;font-size: 0.45rem;}
.van-button--default{color: #666;}
.van-dialog__confirm, .van-dialog__confirm:active{color: rgba(190,126,80,1)}
button.van-button.van-button--default.van-button--large.van-dialog__cancel{font-size: .4rem}
button.van-button.van-button--default.van-button--large.van-dialog__confirm.van-hairline--left {font-size: .4rem}
.van-popup.van-popup--top.van-notify{margin-top: 100%;background: rgba(17,17,17,.5);left: 25%;height: 1rem;width: 50%;line-height: 1rem;border-radius: .2rem;font-size: .3rem;}
</style>

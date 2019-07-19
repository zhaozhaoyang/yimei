<template>
    <div class="addr">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>选择地区</p>
            <div @click="keep">保存</div>
        </div>
        <!-- 地址整体 -->
        <addresss></addresss>
        <!--  -->
    </div>
</template>

<script>
import axios from '../axios'
import addresss from '@/components/addr/address.vue'
import { Notify } from 'vant'
export default {
    data(){
        return {
            uid:'',
            address:null,
            addressdetail:null,
            nickname:null,
            phone:null,
            icon:null
        }
    },
    components:{
        addresss,
        [Notify.Component]: Notify.Component,
    },
    methods:{
        back(){
            history.back(-1)
            // this.$router.push({path:'/set',query:{phone:this.phone,nickname:this.nickname,icon:this.icon}})
        },
        keep(){
            // 获取数据
            let params = {
                cmd:'updateAddress',
                uid:this.uid,
                address:this.address,
                addressdetail:this.addressdetail
            }
            axios(params).then(res => {
                if(res.result == '0'){
                    console.log(res)
                    Notify({
                        message: res.resultNote,
                        duration: 1000,
                        background: '(17,17,17,.5)'
                    })
                }
            })
        },
    },
    
    created(){
        this.uid = localStorage.getItem('uid')
        this.address= this.$route.query.address
        this.addressdetail= this.$route.query.addressdetail
        console.log(this.$route.query.address)
        console.log(this.$route.query.addressdetail)
        this.nickname = this.$route.query.nickname
        this.phone= this.$route.query.phone
        this.icon= this.$route.query.icon
        console.log(this.$route.query.nickname)
        console.log(this.$route.query.phone)
        console.log(this.$route.query.icon)
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.addr{font-family: 'PingFang-SC-Bold';width: 100%;}
.addr .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.addr .Title img{float: left;margin-left: .25rem;margin-top: .5rem;width: .3rem;height: .5rem;}
.addr .Title p{float: left;margin-left: 38%;}
.addr .Title div{float: left;margin-left: 25%;font-weight: normal;font-size: .35rem;}

</style>

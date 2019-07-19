<template>
    <div class="cash">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>提现</p>
        </div>
        <div class="all">
            <div class="write">
                <p class="now">提现账户：</p>
                <div class="name">
                    <p>持卡人姓名：</p>
                    <input type="text" style="border:none;margin-left:.5rem;" placeholder="请输入姓名" v-model="realname">
                </div>
                 <div class="name">
                    <p>开户行：</p>
                    <input type="text" style="border:none;margin-left:1.25rem;" placeholder="请输入所属银行" v-model="bankname">
                </div>
                 <div class="name" style="border:none">
                    <p>银行卡号：</p>
                    <input type="text" style="border:none;margin-left:.9rem;" placeholder="请输入卡号" v-model="banknum">
                </div>
            </div>
        </div>
        <div class="writes">
            <p class="nows">提现金额：</p>
            <div class="names">
                <p>￥</p>
                <input type="text" placeholder="100" style="border:none;" v-model="money">
            </div>
            <p style="color:rgba(153,153,153,1);margin-top:.3rem;">可用余额11000<span style="color:rgba(35,183,172,1);margin-left:5.5rem;">全部提现 ></span></p>
        </div>
        <div class="btn" @click="sure">确认</div>
    </div>
</template>

<script>
import axios from '../axios'
export default {
    data(){
        return {
            uid:'',
            money:'',
            bankname:'',
            banknum:'',
            realname:'',
            balance:null
        }
    },
    methods:{
        back(){
            this.$router.push({path:'/money',query:{balance:this.balance}})
        },
        // sure(){
        //     
        // },
        // 获取数据
        sure(){
            let all = {
                cmd:'withDrawal',
                uid:this.uid,
                money:this.money,
                bankname:this.bankname,
                banknum:this.banknum,
                realname:this.realname
            }
            axios(all).then(res => {
                if(res.result == '0'){
                    this.$router.push({path:'/succash',query:{image:res.image,balance:this.balance}})
                }
            })
        }
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.balance = this.$route.query.balance
        // console.log(this.$route.query.balance)
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.cash{font-family: 'PingFang-SC-Bold';width: 100%;background: #fff;height: 100%;}
.cash .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.cash .Title img{float: left;margin-left: .25rem;margin-top: .5rem}
.cash .Title p{float: left;margin-left: 40%}
.cash .all{width: 100%;height: 4.8rem;background:rgba(242,242,242,1);margin-top: 1.8rem;}
.cash .all .write{width: 100%;background: #fff;height: 4.5rem;}
.cash .all .write .now{font-size: .4rem;color:rgba(17,17,17,1);margin-left: .25rem;}
.cash .all .write .name{height: 1.3rem;width: 95%;margin-left: .25rem;border-bottom: .01rem solid rgba(226,226,226,1);overflow: hidden;;line-height: 1.3rem;font-size: .38rem;}
.cash .all .write .name p{float: left;}
.cash .writes{width: 95%;height: auto;margin-left: .25rem;margin-top: .5rem;}
.cash .writes .nows{font-size: .4rem;color:rgba(17,17,17,1);}
.cash .writes .names{height: 1.3rem;width: 95%;margin-left: .25rem;border-bottom: .01rem solid rgba(226,226,226,1);overflow: hidden;;line-height: 1.3rem;font-size: .38rem;}
.cash .writes .names p{float: left;}
.cash .writes .names input{float: left;height: 1rem;line-height: 1rem;font-size: .7rem;margin-top: .1rem;}
.cash .btn{width: 90%;background:rgba(35,183,172,1);height: 1.2rem;border-radius: .8rem;margin-top: 1rem;margin-left: .5rem;text-align: center;line-height: 1.2rem;color: #fff;font-size: .4rem;}

</style>

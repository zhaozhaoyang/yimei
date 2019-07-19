<template>
    <div class="succash">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>提现申请</p>
        </div>
        <img :src="image" alt="" class="img">
        <p>提现申请已提交</p>
        <div class="btn" @click="money">完成</div>         
    </div>
</template>

<script>
export default {
    data(){
        return {
            image:null
        }
    },
    methods:{
        back(){
            this.$router.push({path:'/cash',query:{balance:this.balance}})
        },
        money(){
            this.$router.push({path:'/money',query:{balance:this.balance}})
        }
    },
    created(){
        this.image = this.$route.query.image
        console.log(this.$route.query.image)
         this.balance = this.$route.query.balance
        // console.log(this.$route.query.balance)
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.succash{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.succash .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.succash .Title img{float: left;margin-top: .5rem;margin-left: .25rem;}
.succash .Title p{float: left;margin-left: 40%;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);}
.succash .img{margin-left: 30%;margin-top: 2rem;width: 4rem;height: 4rem;border-radius: 50%;}
.succash p{text-align: center;margin-top: .5rem;color:rgba(102,102,102,1);font-size: .4rem}
.succash .btn{width: 9rem;height: 1.3rem;background:rgba(35,183,172,1);opacity:0.6;border-radius: .8rem;font-size: .4rem;font-weight:500;color:#fff;text-align: center;line-height: 1.3rem;margin-top: 2.5rem;margin-left: .5rem;}
</style>

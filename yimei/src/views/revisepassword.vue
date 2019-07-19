<template>
    <div class="respasd">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>修改密码</p>
        </div>
        <div class="headerk">
            <div class="centeres">
                <p @click="Lgpasd" class="p">登录密码</p>
            </div>
            <div class="centeres">
                <p @click="Paypasd" class="p">支付密码</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            phone:null,
            nickname:null,
            icon:null
        }
    },
    methods:{
        Lgpasd(){
            this.$router.push({path:'/reslp1',query:{nickname:this.nickname,phone:this.phone,icon:this.icon}})
        },
        Paypasd(){
            this.$router.push({path:'/respp',query:{addressdetail:this.addressdetail,address:this .address,nickname:this.nickname,phone:this.phone,icon:this.icon,age:this.age}})
        },
        back(){
            this.$router.push({path:'/set',query:{addressdetail:this.addressdetail,address:this .address,nickname:this.nickname,phone:this.phone,icon:this.icon,age:this.age}})
        }
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
        this.age= this.$route.query.age
        console.log(this.$route.query.nickname)
        console.log(this.$route.query.phone)
        console.log(this.$route.query.icon)
        console.log(this.$route.query.age)
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.respasd{font-family: 'PingFang-SC-Bold';width: 100%;background:rgba(242,242,242,1);height: 100%;}
.respasd .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.respasd .Title p{float: left;margin-left: 32%}
.respasd .Title img{float: left;margin-top: .5rem;margin-left: .5rem}
.respasd .headerk{width: 100%;height: auto;margin-top: 1.5rem;background: #fff;}
.respasd .headerk .centeres{width: 9.5rem;height: 1.5rem;margin-left: .25rem;border-bottom:.01rem solid rgba(226,226,226,1);}
.respasd .headerk .centeres .p{color: rgba(17,17,17,1);font-weight:500;line-height: 1.5rem;font-size: .4rem;text-align: center;}
</style>

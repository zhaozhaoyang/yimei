<template>
    <div class="business">
        <div class="Title">营业执照</div>
        <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
        <img :src="aboutGuide" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return {
            aboutGuide:null
        }
    },
    created(){
        this.aboutGuide = this.$route.query.aboutGuide
        console.log(this.$route.query.aboutGuide)
    },
    methods:{
        back(){
            history.back(-1)
        }
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.business{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;background: #fff;}
.business .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.business img{margin-top: 1.8rem;margin-left: .25rem;width: 95%;height: 95%;}
</style>

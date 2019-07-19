<template>
    <div class="dcheck">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>日记审核</p>
        </div>
        <img src="../common/images/img/pic/预购/组127@1x.png" alt="" class="img">
        <p>日记正在审核，通过后将自动发布</p>
        <div class="btn" @click="sure">确定</div>         
    </div>
</template>

<script>
export default {
    methods:{
        sure(){
            this.$router.push('/mydiary')
        },
        back(){
            this.$router.push('/resot')
        },
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.dcheck{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.dcheck .Title{overflow:hidden;position:fixed;top:0;left: 0;width: 100%;height: 1.5rem;background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.dcheck .Title p{float: left;margin-left: 35%;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);}
.dcheck .Title img{float: left;margin-left: .25rem;margin-top: .5rem}
.dcheck .img{margin-left: 30%;margin-top: 2rem;;}
.dcheck p{text-align: center;margin-top: .5rem;color:rgba(102,102,102,1);font-size: .4rem}
.dcheck .btn{width: 9rem;height: 1.3rem;background:rgba(35,183,172,1);opacity:0.6;border-radius: .8rem;font-size: .4rem;font-weight:500;color:#fff;text-align: center;line-height: 1.3rem;margin-top: 2.5rem;margin-left: .5rem;}
</style>
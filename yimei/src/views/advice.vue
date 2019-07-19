<template>
    <div class="advice">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="backTo">
            <p>通知</p>
        </div>
        <fot></fot>
    </div>
</template>

<script>
import fot from '@/views/share/share/fot'
export default {
    components:{
        fot
    },
    // created(){
    //     this.uid = localStorage.getItem('uid')
    // }
    methods:{
        backTo(){
            history.back(-1)
            // this.$router.push('/shopcar')
        },
    }
};
</script>

<style>
*{margin: 0;padding: 0;}
.advice{font-family: 'PingFang-SC-Bold';width: 100%;}
.advice .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.Title p{float: left;margin-left: 38%}
.Title img{float: left;margin-left: .25rem;margin-top: .5rem}
</style>


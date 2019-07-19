<template>
    <div class="daiaryR">
        <div class="Title">
            <div class="before">
                <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
                <P>日记规则协议</P>
            </div>
             <div class="ff1">
                <div class="tab" @click="showAll1"><a>日记使用方法</a></div>
                <div class="tab" @click="showAll2"><a>收益规则</a></div>
            </div>
        </div>
        <iframe src="http://122.114.49.242/plastic/display/agreement?id=11" frameborder="0" scrolling="no" v-show="show1"></iframe>
        <iframe src="http://122.114.49.242/plastic/display/agreement?id=17" frameborder="0" scrolling="no" v-show="show2"></iframe>
        <div class="btn" @click="found">
            <div class="clicky" @click="start">
                <img src="../common/images/img/ios/look/ios/椭圆7拷贝@1x.png" alt="" v-if="show">
                <img src="../common/images/img/ios/look/ios/组13@1x.png" alt="" v-else>
            </div>
            <p>我已阅读并同意<span>《发布日记奖励规则》</span></p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:true,
            show1:true,
            show2:false
        }
    },
    methods:{
        showAll1(){
            this.show2 = false
            this.show1 = true
        },
        showAll2(){
            this.show1 =false
            this.show2 = true
        },
        start(){
            if(this.show){
                this.show = false
            }else{
                this.show = true
            }
        },
        found(){
            this.$router.push('/resot')
        },
        back(){
            this.$router.push('/mydiary')
        }
        
    },
    created(){
        this.showAll1()
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.daiaryR{font-family: 'PingFang-SC-Bold';}
.daiaryR .Title{position: fixed;top:0;left: 0;width: 100%;height: 2.1rem;text-align: center;line-height: 1.05rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.3);}
.daiaryR .Title .before{overflow: hidden;}
.daiaryR .Title .before img{float: left;margin-left: .25rem;margin-top: .25rem}
.daiaryR .Title .before p{float: left;margin-left: 33%;}
.daiaryR .Title .ff1{font-size: .35rem;display: flex;justify-content: space-around;}
/* .daiaryR .Title .ff1 .tab{text-decoration: none;font-size:.4rem;border-bottom:solid .05rem rgba(35,183,172,1)} */
.daiaryR .Title .ff1 .tab{text-decoration: none;font-size:.4rem;color: rgba(17, 17, 17, 1)}
.daiaryR .btn{position: fixed;bottom: 0;left: 0;width: 100%;height: 1.2rem;overflow: hidden;box-shadow:0 .3rem  .2rem 0 rgba(227,227,227,0.45);background: #fff;line-height: 1.2rem}
.daiaryR .btn .clicky{float: left;margin-left: .25rem}
.daiaryR .btn .clicky img{width: 0.4rem;;height: 0.4rem;    margin-top: .4rem;}
.daiaryR .btn p{float: left;font-size: .38rem;margin-left: .2rem}
.daiaryR .btn p span{color: rgba(35, 183, 172, 1)}
iframe{margin-top: 2rem}
</style>

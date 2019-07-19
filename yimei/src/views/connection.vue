<template>
    <div class="connect">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>联系我们</p>
        </div>
        <div class="content">
            <div class="star1">
                <p class="stars">{{items.wxpublic}}<span>《杨承禹医美消费指南》</span></p>
                <p class="starss">{{items.sinawb}}<span>《杨承禹医美消费指南》</span></p>
            </div>
            <div class="star2">
                <p class="stars">市场合作</p>
                <p class="starss">{{items.cooperationphone}}</p>
            </div>
            <div class="star3">
                <p class="stars">客服电话</p>
                <p class="starss">{{items.servicephone}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../axios'
export default {
    data(){
        return {
            items:[]
        }
    },
    methods:{
        back(){
            this.$router.push('/system')
        }
    },
    created(){
        axios({cmd:'contactUs'}).then(res=>{
            if(res.result == '0'){
                this.items = res.dataobject
                console.log(this.items)
            }
        })
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.connect{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.connect .Title{position: fixed;top:0;left: 0;width: 100%;line-height: 1.5rem;height: 1.5rem;overflow: hidden;background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.connect .Title p{float: left;margin-left: 35%;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);}
.connect .Title img{float: left;margin-top: .5rem;margin-left: .25rem}
.connect .content{width: 100%;height: 100%;margin-top: 1.7rem}
.connect .content .star1{width: 95%;background: url('../common/images/img/ios/1/ios/shouye/圆角矩形1拷贝9@1x.png') center;width: 95%;height: 80px;margin-left: .25rem;position: relative;border-radius: .1rem;}
.connect .content .star2{width: 95%;background: url('../common/images/img/ios/1/ios/shouye/圆角矩形1拷贝5@1x.png') center;width: 95%;height: 80px;margin-left: .25rem;position: relative;border-radius: .1rem;top: .1rem;}
.connect .content .star3{width: 95%;background: url('../common/images/img/ios/1/ios/shouye/圆角矩形1拷贝6@1x.png') center;width: 95%;height: 80px;margin-left: .25rem;position: relative;border-radius: .1rem;top: .3rem}
.connect .content .star1 .stars{font-size: .4rem;position: absolute;top:.4rem;left: .4rem;}
.connect .content .star2 .stars{font-size: .4rem;position: absolute;top:.4rem;left: .4rem;}
.connect .content .star3 .stars{font-size: .4rem;position: absolute;top:.4rem;left: .4rem;}
.connect .content .star1 .starss{font-size: .4rem;position: absolute;top:1.2rem;left: .4rem;}
.connect .content .star2 .starss{font-size: .35rem;position: absolute;top:1.2rem;left: .4rem;color: rgba(11, 172, 160, 1)}
.connect .content .star3 .starss{font-size: .35rem;position: absolute;top:1.2rem;left: .4rem;color: rgba(11, 172, 160, 1)}
.connect .content p span{margin-left: .8rem;color: rgba(54, 86, 248, 1);}
</style>

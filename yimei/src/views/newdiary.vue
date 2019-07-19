<template>
    <div class="newdiary">
        <div class="Teitle">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>修改手术时间</p>
            <div @click="restimer">提交</div>
        </div>
        <div class="tu">
            <div class="detail">上传术前真实照片</div>
            <div class="pic">
                <img src="../common/images/img/ios/ios/组11@2x.png" alt="">
                <img src="../common/images/img/ios/ios/组10@1x.png" alt="">
                <img src="../common/images/img/ios/ios/组8@1x.png" alt="">
                <img src="../common/images/img/ios/ios/组9@1x.png" alt="">
            </div>
        </div>
         <!-- 记录心情 -->
        <!-- <div class="ready">
            <textarea placeholder="快来记录你的术前心情吧!"></textarea>
        </div> -->
        <!--  -->
        <!--  -->
        <fots style="z-index:9999;"></fots>
        <!--  -->
    </div>
</template>

<script>
import fots from '@/components/operated/foot.vue'
import axios from '../axios'
export default {
    data(){
        return {
            popups:1,
            diaryid:null,
            surgerytime:null
        }
    },
    methods:{
        remove(){
            this.popups = 0;
        },
        restimer(){
            let timers = {
                cmd:'submitSurgeryTime',
                diaryid:this.diaryid,
                surgerytime:this.surgerytime
            }
            axios(timers).then(res=>{
                if(res.result == '0'){
                    console.log(res)
                    this.$router.push('/dcheck')
                }
            })
        },
        back(){
            this.$router.push('/mydiary')
        }
    },
    components:{
        fots
    },
    created(){
        this.diaryid = this.$route.query.diaryid
        this.surgerytime = this.$route.query.surgerytime
        console.log(this.$route.query.diaryid)
        console.log(this.$route.query.surgerytime)
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.newdiary{font-family: 'PingFang-SC-Bold';width: 100%;background: #fff;height: 100%;}
.newdiary .Teitle{overflow: hidden;position: fixed;top:0;left: 0;width: 100%;height: 6rem;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);background: #fff;}
.newdiary .Teitle p{float: left;margin-left: 30%}
.newdiary .Teitle div{float: left;font-size: .38rem;font-weight: normal;margin-left: 24%}
.newdiary .Teitle img{float: left;margin-left: .25rem;margin-top: .5rem}
.newdiary .tu{position: absolute;top:1.8rem;left: .25rem;width: 95%;}
.newdiary .tu .detail{font-weight:500;color:rgba(17,17,17,1);font-size: .4rem;text-align: center;}
.newdiary .tu .pic{width: 95%;display: flex;justify-content: space-between;margin-top: .3rem;margin-left: .25rem;}
.newdiary .tu .pic img{width: 2.2rem;height: 2.2rem;}
.newdiary .ready{width: 100%;height: 3.3rem;position: relative;top: 6.5rem;}
.newdiary .ready textarea{width: 95%;height: 3.2rem;margin-left: .25rem;border: none;border-bottom: .01rem solid rgba(226,226,226,1)}
</style>

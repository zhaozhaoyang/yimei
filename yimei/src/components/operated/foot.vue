<template>
    <div class="foot">
        <div class="center">
            <div class="up" @click="item">
                <p>手术项目</p>
                <p class="f13">切双眼皮</p>
            </div>
            <div class="up" @click="tel">
                <p>手术时间</p>
                <p class="f13" style="margin-left:3.2rem;color:rgba(35,183,172,1);" v-if="zuichuxianshi">请选择时间</p>
                <p class="f13" style="margin-left:3.2rem;color:rgba(35,183,172,1);" v-else>{{val}}</p>
                <img src="../../common/images/img/ios/ios/箭头(3)拷贝8@1x.png" alt="" style="margin-top:.68rem;margin-left:.2rem;">
            </div>
            <div class="up">
                <p>手术价格</p>
                <p class="f13">30000元</p>
            </div>
            <div class="up">
                <p>手术医生</p>
                <p class="f13">杨医生</p>
            </div>
             <div class="up">
                <p>手术医院</p>
                <p class="f13">郑州医美美容医院</p>
            </div>
        </div>
        <!-- 日期选择 -->
        <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        v-if="show"
        @confirm = "chucian"
        @cancel = "del($event)"
        />
        <!--  -->

        <!-- 项目弹窗模块 -->
        <!-- 弹窗模块 -->
        <div v-show="popup">
            <!--这里是要展示的内容层-->
            <div class="loginDB">
                 <img src="../../common/images/img/pic/my/取消@2x.png" alt="" style="margin-left: 7.8rem;margin-top:.2rem;" @click="closepopup">
                 <div class="centers" @click="all">
                    <p style="font-size:.4rem;">【切双眼皮】专利项目 肿胀轻 恢复快</p>
                    <p>手术时间：2019-04-05  12:20</p>
                </div>
                <div class="centers" @click="all">
                    <p style="font-size:.4rem;">【切双眼皮】专利项目 肿胀轻 恢复快</p>
                    <p>手术时间：2019-04-05  12:20</p>
                </div>
                 <div class="centers" @click="all">
                    <p style="font-size:.4rem;">【切双眼皮】专利项目 肿胀轻 恢复快</p>
                    <p>手术时间：2019-04-05  12:20</p>
                </div>
            </div>
            <!--这里是半透明背景层-->
            <div class="overflowD"></div>
        </div>
    </div>
</template>

<script>
import { DatetimePicker,Notify } from 'vant';
import axios from '../../axios'
export default {
    data(){
        return {
             // 弹框
            popup:0,
            popups:0,
            uid:'',
            currentDate: new Date(),
            minDate: new Date(),
            show:false,
            surgerytime:'',
            val:'',
            zuichuxianshi:true
        }
    },
    components:{
        [Notify.Component]: Notify.Component,
        'van-datetime-picker':DatetimePicker
    },
     methods:{
        //打开电话规则页面
        tel(){
            this.popups = 1;
            if(this.show == false){
                this.show = true
            }else{
                this.show = false
            }
        },
        // 关闭电话规则页面
        closepopups(){
            this.popups = 0;
        },

        // 打开项目弹窗
        item(){
            this.popup = 1;
        },
        // 关闭项目弹窗
        closepopup(){
            this.popup = 0;
        },
        all(){
            this.popup = 0
            axios({cmd:'noDiaryOrder',uid:this.uid,}).then(res => {
                if(res.result == '0'){
                    // this.items = res.dataList
                    // console.log(res)
                }
            })
        },
        del(){
            this.show = false
        },
        chucian(date){
            this.zuichuxianshi = false
            // console.log(val.getYear())
            // console.log(val.getMonth())
            // console.log(val.getDay())
            // console.log(val.toLocaleString())
            // console.log(val.toLocaleTimeString())
            console.log(date.toLocaleDateString())
            // console.log(val.valueOf())
            this.val = date.toLocaleDateString()
            this.show = false
           
        },
        
        // formatter(type, value) {
        //     if (type === 'year') {
        //         return `${value}年`;
        //     } else if (type === 'month') {
        //         return `${value}月`
        //     }
        // }
    },
        
    created(){
        this.uid = localStorage.getItem('uid')
    }
}
</script>

<style>
.foot .center{width: 100%;height: auto;background: #fff;position: relative;top: 6.5rem;left: 0;}
.foot .center .up{width: 9.5rem;margin-left:.5rem;height: 1.5rem;border-bottom:.01rem solid rgba(226,226,226,1);overflow: hidden;;font-size: .4rem;}
.foot .center .up p{line-height: 1.5rem;float: left;}
.foot .center .up .f13{float: left;width: 4rem;line-height: 1rem;height: 1rem;margin-top: .3rem;color:rgba(153,153,153,1);overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align: right;margin-left: 3.5rem;}
.loginDB {position: fixed;height: 6rem;width: 9rem;background-color: #fff;border-radius: 0.15rem;left: 50%;top: 80%;transform: translate(-50%, -50%);z-index: 9999;}
.overflowD {position: fixed;width: 100%;height: 100%;opacity: 0.7;filter: alpha(opacity=70);top: 0;left: 0;z-index: 999;background-color: #111111;}
.loginDB .centers{width: 8.5rem;height:1.8rem;margin-left: .25rem;border-bottom:.01rem solid rgba(226,226,226,1);margin-top: .3rem;}
.loginDB .centers p{color: rgba(17,17,17,1);font-weight:500;font-size: .38rem;margin-left: .25rem;margin-top: -.5rem;line-height: 1.2rem;}
.van-popup.van-popup--top.van-notify{margin-top: 50%;background: rgba(17,17,17,.5);left: 25%;height: 1rem;width: 50%;line-height: .7rem;border-radius: .2rem;font-size: .3rem;}
</style>

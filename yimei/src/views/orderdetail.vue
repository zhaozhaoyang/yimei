<template>
    <div class="order">
        <div class="Title">订单详情</div>
        <div class="header">
            <div class="top">
                <p style="font-weight:400;color:rgba(51,51,51,1);font-size:.4rem">订单编号：{{items.ordernum}}</p>
                <p style="color:rgba(255,0,74,1);font-size:.4rem;">待付款</p>
            </div>
            <div class="transition">
                <div class="f1" style="border-bottom:.01rem solid rgba(229,229,229,1)">
                    <img :src="items.proimage" alt style="margin-left:.25rem;">
                    <div class="Right">
                        <div class="ttitle">【{{items.classname}}】{{items.proname}}}</div>
                        <div class="content">
                            <div>{{items.doctorname}}：{{items.doctordesc}}</div>
                            <!-- <div>{{items.doctorname}}整形外科副主任医师，整形30年</div> -->
                        </div>
                        <div class="foot">
                            <span class="money">￥<span class="price">{{items.totalprice}}</span></span>
                            <span class="yue" style="margin-left:2rem">X1</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bao">
                <div class="center">
                    <p style="width:70%">商品金额</p>
                    <p style="color:rgba(102,102,102,1);font-size:.4rem;">￥<span style="font-size:.45rem;">{{items.totalprice}}</span></p>
                </div>
                <div class="center" >
                    <p style="width:70%">预约金</p>
                    <p style="color:rgba(255,0,74,1);font-size:.4rem;">￥<span style="font-size:.45rem;">{{items.yuyueprice}}</span></p>
                </div>
                <div class="center" >
                    <p style="width:70%">到院再付</p>
                    <p style="color:rgba(102,102,102,1);font-size:.4rem;">￥<span style="font-size:.45rem;">{{items.topayprice}}</span></p>
                </div>
                 <div class="kuang">
                    <div class="remove" @click="item">取消订单</div>
                    <div class="pay">去付款</div>
                </div>
            </div>
        </div>
        <!-- 联系信息开始 -->
        <div class="contents">
            <div class="box">
                <p class="up">联系信息</p>
                <div class="star">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">项目名称：</p>
                    <p>【{{items.classname}}】{{items.proname}}}</p>
                </div>
                <div class="star">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">医生名称：</p>
                    <p>{{items.doctorname}}</p>
                </div>
                <div class="star">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">医院名称：</p>
                    <p>{{items.hospital}}</p>
                </div>
                <div class="star">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">医院地址：</p>
                    <p>{{items.hospitaladdress}}</p>
                </div>
                <div class="star">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">联系电话：</p>
                    <p>{{items.doctorphone}}</p>
                </div>
            </div>
        </div>
    <!--  -->
    <!-- 订单信息开始 -->
        <div class="contentss">
                <p class="ups">订单信息</p>
                <div class="stars">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">订单编号：</p>
                    <p>{{items.ordernum}}</p>
                </div>
                <div class="stars">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">创建时间：</p>
                    <p>2019-04-06 15:20:20</p>
                </div>
                <div class="stars">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">预购时间：</p>
                    <p>2019-04-06 15:20:20</p>
                </div>
                <div class="stars">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">手术时间：</p>
                    <p>2019-04-06 15:20:20</p>
                </div>
                <div class="stars">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">医生点击确认完成时间：</p>
                    <p>2019-04-06 15:20:20</p>
                </div>
        </div>
    <!--  -->
    <!-- 项目弹窗模块 -->
        <!-- 弹窗模块 -->
        <div v-show="popup">
            <!--这里是要展示的内容层-->
            <div class="login">
                 <img src="../common/images/img/pic/my/取消@2x.png" alt="" style="margin-left: 9.3rem;margin-top:.2rem;width:.5rem;height.5rem;" @click="closepopup">
                 <div class="centers" v-for="(item,index) in types" :key="index">
                    <p>{{item.reason}}</p>
                    <div class="click" @click="click1">
                        <img src="../common/images/img/ios/look/ios/椭圆7拷贝@1x.png" alt="" v-if="show1">
                        <img src="../common/images/img/ios/shopcar/组5@1x (2).png" alt="" v-else>
                    </div>
                </div>
                <!-- <div class="centers" style="">
                    <p>太贵了</p>
                    <div class="click" @click="click2">
                        <img src="../common/images/img/ios/look/ios/椭圆7拷贝@1x.png" alt="" v-if="show2">
                        <img src="../common/images/img/ios/shopcar/组5@1x (2).png" alt="" v-else>
                    </div>
                </div>
                 <div class="centers" style="">
                    <p>感觉不安全</p>
                    <div class="click" @click="click3">
                        <img src="../common/images/img/ios/look/ios/椭圆7拷贝@1x.png" alt="" v-if="show3">
                        <img src="../common/images/img/ios/shopcar/组5@1x (2).png" alt="" v-else>
                    </div>
                </div>
                <div class="centers" style="border:none">
                    <p>其他原因</p>
                    <div class="click" @click="click4">
                        <img src="../common/images/img/ios/look/ios/椭圆7拷贝@1x.png" alt="" v-if="show4">
                        <img src="../common/images/img/ios/shopcar/组5@1x (2).png" alt="" v-else>
                    </div>
                </div> -->
                <div class="btn" @click="sure">确定</div>
            </div>
            <!--这里是半透明背景层-->
            <div class="over"></div>
        </div>
    </div>
</template>

<script>
import foots from '@/components/sureorder/foot.vue'
import axios from '../axios' 
export default {
    data(){
        return {
            uid:'',
            ordernum:null,
            items:[],
            types:[],
             // 弹框
            popup:0,
            popups:0,
            show1:true,
            show2:true,
            show3:true,
            show4:true,
            type:'0',
        }
    },
    methods:{
        order(){
            let ord = {
                cmd:'myOrderDetail',
                uid:this.uid,
                ordernum:this.ordernum
            }
            axios(ord).then(res=>{
                if(res.result == '0'){
                    this.items = res.dataobject
                    console.log(res)
                }
            })
        },
        // 打开项目弹窗
        item(){
            this.popup = 1;
        },
        // 关闭项目弹窗
        closepopup(){
            this.popup = 0;
        },
        click1(){
            if(this.show1){
                this.show1 = false
            }else{
                this.show1 = true
            }
        },
        click2(){
            
            if(this.show2){
                this.show2 = false
            }else{
                this.show2 = true
            }
        },
        click3(){
            if(this.show3){
                this.show3 = false
            }else{
                this.show3 = true
            }
        },
        click4(){
            if(this.show4){
                this.show4 = false
            }else{
                this.show4 = true
            }
        },
        // 获取取消原因
        over(){
            axios({cmd:'getcancelreason',type:this.type}).then(res=>{
                if(res.result == '0'){
                    console.log(res)
                    this.types = res.dataList
                   
                }
            })
        },
        sure(){
            let delorder = {
                cmd:'cancelOrder',
                uid:this.uid,
                ordernum:this.ordernum,
                reason:this.reason
            }
            axios(delorder).then(res=>{
                if(res.result == 0){
                    console.log(res)
                }
            })
        }
    },
    components:{
        foots
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.ordernum = this.$route.query.ordernum
        console.log(this.$route.query.ordernum)
        this.order()
        this.over()
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.order{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.order .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.order .header{margin-top: 1.8rem;}
.order .header .top{width: 95%;margin-left: .25rem;display: flex;justify-content:space-between;height: 1rem;line-height: 1rem}
.order .header .bao{background: #fff;width: 100%;position: absolute;top:5.92rem;}
.order .header .bao .center{width: 100%;height: 1.5rem;border-bottom:.01rem solid rgba(226,226,226,1);display: flex;justify-content: space-around}
.order .header .bao .center p{color: rgba(17,17,17,1);font-weight:500;line-height: 1.5rem;font-size: .4rem;}
.order .header .bao .center p span{text-align: right;}
.order .header .bao .kuang{width: 5.7rem;height: 1.5rem;overflow: hidden;margin-left: 4.3rem;margin-top: .4rem;}
.order .header .bao .kuang .remove{float: left;width: 2.5rem;height: 1rem;border:.02rem solid rgba(35,183,172,1);font-size: .4rem;text-align: center;line-height: 1rem;border-radius: .5rem;color:rgba(35,183,172,1);}
.order .header .bao .kuang .pay{float: left;margin-left: .3rem;;width: 2.5rem;height: 1rem;border:.02rem solid rgba(35,183,172,1);font-size: .4rem;text-align: center;line-height: 1rem;border-radius: .5rem;color:rgba(35,183,172,1);}
.order .contents{width: 100%;height: 9rem;background:rgba(242,242,242,1);position: absolute;top:12.3rem;}
.order .contents .box{width: 100%;height: 8.5rem;margin-top: .25rem;background: #fff;}
.order .contents .box .up{font-weight:bold;color:rgba(17,17,17,1);font-size: .4rem;padding-top: .3rem;padding-left: .25rem;}
.order .contents .box .star{overflow: hidden;border-bottom:.01rem solid rgba(226,226,226,1);height: 1.5rem;line-height: 1.5rem;}
.order .contents .box .star p{margin-left: .25rem;float: left;color:rgba(102,102,102,1);font-size: .4rem;}
.order .contentss{width: 100%;height: 4rem;margin-top: 15rem;background: #fff;}
.order .contentss .ups{font-weight:bold;color:rgba(17,17,17,1);font-size: .4rem;padding-top: .3rem;padding-left: .25rem;}
.order .contentss .stars{overflow: hidden;border-bottom:.01rem solid rgba(226,226,226,1);height: 1.5rem;line-height: 1.5rem;}
.order .contentss .stars p{margin-left: .25rem;float: left;color:rgba(102,102,102,1);font-size: .4rem}

.transition{margin-top:0;}
.transition .f1{width: 95%;height: 3.2rem;display: flex;justify-content: space-between;margin-left: .5rem;}
.transition .f1 img{width: 3rem;height: 3rem;}
.transition .f1 .Right{width: 6.4rem;margin-left: .25rem;}
.transition .f1 .Right .ttitle{font-size:.38rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.transition .f1 .Right .content{padding-top: .4rem;font-size: .28rem;color:rgba(102,102,102,1);width: 5.5rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height: .6rem;}
.transition .f1 .Right .foot{padding-top: .4rem;width: 5.5rem;display: flex;justify-content: space-between;}
.transition .f1 .Right .foot .money{color:rgba(255,0,0,1);font-size: .28rem;}
.transition .f1 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .4rem;}
.transition .f1 .Right .foot .yue{color:rgba(102,102,102,1);font-size: .28rem;}

.login {position: fixed;height: auto;width: 100%;background-color: #fff;border-radius: 0.15rem;left: 50%;top: 78%;transform: translate(-50%, -50%);z-index: 9999;}
.login .btn{width: 100%;height: 1.5rem;text-align: center;font-size: .4rem;color:rgba(35,183,172,1);line-height: 1.5rem;box-shadow:0px 0px 10px 0px rgba(201,201,201,0.38);}
.over {position: fixed;width: 100%;height: 100%;opacity: 0.7;filter: alpha(opacity=70);top: 0;left: 0;z-index: 999;background-color: #111111;}
.login .centers{width: 95%;height:.9rem;margin-left: .25rem;border-bottom:.01rem solid rgba(226,226,226,1);margin-top: .3rem;display: flex;justify-content: space-between;line-height: .9rem;}
.login .centers p{color: rgba(17,17,17,1);font-size: .34rem;margin-left: .25rem;margin-top: -.5rem;line-height: 1.8rem;}
.click img{width: 0.4rem;height: 0.4rem;}
</style>

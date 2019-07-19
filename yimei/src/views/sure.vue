<template>
    <div class="sure">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="imgs">
            <span>资质认证</span>
        </div>
        <!-- 个人信息 -->
        <div class="header" style="margin-top: 2rem;">
            <div class="zhong">
                <p class="infos">个人信息</p>
                <div class="center">
                    <div class="name">姓名:<input type="text" placeholder="您的真实姓名" style="margin-left:1.8rem;" v-model="name"></div>
                    <div class="name">身份证号：<input type="text" placeholder="您的证件号码" style="margin-left:.7rem;" v-model="idcard"></div>
                    <div class="name">联系方式：<input type="text" placeholder="您的手机号" style="margin-left:.7rem;" v-model="phone"></div>
                    <div class="name" style="border:none">现住址：<input type="text" placeholder="您的住址" style="margin-left:1.1rem;" v-model="nowaddr"></div>
                </div>
            </div>
        </div>
        <!--  -->
        <!-- 工作信息 -->
        <div class="header">
            <div class="zhong">
                <p class="infos">工作信息</p>
                <div class="center" style="">
                    <div class="name">单位名称：<input type="text" placeholder="医院名称" style="margin-left:.7rem;" v-model="unitname"></div>
                    <div class="name">单位地址：<input type="text" placeholder="医院地址" style="margin-left:.7rem;" v-model="unitaddr"></div>
                    <div class="name">职称与职务：<input type="text" placeholder="职称及职务" style="margin-left:.35rem;" v-model="position"></div>
                    <div class="name1">
                        <div class="dang">
                            <p>认证项目：</p>
                            <div class="bor" @click="jumping">
                                <div class="bg bor1">眼综合4项</div>
                                <div class="bg bor2">加强型微创持久双眼皮</div>
                                <div class="bg">眼袋失败修复</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <!-- 医美资质方面证书 -->
        <div class="foot">
            <div class="ct">
                <p style="font-size:.4rem;">《医美资质方面证书》</p>
                <p style="font-size:.38rem;margin-top:.3rem;">1、请确保证件完整，编号文字、照片均清楚可见</p>
                <p style="font-size:.38rem;margin-top:.3rem;">2、证件需是本人证件不得涂改</p>
                <p style="font-size:.38rem;margin-top:.3rem;">3、医美资质证书包括：执业证书、资格证书、职称证书、进修证书、主诊证书或备案页面、学习证书等</p>
                <div class="tu">
                    <div class="img">
                        <img src="../common/images/img/ios/sure/ios/组129@1x.png" alt="">
                        <img src="../common/images/img/ios/sure/ios/组129@1x.png" alt="">
                        <img src="../common/images/img/ios/sure/添加图片@2x.png" alt="" style="height:2rem;margin-top:.5rem;">
                    </div>
                </div>
            </div>
             <!-- 其他方面 -->
            <div class="ct">
                <p style="font-size:.4rem;">《其他方面资质证书》</p>
                <p style="font-size:.38rem;margin-top:.3rem;">1、请确保证件完整，编号文字、照片均清楚可见</p>
                <p style="font-size:.38rem;margin-top:.3rem;">2、证件需是本人证件不得涂改</p>
                <p style="font-size:.38rem;margin-top:.3rem;">3、医美资质证书包括：执业证书、资格证书、职称证书、进修证书、主诊证书或备案页面、学习证书等</p>
                <div class="tu">
                    <div class="img">
                        <img src="../common/images/img/ios/sure/ios/组129@1x.png" alt="">
                        <img src="../common/images/img/ios/sure/ios/组129@1x.png" alt="">
                        <img src="../common/images/img/ios/sure/添加图片@2x.png" alt="" style="height:2rem;margin-top:.5rem;">
                    </div>
                </div>
            </div>
        <!--  -->
        </div>
        <!--  -->
       
        <!-- 提交按钮 -->
        <div class="ipt">
            <button class="btn" @click="intelligence">提交认证</button>
        </div>
    </div>
</template>

<script>
import axios from '../axios'
export default {
    data(){
        return {
            uid:'',
            name:'',
            idcard:'',
            phone:'',
            nowaddr:'',
            unitname:'',
            unitaddr:'',
            position:'',
            rzPro:'',
            zgzsImage:'',
            zyzsImage:''
        }
    },
    // beforeRouteLeave:function(to, from, next){
    //     console.log(to)        
    // },
    methods:{
        jumping(){
            this.$router.push({path:'/sureC',query:{}})
        },
        imgs(){
            this.$router.push('/ok')
        },
        // 获取数据
        intelligence(){
            let about = {
                cmd:'submitzzrz',
                uid:this.uid,
                name:this.name,
                idcard:this.idcard,
                phone:this.phone,
                nowaddr:this.nowaddr,
                unitname:this.unitname,
                unitaddr:this.unitaddr,
                position:this.position,
                rzPro:this.rzPro,
                zgzsImage:this.zgzsImage,
                zyzsImage:this.zyzsImage
            }
            axios(about).then(res => {
                if(res.result == '0'){
                    console.log(res)
                    this.$router.push('/ok')
                }
            })
        },
        
    },
    created(){
        this.uid = localStorage.getItem('uid')
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.sure{font-family: 'PingFang-SC-Bold';background:rgba(242,242,242,1);height: 100%;width: 100%;}
.sure .Title{overflow: hidden;;position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.sure .Title span{float: left;margin-left: 35%}
.sure .Title img{float: left;margin-left: .25rem;margin-top: .5rem}
.sure .header{width:100%;margin-top: .4rem}
.sure .header .zhong{width: 100%;background: #fff;}
.sure .header .zhong .infos{font-weight:bold;color:(17,17,17,1);font-size:.42rem;margin-left:.25rem;}
.sure .header .zhong .cneter{margin-top:.3rem;margin-left:.25rem;}
.sure .header .zhong .name{margin-left:.25rem;width: 95%;;font-weight: 500;color:(17,17,17,1);font-size:.4rem;height: 1.4rem;border-bottom: .02rem solid rgba(226,226,226,1);text-align: left;line-height: 1.4rem;}
.sure .header .zhong .name1{background:#fff;overflow: hidden;;width: 100%;;font-weight: 500;color:(17,17,17,1);font-size:.4rem;height: auto;text-align: left;line-height: 1.4rem}
.sure .header .zhong .name1 .dang{width: 100%;background: #fff;height: auto;}
.sure .header .zhong .name input{margin-left:1.5rem;border: none;}
.sure .header .zhong .name1 p{width: 2rem;float: left;margin-left: .25rem}
.sure .foot{width: 100%;}
.sure .foot .ct{width: 100%;margin-top: .4rem;background: #fff;}
.sure .foot .ct p{margin-left: .25rem}
.sure .foot .ct .tu{font-size:.38rem;margin-top:.3rem;}
.sure .foot .ct .tu .img{display:flex;justify-content:space-around;}
.ipt{display:flex;justify-content:center;height:2rem;width: 100%;background: #fff;}
.btn{width:90%;height:1.1rem;border-radius:.6rem;text-align:center;background:rgba(35,183,172,1);color:rgba(255,255,255,1);border:none;margin-top:.5rem;}
.bg{background:rgba(35,183,172,1);border-radius:.4rem;height: 0.8rem;display: inline-block;line-height: .8rem;text-align: center;margin-top: .1rem}
.bor{width: 75%;float: left;font-size: .38rem}
.bor1{width: 2.2rem;}
.bor2{width: 4.2rem;}
</style>

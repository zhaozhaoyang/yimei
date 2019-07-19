<template>
    <div class="detail">
        <!-- 轮播图开始 -->
        <swiper :options="swiperOption" >
            <swiper-slide v-for="(item,index) in items.proimage" :key="index">
                <img :src="items.proimage[index]" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <img src="../common/images/img/ios/shopcar/椭圆8@1x.png" alt="" class="back" @click="backTo">
        <div class="tu" @click="taggle">
            <img src="../common/images/img/ios/1/组151@1x.png" alt="" v-if="show" >
            <img src="../common/images/img/ios/组151@1x.png" alt="" v-else>
        </div>
        <!-- 轮播图结束 -->
        <div class="message">
            <p class="ttitile">【{{items.classname}}】{{items.proname}}</p>
            <p class="J1">{{items.doctorname}} {{items.doctordesc}}</p>
            <p class="J2">{{items.doctorname}} {{items.doctorname}}</p>
            <div class="foot">
                <div class="price" style="float:left;">
                    <p class="price1">上海西子曰医疗美容门诊部</p>
                    <!-- <p class="price1">{{items.hospital}}</p> -->
                    <p class="price2">￥<span style="font-size:.5rem;">{{items.price}}</span></p>
                </div>
                <p class="ad1">已预约{{items.number}}</p>
            </div>
        </div>
        <!-- 服务与优惠 -->
        <div class="count">
            <div class="info">
                <p class="info1">{{items.servicediscount}}</p>
                <p class="info2">写日记晒照片返回成交额的5%，不设上限<span style="color:rgba(35,183,172,1);" @click="share">《发布日记奖励规则》</span></p>
                <p class="info3">二级分享成交返现 一代18%  二代8.5%<span style="color:rgba(35,183,172,1);" @click="daiary">《分享成交奖励规则》</span></p>
            </div>
        </div>
        <!--  -->

        <!-- 富文本等开始 -->
        <div class="alltext">
            <div class="text">
                <div class="jump">
                    <p class="fen">分期</p>
                    <img src="../common/images/img/pic/my/箭头(3)拷贝4@1x.png" alt="">
                </div>
                <div class="jump">
                    <p>平台交易规则</p>
                    <img src="../common/images/img/pic/my/箭头(3)拷贝4@1x.png" alt="">
                </div>
                <div class="jump" @click="addr">
                    <p>医院地址及指引</p>
                    <img src="../common/images/img/pic/my/箭头(3)拷贝4@1x.png" alt="">
                </div>
                <div class="jump">
                    <p>资质查询</p>
                    <img src="../common/images/img/pic/my/箭头(3)拷贝4@1x.png" alt="">
                </div>
                <div class="jump" @click="ddetail">
                    <p>医生介绍</p>
                    <img src="../common/images/img/pic/my/箭头(3)拷贝4@1x.png" alt="">
                </div>
                <div class="jump" @click="ago">
                    <p>过去案例</p>
                    <img src="../common/images/img/pic/my/箭头(3)拷贝4@1x.png" alt="">
                </div>
                <div class="jump" @click="photo">
                    <p>日记照片</p>
                    <img src="../common/images/img/pic/my/箭头(3)拷贝4@1x.png" alt="">
                </div>
                <div class="jump" @click="cul">
                    <p>项目特色</p>
                    <img src="../common/images/img/pic/my/箭头(3)拷贝4@1x.png" alt="">
                </div>
            </div>
        </div>
        
        <!--  -->

        <!-- tab切换 -->
        <tab></tab>
        <!--  -->
        <!-- 底部 -->
        <div class="after">
            <div class="af1">
                <p style="font-size:.32rem;">预约金：<span style="font-weight:500;color:rgba(255,0,74,1);">￥<span style="font-size:.45rem;">{{items.yuyueprice}}</span></span></p>
                <p style="font-size:.32rem;">到院再付：<span style="font-weight:500;color:rgba(255,0,74,1);">￥<span style="font-size:.45rem;">{{items.topayprice}}</span></span></p>
            </div>
            <div class="af3">
                <div @click="addcar" class="clickf">
                    <div class="bt1" >加入购物车</div>
                </div>
                <div class="button" @click="advance">
                    <div class="bt2">立即预定</div>
                </div>
            </div>
            <div class="af2"> 
                <div style="width:.8rem;margin-top:.5rem;">
                    <a :href="'tel:'+items.doctorphone">
                        <img src="../common/images/img/ios/detal/资源11@2x@1x.png" alt="">
                        <p>电话</p>
                    </a>
                </div>
                <div style="width:.8rem;margin-top:.41rem;">
                    <img src="../common/images/img/ios/detal/资源10@2x拷贝2@1x.png" alt="">
                    <p>客服</p>
                </div>
            </div>            
        </div>
        <!--  -->
         <!-- 文本弹窗模块 -->
        <div v-show="popup">
            <!--这里是要展示的内容层-->
            <div class="logingl">
                <p style="text-align:center;font-size:.4rem;margin-top:.rem;font-weight:500;">预约提示</p>
                <div class="cr" style="width:8rem;margin-left: .25rem;font-size: .35rem;margin-top:.3rem;color:rgba(0,0,0,1);line-height:.7rem;">
                    <p>请在预购前仔细阅读<router-link to="" style="text-decoration: none;color:rgba(35,183,172,1);">《平台交易规则》</router-link>，这里特别需要强调的是</p>
                    1、将预付款交于平台。<br>
                    2、医生必须在医美机构中进行操作，如果医生在
                    非医美机构非正规操作的手术室进行操作，消费者
                    有权拒绝，并向平台举报。<br>
                </div>
                <div @click="closepopup" style="width:100%;;height:1.14rem;text-align:center;line-height:1.14rem;color:rgba(35,183,172,1);font-size:.4rem;margin-top:-.1rem;">我已阅读并同意</div>
            </div>
            <!--这里是半透明背景层-->
            <div class="overel"></div>
        </div>
    </div>
</template>

<script>
import tab from '@/components/detail/foot'
import axios from '../axios'
import { Toast } from 'vant';
export default {
    components:{
        tab        
    },
    // beforeRouteLeave:function(to, from, next){
    //     console.log(to)
    // },
    name: 'HomeSwiper',
    data: function () {
        return {
            // 弹框
            popup:0,
            popups:0,
            uid:'',
            proid:'',
            items:[],
            types:[],
            show:true,
            iscollect:'',
            type:0,
            objid:'',
            type:'0',
            goodscarid:'',

            //轮播图
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
            },
        }
    },
    // beforeRouteLeave:function(to, from, next){
    //   console.log(to)  
    // },
    methods:{
         //打开预购规则页面
        advance(){
            console.log(this.uid)
            if(localStorage.getItem("uid")=='' || localStorage.getItem("uid")==null){
                Toast('请登录！');
                return;
            }
            this.popup = 1;            
            let mount = {
                cmd:'addGoodscar',
                uid:this.uid,
                proid:this.proid,
                type:1
            }
            axios(mount).then(res => {
                if(res.result == '0'){
                    this.types = res
                    this.goodscarid = res.goodscarid
                    // this.$router.push({ path: '/sureorder', query: {goodscarid: this.types.goodscarid}})
                }
            })
        },
        // 关闭预购规则页面
        closepopup(){
            
            this.popup = 0;
            // this.$router.push('/sureorder');
            this.$router.push({
                name:'sureorder',
                params:{dataobject:JSON.stringify(this.items),goodscarid:this.goodscarid}
            });
        },       
        // 关闭电话规则页面
        closepopups(){
            this.popups = 0;
        },
        //跳富文本链接
         share(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=2"
        },
        daiary(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=1"
        },
        addr(){
            window.location.href = "http://122.114.49.242/display/project1?id="+this.proid
        },
        ddetail(){
            window.location.href = "http://122.114.49.242/display/project2?id="+this.proid
        },
        ago(){
            window.location.href = "http://122.114.49.242/display/project3?id="+this.proid
        },
        photo(){
            window.location.href = "http://122.114.49.242/display/project4?id="+this.proid
        },
        cul(){
            window.location.href = "http://122.114.49.242/display/project5?id="+this.proid
        },
        init() {
            let params = {
                cmd:"proDetail",
                uid:this.uid,
                proid:this.proid
            }
            axios(params).then(res=>{
                console.log(res)
                this.items = res.dataobject
                // this.$router.push({query: {items:this.items}})
            })
        },
        taggle(){
            if(this.show){
                this.show=false
                this.iscollect=1
            }else{
                this.show=true
                this.iscollect=0
            }
             let font = {
                cmd:'collection',
                uid:this.uid,
                type:this.type,
                objid:this.proid
            }
            console.log(font)
            axios(font).then(res => {
                console.log(res)
                 if(res.result == '0'){
                    console.log(res)
                }
            })
        },
        // 加入购物车
        addcar(){
            if(localStorage.getItem("uid")=='' || localStorage.getItem("uid")==null){
                Toast('请登录！');
                return;
            }
            let path = {
                cmd:'addGoodscar',
                uid:this.uid,
                proid:this.proid,
                type:this.type
            }
            console.log(path)
            axios(path).then(res=>{
                // console.log(res)
                if(res.result=='0'){
                    console.log(res)
                    this.types = res
                    // this.$router.push({path:'/shopcar',query:{proid:this.proid}})
                    this.$router.push({path:'/111',query:{proid:this.proid}})
                }
            })
        },
        // 跳转页面
        backTo(){
            history.back(-1)
            // this.$router.push('/advance')
        }
        
    },
    mounted(){
        this.init();
    },
    created(){
        this.uid = localStorage.getItem('uid')
        // this.proid = localStorage.getItem('proid')
        this.proid = this.$route.query.proid
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
a{color: #333;text-decoration: none;}
.detail{width: 100%;position: absolute;bottom: 63px;top: 0;overflow: scroll;padding-bottom: 30px;}
.detail .swiper-img{width: 100%;height: 7rem;}
.detail .back{position: relative;top:-6.5rem;left:.25rem;z-index: 9999;}
.detail .tu{position: relative;top: -7.5rem;left: 89%;z-index: 9999;width: .8rem;height: .8rem;}
.message{width: 100%;margin-top: -1.75rem;background: #fff;}
.message .ttitile{width: 9.3rem;font-size: .45rem;margin-left: .25rem;color:rgba(17,17,17,1);font-weight: 500;}
.message .J1,.J2{color:rgba(153,153,153,1);margin-left: .25rem;margin-top: .2rem;}
.message .foot{margin-top: .5rem;overflow: hidden;margin-left: .25rem;}
.message .foot .price{justify-content: space-around;display: flex;}
.message .foot .price .price1{color:rgba(35,183,172,1);margin-top:.15rem;}
.message .foot .price .price2{color:rgba(255,0,74,1);font-size:.38rem;margin-left:.2rem;}
.message .foot .ad1{float:left;margin-left:1.4rem;color:rgba(153,153,153,1);margin-top:.15rem;}
.swiper-container{background: #fff;}

.detail .count{width:100%;height: 3rem;background:rgba(242,242,242,1);position: relative;}
.detail .count .info{width: 100%;height: 2.4rem;background: #fff;position: absolute;top:.3rem;}
.detail .count .info .info1{font-weight:500;color:rgba(17,17,17,1);font-size:.4rem;margin-top:.3rem;margin-left:.25rem;}
.detail .count .info .info2{font-weight:400;color:rgba(102,102,102,1);margin-top:.2rem;margin-left:.25rem;}
.detail .count .info .info3{font-weight:400;color:rgba(102,102,102,1);margin-top:.1rem;margin-left:.25rem;}
.detail .alltext{background:rgba(242,242,242,1);width:100%;height: 8.5rem;position: relative;}
.detail .alltext .text{width: 100%;height: 8.15rem;background: #fff;position: absolute;}
.detail .alltext .text .jump{line-height: 1rem;width: 9.5rem;margin-left: .5rem;border-bottom:.03rem solid rgba(229,229,229,1);}
.detail .alltext .text .jump .fen{font-size:.4rem;font-weight:500;color:rgba(17,17,17,1);}
.detail .alltext .text .jump img{width: .15rem;height: 0.3rem;position: absolute;right:.25rem;margin-top: -.6rem;}

.detail .after{width: 100%;overflow:hidden;position: fixed;bottom: 0;left: 0;background: #fff;}
.detail .after .af1{margin-top:.4rem;float:left;margin-left:4px;}
.detail .after .af2{display:flex;justify-content:space-between;width:1.6rem;float:right;}
.detail .after .af3{display:flex;justify-content:space-between;float:right;}
.detail .after .af3 .clickf a{text-decoration: none;width:2.03rem;border:none;font-weight:500;color:rgba(255,255,255,1);font-size:.35rem;height:1.56rem;line-height: 1.5rem;}
.detail .after .af3 .bt2{text-decoration: none;width:2.02rem;border:none;font-weight:500;color:rgba(255,255,255,1);font-size:.35rem;height:1.56rem;}
.clickf{width:2.03rem;height:1.56rem;line-height: 1.56rem;background:rgba(255,130,157,1);text-align: center;}
.button{width:2.02rem;height:1.56rem;background:rgba(254,64,119,1);line-height: 1.56rem;text-align: center;}

.logingl {position: fixed;height: 6rem;width: 8.5rem;background-color: #fff;border-radius: 0.15rem;left: 50%;top: 50%;transform: translate(-50%, -50%);z-index: 9999}
.overel {position: fixed;width: 100%;height: 100%;opacity: 0.7;filter: alpha(opacity=70);top: 0;left: 0;z-index: 999;background-color: #111111;}
</style>

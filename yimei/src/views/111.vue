<template>
  <div class="shopcar" id="demo04">
    <div class="biaoti">
        <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back" class="fanhuijian">
        <p class="che">购物车</p>
        <div class="finshd" @click="finish">
            <p v-if="fin">编辑</p>
            <p v-else>完成</p>
        </div>
    </div>
       <!--中间的列表-->
       <main class="jd_shopCart_list">
           <van-radio-group v-model="radio" @change="onChange">
           <section v-for="(shop, index) in items" :key="index">
               <div class="shopCart_list_con">
                   <div class="list_con_left">
                       <!-- <a class="cart_check_box" :checked="sho p.checked" @click="singerShopSelected(shop,index)" style="margin-top:.8rem;"></a> -->
                        <a class="cart_check_box" :checked="shop.checked" @click="singerShopSelected(shop,index)" v-show="duoxuan"></a>
                    
                        <van-radio :name="index" checked-color="#07c160" v-show = "danxuan"></van-radio>
                       
                   </div>
                   <div class="list_con_right">
                       <div class="shop_img">
                           <img :src="shop.proimage" alt="shop.shopName">
                       </div>
                       <div class="shop_con">
                          <p>[{{shop.classname}}]{{shop.proname}}</p>
                           <div class="shop_price">
                               <div class="singer">{{shop.doctorname}} {{shop.doctordesc}}</div>
                               <div class="total">{{shop.doctorname}} {{shop.hospital}}</div>
                               <div class="qishi">
                                 <div style="font-size:.45rem;color: #E9232C;">￥{{shop.price}}</div>
                                  <p style="font-size:.3rem;color: #636363;margin-right:.3rem;">X1</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
            </van-radio-group>
       </main>
       <!-- 删除 -->
        <div class="shop_deal_right" @click="clickTrash(shop)" style="display:none">
            <span></span>
            <span></span>
        </div>
       <!--  -->
       <!--底部通栏-->
       <div id="tab_bar">
         <div v-if="type" style="margin-left:.25rem;">
                <p style="font-size:.32rem;">预约金：<span style="font-weight:500;color:rgba(255,0,74,1);">￥<span style="font-size:.45rem;">{{price}}</span></span></p>
                <p style="font-size:.32rem;">到院再付：￥{{yuyue}}</p>
              </div>
           <div class="tab-bar-left" v-if="all">
               <a href="javascript:;" class="cart_check_box" :checked="isSelectedAll" @click="AselectedAll(isSelectedAll)"></a>
               <span style="font-size: 16px;">全选</span>
           </div>
           <div class="tab-bar-right">
               <p class="pay" @click="btn" v-if="clicks">预购</p>
               <div class="del" v-else @click="del">删除</div>
           </div>
       </div>
    <!-- 弹窗模块 -->
        <div v-show="popup">
            <!--这里是要展示的内容层-->
            <div class="loginYT">
                <p style="text-align:center;font-size:.4rem;margin-top:.rem;font-weight:500;">预约提示</p>
                <div class="cr" style="width:8rem;margin-left: .25rem;font-size: .35rem;margin-top:.3rem;color:rgba(0,0,0,1);line-height:.7rem;">
                    <p>请在预购前仔细阅读<router-link to="" style="text-decoration: none;color:rgba(35,183,172,1);">《平台交易规则》</router-link>，这里特别需要强调的是</p>
                    1、将预付款交于平台。<br>
                    2、医生必须在医美机构中进行操作，如果医生在
                    非医美机构非正规操作的手术室进行操作，消费者
                    有权拒绝，并向平台举报。<br>
                </div>
                <div @click="closepopup"  class="agree">我已阅读并同意</div>
            </div>
            <!--这里是半透明背景层-->
            <div class="overYT"></div>
        </div>
  </div>
</template>
<script>
import axios from '../axios'
import { RadioGroup, Radio, Dialog, Notify, Toast } from 'vant';
// import { Dialog } from 'vant';
export default {
    data () {
      return {
        // 是否全选
        isSelectedAll: false,
        // 是否隐藏删除面板
        isHideDelPanel: true,
        // 当前要删除的一个商品
        currentDelShop: {},
        // 弹框
        popup:0,
        fin:true,
        // 获取的值
        uid:'',
        proid:'',
        // 底部状态值
        // cont:false,
        type:true,
        all:false,
        clicks:true,
        items:[],
        num:1,
        radio: -1,
        green:false,
        yuyue:'',
        price:'',
        goodscarid:[],
        duoxuan:false,
        danxuan:true
      }
    },
    components:{
        'van-radio-group':RadioGroup,
        'van-radio':Radio,
        [Dialog.Component.name]: Dialog.Component,
        [Notify.Component]: Notify.Component
    },
    methods: {
      // 返回
        back(){
            history.back(-1)
        },
      // 编辑、完成
        finish(){     
            this.hasSelectedAll()
            this.items = []
            this.getLocalData()
            if(this.fin){
                this.fin = false
                this.all = true
                this.clicks = false
                this.type = false
                this.duoxuan = true
                this.danxuan = false
            }else{
                this.fin = true
                this.duoxuan = false
                this.danxuan = true
                this.all = false
                this.clicks = true
                this.type = true
            }            
        },
      //打开预购规则页面
        btn(){
            if(this.radio<0){
                Toast('请选择商品！')
                return;
            }
            this.popup = 1;
        },
      // 关闭预购规则页面
        closepopup(){
            this.popup = 0;
            // this.$router.push('sureorder')
            this.$router.push({
                name:'sureorder',
                params:{dataobject:JSON.stringify(this.items[this.radio]),goodscarid:this.items[this.radio].goodscarid}
            });
        },
        // 1. 请求本地的数据
        getLocalData() {
            // Toast.loading({
            //     mask: true,
            //     message: '加载中...',
            //     mask:false,
            //     duration:0
            // });
            let all = {
                cmd:'myGoodscar',
                uid:this.uid
            }
            axios(all).then(res=>{
                // Toast.clear()
                if(res.result == '0'){
                    console.log(res)
                    this.items = res.dataList
                    this.goodscarid = []  //清除购物车id    
                    // for(var i = 0;this.items.length;i++){
                    //     console.log(this.items[i])
                    // }
                }
            })
        },
        // 重复点击
        name(e){
            console.log(e)
             if(this.green){
                this.green = true
            }else{
                this.green = false
            }
        },
        // 点击单选按钮执行的操作
        onChange(index){
            this.price = this.items[index].yuyueprice
            // console.log(this.price)
            this.yuyue = this.items[index].price - this.items[index].yuyueprice
            // console.log(this.yuyue)
            // this.goodscarid = this.items[index].goodscarid
            // console.log(this.goodscarid)
        },
        // 删除购物车数据
        del(){
            var _this = this
            console.log(_this.goodscarid)
            Dialog.confirm({
                message: '确定删除该商品吗？'
            }).then(() => {
                // on confirm
                console.log(_this.goodscarid)
                // return;
                let dat = {
                    cmd:'delGoodscar',
                    uid:_this.uid,
                    goodscaridlist:_this.goodscarid
                }
                axios(dat).then(res => {
                    console.log(dat)
                    if(res.result == '0'){
                        Toast('删除成功！')
                        console.log(res)
                        this.getLocalData()
                    }
                })
            }).catch(() => {
                // on cancel
            });
        },

        // 3. 选中所有的商品
        AselectedAll(flag){          
            // 3.1 总控制
            this.isSelectedAll = !flag;
            
            this.goodscarid = [];
            // 3.2 遍历所有的商品数据
            this.items.forEach((value, index)=>{
                if(typeof value.checked === 'undefined'){                
                    this.$set(value, 'checked', !flag);
                }else {
                    value.checked = !flag;                   
                }
                if(this.isSelectedAll){
                    this.goodscarid.push(value.goodscarid)
                }else{
                    this.goodscarid=[]
                }
            });

        },

        // // 5. 单个商品的选中和取消
        singerShopSelected(shop,index){
            // 5.1 判断有没有这个属性
            if(typeof shop.checked === 'undefined'){
                this.$set(shop, 'checked', true);
                console.log(this.items[index].goodscarid)
                // this.goodscarid.push(this.items[index].goodscarid)
            }else {
                shop.checked = !shop.checked;
                // this.goodscarid.pop()
            }
            var nowgdscarid = this.items[index].goodscarid
            if(shop.checked){
                this.goodscarid.push(nowgdscarid)
            }else{                
                this.goodscarid.splice(this.goodscarid.indexOf(nowgdscarid),1)
            }
            // 5.3 判断是否全选
            this.hasSelectedAll();
        },

        // 6. 判断是否全选
        hasSelectedAll(){
            let flag = true;
            this.items.forEach((value, index)=>{
                if(!value.checked){
                    flag = false;
                }
            });
            this.isSelectedAll = flag;
        }
    },
    created(){
      this.uid = localStorage.getItem('uid')
    //   this.proid = this.$route.query.proid
      this.getLocalData()
    }
}
</script>

<style>
*{padding: 0;margin: 0;}
.shopcar{width: 100%;height: 100%;font-family:'PingFang-SC-Regular';}
.fanhuijian{position: absolute;top: 0.5rem;left: 0.5rem;}
.yuyuejin{width: 5rem;position: absolute;top:0.15rem;left: 0.25rem;}
.del{width: 2rem;height: 1rem;border:.05rem solid rgba(35,183,172,1);border-radius:1rem;;font-weight:500;color:rgba(35,183,172,1);font-size:.45rem;line-height:1rem;text-align:center;margin-top:.2rem;}
.yuyuejin p{margin-top: .1rem}
.biaoti{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.biaoti .che{text-align: center;}
.biaoti .finshd{position: absolute;top: 0.15rem;right: 0.5rem;font-weight: normal;font-size: .35rem;}
.jd_safe_tip{height: 36px;line-height: 36px;border-bottom: 1px solid #e0e0e0;background-color: #fff;text-align: center;margin-top: 2rem;display: none;}
.jd_safe_tip .tip_word{ display: inline-block;font-size: 14px;padding-left: 20px;position: relative;}
.jd_safe_tip .tip_word::before{content: '';width: 18px;height: 18px;background: url("../common/images/img/ios/shopcar/椭圆567拷贝6@1x.png") no-repeat;-webkit-background-size:18px 18px;background-size:18px 18px;position: absolute;top: 9px;left: 0;}
/*中间列表*/
.jd_shopCart_list{
    top: 1.5rem;
    position: absolute;
    width: 100%;
    bottom: 50px;
    overflow: scroll;
}

.qishi{display: flex;justify-content: space-between;margin-top: .1rem;}
/* .van-radio-group {
    margin-top: .8rem;
} */
.jd_shopCart_list section{
    margin-top: 15px;
    background-color: #fff;
}

.shopCart_list_title{
    height: 34px;
    line-height:34px;
    border-bottom: 1px solid #e0e0e0;
}
.cart_check_box{   
  float: left;
  position: relative;
  width: 20px;
  height: 20px; 
  margin-left: 7px;
  border-radius: 50%;
  background: white;
  box-sizing: border-box; 
  border: 2px solid #E5E5E5;
}
 
.cart_check_box::after{
  position: absolute;
  top: 3px;
  left: 7px;
  width: 5px;
  height: 9px;
  border-style: solid;
  border-color: white;
  border-width: 0 2px 2px 0;
  transform: rotateZ(45deg);
  content: "";
}
.cart_check_box.off::after {
  border-color: white;
}

.cart_check_box[checked]{
    border-color: white;
    border: 2px #7FDCC4;
    border-radius: 50%;
    background:linear-gradient(67deg,rgba(35,183,172,1),rgba(161,233,200,1));
}

.shopCart_list_title .cart_logo{
    float: left;
    background: url('../common/images/img/ios/shopcar/椭圆567拷贝6@1x.png') no-repeat;
    -webkit-background-size:15px 15px;
    background-size:15px 15px;
    width: 15px;
    height:15px;
    margin: 9px 5px 0;
}

.shopCart_list_title  .cart_title{
    font-size: 16px;
}

.shopCart_list_title  .cart_sale{
    color: #E9232C;
    float: right;
    padding-right: 10px;
}

.shopCart_list_con{
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
    overflow: hidden;
    width: 95%;
    margin-left: .5rem;
}
.list_con_left {
    float: left;
        margin-top: .8rem;
}
.shopCart_list_con .list_con_right{
    /*background-color: red;*/
    overflow: hidden;
    padding:0 7px;
    float: left;
    width: 87%;
}

.list_con_right .shop_img{
    float: left;
}

.list_con_right .shop_img img{
    width:80px;
    height:80px;
    display: block;
}

.list_con_right .shop_con{
    overflow: hidden;
    padding-left: 7px;
}

.list_con_right .shop_con>p{
    font-size: 14px;
    color:#000;
    line-height:15px;
    overflow:hidden;
    display: block;
}

.list_con_right .shop_con .shop_price{
    /* color: #E9232C; */
    margin-top: .1rem;
    line-height: .5rem;
}

.list_con_right .shop_con .shop_price .singer,.total{
    color: #636363;
}

.shop_deal{
    margin-top: 5px;
}

.shop_deal .shop_deal_left{
    float: left;
}

.shop_deal .shop_deal_left span{
    border: 1px solid #e0e0e0;
    display: inline-block;
    width:30px;
    height:25px;
    line-height:25px;
    text-align: center;
    /* float:left; */
}

.shop_deal .shop_deal_left span:first-child{
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

.shop_deal .shop_deal_left span:last-child{
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

.shop_deal .shop_deal_left input{
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    float: left;
    width:50px;
    height:25px;
    text-align: center;
}

.shop_deal .shop_deal_right{
    float: right;
}

.shop_deal_right span:first-child{
    background: url('../common/images/img/ios/shopcar/椭圆567拷贝6@1x.png') no-repeat;
    background-size:18px 4px;
    width: 18px;
    height:4px;
    display: block;
}

.shop_deal_right span:last-child{
    background: url('../common/images/img/ios/shopcar/椭圆567拷贝6@1x.png') no-repeat;
    background-size:17px 17px;
    width: 17px;
    height:17px;
    display: block;
    margin-top: -3px;
}

/*底部通栏*/
#tab_bar{
    position: fixed;
    left:0;
    bottom:0;
    width:100%;
    height: 50px;
    background-color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: 5px 5px 5px #000;
}

.tab-bar-left{
    display: flex;
    align-items: center;
    margin-left: 7px;
}

.tab-bar-left .select-all{
    margin-left: 8px;
    font-size: 16px;
}


.tab-bar-right .pay{
    width: 90px;
    height: 50px;
    background-color: #E9232C;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #fff;
}



/*面板*/
.panel{
    width: 100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, .6);
}

.panel_is_show{
   display: none;
}

.panel_content{
    width:84%;
    position: absolute;
    left:8%;
    top: 200px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 15px;
}

.panel_title{
    text-align: center;
    font-size: 17px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 10px;
}

.panel_footer{
    width: 100%;
    height: 50px;
    /*background-color: green;*/
}

.panel_footer a{
    width: 120px;
    height: 40px;
    border: 1px solid #e0e0e0;
    margin-top: 10px;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    border-radius: 5px;
}

.panel_footer button{
    border:0;
    width:120px;
    height: 40px;
}

.panel_footer .cancel{
    float: left;
}

.panel_footer .submit{
    float: right;
    background-color: #E9232C;
    color:#fff;
    border: none;
}

/*实现动画效果*/
.jump{
   animation:jump 1s ease;
}

@keyframes jump {
    0%{
        opacity: 0;
        transform: translateY(-3000px);
        -webkit-transform: translateY(-3000px);
    }

    65%{
        opacity: 1;
        transform: translateY(30px);
        -webkit-transform: translateY(30px);
    }

    75%{
        transform: translateY(-10px);
        -webkit-transform: translateY(-10px);
    }

    90%{
        transform: translateY(5px);
        -webkit-transform: translateY(5px);
    }

    100%{
        opacity:1;
        transform: none;
        -webkit-transform: none;
    }

}
.van-radio__icon--checked .van-icon{background: white;border-color: white;}
.van-radio__icon--checked .van-icon{background: white;}
.loginYT {position: fixed;height: 6rem;width: 85%;background-color: #fff;border-radius: 0.15rem;left: 50%;top: 50%;transform: translate(-50%, -50%);z-index: 1000}
.overYT {position: fixed;width: 100%;height: 100%;opacity: 0.7;filter: alpha(opacity=70);top: 0;left: 0;z-index: 999;background-color: #111111;}
.agree{width:100%;;height:1.14rem;text-align:center;line-height:1.14rem;color:rgba(35,183,172,1);   font-size:.4rem;margin-top:-.1rem;}
.del{width: 2rem;height: 1rem;border:.05rem solid rgba(35,183,172,1);border-radius:1rem;;font-weight:500;color:rgba(35,183,172,1);font-size:.45rem;line-height:1rem;text-align:center;margin-top:.2rem;    margin-right: .5rem;}
.van-popup.van-popup--top.van-notify{margin-top: 50%;background: rgba(17,17,17,.5);left: 25%;height: 1rem;width: 50%;line-height: .7rem;border-radius: .2rem;font-size: .3rem;}
</style>

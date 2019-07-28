<template>
    <div>
        <myheader tit="缴纳押金" showL="true"></myheader>
        <div class="wrap">
            <div class="head">
                <img src="../assets/images/touxiang.png" style="width:65px;height:65px;border-radius: 50%;display:block;"/>
                <div class="user">
                    <p>
                        <span class="sp1">维也纳音乐盒</span>
                    </p>
                    <p class="sp2">押金退还时间：暂未缴纳押金</p>
                </div>
                <p class="tip">￥99/8个</p>
            </div>
            <p class="level">七大等级</p>
            <div class="cards">
                <ul class="flex">
                    <li class="card" :class="[index==6?'nocard':'']" v-for="(item,index) in levellist" :key="index" @click="select(index)">
                        <span class="span1">{{item.level}}</span>
                        <span class="span2">{{item.price}}</span>
                    </li>
                </ul>
            </div>
            <p class="level">佣金及押金返还制度：</p>
            <p class="color9">押金30个工作日自动返还；佣金申请后324小时之内到账</p>
            <p class="level">代理：</p>
            <p class="color9">一级代理提佣金的20%</p>
            <p class="color9">二级代理提佣金的10%</p>
        </div> 
        <button class="btns">立即缴纳</button>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
export default {
    components:{myheader},
    data(){
        return{
           levellist:[
               {level:'一级会员',price:'99元/8个'},
               {level:'二级会员',price:'299元/8个'},
               {level:'三级会员',price:'499元/8个'},
               {level:'四级会员',price:'799元/8个'},
               {level:'五级会员',price:'1199元/8个'},
               {level:'六级会员',price:'1499元/8个'},
               {level:'',price:''},
               {level:'七级会员',price:'1999元/8个'}               
            ]
        }
    },
    methods:{
       select(num){
           if(num == 6){
               return;
           }
           console.log(num)
       }
    }
}
</script>
<style scoped>
.color9{color: #999;height: 20px;line-height: 20px;}
.flex{
  display: flex;flex-flow: row wrap;align-items: center;
}
.wrap{
    padding: 10px;
}
.head{
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 12px 12px 30px;
    box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);
    border-radius: 3px;
    position: relative;
    margin-bottom: 20px;
}
.tip{
    position: absolute;
    right: 12px;
    bottom: 12px;   
    font-size: 16px; 
}
.user{
    margin-left: 20px;
}
.sp1{
    font-size: 18px;
    color: #000;
}
.sp2{
    font-size: 12px;
    color: #333;
    margin-top: 10px;
}
.btns{
    width:80%;
    height: 35px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 13px;
    border-radius: 3px;
    display: block;
    margin: 20px auto;
}
.level{
    font-size: 15px;
    font-weight: bold;
    height: 35px;
    line-height: 35px;
}

.cards{
    width: 100%;
    margin-bottom: 30px;
}
.card{
    width: 33%;
    height: 60px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;    
    border: 1px solid #ddd;
    border-radius:4px;
}
.nocard{border: none;}
.card span{ 
   text-align: center;
  
}
.span1{font-size: 14px;font-weight: bold;}
.span2{font-size: 13px;color: #999;}
</style>

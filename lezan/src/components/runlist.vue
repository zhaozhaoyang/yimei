<template>
    <div>
        <myheader tit="资金明细" showL="true" bg='2'></myheader>
        <div class="wrap">
            <div class="bgFACE15">

            </div>
            <ul class="showmoney">
                <li>
                    <span class="span1">{{todayFee}}</span>
                    <span  class="span2">我的余额</span>
                </li>
                <li>
                    <span class="span1">{{totalFee}}</span>
                    <span class="span2">累计收益</span>
                </li>
            </ul>
            <div class="ti">
                <p :class="[Tabactive==0?'actived':'']" @click="tabselect(0)">好友提成</p>
                <p :class="[Tabactive==1?'actived':'']" @click="tabselect(1)">任务收入</p>
            </div>
             <ul class="ullist" v-if="Tabactive==0">
                 <li class="flex"  v-for="(item,index) in 5" :key="index">
                      <img src="../assets/images/touxiang.png" alt style="height:33px;width:33px;"/>
                      <span class="c_middle">好友1</span>
                      <span class="b1 red">+1.00 </span> <sup class="f4">元</sup>   
                 </li>
                  <p class="nodata">暂无数据</p>
            </ul>
             <ul class="ullist" v-if="Tabactive==1">
                <li class="flex" v-for="(item,index) in 5" :key="index">
                    <img src="../assets/images/touxiang.png" alt style="height:30px;width:30px;"/>
                    <div class="c_middle">
                        <p class="f1"> asdasd</p>
                        <p class="p1">
                            <span class="f2">抖音点赞</span>                        
                        </p>                
                    </div>
                    <div class="flex red">
                    <span class="b1">+1.00 </span><sup class="f4">元</sup>                
                    </div>
                </li>
                <p class="nodata">暂无数据</p>
            </ul>
        </div>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
export default {
    components:{myheader},
    data(){
        return{
           uid:this.$store.state.uid || window.localStorage.getItem("uid"),	
           Tabactive:'0',
           tasklist:[],
           type:1,//1好友提成 2任务收入
           pageNo:1,
           totalPage:1,
           todayFee:'',
           totalFee:''
        }
    },
    created(){
        this.getList()
    },
    methods:{
       tabselect(num){
           this.Tabactive= num
           this.type = Number(num)+1
           this.pageNo = 1
           this.getList()
       },
       getList(){          
           var params = { cmd: "incomeList",uid:this.uid,type:this.type,pageNo:this.pageNo}
           console.log(params)
           this.postRequest(params).then(res => {
                console.log(res)
                this.totalFee=res.data.totalFee
                this.todayFee=res.data.todayFee
                this.tasklist = res.data.dataList
                this.totalPage = res.data.totalPage
            });
       },
    }
}
</script>
<style scoped>
.flex{
  display: flex;flex-flow: row;align-items: center;
}
.bgFACE15{
    position: absolute;
    top: 0;
    left: 0;
    height: 54px;
    width: 100%;
    background: #FACE15;
    z-index: 1;
}
.wrap{
    padding: 10px;
    position: relative;
}
.showmoney{
    display: flex;
    flex-flow: row;
    box-shadow:0 2px 6px rgba(100, 100, 100, 0.4);
    border-radius: 6px;
    padding: 10px 5px 5px;
    width: 95%;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    background: #fff;
}
.showmoney li{
    flex: 1;
    height: 70px;
    display: flex;
    flex-flow: column;
    text-align: center;
    justify-content: center;
    
}
.actived{
  font-weight: bold;
  color: #333;
  font-size: 17px;
  border-bottom: 2px solid #FACE15;
}
.showmoney li:first-child{
    border-right: 1px solid #E6E6E6;
}
.span1{
    font-size: 27px;
}
.span2{font-size: 12px;line-height: 30px;color: #999;}

.ti{
  width: 100%;
  display: flex;
  flex-flow: row;  
  border-radius: 5px;
  margin-top: 22px;
  color: #999;
}
.ti p{
  flex: 1;
  text-align: center;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
}
.ullist{
  width: 100%;
  background: #fff;
  padding: 0 8px;
}
.ullist li{
  height: 60px;  
  padding: 0 8px;
}
.ullist li + li{
  border-top: 1px solid #E6E6E6;
}
.c_middle{
  flex: 1;
  margin: 0 10px;
}
.red{color: #FF4843;}
.f1{font-size: 16px;color: #333;}
.f2{display: inline-block;color: #ef5897;font-size: 10px;text-align: center;border-radius: 10px;line-height: 17px;margin-right: 5px;border: 1px solid #ef5897;padding: 1px 9px;}
.f3{color: #999;font-size: 14px;}
.p1{margin-top: 8px;}
.small{font-size: 14px;}
.b1{font-size: 18px;}
.nodata{width: 100%;height: 50px;line-height: 50px;text-align: center;font-size: 13px;color: #999;}
</style>
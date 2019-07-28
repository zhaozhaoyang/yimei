<template>
    <div>
        <myheader tit="资金明细" showL="true"></myheader>
        <div class="wrap">
            <ul class="showmoney">
                <li>
                    <span class="span1">50</span>
                    <span  class="span2">今日收益</span>
                </li>
                <li>
                    <span class="span1">500</span>
                    <span class="span2">共计收益</span>
                </li>
            </ul>
            <div class="ti">
                <p :class="[Tabactive==0?'actived':'']" @click="tabselect(0)">好友提成</p>
                <p :class="[Tabactive==1?'actived':'']" @click="tabselect(1)">任务收入</p>
            </div>
             <ul class="ullist" v-if="Tabactive==0">
                 <li class="flex"  v-for="(item,index) in tasklist" :key="index">
                      <img src="../assets/images/touxiang.png" alt style="height:45px;width:45px;"/>
                      <span class="c_middle">好友1</span>
                      <span class="b1 red">+1.00 元</span> 
                 </li>
                  <p class="nodata">暂无数据</p>
            </ul>
             <ul class="ullist" v-if="Tabactive==1">
                <li class="flex" v-for="(item,index) in tasklist" :key="index">
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
           Tabactive:'0',
           tasklist:[1,2,2]
        }
    },
    methods:{
       tabselect(num){
           this.Tabactive= num
       }
    }
}
</script>
<style scoped>
.flex{
  display: flex;flex-flow: row;align-items: center;
}
.wrap{
    padding: 10px;
}
.showmoney{
    display: flex;
    flex-flow: row;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 5px;
}
.showmoney li{
    flex: 1;
    height: 100px;
    display: flex;
    flex-flow: column;
    text-align: center;
    justify-content: center;
    
}
.actived{
  font-weight: bold;
}
.showmoney li:first-child{
    border-right: 1px solid #ddd;
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
.span1{
    font-size: 27px;
}
.span2{font-size: 12px;line-height: 30px;}

.ti{
  width: 100%;
  display: flex;
  flex-flow: row;  
  border-radius: 5px;
  margin-top: 22px
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
  border-top: 1px solid #DDDDDD;
}
.c_middle{
  flex: 1;
  margin: 0 10px;
}
.red{color: #e92322;}
.f1{font-size: 16px;color: #333;}
.f2{display: inline-block;height: 16px;width: 60px;color: #fff;background: orange;font-size: 10px;text-align: center;border-radius: 3px;line-height: 16px;margin-right: 5px;}
.f3{color: #999;font-size: 14px;}
.p1{margin-top: 8px;}
.small{font-size: 14px;}
.b1{font-size: 18px;}
.nodata{width: 100%;height: 50px;line-height: 50px;text-align: center;font-size: 13px;color: #999;}
</style>
<template>
    <div>
        <myheader tit="我的好友" showL="true"></myheader>
        <div class="wrap">            
            <div class="ti">
                <p :class="[Tabactive==0?'actived':'']" @click="tabselect(0)">一级好友(20)</p>
                <p :class="[Tabactive==1?'actived':'']" @click="tabselect(1)">二级好友(10)</p>
            </div>
            <p class="flex ptitle">
                <span>用户名</span><span>账号</span><span>注册时间</span>
            </p>
            <ul class="ullist" v-if="Tabactive==0">
                 <li class="flex"  v-for="(item,index) in tasklist" :key="index">
                      <span>asasas</span>
                      <span>5415413</span>
                      <span>2018-10-10 12:13:55</span>
                 </li>
                  <p class="nodata">暂无数据..</p>
            </ul>
             <ul class="ullist" v-if="Tabactive==1">
                <li class="flex" v-for="(item,index) in tasklist" :key="index">
                    <span>asasas</span>
                    <span>5415413</span>
                    <span>2018-10-10 12:13:55</span>
                </li>
                <p class="nodata">暂无数据...</p>
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
.ptitle{
    height: 38px;
    line-height: 38px;
}
.ptitle span{
    flex: 1;
    text-align: center;    
    font-size: 14px;
}
.flex{
  display: flex;flex-flow: row;align-items: center;
}
.wrap{
    padding: 10px;
}

.actived{
  font-weight: bold;
}
.showmoney li:first-child{
    border-right: 1px solid #E6E6E6;
}

.ti{
  width: 100%;
  display: flex;
  flex-flow: row;  
  border-radius: 5px;
}
.ti p{
  flex: 1;
  text-align: center;
  height: 35px;
  line-height: 35px;
  font-size: 15px;
}
.ullist{
  width: 100%;
  background: #fff;
}
.ullist li{
  height: 40px;  
  
}
.ullist li span{
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.ullist li{
  border-bottom: 1px solid #E6E6E6;
}
.nodata{width: 100%;height: 50px;line-height: 50px;text-align: center;font-size: 13px;color: #999;}
</style>

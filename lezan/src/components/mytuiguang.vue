<template>
    <div>
        <myheader tit="我的推广" showL="true"></myheader>
        <img src="../assets/images/banner.jpg" alt style="width:100%;height:160px;border-radius: 3px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);"/>
        <div class="wrap">  
            <div class="ti">
                <p :class="[Tabactive==0?'actived':'']" @click="tabselect(0)">文字素材</p>
                <p :class="[Tabactive==1?'actived':'']" @click="tabselect(1)">图片素材</p>
            </div>
            <ul class="ullist" v-if="Tabactive==0">
                 <li class="flex"  v-for="(item,index) in tasklist" :key="index">
                      <span>asasas</span>
                      <span>5415413</span>
                      <span>2018-10-10 12:13:55</span>
                 </li>
                  <p class="nodata">暂无数据..</p>
            </ul>
            <ul class="ullist" v-if="Tabactive==1">
                 <li class="flex"  v-for="(item,index) in tasklist" :key="index">
                     <img src="../assets/images/banner.jpg" alt style="width:100%;height:160px;border-radius: 3px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);"/>
                 </li>
                  <p class="nodata">暂无数据..</p>
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
           Tabactive:0,
           tasklist:[1,1,1,1,5]
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
.actived{
  font-weight: bold;
}
.wrap{
    padding: 10px;
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

</style>

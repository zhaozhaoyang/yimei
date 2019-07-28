<template>
    <div class="tastlist">
        <div class="ti">
        <p :class="[Tabactive==0?'actived':'']" @click="tabselect(0)">可领任务</p>
        <p :class="[Tabactive==1?'actived':'']" @click="tabselect(1)">进度查询</p>
        </div>
        <ul class="ullist" v-if="Tabactive==0">
        <li class="flex" v-for="(item,index) in tasklist" @click="getTask(item)" :key="index">
            <img src="../../assets/images/touxiang.png" alt style="height:30px;width:30px;"/>
            <div class="c_middle">
            <p class="f1"> {{item.name}}</p>
            <p class="p1">
                <span class="f2">抖音点赞</span>
                <span class="f3">剩余数量：<font class="red small">1231</font></span>                  
            </p>                
            </div>
            <div class="flex red">
            <span class="b1">+1.00 </span><sup class="f4">元</sup>                
            </div>
        </li>
        <p class="nodata">暂无任务</p>
        </ul>
        <ul class="ullist" v-if="Tabactive==1">
            <li class="flex" v-for="(item2,index)  in tasklist" :key="index">
                <img src="../../assets/images/touxiang.png" alt style="height:30px;width:30px;"/>
                <div class="c_middle">
                <p class="f1"> {{item2.name}}</p>
                <p class="p1">
                    <span class="f2">抖音点赞</span>
                    <span class="f3">待完成</span>                  
                </p>                
                </div>
                <div class="flex red">
                <span class="b1">+1.00 </span><sup class="f4">元</sup>                
                </div>
            </li>
            <p class="nodata">暂时没有未完成任务</p>
        </ul>
    </div>
</template>
<script>
export default {
    props:['tasklist'],
    data(){
        return{
             Tabactive:0,
        }
    },
    mounted() {
        var first = null;
        mui.back = function() {
        if (!first) {
            first = new Date().getTime();
            mui.toast("再按一次退出应用");
            setTimeout(function() {
            first = null;
            }, 1000);
        } else {
            if (new Date().getTime() - first < 1000) {
            plus.runtime.quit();
            }
        }
        };
        
    },
    methods:{
        tabselect(num){
        this.Tabactive = num-0
        },
        getTask(){
            this.$router.push({
                name:"taskdetail",
                params:{}
            })
        },
    }
}
</script>
<style scoped>
.red{color: #e92322;}
.f1{font-size: 16px;color: #333;}
.f2{display: inline-block;height: 16px;width: 60px;color: #fff;background: orange;font-size: 10px;text-align: center;border-radius: 3px;line-height: 16px;margin-right: 5px;}
.f3{color: #999;font-size: 14px;}
.p1{margin-top: 8px;}
.small{font-size: 14px;}
.b1{font-size: 18px;}
.flex{
  display: flex;flex-flow: row;align-items: center;
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
  background: #f0f3f6;
  font-size: 16px;
}
.tastlist{
  border-radius: 3px;
  box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);
}
.actived{
  background: #fff!important;
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
.nodata{width: 100%;height: 50px;line-height: 50px;text-align: center;font-size: 13px;color: #999;}
</style>

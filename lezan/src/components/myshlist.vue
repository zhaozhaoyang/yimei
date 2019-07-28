
<template>
    <div>
       <myheader :tit="title==0?'进行中':title==1?'审核中':title==2?'已通过':'未通过'" showL="true"></myheader>   
       <div class="container">
           <ul>
               <li @click="godetail()">
                   <div class="flex">
                       <span>阿里看到啊撒</span>
                       <span>大叔大婶</span>
                   </div>
                   <p class="second">任务收益：<span class="colored">￥1.00</span></p>
                   <p class="second">审核时间：<span class="color9"> 2019-01-01</span></p>
               </li>
           </ul>
       </div>
        
    </div>
</template>
<script>
import myheader  from './component/header.vue'
import { Toast } from 'vant'
export default {
    components:{myheader},
	data() {
		return {
            uid:this.$store.state.uid || window.sessionStorage.getItem("uid"),			
            title:0
		}
    },
    created(){
       
    },
    mounted(){
        var first = null
		mui.back = function() {
			if (!first) {
				first = new Date().getTime() 
				mui.toast('再按一次退出应用')
				setTimeout(function() { 
					first = null
				}, 1000)
			} else {
				if (new Date().getTime() - first < 1000) { 
					plus.runtime.quit() 
				}
			}
		}
        
    },
    methods:{
       godetail(){
           this.$router.push({
               name:'mytaskdetail',
               params:{

               }
           })
       }
    }
}
</script>
<style scoped>
.colored{color: #e92322;}
.color9{color: #999;}
.second{
    font-size: 13px;
    margin-top: 10px;
}
.flex{
  display: flex;flex-flow: row;align-items: center;justify-content: space-between;

}
.flex span{font-size: 15px;}
.container{
    padding: 0 10px;
    box-sizing: border-box;
}
ul,li{
    width: 100%;
}
.container li{
    display: flex;
    flex-flow: column;
    height: 80px;
    border-bottom: 1px solid #ddd;
    padding: 8px 0
}
</style>


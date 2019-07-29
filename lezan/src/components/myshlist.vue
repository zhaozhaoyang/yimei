
<template>
    <div>
       <myheader :tit="title==0?'进行中':title==1?'审核中':title==2?'已通过':'未通过'" showL="true"></myheader>   
       <div class="container">
           <ul>
               <li @click="godetail()">
                   <div class="flex">
                       <span>阿里看到啊撒</span>
                       <span class="corg" v-if="title !=0">{{title==0?'进行中':title==1?'等待审核':title==2?'已通过':'未通过'}}</span>
                   </div>
                   <p class="second" v-if="title !=0">任务收益：<span class="color9">￥1.00</span></p>
                   <p class="second">审核时间：<span class="color9"> 2019-01-01</span></p>
                  <button class="mybtn" v-if="title ==0">提交任务</button>
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
            title:''
		}
    },
    created(){
        this.title = this.$route.query.num
        this.getList()
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
       },
       getList(){
           
       },
    }
}
</script>
<style scoped>
.corg{color: #face15;}
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
    border-bottom: 1px solid #E6E6E6;
    padding: 8px 0;
    justify-content: center;
    position: relative;
}
.mybtn{
    position: absolute;
    right: 3px;
    background:#face15;
    color: #333;
    top: 50%;
    transform: translateY(-50%);
    height: .8rem;
    border-radius:25px;
    font-size: 12px;
    text-align: center;
    line-height: .8rem;
    width: 100px;
}
</style>


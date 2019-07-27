<template>
    <div>
        <myheader tit="乐赞热门"></myheader>   
        <img src="../assets/images/banner.jpg" alt style="width:100%;height:160px;border-radius: 3px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);"/>
        <table class="tb">
            <thead>
                <tr>
                    <th>排行</th><th>用户名</th><th>账号</th><th>今日佣金</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(index,item) in 10">
                    <td>{{index}}</td><td>氨基酸客户贷</td><td>6546546</td><td>6546元</td>
                </tr>
            </tbody>
        </table>
        <btmbar @goIndex="goto"  :actived='actnum'></btmbar>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
import btmbar  from './component/btmbar.vue'
import { Toast } from 'vant'
export default {
    components:{btmbar,myheader},
	data() {
		return {
            uid:this.$store.state.uid || window.sessionStorage.getItem("uid"),			
            actnum:1,
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
       
    }
}
</script>
<style scoped>
.tb{width: 100%;}
thead tr{height: 45px;text-align: center}
thead tr th,td{font-size: 14px;}
tbody tr{height: 30px;text-align: center}
tr:nth-child(2n){background: #f5f5f5}
</style>



<template>
    <div>
       <myheader tit="任务详情" showL="true"></myheader>   
       <div class="pdalar">
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    任务名称
                </van-col>
                <van-col span="12" class="mylist rt">
                    阿萨德加快科技
                </van-col>
            </van-row>
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    任务金额
                </van-col>
                <van-col span="12" class="mylist rt">
                    阿萨德加快科技
                </van-col>
            </van-row>
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    完成状态
                </van-col>
                <van-col span="12" class="mylist rt">
                    阿萨德加快科技
                </van-col>
            </van-row>
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    完成状态
                </van-col>
                <van-col span="12" class="mylist rt">
                    阿萨德加快科技
                </van-col>
            </van-row>
            <van-row class="Trow">
                <img src="../assets/images/banner.jpg" alt style="width:50%;height:250px;border-radius: 3px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);margin:10px 0;"/>
            </van-row>
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
.pdalar{
    padding: 0 12px;
}
.Trow{border-bottom: 1px solid #ddd;}
.mylist{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
}
.rt{text-align: right}

</style>



<template>
    <div>
       <myheader tit="任务详情" showL="true"></myheader>   
       <div class="pdalar">
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    任务名称：
                </van-col>
                <van-col span="12" class="mylist rt corg">
                    阿萨德加快科技
                </van-col>
            </van-row>
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    任务金额：
                </van-col>
                <van-col span="12" class="mylist rt">
                    <span class="cred">￥1</span>    
                </van-col>
            </van-row>
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    完成状态：
                </van-col>
                <van-col span="12" class="mylist rt">
                    阿萨德加快科技
                </van-col>
            </van-row>
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    完成状态：
                </van-col>
                <van-col span="12" class="mylist rt">
                    阿萨德加快科技
                </van-col>
            </van-row>
            <van-row class="Trow">
                <img src="../assets/images/banner.jpg" alt style="width:50%;height:300px;border-radius: 3px;display:block;margin:10px 0;"/>
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
            uid:this.$store.state.uid || window.localStorage.getItem("uid"),
		}
    },
    created(){       
       this.postRequest({ cmd: "taskDetail",uid:this.uid,taskId:this.taskId }).then(res => {
            console.log(res)
            if(res.dataList){
            //   this.tasklist = res.data.dataList
            }             
        });
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
.corg{color: #face15;}
.cred{
    color: #ff4843;
    font-size: 13px;
}
.pdalar{
    padding: 0 12px;
}
.Trow{border-bottom: 1px solid #E6E6E6;}
.mylist{
    height: 52px;
    line-height: 52px;
    font-size: 14px;
}
.rt{text-align: right}

</style>


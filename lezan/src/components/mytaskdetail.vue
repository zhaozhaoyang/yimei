
<template>
    <div>
       <myheader tit="任务详情" showL="true"></myheader>   
       <div class="pdalar">
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    任务名称：
                </van-col>
                <van-col span="12" class="mylist rt corg">
                    {{tasklist.title}}
                </van-col>
            </van-row>
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    任务金额：
                </van-col>
                <van-col span="12" class="mylist rt">
                    <span class="cred">￥{{tasklist.price}}</span>    
                </van-col>
            </van-row>
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    完成状态：
                </van-col>
                <van-col span="12" class="mylist rt">
                    {{tasklist.state==0?'未完成':tasklist.state==1?'已完成':tasklist.state==2?'审核通过':tasklist.state==3?'审核拒绝':'未领取'}}
                </van-col>
            </van-row>
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    最后更新：
                </van-col>
                <van-col span="12" class="mylist rt">
                    {{time}}
                </van-col>
            </van-row>
            <van-row class="Trow">
                <img :src="tasklist.image" alt style="width:50%;border-radius: 3px;display:block;margin:10px 0;"/>
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
            tasklist:'',
            time:''
		}
    },
    created(){       
        var taskId = this.$route.params.taskId
        this.time = this.$route.params.time
       this.postRequest({ cmd: "taskDetail",uid:this.uid,taskId:taskId }).then(res => {
            console.log(res)
            this.tasklist = res.data          
        });
    },
    mounted(){
        var first = null
        var that =this
		mui.back = function() {
			if (!first) {
				first = new Date().getTime() 
				that.$router.back()
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


<template>
    <div>
        <myheader tit="任务详情" showL="true"></myheader>
        <div class="task">
            <div class="tastlist">
                <p class="detitle">任务详情</p>
                <ul class="ullist">
                    <li class="flex">
                    <img :src="obj.image" alt style="height:40px;width:39px;"/>
                    <div class="c_middle">
                        <p class="f1">{{obj.title}}</p>
                        <p class="p1">
                        <span class="f2">任务描述:{{obj.content}}</span>
                                       
                        </p>                
                    </div>
                    <div class="flex red">
                        <span class="b1">+{{obj.price}} </span>           
                    </div>
                    </li>
                </ul>
            </div>
            <p class="lqsx">任务流程</p>
            <ul class="bars">
                <li>
                    <img src="@/assets/images/t1.png" alt />
                    <span>领取任务</span>
                </li>
                <li>
                    <img src="@/assets/images/t2.png" alt />
                    <span>提交任务</span>
                </li>
                <li>
                    <img src="@/assets/images/t3.png" alt />
                    <span>审核到账</span>
                </li>
            </ul>
            <p class="lqsx">任务视频教程</p>
            <div class="videotask">
                <video :src="obj.video" width="100%" height="240" controls>
                    <source src="movie.mp4"  type="video/mp4">
                </video>
            </div>
            <p class="tishi">
                <img src="@/assets/images/q2.png" alt="" style="width:15px;height:15px">
                <span>请在180秒内完成任务且完成过程中不得退出本软件否则将扣除相应佣金。</span> 
            </p>
        </div>
        <div class="typeBtns" v-if="state =='-1'">
            <m-ybutton @click="gettask" text="领取任务"></m-ybutton>
        </div>
        <div class="typeBtns"  v-if="state !='-1'">
            <m-ybutton @click="gover()" size='3' text="点击-去完成"></m-ybutton>
            <m-ybutton @click="done()" size='3' text="已完成-提交"></m-ybutton>
        </div>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
import { Toast } from "vant";
export default {
    components:{myheader},
    data(){
        return{
            isGet:false,
            uid: this.$store.state.uid || window.localStorage.getItem("uid"),
            taskId:'',
            obj:'',
            state:'' // -1 未领取
        }
    },
    created(){
        this.taskId = this.$route.params.taskId || sessionStorage.getItem('taskId')
        if(sessionStorage.getItem('isGet') == 'false'){
            this.isGet = false
        }else{
            this.isGet = true
        }
        
        this.postRequest({ cmd: "taskDetail",uid:this.uid,taskId:this.taskId}).then(res => {
            console.log(res)
            this.obj = res.data
            this.state = res.data.state
        });
    },
    mounted(){
        var first = null
        var that =this
		mui.back = function() {
			if (!first) {
				first = new Date().getTime() 
				that.$router.push('/index')
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
        gettask(){      
            if(JSON.parse(localStorage.getItem('userInfo')).vip == '0'){
                Toast('普通用户无法领取任务！')
                return;
            }       
            if(this.state !='-1'){
                Toast('你已领取过该任务，请勿重复领取')
                return;
            }     
            this.postRequest({ cmd: "addTask",uid:this.uid,taskId:this.taskId}).then(res => {
                if(res.data.result=='0'){                    
                    // console.log(res)
                    this.isGet = true
                    this.state = 1
                    Toast.success('领取成功！')
                }
                if('你已领取过该任务，请勿重复领取'==res.data.resultNote){
                    this.isGet = true
                }
            });
        },
        done(){
            this.postRequest({ cmd: "taskDetail",uid:this.uid,taskId:this.taskId}).then(res => {
                console.log(res)
                this.obj = res.data
                this.state = res.data.state
                this.$router.push({
                    name:"subtask",
                    params:{
                        obj:this.obj
                    }
                })

            });
            
        },
        gover(){
            this.$router.push({
                name:'webview',
                params:{
                src:this.obj.url,
                    title:'乐赞APP',
                    taskId:this.taskId
                }
            })
        }
    }
}
</script>
<style scoped>
.tishi{
    line-height: 16px;
    display: flex;
    flex-flow: row;
}
.tishi span{
    margin-left: 5px;
}
.typeBtns{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.videotask{padding: 10px 0;}
.lqsx{
    margin-top: 19px;font-size: 15px;color: #000;
}
p.detitle{
    width: 100%;
    border-bottom: 1px solid #E6E6E6;
    height: 40px;
    line-height: 40px;
    color: #000;
    font-size: 15px;
    text-indent: 15px;
}
.red{color: #FF4843;}
.f1{font-size: 14px;color: #333;}
.f2{display: inline-block;height: 16px;color: #333;font-size: 10px;text-align: center;border-radius: 3px;line-height: 16px;margin-right: 5px;}

.p1{margin-top: 8px;}
.small{font-size: 14px;}
.b1{font-size: 18px;}
.flex{
  display: flex;flex-flow: row;align-items: center;
}
.task{
    padding: 10px 15px ;
}
.tastlist{
  border-radius: 6px;
  box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);
}
.c_middle{
  flex: 1;
  margin: 0 10px;
}
.bars {
  display: flex;
  width: 100%;
  flex-flow: row;
  justify-content: space-around;
  background: #fff; 
  padding: 15px 0;
  margin-bottom: 15px;
  
}
.bars li {
  display: flex;
  flex-flow: column;
  align-items: center;
  
}
.bars li span {
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  color: #999;
}
.bars li img {
  width:20px;
  height:20px;
}
.ullist{
  width: 100%;
  background: #fff;
  padding: 0 8px;
  border-radius: 6px;
}
.ullist li{
  min-height: 75px;  
  padding: 3px 8px;
}
.ullist li + li{
  border-top: 1px solid #E6E6E6;
}

</style>

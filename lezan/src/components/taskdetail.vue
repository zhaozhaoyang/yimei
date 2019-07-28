<template>
    <div>
        <myheader tit="任务详情" showL="true"></myheader>
        <div class="task">
            <div class="tastlist">
                <p class="detitle">任务详情</p>
                <ul class="ullist">
                    <li class="flex">
                    <img src="../assets/images/touxiang.png" alt style="height:40px;width:39px;"/>
                    <div class="c_middle">
                        <p class="f1"> 牵连营销—视频点赞</p>
                        <p class="p1">
                        <span class="f2">任务描述:打开视频点赞</span>
                                       
                        </p>                
                    </div>
                    <div class="flex red">
                        <span class="b1">+1.00 </span><sup class="f4">元</sup>                
                    </div>
                    </li>
                </ul>
            </div>
            <p class="lqsx">领取顺序</p>
            <ul class="bars">
                <li @click="gettask()">
                    <img src="@/assets/images/nav1.jpg" alt />
                    <span>领取任务</span>
                </li>
                <li @click="subtask()">
                    <img src="@/assets/images/nav2.jpg" alt />
                    <span>提交任务</span>
                </li>
                <li @click="checktask()">
                    <img src="@/assets/images/nav3.jpg" alt />
                    <span>审核到账</span>
                </li>
            </ul>
            <p class="lqsx">任务视频教程</p>
            <div class="videotask">
                <video src="https://www.runoob.com/try/demo_source/movie.mp4" width="100%" height="240" controls>
                    <source src="movie.mp4"  type="video/mp4">
                </video>
            </div>
        </div>
        <div class="typeBtns" v-if="!isGet">
            <button class="btns" @click="isGet = true">领取任务</button>
        </div>
        <div class="typeBtns" v-if="isGet">
            <button class="btns2" @click="gover()">点击-去完成</button>
            <button class="btns2"  @click="done()">已完成-提交</button>
        </div>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
export default {
    components:{myheader},
    data(){
        return{
            isGet:false
        }
    },
    methods:{
        gettask(){

        },
        subtask(){

        },
        checktask(){

        },
        done(){
            this.$router.push({
                name:"subtask"
            })
        },
        gover(){

        }
    }
}
</script>
<style scoped>
.btns2{
    width:40%;
    height: 35px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 13px;
    border-radius: 3px;
    margin-right: 15px;
}
.btns{
    width:80%;
    height: 35px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 13px;
    border-radius: 3px;
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
    border-bottom: 1px solid #ddd;
    height: 40px;
    line-height: 40px;
    color: #000;
    font-size: 15px;
    text-indent: 15px;
}
.red{color: #e92322;}
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
  color: #000;
}
.bars li img {
  width:40px;
  height:40px;
  border-radius: 50%;
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

</style>

<template>
    <div>
        <myheader tit="任务详情" showL="true"></myheader>
        <div class="top">
            <van-uploader :after-read="afterRead" accept="image/*"/>
            <p>添加图片</p>
        </div>
        <div class="pdalar">
            <p class="Tasktitle">任务信息</p>
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
        </div>
        <m-ybutton @click="subtask" text="提交任务"></m-ybutton>
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
        afterRead(){

        },
        subtask(){
            this.$router.push('/success')
        }
    }
}
</script>
<style scoped>
.Trow{border-bottom: 1px solid #E6E6E6;}
.mylist{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
}
.rt{text-align: right}

.top{
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 20px 0;
}
.top p{
    font-size: 14px;
}
.pdalar{
    padding: 0 12px;
}
.Tasktitle{
    font-weight: bold;
    font-size: 16px;color: #000;
    height: 30px;
    line-height: 30px;
}
</style>


<template>
    <div>
        <myheader tit="常见问题" showL="true"></myheader>
        <div class="wrap">  
            <div class="top">
                <p>新手教程-常见问题解答</p>
                <p>更新时间：2019-10-40 20：50：50</p>
            </div>
            <div class="content">
                弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作

弹出框组件支持函数调用和组件调用两种方式
            </div>
        </div>

    </div>
</template>
<script>
import myheader  from './component/header.vue'
export default {
    components:{myheader},
    data(){
        return{
           
        }
    },
    methods:{
       
    }
}
</script>
<style scoped>
.wrap{
    padding: 10px;
}
.content{
    padding: 15px 0;
    line-height: 20px;
}
.top{
    width: 100%;border-bottom: 1px solid #E6E6E6;
}
.top p:nth-child(1){
    font-size: 16px;
    height: 35px;
    line-height: 35px;
}
.top p:nth-child(2){
    font-size: 10px;
    color: #999;
    height: 20px;
}

</style>

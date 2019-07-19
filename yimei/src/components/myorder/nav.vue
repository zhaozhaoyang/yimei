<template>
    <div class="tabs">
        <div :class="{'active':nowIndex === index}" v-for="(item,index) in navlist" :key="index" @click="tabClick(index)">{{item.name}}</div>
    </div>
</template>

<script>
export default {
    props:['saveNavIndex'],
    watch:{
        // 接收swiper组件传过来的索引
        // swiperSendIndex(value,oldValue){
        //     this.nowIndex = value
        // }
        '$store.state.swiperIndex'(){
            this.nowIndex = this.$store.state.swiperIndex
        }  
    },
    created(){
        this.nowIndex = this.$store.state.swiperIndex
       
    },
    data(){
        return {
            navlist:[
                {name:'全部'},
                {name:'待付款'},
                {name:'取消订单'},
                {name:'未使用'},
                {name:'退款'},
                {name:'待写日记'},
                {name:'申诉'},
                {name:'已完成'},
            ],
            nowIndex:0
        }
    },
    methods:{
        tabClick(index){
            this.nowIndex = index
            // 点击导航按钮向swiper组件发送index
            this.$emit('changeTab',index)
            this.$store.commit('saveNavIndex',index)
        }
    }
}
</script>

<style>
.tabs{background-size:auto 100%;height:.77rem;overflow: hidden;margin-top: -.28rem;overflow: hidden;width: 120%;}
.tabs div{font-weight:normal;text-align: center;font-size: .32rem;float:left;width: 1.3rem;height: .76rem;line-height: .76rem;color:rgb(17,17,17,1);float: left;}
.tabs .active{border-bottom: .01rem solid rgba(35,183,172,1);}
</style>

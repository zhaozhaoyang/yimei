<template>
    <div>
        <van-tabs v-model="active" swipeable :animated="true" :duration="1">
            <van-tab title='第一'>
                <div class="box">

                </div>
            </van-tab>
            <van-tab title='第2'>
                <div class="box1">

                </div>
            </van-tab>
            <van-tab title='第3'>
                <div class="box2">

                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    components:{},
    data(){
        return{
            active:0
        }
    },
    created(){
        let data = {
            channel:'ALI_WEB',
            timestamp:new Date().valueOf(),
            total_fee:'1',
            bill_no:`bcademo${new Date().valueOf()}`,
            title:'123a',
            optional:'',
            bill_timeout:360
        }
        this.$jsonp('https://apibj.beecloud.cn/2/rest/bill',data).then(res =>{
            console.log(res)
        })
    }
}
</script>
<style scoped>
    .box{
        height: 100px;width: 100vw;background: olive;
    }
    .box1{
        height: 100px;width: 100vw;background: rebeccapurple;
    }
    .box2{
        height: 100px;width: 100vw;background: orange;
    }
    .van-tabs__track {
       will-change: top, left, bottom, right !important;
    }
</style>

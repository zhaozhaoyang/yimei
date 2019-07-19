<template>
    <div class="look">
        <headers></headers>
        
        <!-- 变美过程开始 -->
        <beauty></beauty>
        <!--  -->

        <!-- tab切换 -->
        <talk></talk>
        <!--  -->
    </div>
</template>

<script>
import talk from '@/components/look/talk.vue'
import beauty from '@/components/look/beauty.vue'
import headers from '@/components/look/header.vue'
import axios from '../axios'
export default {
    data(){
        return {
            diaryid:null,
            uid:''
        }
    },
    components:{
        headers,
        beauty,
        talk
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.diaryid = this.$route.query.diaryid
        // this.proid = this.$route.query.proid
        console.log(this.$route.query.diaryid)
        // console.log(this.$route.query.proid)
        this.proid = localStorage.getItem('proid')
    }
    
}
</script>

<style>
*{margin: 0;padding: 0;}
.look{font-family: 'PingFang-SC-Bold';}
</style>

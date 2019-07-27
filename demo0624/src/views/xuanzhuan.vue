<template>
    <div>
        <button @click="rotate">点击</button>
        <div class="pan" :style="{transform:aaa,transition:tran,background: 'aqua'}"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            aaa:'',
            tran:''
        }
    },
    methods:{
        rotate(){
            this.tran = 'transform 3s ease-in-out'
            this.aaa = "rotate(700deg)"
            
        }
    }
}
</script>
<style scoped>
    .pan{
        height: 100px;width:100px;margin: 0 auto;
    }
</style>

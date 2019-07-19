<template>
    <div class="recommend">
        <div class="Title">账单详情</div>
        <fot></fot>
    </div>
</template>

<script>
import fot from '@/views/share/share/fot'
export default {
    components:{
        fot
    }
    
}
</script>

<style>
*{margin: 0;padding: 0;}
.recommend{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.recommend .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
</style>

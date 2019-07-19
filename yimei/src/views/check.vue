<template>
    <div class="check">
        <div class="Title">系统服务</div>
        <img src="../common/images/img/ios/ios/图片1拷贝@1x.png" alt="">
        <p>当前已是最新版本1.0.1</p>
        <div class="btn">检查更新</div> 
    </div>
</template>

<script>
export default {

}
</script>

<style>
*{margin: 0;padding: 0;}
.check{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.check .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.check img{margin-left: 38%;margin-top: 35%;border-radius:.5rem;}
.check p{margin-left: 30%;text-align: center;;margin-top: .5rem;color:rgba(102,102,102,1);font-size: .4rem;width: 4rem;}
.check .btn{width: 9rem;height: 1.3rem;background:rgba(35,183,172,1);opacity:0.6;border-radius: .8rem;font-size: .4rem;font-weight:500;color:#fff;text-align: center;line-height: 1.3rem;margin-top: 2.5rem;margin-left: .5rem;}
</style>

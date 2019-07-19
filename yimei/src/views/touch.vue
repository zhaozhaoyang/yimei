<template>
    <div class="touch">
        <div class="Title">系统服务</div>
        <div class="center">
            <div class="up1">
                <p class="number">微信公众号
                    <router-link to="">《杨承禹医美消费指南》</router-link>
                </p>
                <p class="numbers">新浪微博
                    <router-link to="">《杨承禹医美消费指南》</router-link>
                </p>
            </div>
            <div class="up2">
                <p class="number">微信公众号</p>
                <p class="numbers">400-232253</p>                
            </div>
            <div class="up3">
                <p class="number">微信公众号</p>
                <p class="numbers">13524666939</p>                
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
*{margin: 0;padding: 0;}
.touch{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.touch .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.touch .center{width: 95%;margin-left: .25rem;}
.touch .center .up1{position: relative;background: url('../common/images/img/ios/1/ios/shouye/圆角矩形1拷贝9@1x.png') center;width: 100%;height: 80px;margin-top: 2rem;border-radius:.3rem;}
.touch .center .up1 .number{position: absolute;top:.5rem;left: .3rem;font-size: .4rem;}
.touch .center .up1 .number a{text-decoration:none;color:rgba(54, 86, 248, 1);margin-left: .6rem}
.touch .center .up1 .numbers{position: absolute;top:1.2rem;left: .3rem;font-size: .4rem;}
.touch .center .up1 .numbers a{text-decoration:none;color:rgba(54, 86, 248, 1);margin-left: 1rem}
.touch .center .up2{position: relative;background: url('../common/images/img/ios/1/ios/shouye/圆角矩形1拷贝5@1x.png') center;width: 100%;height: 80px;margin-top: .5rem;border-radius:.3rem;}
.touch .center .up2 .number{position: absolute;top:.5rem;left: .3rem;font-size: .4rem;}
.touch .center .up2 .numbers{position: absolute;top:1.2rem;left: .3rem;font-size: .4rem;color:rgba(11,172,160,1);}
.touch .center .up3 {position: relative;background: url('../common/images/img/ios/1/ios/shouye/圆角矩形1拷贝6@1x.png') center;width: 100%;height: 80px;margin-top: .5rem;border-radius:.3rem;}
.touch .center .up3 .number{position: absolute;top:.5rem;left: .3rem;font-size: .4rem;}
.touch .center .up3 .numbers{position: absolute;top:1.2rem;left: .3rem;font-size: .4rem;color:rgba(11,172,160,1);}
</style>

<template>
    <div class="setpasd">
        <div class="Title">设置支付密码</div>
        <div class="header">
            <div class="center">
                <p>手机号：</p>
                <input type="text" placeholder="请输入手机号">
            </div>
            <div class="center">
                <input type="text" placeholder="请输入短信验证码" style="margin-left:0;width:6.8rem;">
                <p style="color:rgba(35,183,172,1);">| 获取验证码</p>
            </div>
            <div class="center">
                <p>手机号：</p>
                <input type="text" placeholder="请输入手机号">
            </div>
        </div>
        <div class="btn">确定</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
*{margin: 0;padding: 0;}
.setpasd{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.setpasd .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.setpasd .header{width: 100%;height: auto;margin-top: 1.8rem;}
.setpasd .header .center{width: 9.5rem;height: 1.5rem;margin-left: .5rem;border-bottom:.01rem solid rgba(226,226,226,1);overflow: hidden;}
.setpasd .header .center p{float: left;color: rgba(17,17,17,1);font-weight:500;line-height: 1.5rem;font-size: .4rem;}
.setpasd .header .center input{float: left;margin-top: .5rem;border: none;margin-left: .6rem;margin-top: .6rem;}
.setpasd .btn{width: 9rem;height: 1.2rem;background:rgba(35,183,172,1);opacity:0.6;border-radius: .8rem;font-size: .4rem;font-weight:500;color:#fff;text-align: center;line-height: 1.2rem;margin-top: 2.5rem;margin-left: .5rem;}
</style>

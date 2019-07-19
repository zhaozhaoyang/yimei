<template>
    <div class="Login">
        <div class="Lg">
            <div class="before"  @click="first">先逛逛</div>
            <img src="../common/images/img/ios/图片1拷贝@2x.png" alt="">
            <div class="button2">
                <router-link class="regist" to="/regist">注册</router-link>
                <router-link class="regist f62" to="/Login">登录</router-link>
                <!-- <span :class="{choosed:categoryType === 1}" @click="changeCategoryType(1)">推荐项目</span>
                <span :class="{choosed:categoryType === 2}" @click="changeCategoryType(2)">精选日记</span> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../axios.js'
export default {
    data(){
        return {
            
        }
    },
    methods:{
        first(){
            axios({cmd:'looklook'}).then(res => {
                console.log(res)
                if(res.result == '0'){
                    console.log(res)
                    this.$router.push({path:'/Index'})
                }
            })
        },
    },
}
</script>

<style>
*{margin: 0;padding: 0;}
.Login{width: 100%;height: 100%;background:url('../common/images/img/ios/组4@2x.png')top center no-repeat;background-size:cover;}
.Login .Lg{position: absolute;top: 1rem;}
.Login .Lg .before{width: 1.5rem;height: .8rem;;border-radius: .8rem;text-align: center;line-height: .8rem;color: rgba(85,85,85,1);background:rgba(255,255,255,1);opacity:0.6;margin-left: 8rem;}
.Login .Lg img{width: 2.5rem;height: 2.4rem;margin-left: 3.8rem;margin-top:1.7rem; border-radius: 15px;}
.Login .Lg .button2{width: 100%;display: flex;justify-content:space-around;margin-top: 6.5rem;}
.Login .Lg .button2 a{text-decoration: none;width: 4rem;height: 1rem;border: .05rem solid rgba(35,183,172,1);border-radius: .8rem;font-size: .45rem;color:rgba(35,183,172,1);text-align: center;line-height: 1rem;}
.Login .Lg .button2 .f62{background: rgba(35,183,172,1);color: #fff;}
</style>

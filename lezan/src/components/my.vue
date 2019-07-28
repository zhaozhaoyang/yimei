<template>
    <div>
        <myheader tit="乐赞APP"></myheader>
        <div class="head">
            <img src="../assets/images/touxiang.png" style="width:65px;height:65px;border-radius: 50%;display:block;"/>
            <div class="user">
                <p>
                    <span class="sp1">维也纳音乐盒</span><img src="../assets/images/1.png"/>
                </p>
                <p class="sp2">ID: 456468</p>
            </div>
        </div>
        <div class="task">
           <ul class="bars">
                <li @click="going">
                    <img src="@/assets/images/nav1.jpg" alt />
                    <span>进行中</span>
                </li>
                <li @click="going">
                    <img src="@/assets/images/nav2.jpg" alt />
                    <span>审核中</span>
                </li>
                <li @click="going">
                    <img src="@/assets/images/nav3.jpg" alt />
                    <span>已通过</span>
                </li>
                <li @click="going">
                    <img src="@/assets/images/nav3.jpg" alt />
                    <span>未通过</span>
                </li>
            </ul>
            <div class="money">
                <p>
                    <span>我的余额：</span>
                    <span>￥300.00</span>
                </p>
                <p class="flex p2">
                    <span>
                        <span>累计收益：</span>
                        <span>￥800.00</span>
                    </span>
                    <button class="smbtn" @click="$router.push('/tixian')">提现</button>
                </p>
            </div>
            <div class="mygrid">
                <van-grid :border="false" :column-num='3' :clickable="true">
                    <van-grid-item
                        v-for="(item,index) in navs"
                        :key="index"
                        :icon="item.src"
                        :text="item.name"
                        :to='item.url'
                        @click="come(index)"
                    />
                </van-grid>
            </div>
        </div>
        <van-popup v-model="codeImg"> <img src="@/assets/images/nav3.jpg" alt /></van-popup>
        <btmbar @goIndex="goto" :actived='actnum'></btmbar>    
    </div>
</template>
<script>
import btmbar  from './component/btmbar.vue'
import myheader  from './component/header.vue'
import { Grid, GridItem ,Toast} from 'vant';
export default {
    components:{btmbar,myheader},
    data() {
        return{
            uid:this.$store.state.uid || window.sessionStorage.getItem("uid"),
            actnum:3,
            codeImg:false,
            navs:[
                {name:'资金明细',src:require('@/assets/images/nav3.jpg'),url:'/runlist'},
                {name:'我的好友',src:require('@/assets/images/nav3.jpg'),url:'/myfriend'},
                {name:'邀请好友',src:require('@/assets/images/nav3.jpg'),url:'/myinvate'},
                {name:'常见问题',src:require('@/assets/images/nav3.jpg'),url:'/myquestion'},
                {name:'推广素材',src:require('@/assets/images/nav3.jpg'),url:'/mytuiguang'},
                {name:'联系客服',src:require('@/assets/images/nav3.jpg'),url:''},
                {name:'缴纳押金',src:require('@/assets/images/nav3.jpg'),url:'/yajin'},
                {name:'修改密码',src:require('@/assets/images/nav3.jpg'),url:'/resetpsd'},
                {name:'退出登录',src:require('@/assets/images/nav3.jpg'),url:''},
            ],
        }
    },
    created(){
        
    },
    methods:{
        come(num){
            if(num == 5){
                this.codeImg = true
            }else if(num == 8){
                //退出登录
                window.sessionStorage.setItem("uid",'')
                Toast.loading({
                    duration: 0,       // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
                    loadingType: 'spinner',
                    message:"退出登录中"
                })
                setTimeout(() => {
                    Toast.clear()
                    this.$router.push('/login')
                }, 1500);
                
            }
        },
        going(num){
            this.$router.push({
                name:'myshlist',
                params:{
                    
                }
            })
        }

    }
}
</script>
<style scoped>
.flex{
  display: flex;flex-flow: row;align-items: center;
}
.head{
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 12px 12px;
}
.user{
    margin-left: 20px;
}
.sp1{
    font-size: 14px;
    color: #000;
}
.sp2{
    font-size: 12px;
    color: #000;
    margin-top: 8px;
}
.task{
    padding: 10px 15px ;
}
.bars {
  display: flex;
  width: 100%;
  flex-flow: row;
  justify-content: space-around;
  background: #fff;  
  box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);
  border-radius: 3px;
  padding: 15px 0;
  margin-bottom: 15px;
}
.bars li {
  display: flex;
  flex-flow: column;
  align-items: center;
  
}
.bars li span {
  text-align: center;
  margin-top: 0.2rem;
  font-size: 12px;
}
.bars li img {
  width:30px;
  height:30px;
  border-radius: 50%;
}
.money{
    width: 100%;
    padding-left: 10px;
    box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);
    border-radius: 3px;
}
.money p{
    height: 40px;
    line-height: 40px;
    font-size: 13px;
}
.money p+p{
    border-top: 1px solid #ddd;
}
.smbtn{
    width: 66px;
    height: 28px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 13px;
    border-radius: 3px;
    margin-right: 15px;
}
.p2{
    justify-content: space-between;
}
.mygrid{
    width: 100%;
    box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);
    border-radius: 3px;
    margin-top: 15px;
}
.van-grid-item__icon{
    
}
</style>


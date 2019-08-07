<template>
    <div>
        <myheader tit="乐赞APP"></myheader>
        <div style="position:relative;">
        <div class="bgm"></div>        
        <div class="head">
            <img :src="userInfo.icon" style="width:55px;height:55px;border-radius: 50%;display:block;"/>
            <div class="user">
                <p>
                    <span class="sp1">{{userInfo.nickname}}</span>
                    <span class="lv"  v-if="userInfo.vip != '0'">LV.{{userInfo.vip}}</span>
                    <span class="lv" v-if="userInfo.vip == '0'">普通用户</span>
                </p>
                <p class="sp2">ID: {{userInfo.account}}</p>
            </div>
        </div>        
        <div class="task">
            <ul class="showmoney">
                <li>
                    <span class="span1">我的余额</span>
                    <span  class="span2">{{userInfo.balance}}</span>
                </li>
                <li>
                    <span class="span1">累计收益</span>
                    <span class="span2">{{userInfo.totalFee}}</span>
                </li>
                <button class="tip" @click="$router.push('/tixian')">提现 <font style="font-size:12px;"></font></button>
            </ul>
            <!-- <div class="money">
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
            </div> -->
           <ul class="bars">
                <li @click="going(0)">
                    <img src="@/assets/images/nav1.jpg" alt />
                    <span>进行中</span>
                </li>
                <li @click="going(1)">
                    <img src="@/assets/images/nav2.jpg" alt />
                    <span>审核中</span>
                </li>
                <li @click="going(2)">
                    <img src="@/assets/images/nav3.jpg" alt />
                    <span>已通过</span>
                </li>
                <li @click="going(3)">
                    <img src="@/assets/images/nav4.jpg" alt />
                    <span>未通过</span>
                </li>
            </ul>
            
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
        <van-popup v-model="codeImg"><img :src="customImg" alt @click="saveImg(customImg)"/></van-popup>
        <btmbar @goIndex="goto" :actived='actnum'></btmbar>  
        </div>  
    </div>
</template>
<script>
import btmbar  from './component/btmbar.vue'
import myheader  from './component/header.vue'
import { Grid, GridItem ,Toast,Dialog} from 'vant';
export default {
    components:{btmbar,myheader},
    data() {
        return{
            uid:this.$store.state.uid || window.localStorage.getItem("uid"),
            actnum:3,
            codeImg:false,
            navs:[
                {name:'资金明细',src:require('@/assets/images/b1.png'),url:'/runlist'},
                {name:'我的好友',src:require('@/assets/images/b2.png'),url:'/myfriend'},
                {name:'邀请好友',src:require('@/assets/images/b3.png'),url:'/myinvate'},
                {name:'常见问题',src:require('@/assets/images/b4.png'),url:{name:'webview',params:{title:'常见问题',src:'http://47.95.5.242/display/faq?id=1'}}},
                {name:'推广素材',src:require('@/assets/images/b5.png'),url:'/mytuiguang'},
                {name:'联系客服',src:require('@/assets/images/b6.png'),url:''},
                {name:'缴纳押金',src:require('@/assets/images/b7.png'),url:'/yajin'},
                {name:'修改密码',src:require('@/assets/images/b8.png'),url:'/resetpsd'},
                {name:'退出登录',src:require('@/assets/images/b9.png'),url:''},
            ],
            userInfo:{},
            customImg:''
        }
    },
    created(){
        window.localStorage.setItem('zfInfo','')  
        this.postRequest({ cmd: "customerImage"}).then(res => {
            this.customImg = res.data.image     
        });
        this.postRequest({ cmd: "userInfo",uid:this.uid}).then(res => {     
          window.localStorage.setItem("userInfo", JSON.stringify(res.data));          
          this.userInfo = JSON.parse(window.localStorage.getItem("userInfo"))
      });

    },
    methods:{
        come(num){
            if(num == 5){
                this.codeImg = true
            }else if(num == 8){
                //退出登录
                window.localStorage.setItem("uid",'')
                window.localStorage.setItem("userInfo",'')
                window.localStorage.setItem('zfInfo','')
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
            this.$router.push('/myshlist?num='+num)
        },
        saveImg(src){
            Dialog.confirm({
            title: '是否保存图片',
            message: '是否保存客户二维码？'
            }).then(() => { 
                plus.gallery.save( src, function () {
                    Toast.success('保存成功！');                
                });
            }).catch(() => {
            });
        }

    }
}
</script>
<style scoped>
.bgm{
    width: 100%;
    height: 150px;
    position: absolute;
    top: -10px;
    left: 0;
    background: url('../assets/images/bgm.png') no-repeat;
    background-size: 100% 100%;
    z-index: 1;
}
.lv{
    color: #fff;
    display: inline-block;
    height: 13px;
    line-height: 13px;
    width: 30px;
    background: #FACE15;
    border: 1px solid #f28b42;
    text-align: center;
    border-radius: 3px;
    font-size: 10px;
}
.tip{
    position: absolute;
    left: 50%;
    top: 100%;   
    font-size: 15px; 
    font-weight: bold;
    background:#face15;
    color: #fff;
    height: .8rem;
    border-radius:25px;
    text-align: center;
    line-height: .8rem;
    width: 88px;
    transform: translate(-50%,-55%);

}
.showmoney{
    display: flex;
    flex-flow: row;
    box-shadow:0 0px 6px rgba(100, 100, 100, 0.4);
    border-radius: 10px;
    padding:20px 5px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    background: #fff;
}
.span1{
    font-size: 15px;color: #999;margin-bottom: 8px;
}
.span2{font-size: 23px;font-weight: 600;color: #666;}
.showmoney li{
    flex: 1;
    display: flex;
    flex-flow: column;
    text-align: center;
    justify-content: center;
    
}
.showmoney li:first-child{
    border-right: 1px solid #E6E6E6;
}
.flex{
  display: flex;flex-flow: row;align-items: center;
}
.head{
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 20px 12px 8px;
    position: relative;
    z-index: 2;
}
.user{
    margin-left: 20px;
}
.sp1{
    font-size: 16px;
    color: #000;
    vertical-align: middle;
}
.sp2{
    font-size: 12px;
    color: #000;
    margin-top: 8px;
}
.task{
    padding: 10px 15px ;
    position: relative;
    z-index:3;
}
.bars {
  display: flex;
  width: 100%;
  flex-flow: row;
  justify-content: space-around;
  background: #fff;  
  box-shadow:0 0px 8px rgba(100, 100, 100, 0.4);
  padding: 20px 0;
  margin: 30px 0 15px; 
  border-radius: 4px;
}
.bars li {
  display: flex;
  flex-flow: column;
  align-items: center;
  
}
.bars li span {
  text-align: center;
  margin-top: 0.3rem;
  font-size: 12px;
}
.bars li img {
  width:30px;
  height:30px;
}
.money{
    width: 100%;
    padding-left: 10px;
    box-shadow:0 0px 6px rgba(100, 100, 100, 0.5);
    border-radius: 3px;
}
.money p{
    height: 40px;
    line-height: 40px;
    font-size: 13px;
}
.money p+p{
    border-top: 1px solid #E6E6E6;
}
.smbtn{
    width: 66px;
    height: 28px;
    border: 1px solid #E6E6E6;
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
    box-shadow:0 0px 8px rgba(100, 100, 100, 0.4);
    border-radius: 5px;
    margin: 15px 0 1.5rem;
}

</style>


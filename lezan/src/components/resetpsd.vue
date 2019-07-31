<template>
    <div>
        <myheader tit="修改密码" showL="true"></myheader>
        <van-cell-group>
        <van-field
            v-model="oldpsw"
            required
            label="原密码"
            placeholder="请输入原密码"
        />
        <van-field
            v-model="newpsw"
            required
            label="新密码"
            placeholder="请输入新密码"
        />
        <van-field
            v-model="password"
            type="password"
            label="确认密码"
            placeholder="请再次输入密码"
            required
        />
        </van-cell-group>
        <m-ybutton @click="subtask" text="确认修改"></m-ybutton>
       
    </div>
</template>
<script>
import myheader  from './component/header.vue'
import { Toast } from 'vant'
export default {
    components:{myheader},
    data(){
        return{
           oldpsw:'',
           newpsw:'',
           password:'',
           uid: this.$store.state.uid || window.localStorage.getItem("uid"),
        }
    },
    methods:{
       subtask(){
           if(this.oldpsw==''||this.newpsw==''||this.password==''){
               Toast('请补全输入信息！')
               return;
           }
           if(this.newpsw != this.password){
               Toast('确认密码不一致！')
               return;
           }
           this.postRequest({ cmd: "editPassword",uid:this.uid,oldPassword:this.oldpsw,newPassword:this.newpsw}).then(res => {
                console.log(res)
                Toast.success('密码修改成功')
                window.localStorage.setItem("uid",'')
                this.$router.push('/login')
            });
       },
    }
}
</script>
<style scoped>

</style>

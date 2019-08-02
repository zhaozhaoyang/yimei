<template>
    <div>
        <myheader tit="我的推广" showL="true"></myheader>
        <img :src="tasklist.image" alt style="width:100%;height:160px;border-radius: 3px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);"/>
        <div class="wrap">  
            <div class="ti">
                <p :class="[Tabactive==0?'actived':'']" @click="tabselect(0)">文字素材</p>
                <p :class="[Tabactive==1?'actived':'']" @click="tabselect(1)">图片素材</p>
            </div>            
            <ul class="ullist" v-if="Tabactive==0">
                <button class="copy">长按文字选择复制</button>
                 <li class="flex sp">
                      {{tasklist.content}}
                 </li>
            </ul>
            <ul class="ullist" v-if="Tabactive==1">
                <button class="copy">长按图片选择复制</button>
                 <li class="flex"  v-for="i in tasklist.pics" :key="i" style="margin-bottom:20px;">
                     <img :src="i" @click="saveImg(i)" alt style="width:100%;border-radius: 3px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);"/>
                 </li>
            </ul>
        </div>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
import {Toast,Dialog} from 'vant';
export default {
    components:{myheader},
    data(){
        return{
           uid:this.$store.state.uid || window.localStorage.getItem("uid"),	
           Tabactive:0,
           tasklist:{},
        }
    },
    created(){
        this.getList()
    },
    mounted(){
        var first = null
        var that =this
		mui.back = function() {
			if (!first) {
				first = new Date().getTime() 
				that.$router.push('/my')
				setTimeout(function() { 
					first = null
				}, 1000)
			} else {
				if (new Date().getTime() - first < 1000) { 
					plus.runtime.quit() 
				}
			}
        }  
    },
    methods:{
        saveImg(src){
            Dialog.confirm({
            title: '保存推广码',
            message: '是否保存推广码'
            }).then(() => { 
                plus.gallery.save( src, function () {
                    Toast.success('保存成功！');                
                });
            }).catch(() => {
            });
        },
        tabselect(num){
           this.Tabactive= num
        },
        getList(){
           this.postRequest({ cmd: "material"}).then(res => {
                this.tasklist = res.data
                
            });
       },
    }
}
</script>
<style scoped>
.sp{
    font-size: 14px;
    height: 18px;
    line-height: 18px;
}
.copy{
    width: 92%;
    display: block;
    margin: 0 auto;
    height:40px;
    background:rgba(250,206,21,0.06);
    border:1px solid rgba(250,206,21,1);
    border-radius:5px;
    margin: 15px auto;
    color: #666666;
    font-size: 14px;

}
.actived{
  font-weight: bold;
  color: #333!important;
  border-bottom: 2px solid #FACE15;
}
.wrap{
    padding: 10px;
}
.ti{
  width: 100%;
  display: flex;
  flex-flow: row;  
  border-radius: 5px;
}
.ti p{
  flex: 1;
  text-align: center;
  height: 35px;
  line-height: 35px;
  font-size: 15px;
}

</style>

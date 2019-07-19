<template>
  <ul class="content">
    <li class="f1" v-for="(item,index) in items" :key="index">
        <img :src="item.doctoricon" alt>
      <div class="left">
         <p>{{item.doctorname}}</p>
         <p style="font-size:.3rem;color:rgba(153,153,153,1);">{{item.hospital}}</p>
      </div>
      <div style="margin-left: 5.8rem;margin-top:-1.7rem;">{{item.time}}</div>
    </li>
  </ul>
</template>

<script>
import axios from '../../../axios'
export default {
    data(){
        return {
            uid:'',
            items:[],
        }
    },
    methods:{
        all(){
            axios({cmd:'getConsult',uid:this.uid}).then(res=>{
                if(res.result == '0'){
                    this.items = res.dataList
                    console.log(this.items)
                }
            })
        }
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.all()
    }
};
</script>

<style>
.content{width: 95%;text-align: center;margin-top: 1.8rem;margin-left: .5rem;}
.content .f1{height: 100%;overflow: hidden;border-bottom: .01rem solid rgba(226,226,226,1);list-style: none;}
.content .f1 img{width:1rem;height: 1rem;border-radius: 50%;background: #000;margin-top: .5rem;float: left;}
.content .f1 .left{width: 7rem;height: 1.8rem;margin-left: .1rem;;float: left;text-align: left;line-height: .7rem;margin-top: .3rem}
.content .f1 .left p{font-weight:500;color:rgba(17,17,17,1);font-size: .38rem;}
.content .f1 div{font-weight:500;color:rgba(153,153,153,1);font-size: .35rem;float: left;}
</style>

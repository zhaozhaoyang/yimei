<template>
    <div class="tastlist">
        <div class="ti">
          <p :class="[Tabactive==0?'actived':'']" @click="tabselect(0)">可领任务</p>
          <p :class="[Tabactive==1?'actived':'']" @click="tabselect(1)">进度查询</p>
        </div>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
        <ul class="ullist" v-if="Tabactive==0">          
          <li class="flex" v-for="(item,index) in tasklist" @click="getTaskdetail(item.taskId)" :key="index">
              <img :src="item.image" alt style="height:38px;width:38px;"/>
              <div class="c_middle">
                <p class="f1"> {{item.title}}</p>
                <p class="p1">
                    <span class="f2">抖音点赞</span>
                    <span class="f3">剩余数量：<font class="small">{{item.qty}}</font></span>                  
                </p>                
              </div>
              <div class="flex red">
              <span class="b1">+{{item.price}} </span><sup class="f4"> 元</sup>                
              </div>
          </li>          
          <p class="nodata" v-if="tasklist.length==0">暂无任务</p>
        </ul>       
        <ul class="ullist" v-if="Tabactive==1">
            <li class="flex" v-for="(item2,index)  in mytasklist"  @click="getTaskdetail(item2.taskId,'my')" :key="index">
                <img :src="item2.image" alt style="height:30px;width:30px;"/>
                <div class="c_middle">
                <p class="f1"> {{item2.title}}</p>
                <p class="p1">
                    <span class="f2">抖音点赞</span>
                    <span class="f3">{{item2.state | formatstate}}</span>                  
                </p>                
                </div>
                <div class="flex red">
                <span class="b1">+{{item2.price}} </span><sup class="f4"> 元</sup>                
                </div>
            </li>
            <p class="nodata" v-if="mytasklist.length==0">暂无数据</p>
        </ul>
        </van-list>       
    </div>
</template>
<script>
export default {
    data(){
        return{
             Tabactive:0,
             pageNo:1,             
             totalPage:1,
             uid: this.$store.state.uid || window.localStorage.getItem("uid"),

             pageNoMy:1,
             totalPageMy:1,
             tasklist:[],
             mytasklist:[],

             loading: false,
             finished: false

        }
    },
    created(){
      this.getList()
      this.getMyTaskList()
    },
    mounted() {
        var first = null;
        mui.back = function() {
        if (!first) {
            first = new Date().getTime();
            mui.toast("再按一次退出应用");
            setTimeout(function() {
            first = null;
            }, 1000);
        } else {
            if (new Date().getTime() - first < 1000) {
            plus.runtime.quit();
            }
        }
        };
        
    },
    filters:{
      formatstate(num){
        switch(num){
          case '0':
            return '未完成';
          case '1':
            return '已完成';
          case '2':
            return '审核通过';
          case '3':
            return '审核拒绝';
        }
      }
    },
    methods:{
      onLoad(){
        // console.log('加载')
        setTimeout(() => {
          if(this.Tabactive == '0'){
            if (this.pageNo > this.totalPage) {        
              this.loading = false;     
              this.finished = true
            }else{
              this.getList()  
              this.loading = false;
            }
          }else{
            if (this.pageNoMy > this.totalPageMy) {        
              this.loading = false;     
              this.finished = true
            }else{
              this.getMyTaskList()  
              this.loading = false;
            }
          }
          
          
        }, 2000);
          
      },
      getMyTaskList(num){        
        if(num){
          this.mytasklist = []
          this.pageNoMy = num  
          this.finished = false
        }
        // console.log(this.pageNoMy)
        this.postRequest({ cmd: "myTaskList",pageNo:this.pageNoMy,uid:this.uid }).then(res => { 
            // console.log(res)
            this.totalPageMy = res.data.totalPage
            this.mytasklist = [...this.mytasklist, ...res.data.dataList]           
            this.pageNoMy ++
        });
      },
      getList(num){
        if(num){
          this.tasklist = []
          this.pageNo = num  
          this.finished = false
        }
        // console.log(this.pageNo)
        this.postRequest({ cmd: "taskList",pageNo:this.pageNo }).then(res => {
            // console.log(res)
            this.totalPage = res.data.totalPage
            this.tasklist = [...this.tasklist, ...res.data.dataList]           
            this.pageNo ++
            
        });
      },
      tabselect(num){
        this.Tabactive = num-0

      },
      getTaskdetail(taskId,fag){
        sessionStorage.setItem('taskId',taskId)
        if(fag){
          sessionStorage.setItem('isGet',true)
        }else{
          sessionStorage.setItem('isGet',false)
        }
        
          this.$router.push({
              name:"taskdetail",
              params:{taskId:taskId}
          })
      },
  }
}
</script>
<style scoped>
.red{color: #ff4843;}
.f1{font-size: 15px;color: #333;}
.f2{display: inline-block;color: #ef5897;font-size: 10px;text-align: center;border-radius: 10px;line-height: 16px;margin-right: 5px;border: 1px solid #ef5897;padding: 0 9px;}
.f3{color: #999;font-size: 13px;}
.p1{margin-top: 8px;}
.small{font-size: 14px;}
.b1{font-size: 21px;}
.flex{
  display: flex;flex-flow: row;align-items: center;
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
  font-size: 16px;
  color: #999;
}

.actived{
  font-weight: bold;
  color: #333!important;
  border-bottom: 2px solid #FACE15;
}
.ullist{
  width: 100%;
  background: #fff;
  padding: 0 8px;
}
.ullist li{
  height: 70px;  
  padding: 0 8px;
}
.ullist li + li{
  border-top: 1px solid #E6E6E6;
}
.c_middle{
  flex: 1;
  margin: 0 10px;
}
.nodata{width: 100%;height: 50px;line-height: 50px;text-align: center;font-size: 13px;color: #999;}
</style>

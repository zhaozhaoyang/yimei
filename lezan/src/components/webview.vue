<template>
    <div style="width:100%;height:100vh">
        <myheader :tit="title" showL="true"></myheader>
        <iframe :src="src" frameborder="0" height="90%"  width="100%" class="ifram"></iframe>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
export default {
    components:{myheader},
    data(){
        return{
            src:"",
            title:'',
            taskId:''
        }
    },
    created(){
        if(this.$route.params.taskId){
            this.taskId = this.$route.params.taskId
        }
        this.src = this.$route.params.src;
        this.title= this.$route.params.title
        console.log(this.src)
    },
    mounted(){
          var first = null
            var that = this
            mui.back = function() {
                if (!first) {
                    that.$router.back()
                    first = new Date().getTime() 
                    setTimeout(function() { 
                        first = null
                    }, 1000)
                } else {
                    if (new Date().getTime() - first < 1000) { 
                        plus.runtime.quit() 
                    }
                }
            }
    }
    // ,
    // mounted(){
    //     document.addEventListener('plusready',function () {  
    //         plus.key.addEventListener("backbutton",function(){
    //             console.log(JSON.stringify(router))
    //             router.back(-1)
    //         });
    //     },false);  
    // },
    // destroyed(){
    //     plus.key.addEventListener("backbutton",function(){
            
    //     });
    // }
}
</script>
<style scope>
</style>
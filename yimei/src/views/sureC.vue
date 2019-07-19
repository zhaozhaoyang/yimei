<template>
    <div class="sureC">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="img">
            <p class="f1">项目选择</p>
            <p class="f2">完成</p>
        </div>
        <div class="add">
            <div class="addC">
                <div class="all" v-for="(item,index) in xuanzhong" :key="index"><p class="L1">{{item.thirdname}}</p><p class="big" @click="del(index)">X</p></div>
            </div>
        </div>
        <div class="Left">
            <div class="alls">
                <p :class="{box:Types == index}" v-for="(item,index) in items" :key="index" @click="yiji(index,item.fid)">{{item.fname}}</p>
            </div>
        </div>
        <div class="Right">
            <div class="every" v-for="(item,index) in types" :key="index">
                <p class="detail">{{item.secondname}}</p>
                <div class="star">
                    <div v-for="(items,index) in item.thirdList" :key="index" @click="sanji(index,items)"><div :id="items.state==1?'green':''">{{items.thirdname}}</div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../axios'
export default {
    data(){
        return {
            items:[],
            fid:'',
            fids:[],
            types:[],
            Types:0,
            xuanzhong:[],
        }
    },
    methods:{
        img(){
            this.$router.push('/sure')
        },
        // 一级分类的列表
        first(){
            axios({cmd:'getfirstclassification'}).then(res => {
                if(res.result == '0'){
                    this.items = res.dataList
                    for(var i = 0;i<this.items.length;i++){
                        this.fids.push(this.items[i].fid);
                        if(i==0){
                            this.fid=this.items[i].fid;
                        }
                    }
                    this.second()
                }
            })
        },
        // 二三级分类列表
        second(){
            axios({cmd:'getsecondclassification',fid:this.fid}).then(res=>{
                if(res.result == '0'){
                    // console.log(res)
                    this.types = res.dataList
                    var dataList=this.types;
                    for(var i = 0;i<dataList.length;i++){
                        var thirdList=dataList[i].thirdList;
                        for(var j = 0;j<thirdList.length;j++){
                            for(var z = 0;z<this.xuanzhong.length;z++){
                                if(this.xuanzhong[z].thirdid==thirdList[j].thirdid){
                                    console.log(this.types[i].thirdList[j].thirdname);
                                    this.types[i].thirdList[j].state=1;
                                }
                            }
                        }
                        
                    }
                }
            })
        },
        yiji(index,fid){
            this.Types=index;
            this.fid=fid;
            this.second()
        },
        sanji(index,third){
            var a=0;
            for(var i = 0;i<this.xuanzhong.length;i++){
                if(this.xuanzhong[i].thirdid==third.thirdid){
                    a=1;
                }
            }
            if(a==0){
                third.state=1;
                this.xuanzhong.push(third);
                // console.log(third.state)
            }
           
        },
        del(index){
            for(var i =0;i<this.xuanzhong.length;i++){
                if(this.xuanzhong[i].thirdid){
                    // console.log(this.xuanzhong[i])
                    this.xuanzhong.splice(i,1);

                }
            }
        }

    },
    created(){
        this.first()
       
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.sureC{font-family:'PingFang-SC-Medium';overflow: hidden;background: #fff;}
.sureC .Title{position: fixed;top: 0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;background:rgba(255,255,255,1);box-shadow:0px .03rem .18rem 0px rgba(227,227,227,0.45);}
.sureC .Title img{float: left;margin-left: .25rem;margin-top: .5rem}
.sureC .Title p{font-weight:800;color:rgba(17,17,17,1);font-size: .5rem;float: left;line-height: 1.5rem}
.sureC .Title .f1{margin-left: 32%}
.sureC .Title .f2{margin-left: 30%;font-weight:400;font-size: .38rem;line-height: 1.8rem}

.sureC .add{height: auto;width: 100%;margin-top: 1.5rem;}
.sureC .add .addC{width: 95%;margin-left: .25rem;overflow: hidden;}
.sureC .add .addC .all{width: 3rem;background:rgba(35,183,172,1);border-radius:.5rem;height: 1rem;font-size: .35rem;color: #fff;line-height: 1rem;overflow: hidden;float: left;margin-left: .1rem;margin-top: .2rem}
.sureC .add .addC .all p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;float: left;}
.sureC .add .addC .all .L1{width: 2rem;margin-left: .3rem;}
.sureC .add .addC .all .big{font-size: .45rem;margin-left: .1rem;}

.sureC .Left{background:rgba(246,246,246,1);width: 25%;border-top: .01rem solid rgba(229,229,229,1);margin-top: .5rem;float: left;}
.sureC .Left .alls{border-top: .01rem solid rgba(229,229,229,1);}
.sureC .Left .alls p{height: 1.3rem;border-bottom: .01rem solid rgba(229,229,229,1);text-align: center;line-height: 1.3rem;color:rgba(17,17,17,1);font-size: .38rem}

.sureC .Right{width: 75%;float: left;border-top: .01rem solid rgba(229,229,229,1);margin-top: .5rem;}
.sureC .Right .every{border-bottom: .01rem solid rgba(229,229,229,1);margin-top: .3rem}
.sureC .Right .every .detail{font-size: .38rem;color: rgba(17,17,17,1);margin-left: .25rem;margin-top: .35rem}
.sureC .Right .every .star{margin-top: .3rem;overflow: hidden;}
.sureC .Right .every .star div{background:rgba(247,247,247,1);text-align: center;line-height: 1rem;float: left;border-radius: .5rem;min-width:2.35rem;max-width:4rem;margin-left: .1rem;margin-top: .1rem}
.box{background: #fff;}
#green{background:rgba(35,183,172,1);}
</style>

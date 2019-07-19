<template>
    <div class="list">
        <div class="title">订单中心</div>
        <img src="../component/img/return@1x.png" alt="" class="return" @click="returns">
        <div class="time">
            <div class="timer">
                <el-date-picker v-model="value8" type="date"  placeholder="开始日期" format="yyyy 年 MM 月 dd 日"  value-format="yyyy-MM-dd"  default-value="2019-06-01" class="picker"></el-date-picker>~<el-date-picker v-model="value9" type="date"  placeholder="结束日期"  default-value="2019-08-01" format="yyyy 年 MM 月 dd 日"  value-format="yyyy-MM-dd"  class="picker"></el-date-picker>
                <span class="chose" @click="chose">筛选</span><span class="del" @click="del">清空</span>
            </div>
            <p class="p1">核销数量：{{overcount}}</p>
        </div>        
        <div class="item" ref="main" id="main">
            <div class="data" v-for="(itemes,index) in list" :key="index">
                <div class="car">
                    <p>{{itemes.orderNum}}</p>
                </div>
                <router-link :to="{path:'/detail',query:{id:itemes.oderId}}" class="datas" v-for="(item,index) in itemes.detailsList" :key="index">
                    <img :src="item.image" alt="" class="tu">
                    <div class="xuanran">
                        <div class="titles">
                            <p class="menpiao">{{item.name}}</p>
                            <p v-if="item.orderFlag == 2">未核消</p>
                            <p v-else>已核消</p>
                        </div>
                        <div class="after">
                            <p>门票种类：{{item.cateName}}</p>
                            <div>出行日期：{{item.time}}<span>数量：{{item.number}}</span></div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>       
    </div>
</template>

<script>
import request from '../http.js'
import { Loading } from 'element-ui';
export default {
    data(){
        return {
            value8: '',
            value9: '',
            goodsId:null,
            items:[],
            list:[],
            ids:[],
            overcount:0 //核销完成
        }
    },
    methods:{
        // 返回上一级
        returns(){
            history.back(-1)
        },
        // 请求数据
        all(){
            let loadingInstance = Loading.service({text:'正在查询中...',target:document.querySelector('#main')})
            let params = {
                cmd:"getGoodsOrderList",
                time1:this.value8,
                time2:this.value9,
                goodsId:this.goodsId
            }
            console.log(params)
            request.postRequest(params).then(res => {
                this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                 loadingInstance.close();
                });

                console.log(res)
                if(res.data.result == '0'){                    
                this.list = res.data.dataList 
                let newlist = res.data.dataList 
                
                for(let i =0 ;i <newlist.length;i++){
                    for(let j=0;j<newlist[i].detailsList.length;j++){
                        if(newlist[i].detailsList[j].orderFlag == 1){                              
                            this.overcount = this.overcount + newlist[i].detailsList[j].number
                        }
                    }
                }

                }
            })
        },
        // 筛选
        chose(){
            this.all()
        },

        // 清除时间
        del(){
            this.value8 = ''
            this.value9 = ''
            this.all()
        }
    },
    created(){
        this.goodsId = localStorage.getItem('goodsId')
        console.log(this.goodsId)
        this.all()
    }
}
</script>
<style lang="scss">
$color:rgba(153,153,153,1);
.list{width: 100%;height: 100%;background:rgba(248,248,248,1);}
.return{position: absolute;top: 2%;left: 2%;}
.time{
    width: 100%;background: #fff;height: 1.7rem;
    .timer{width: 80%;margin-left:10%;margin-top:.05rem;
        .picker{border: .03rem solid rgba(227,227,227,0.45);margin-top: 3%;width: 2.5rem;}
        .chose{margin-left: 5%}
        .del{margin-left: 5%}
    }
}
.p1{font-size: 0.4rem;line-height: .9rem;text-align: center;}

.item{
    width: 100%;
    .data{
        width: 95%;margin-left: 2.5%;background:rgba(255,255,255,1);border-radius:.1rem;margin-top:2%;
        .car{height: 1rem;line-height: 1rem;border-bottom: .02rem solid rgba(227,227,227,0.45);font-size: .4rem;color: $color;
            p{margin-left: .2rem}
        }
        a.datas{
            width: 98%;margin-left:2%;margin-top:.2rem;overflow: hidden;height: 2.5rem;border-bottom: .02rem solid rgba(227,227,227,0.45);text-decoration: none;display: block;color:rgba(17,17,17,1);
            .tu{float: left;width: 2.1rem;height: 2.1rem;}
            .xuanran{
                float: left;width: 70%;margin-left:.3rem;
                .titles{
                    width: 100%;display: flex;justify-content: space-between;
                    .menpiao{width: 5rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
                    p{font-size: .4rem}
                }
                .after{
                    margin-top: .4rem;
                    p{font-size: .35rem;color: $color;}
                    div{font-size: .35rem;margin-top: .2rem;color: $color;display: flex;justify-content: space-between;}
                }
            }
        }
    }
}
</style>

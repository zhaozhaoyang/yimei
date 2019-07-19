<template>
    <div class="detail">
        <div class="title">订单详情</div>
        <img src="../component/img/return@1x.png" alt="" class="returnf" @click="returnes">
        <div class="items">
            <div class="datat">
                <div class="cars">
                    <p>{{detail.orderNum}}</p>
                </div>
                <div class="datatt" v-for="(item,index) in detail.dataList" :key="index">
                    <div class="datt clearfix" v-for="(items,index) in item.detailsList" :key="index">
                         <img :src="items.image" alt="" class="tupian">
                        <div class="xuanan">
                            <div class="titless">
                                <p class="menpiao">{{items.name}}</p>
                                <p v-if="items.orderFlag == 2">未核消</p>
                                <p v-else>已核消</p>
                            </div>
                            <div class="afters">
                                <p>门票种类：{{items.cateName}}</p>
                                <div>出行日期：{{items.time}}<span>数量：{{items.number}}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>             
        </div>
        <div class="message">
            <p class="info">订单信息</p>
            <div class="dev">
                <div>订单编号<span>{{detail.orderNum}}</span></div>
                <div>创建时间<span>{{detail.addTime}}</span></div>
                <div>付款时间<span>{{detail.payTime}}</span></div>
            </div>
        </div>     
    </div>
</template>

<script>
import request from '../http'
export default {
    data(){
        return {
            ids:[],
            id:null,
            detail:[],
            itemes:[],
        }
    },
    methods:{
        returnes(){
            history.back(-1)
        }
    },
    created(){
        this.id = this.$route.query.id
        console.log(this.id)
        let data = {
            cmd:"getGoodsOrderById",
            goodsId:window.sessionStorage.getItem('goodsId'),
            id:this.id
        }
        request.postRequest(data).then(res => {
            // console.log(res)
            if(res.data.result == '0'){
                this.detail = res.data
                console.log(res)
            }
        })
    }
}
</script>

<style lang="scss">
$color:rgba(153,153,153,1);
.detail{width: 100%;height: 100%;background:rgba(248,248,248,1);}
.returnf{position: absolute;top: 2%;left: 2%;}
.items{
    width: 100%;
    .datat{
        width: 100%;;background:rgba(255,255,255,1);margin-top:2%;
        .cars{height: 1rem;line-height: 1rem;border-bottom: .02rem solid rgba(227,227,227,0.45);font-size: .4rem;color: $color;
            p{margin-left: .2rem}
        }
        .datatt{
            width: 98%;margin-left:2%;margin-top:.2rem;overflow: hidden;border-bottom: .02rem solid rgba(227,227,227,0.45);            
            .datt{
                .tupian{float: left;width: 2.1rem;height: 2.1rem;}
                .xuanan{
                    float: left;width: 70%;margin-left:.3rem;
                    .titless{
                        width: 100%;display: flex;justify-content: space-between;
                        p{font-size: .4rem}
                    }
                    .afters{
                        margin-top: .4rem;
                        p{font-size: .35rem;color: $color;}
                        div{font-size: .35rem;margin-top: .2rem;color: $color;display: flex;justify-content: space-between;}
                    }
                }
            }            
        }
    }
}
.message{
    width: 100%;background: #fff;
    .info{width: 90%;font-size: .4rem;margin-left: .5rem;margin-top:2%;}
    .dev{
        width: 88%;margin-left: 9%;
        div{
            font-size: .35rem;display: flex;justify-content:space-between;height: 1rem;line-height:1rem;
            span{color: $color;}
        }
    }
}
.datt{height: 2.5rem;width: 100%;}
.clearfix:before,.clearfix:after {

    content: "";

    display: block;

    clear: both;

}

.clearfix {

    zoom: 1;

}
</style>

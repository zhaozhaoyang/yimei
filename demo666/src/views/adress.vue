<template>
    <div>
        <Header title="地址" :showbd="showbd"/>
        <p class="ptitle" >请填写地址：</p>
        <div>
            <van-address-edit
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
            />
        </div>
    </div>
</template>
<style scoped>
body{
    background: #f8f8f8;
    box-sizing: border-box;
}
.ptitle{
    box-sizing: border-box;
    padding:0 15px;width:100%;
}
</style>

<script>
    import Header from '@/components/header.vue'
    import { Toast  } from 'vant';
    export default {
        components:{Header},
        data() {
            return {
            areaList:{
                province_list: {
                    110000: '北京市',
                    120000: '天津市'
                },
                city_list: {
                    110100: '北京市',
                    110200: '县',
                    120100: '天津市',
                    120200: '县'
                },
                county_list: {
                    110101: '东城区',
                    110102: '西城区',
                    110105: '朝阳区',
                    110106: '丰台区',
                    120101: '和平区',
                    120102: '河东区',
                    120103: '河西区',
                    120104: '南开区',
                    120105: '河北区',
                    // ....
                }
            },
            searchResult: [],
            showbd:true
            }
        },

        methods: {
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
            if (val) {
                this.searchResult = [{
                name: '黄龙万科中心',
                address: '杭州市西湖区'
                }];
            } else {
                this.searchResult = [];
            }
            }
        }
    }
</script>

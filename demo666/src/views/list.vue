<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <p>刷新次数: {{ count }}**vant中的下拉刷新和上拉加载</p>
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <!-- <van-cell
            v-for="item in list"
            :key="item"
            :title="item"
        /> -->
        <div v-for="item in 15"  style="height:50px;border-bottom:1px solid #999;">
          {{item}}
        </div>
        </van-list>
        </van-pull-refresh>
    </div>
</template>
<script>
import {Toast} from 'vant'
export default {
    data() {
      return {
        // 滚动刷新
        list: [],
        loading: false,
        finished: false,

        // 下拉刷新
        count: 0,
        isLoading: false
      };
  },

  methods: {
    onLoad() {
      console.log(1111111)      
      // 异步更新数据
      setTimeout(() => {
          // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
          this.loading = false;
          return;
        }
         let resList = []
        for (let i = 0; i < 15; i++) {
          resList.push(this.list.length + 1)
          // this.list.push(this.list.length + 1);
        }
         this.list =[...this.list,...resList]
        // 加载状态结束
        this.loading = false;

        
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.onLoad()
      }, 500);
    }
  }
}
</script>

<style scoped>

</style>

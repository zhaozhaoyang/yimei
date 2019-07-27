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
        <van-cell
            v-for="item in list"
            :key="item"
            :title="item"
        />
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
      
      // 异步更新数据
      setTimeout(() => {
          // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
          this.loading = false;
          return;
        }
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
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

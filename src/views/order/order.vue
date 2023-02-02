<template>
  <div class="order">
    <div class="top">
      <van-nav-bar
        title="订单列表"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      >
        <template #right>
          <van-icon name="share-o" size="24px" />
        </template>
      </van-nav-bar>
      <van-tabs v-model:active="currentOrder">
        <template v-for="(item, index) in orderTitles" :key="index">
          <van-tab :title="item"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { getOrderData } from '@/services';
const router = useRouter();
function onClickLeft() {
  router.back();
}
const orderTitles = ['全部订单', '近期订单', '待支付'];
const orderTitleType = ['all', 'recent', 'pend'];
const currentOrder = ref();
//定义一个ref
const orderListData = ref(0);
// 发送网络请求获取数据
console.log(getOrderData)
getOrderData().then((res) => {
  console.log(res);
  orderListData.value = res.data.data.order || [];
});
</script>

<style lang="less" scoped>
.order {
  height: 100vh;
}
</style>

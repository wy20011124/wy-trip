<template>
  <div class="message">
    <van-nav-bar
      title="消息中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon name="coupon-o" size="24px" />
      </template>
    </van-nav-bar>
    <img src="@/assets/image/message/icon_message.png" alt="" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function onClickLeft() {
  router.back();
}
</script>

<style lang="less" scoped>
.message {
  img {
    width: 100%;
    height: 100%;
    margin-top: 150px;
  }
}
</style>

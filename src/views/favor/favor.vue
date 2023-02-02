<template>
  <div class="favor">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft">
      <template #title>
        <van-tabs v-model:active="active" type="card">
          <van-tab title="我的收藏"></van-tab>
          <van-tab title="浏览历史"></van-tab>
        </van-tabs>
      </template>
      <template #right>
        <van-icon name="share-o" size="24px" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function onClickLeft() {
  router.back();
}
</script>

<style lang="less" scoped></style>

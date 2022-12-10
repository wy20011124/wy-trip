<template>
  <div class="click-view">
    <span class="text">
      <slot></slot>
       <van-icon name="arrow" color="#ff5894"/></span>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.click-view {
  display: flex;
  justify-content: end;
  margin: 30px 15px;
  .text {
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 600;
  }
}
</style>

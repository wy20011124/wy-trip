<template>
  <div class="home-content">
    <div class="content">
      <img :src="contentData.image.url" alt="" />
      <div class="info">
        <div class="summary">
          {{ contentData.summaryText }}
        </div>
        <div class="name">
          {{ contentData.houseName }}
        </div>
        <div class="price">
          <van-rate
            :model-value="Number(contentData.commentScore)"
            color="#fff"
            readonly
            allow-half
            size="15"
          />
          <div class="new">{{'￥'+ contentData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  contentData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.home-content {
  margin: 6px 0;
  width: 50%;
//   height: 215px;
  .content {
    position: relative;
  }
  img {
    width: 99%;
    border-radius: 10px;
  }
  .info {
    width: 160px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    color: #fff;
    font-size: 10px;
    .summary {
      margin-bottom: 3px;
      margin-left: 5px;
    }
    .name {
      margin-left: 5px;
      overflow: hidden;
      line-height: 15px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; // 超出多少行
      -webkit-box-orient: vertical;
    }
    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 4px;
    }
  }
}
</style>

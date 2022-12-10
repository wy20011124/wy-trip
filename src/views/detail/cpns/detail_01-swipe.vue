<template>
  <div class="detail-swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in detailSwipeData">
        <van-swipe-item class="swipe-item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(item, key, index) in swipeGroup" :key="key">
            <span
              class="item"
              :class="{
                active: detailSwipeData[active]?.enumPictureCategory == key,
              }"
            >
              <span class="text">{{ getName(item[0].title) }}</span>
              <span
                class="conter"
                v-if="detailSwipeData[active]?.enumPictureCategory == key"
                >{{ getCategoryIndex(detailSwipeData[active]) }}/{{
                  item.length
                }}</span
              >
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  detailSwipeData: {
    type: Array,
    default: () => [],
  },
});
// 对数据进行分组处理
const swipeGroup = {};
for (const item of props.detailSwipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory];
  if (!valueArray) {
    valueArray = [];
    swipeGroup[item.enumPictureCategory] = valueArray;
  }
  valueArray.push(item);
}
// console.log(swipeGroup);
function getName(name) {
  return name.replace('：', '').replace('【', '').replace('】', '');
}
// 获取索引
function getCategoryIndex(item) {
  const valueArray = swipeGroup[item.enumPictureCategory];
  return valueArray.findIndex((data) => data === item) + 1;
}
</script>

<style lang="less" scoped>
.detail-swipe {
  .swipe-item {
    img {
      width: 100%;
    }
  }
  .indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 3px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);

    .item {
      margin: 1px 2px;
      border-radius: 5px;
      padding: 1px 2px;
      &.active {
        background-color: #fff;
        color: #333;
        text-align: center;
      }
    }
  }
}
</style>

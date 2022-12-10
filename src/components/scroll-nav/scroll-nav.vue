<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div
        class="tab-control-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(index)"
      >
        <span>
          {{ item }}
        </span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
  titles: {
    type: Array,
    default: () => [],
  },
});
function change(index) {
  currentIndex.value = index;
}
const emit = defineEmits(['itemClick']);
const currentIndex = ref(0);
const itemClick = (index) => {
  currentIndex.value = index;
  emit('itemClick', index);
};
defineExpose({
  currentIndex,
  change,
});
</script>

<style lang="less" scoped>
.tab-control {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #fff;

  .tab-control-item {
    flex: 1;
    text-align: center;
    &.active {
      color: var(--primary-color);
      span {
        padding: 5px;
        border-bottom: 2px solid var(--primary-color);
      }
    }
  }
}
</style>

<template>
  <div class="city">
    <div class="top">
      <!-- 搜索框 -->
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      />
      <!-- tab切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="key">
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import cityGroup from './city-group/city-group.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
// import {getCityAll} from '@/services'
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
const router = useRouter();
// 搜索框功能
const searchValue = ref('');
function cancelClick() {
  router.back();
}
// tab
const tabActive = ref();
console.log(tabActive)
// 发送网络请求，获取city数据
// const allCity=ref({})
// getCityAll().then((res)=>{
//     allCity.value=res.data
// })

// 从store中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

// 获取当前选中标签的数据
// 获取的数据不是响应式，必须要用computed进行包裹，已经使用v-show展示，不需要实时数据，所以注释
// const currentGroup = computed(() => allCities.value[tabActive.value]);
</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>

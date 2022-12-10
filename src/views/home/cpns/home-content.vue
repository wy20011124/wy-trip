<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <home-content-v9
          v-if="item.discoveryContentType === 9"
          :content-data="item.data"
          @click="itemClick(item.data)"
        ></home-content-v9>
        <home-content-v3
          v-else-if="item.discoveryContentType === 3"
          :content-data="item.data"
          @click="itemClick(item.data)"
        ></home-content-v3>
      </template>
    </div>
  </div>
</template>

<script setup>
import homeContentV3 from '@/components/home-content-v3/home-content-v3.vue';
import homeContentV9 from '@/components/home-content-v9/home-content-v9.vue';
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);
const router=useRouter()
function itemClick(item){
  router.push('/detail/' + item.houseId)
}
</script>

<style lang="less" scoped>
.content {
  padding: 1px 8px;
  margin-bottom: 60px;
  .title {
    font-size: 22px;
    padding: 10px;
  }
  .list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>

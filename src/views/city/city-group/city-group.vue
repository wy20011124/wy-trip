<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(hotCity, index) in groupData.hotCities">
          <div class="city" @click="cityClick(hotCity)">
            {{ hotCity.cityName }}
          </div>
        </template>
      </div>
      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, index) in group.cities" :key="index">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
    <!-- 下面是手写，上面是使用组件库 -->
    <!-- <div class="city-group">
    <template v-for="(group, index) in groupData.cities" :key="index">
      <div class="group-item">
        <h2 class="title">标题:{{ group.group }}</h2>
        <div class="list">
          <template v-for="(city, indey) in group.cities" :key="indey">
            <div class="city">
              {{ city.cityName }}
            </div>
          </template>
        </div>
      </div>
    </template>
  </div> -->
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import {computed} from 'vue'
import { useRouter } from 'vue-router';
// 添加props
const props=defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});
// 添加动态的索引
const indexList=computed(()=>{
    const list= props.groupData.cities.map(item=>item.group)
    list.unshift('#')
    return list
})
// 监听城市的点击
const router=useRouter()
const cityStore=useCityStore()
function cityClick(city){
    // console.log(city)
    // 向store中添加city数据
    cityStore.currentCity=city
    // 返回上一级
    router.back()
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
  flex-wrap: wrap;
  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    background-color: #fff4ec;
    text-align: center;
    line-height: 28px;
    margin: 5px 0;
  }
}
</style>

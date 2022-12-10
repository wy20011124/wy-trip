<template>
  <div class="home-search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/image/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期选择 -->
    <div class="date-range" @click="show = true">
      <div class="start">
        <span class="spans">入住</span>
        <span>{{ startDateStr }}</span>
      </div>
      <div class="stay">
        <span>共 {{ stayDay }} 天</span>
      </div>
      <div class="end">
        <span class="spans">离店</span>
        <span>{{ endDateStr }}</span>
      </div>
    </div>
    <van-calendar
      v-model:show="show"
      type="range"
      color="#ff9854"
      @confirm="onConfirm"
    />
    <!-- 价格/人数 -->
    <div class="date-range-bottom">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="texts">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="hot-suggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="tagText"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!-- 搜索按钮 -->
    <div class="search-btn">
       <div class="btn" @click="searchBtnClick">
         开始搜索
       </div>
    </div>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { formatMonthDay, getDiffDays } from '@/utils/format_date';
import useHomeStore from '@/stores/modules/home';
import useMain from '@/stores/modules/main';
const router = useRouter();
// 切换到city页面
function cityClick() {
  router.push('/city');
}
// 获取位置
function positionClick() {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log('获取位置成功', res);
    },
    (err) => {
      console.log('获取位置失败', err);
    }
  );
}

// 获取当前城市
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

// 日期范围的处理
const mainStore=useMain()
const {startDate,endDate} =storeToRefs(mainStore)
const startDateStr = computed(()=>{
  return formatMonthDay(startDate.value)
})
const endDateStr = computed(()=>{
  return formatMonthDay(endDate.value)
})
// console.log(startDateStr.value)
// 日历组件的处理
const show = ref(false);
// 获取时间差
const stayDay = ref(getDiffDays(startDate.value, endDate.value));
function onConfirm(value) {
  // console.log(value)
  // 设置日期
  mainStore.startDate = value[0];
  mainStore.endDate = value[1];
  // 修改相差几天
  stayDay.value = getDiffDays(value[0], value[1]);
  // 隐藏日历
  show.value = false;
}

// 获取热门建议数据
const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore);
// console.log(hotSuggests)
// 搜索按钮
function searchBtnClick(){
  router.push({
    path:'/search',
    query:{
      startDate:startDate.value,
      endDate:endDate.value,
      currentCity:currentCity.value.cityName,
    }
  })
}
</script>

<style lang="less" scoped>
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  .city {
    flex: 1;
    font-size: 15px;
    color: #333;
    margin-left: 12px;
  }
  .position {
    width: 74px;
    img {
      width: 18px;
      height: 18px;
      margin-left: 5px;
    }
    .text {
      line-height: 18px;
      font-size: 12px;
    }
  }
}
.date-range {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  text-align: center;
  .stay {
    line-height: 40px;
  }
  .start,
  .end {
    display: flex;
    flex-flow: column;
    span {
      margin: 2px 0;
    }
    .spans {
      color: #666;
    }
  }
}
.date-range-bottom {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  color: #666;
}
.texts {
  margin-left: 30px;
  color: #666;
}
.hot-suggest {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  margin-top: 15px;
  margin-left: 22px;
  .tagText {
    padding: 3px;
    margin: 5px 7px;
    border-radius: 15px;
    line-height: 1;
  }
}
.search-btn{
  height: 40px;
  text-align: center;
  padding: 0 20px;
  margin-top: 10px;
  .btn{
    background-image: var(--theme-linear-gradient);
    height: 100%;
    border-radius: 20px;
    line-height: 40px;
    color:#fff;
    font-weight: 500;
  }
  
}
</style>

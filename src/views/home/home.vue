<template>
  <div class="home" ref="homeRef">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/image/home/banner.webp" alt="" />
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>
    <div class="search-bar" v-if="isShowSearchBar">
    <search-bar></search-bar>
    </div>
    <home-content></home-content>
    
  </div>
</template>
<script>
export default{
  name:'home'
}
</script>
<script setup>
import useHomeStore from '@/stores/modules/home';
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue';
import searchBar from '@/components/search-bar/search-bar.vue';
import useScroll from '@/hooks/useScroll';
import { watch ,ref, onActivated} from 'vue';
const homeStore = useHomeStore();
// 发送网络请求
homeStore.fetchSuggestsData();
homeStore.fetchCategoriesData();
homeStore.fetchHouseListData();
// 加载数据的函数
function loading() {
  return homeStore.fetchHouseListData();
}
// 对isReachBottom进行监听
const homeRef=ref()
const { isReachBottom ,scrollTop} = useScroll(homeRef);
// console.log(scrollTop)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    loading().then(() => {
      // console.log(newValue)
      isReachBottom.value = false;
    });
  }
});
// 搜索框显示的控制
const isShowSearchBar=ref(false)
watch(scrollTop,(newValue)=>{
  isShowSearchBar.value=newValue>460
})

// 跳转会home时保留原来的位置
onActivated(()=>{
  homeRef?.value.scrollTo({
    top:scrollTop.value
  })
})
</script>

<style lang="less" scoped>
.home{
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
}
.banner {
  img {
    width: 100%;
  }
}
.search-bar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 12px 15px;
  background-color: #fff;
  z-index: 9;
}
</style>

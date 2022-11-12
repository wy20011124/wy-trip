<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item,index) in tabbrData">
        <van-tabbar-item :to="item.path">
          <span>{{item.text}}</span>
          <template #icon>
            <img
              v-if="currentIndex !== index"
              :src="getAssetsURL(item.image)"
              alt=""
            />
            <img v-else :src="getAssetsURL(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
    <!-- 注释部分为第二种方法，纯手写 -->
    <!-- <template v-for="(item,index) in tabbrData" :key="index">
        <div 
        class="tabbar-item" 
        :class="{active:currentIndex===index}"
        @click="itemClick(index,item)"
        >
        <img v-if="currentIndex!==index" :src="getAssetsURL(item.image)" alt="">
        <img v-else :src="getAssetsURL(item.imageActive)" alt="">
        <span class="text">{{item.text}}</span>
      </div>
      </template> -->
  </div>
</template>

<script setup>
import tabbrData from '../../assets/data/tabbarData';
import { ref } from 'vue';
// import { useRouter } from 'vue-router';
const getAssetsURL = (image) => {
  // 参数一 相对路径
  // 参数二 当前路径的URL
  return new URL(image, import.meta.url).href;
};
const currentIndex = ref(0);
// const router = useRouter();
// function itemClick(index, item) {
//   (currentIndex.value = index), router.push(item.path);
// }
</script>

<style lang="less" scoped>
// .tab-bar {
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 50px;
//   border-top: 1px solid #f3f3f3;
//   display: flex;
//   .tabbar-item {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     img {
//       width: 32px;
//     }
//     .text {
//       font-size: 12px;
//       margin-top: 2px;
//     }
//     &.active {
//       color: var(--primary-color);
//     }
//   }
// }
.tab-bar{
  img{
    height: 27px;
  }
}
</style>

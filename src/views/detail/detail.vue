<template>
  <div class="detail" ref="detailRef">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <scroll-nav
      ref="navRef"
      v-if="isShowTab"
      :titles="['设施', '介绍', '评论', '须知', '周边']"
      @item-click="tabClick"
    ></scroll-nav>
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe
        :detail-swipe-data="mainPart.topModule.housePicture.housePics"
      ></detail-swipe>
      <detail-info :info-data="topModules"></detail-info>
      <detail-facility
        :ref="getSelectionRef"
        :hote-tages-data="houseFacilitys"
      ></detail-facility>
      <detail-section
        :ref="getSelectionRef"
        :section-data="landlordModule"
      ></detail-section>
      <detail-comments
        :ref="getSelectionRef"
        :comment-data="commentModule"
      ></detail-comments>
      <detail-rules
        :ref="getSelectionRef"
        :rules-data="orderRules"
      ></detail-rules>
      <detail-map :ref="getSelectionRef" :position="mapData"></detail-map>
      <unit-price :price-data="introductionModule"></unit-price>
    </div>
    <div class="footer">
      <img src="@/assets/image/detail/icon_ensure.png" alt="" />
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
    <detail-action-bar :bar-data="currentHouse"></detail-action-bar>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getDetail } from '@/services';
import { ref, computed, watch } from 'vue';
import useScroll from '@/hooks/useScroll';
import detailSwipe from './cpns/detail_01-swipe.vue';
import detailInfo from './cpns/detail_02.vue';
import detailFacility from './cpns/detail_03.vue';
import detailSection from './cpns/detail_04.vue';
import detailComments from './cpns/detail_05.vue';
import detailRules from './cpns/detail_06.vue';
import detailMap from './cpns/detail_07.vue';
import unitPrice from './cpns/detail_08.vue';
import detailActionBar from './cpns/detail-action-bar.vue';
import scrollNav from '@/components/scroll-nav/scroll-nav.vue';
const router = useRouter();
const route = useRoute();
const houseId = route.params.id;
// console.log(houseId)
// 设置返回的点击监听
function onClickLeft() {
  router.back();
}
// 储存数据
const detailInfos = ref({});
//进行数据分割
const mainPart = computed(() => detailInfos.value.mainPart);
const topModules = computed(() => detailInfos.value.mainPart.topModule);
const houseFacilitys = computed(
  () =>
    detailInfos.value.mainPart.dynamicModule.facilityModule.houseFacility
      .houseFacilitys
);
const landlordModule = computed(
  () => detailInfos.value.mainPart.dynamicModule.landlordModule
);
const commentModule = computed(
  () => detailInfos.value.mainPart.dynamicModule.commentModule
);
const orderRules = computed(
  () => detailInfos.value.mainPart.dynamicModule.rulesModule.orderRules
);
const introductionModule = computed(
  () => detailInfos.value.mainPart.introductionModule
);
const currentHouse = computed(() => detailInfos.value.currentHouse);
const mapData = computed(
  () => detailInfos.value.mainPart.dynamicModule.positionModule
);
// 发送网络请求
getDetail(houseId).then((res) => {
  // console.log(res)
  detailInfos.value = res.data;
});

// 对滚动导航的配置
const detailRef = ref();
const { scrollTop } = useScroll(detailRef);
const isShowTab = computed(() => {
  // console.log(scrollTop.value)
  // console.log(scrollTop.value>=300)
  return scrollTop.value >= 450;
});
// 获取对应的组件
const contentEls = [];
function getSelectionRef(el) {
  if (el) contentEls.push(el.$el);
}
// 监听点击事件
let isWatch = false;
let currnetDistance = null;
function tabClick(index) {
  isWatch = true;
  currnetDistance =  contentEls[index].offsetTop-55;
  detailRef.value.scrollTo({
    top: contentEls[index].offsetTop - 55,
    behavior: 'smooth',
  });
  
}
// 使导航栏随着滚动变化
const navRef = ref();
watch(scrollTop, (newValue) => {
  // console.log(newValue,currnetDistance)
  // 使在点击时不再进行导航栏重新的index赋值
  if (Math.abs(newValue-currnetDistance)<=1) {
    isWatch = false;
  }
  if (!isWatch) {
    const values = contentEls.map((el) => el.offsetTop);
    let index = values.length - 1;
    for (let i = 0; i < values.length; i++) {
      if (values[i] > newValue + 55) {
        index = i - 1;
        break;
      }
    }
    // console.log(index)
    if (index != navRef?.value?.currentIndex) {
      navRef?.value?.change(index);
    }
    // navRef?.value?.change(index)
    // console.log(navRef?.value?.currentIndex)
  }
});
</script>

<style lang="less" scoped>
.detail {
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
  overflow-y: auto;
  .footer {
    margin: 40px auto 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .text {
      font-size: 12px;
      color: #7688a7;
      padding-top: 4px;
    }
    img {
      width: 120px;
    }
  }
}
</style>

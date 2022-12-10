<template>
  <div class="map">
    <title-cmp>位置周边</title-cmp>
    <div class="baidu" ref="mapRef"></div>
    <click-view>查看更多周边信息</click-view>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import titleCmp from '@/components/title-cmp/title-cmp.vue';
import clickView from '@/components/click-view/click-view.vue';
const mapRef = ref();
const props = defineProps({
  position: {
    type: Object,
    default: () => {},
  },
});
onMounted(() => {
  const map = new BMapGL.Map(mapRef.value); //创建地图实例
  // 设置地图中心点坐标
  const point = new BMapGL.Point(
    props.position.longitude,
    props.position.latitude
  );
  // 初始化地图
  map.centerAndZoom(point, 15);
  const marker = new BMapGL.Marker(point); // 创建标注
  map.addOverlay(marker); // 将标注添加到地图中
  const scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
  map.addControl(scaleCtrl);
  const zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
  map.addControl(zoomCtrl);
  const cityCtrl = new BMapGL.CityListControl(); // 添加城市列表控件
  map.addControl(cityCtrl);
});
</script>

<style lang="less" scoped>
.map {
  margin: 30px 0;
  .baidu {
    margin: 0 10px;
    height: 250px;
  }
}
</style>

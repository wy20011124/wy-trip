<template>
  <div class="search">
    <div class="select-time">
      <div class="start-time">
        <div class="name">住</div>
        <div class="data">{{startDateStr}}</div>
      </div>
      <div class="end-time">
        <div class="name">离</div>
        <div class="data">{{endDateStr}}</div>
        <i class="icon-cancel"></i>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<script setup>
import useMain from '@/stores/modules/main';
import {computed} from 'vue'
import {formatMonthDay} from '@/utils/format_date'
import { storeToRefs } from 'pinia';
const mainStore=useMain()
const {startDate,endDate}=storeToRefs(mainStore)
const startDateStr=computed(()=>formatMonthDay(startDate.value,"MM.DD"))
const endDateStr=computed(()=>formatMonthDay(endDate.value,"MM.DD"))
</script>

<style lang="less" scoped>
.search {
  display: flex;
  text-align: center;
  font-size: 14px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  background-color: rgb(245, 241, 241);
  .select-time {
    padding-top: 5px;
    margin-right: 5px;
    margin-left: 5px;
    .start-time,
    .end-time {
      line-height: 15px;
      display: flex;
      margin: 2px 10px;
      position: relative;
      .name {
        color: rgb(134, 121, 121);
        margin-right: 3px;
      }
      .icon-cancel {
        position: absolute;
        right: -6px;
        bottom: 3px;
        width: 8px;
        height: 8px;
        display: inline-block;
        background-image: url(../../assets/image/home/home-sprite-change.png);
      }
    }
  }
  .content {
    display: flex;
    flex: 1;
    align-items: center;
    color: rgb(194, 189, 189);
  }
  .right {
    display: flex;
    align-items: center;
    .icon-search {
      margin-right: 5px;
      width: 24px;
      height: 24px;
      display: inline-block;
      background-image: url(../../assets/image/home/home-sprite.png);
      background-position: -29px -151px;
      background-size: 207px 192px;
    }
  }
}
</style>

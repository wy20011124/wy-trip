<template>
  <div class="section">
    <title-cmp>房东介绍</title-cmp>
    <div class="top">
      <img :src="sectionData?.topScroll" alt="" />
    </div>
    <div class="content">
      <div class="left">
        <div class="img">
          <img :src="sectionData?.hotelLogo" alt="" />
        </div>
        <div class="hotelTags">
          <div class="hotelName">{{ sectionData?.hotelName }}</div>
          <template v-for="(item, index) in sectionData?.hotelTags">
            <span class="text" :style="{color:item.tagText?.color}">{{ item.tagText?.text }}</span>
            <span>|</span>
          </template>
        </div>
      </div>
      <div class="right">
        <span class="text">联系房东</span>
      </div>
    </div>
    <div class="bottom">
        <template v-for="(item,index) in sectionData?.hotelSummary">
          <div class="item">
            <div class="text1">{{item.title}}</div>
            <div class="text2">{{item.introduction}}</div>
            <div class="text3">{{item.tip}}</div>
          </div>
        </template>
    </div>
    <click-view>查看房东主页</click-view>
  </div>
</template>

<script setup>
import clickView from "@/components/click-view/click-view.vue"
import titleCmp from '@/components/title-cmp/title-cmp.vue'
defineProps({
  sectionData: {
    type:Object,
    default:()=>{}
  },
});
</script>

<style lang="less" scoped>
.section {
    margin: 20px 0;
  .top {
    padding: 5px 10px;
    img {
      width: 100%;
      border-radius: 4px;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      .hotelTags {
       .hotelName{
        font-size: 18px;
        font-weight: 600;
        margin-top: 10px;
        margin-left: 5px;
       }
       .text{
        margin: 4px;
       }
      }
      img {
        width: 54px;
        margin-left: 5px;
      }
    }
    .right{
       width: 66px;
        margin-right: 15px;
        background-color: var(--primary-color);
        color: #fff;
        padding: 5px;
        border-radius: 8px;
    }
  }
  .bottom{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
    .item{
        .text1,.text3{
            color:#9B9B9B ;
        }
        .text2{
            color: #333;
            font-size: 18px;
            font-weight: 600;
            margin: 4px 0;
        }
    }
  }
}
</style>

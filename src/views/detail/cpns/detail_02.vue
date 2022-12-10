<template>
  <div class="info">
    <div class="top">
      <span class="text"> {{ infoData?.houseName }}</span>
    </div>
    <div class="content">
      <template v-for="(item, index) in infoData.houseTags" :key="index">
        <span
          class="text"
          :style="{
            color: item?.tagText?.color,
            backgroundColor: item?.tagText?.background.color,
          }"
          >{{ item?.tagText?.text }}</span
        >
      </template>
    </div>
    <div class="under">
      <div class="top">
        <div class="left">
          <span class="text1">{{ infoData?.commentBrief?.overall }}</span>
          <span class="text2">{{ infoData?.commentBrief?.scoreTitle }}</span>
          <span class="text3">{{ infoData?.commentBrief?.commentBrief }}</span>
        </div>
        <div class="right">
          {{ infoData?.commentBrief?.totalCount }}条评论
          <van-icon
            name="arrow"
            color="#ff9854"
          />
        </div>
      </div>
      <div class="bottom">
        <span class="left">{{ infoData?.nearByPosition?.address }}</span>
        <span class="right">
          地图·周边
          <van-icon name="arrow" color="#ff9854" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  infoData: {
    type: Object,
    default: () => {},
  },
});
// console.log(props);
</script>

<style lang="less" scoped>
.info{
    .top{
        color: #333;
        font-size: 20px;
        padding: 5px 15px;
        font-weight: 700;
        margin: 10px 0;
    }
    .content{
        display: flex;
        align-items: center;
        padding-left: 14px;
        margin-bottom: 15px;
        .text{
            margin: 0 2px;
            padding: 2px;
            font-size: 12px;
        }
    }
    .under{
        .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: rgb(237, 239, 238);
            border-radius: 10px;
            margin: 8px 15px;
            .left{
                .text2{
                    font-size: 12px;
                    font-weight: 600;
                    margin: 0 5px;
                }
                .text3{
                    font-size: 12px;
                    font-weight: 500;
                    color: rgb(137, 130, 130);
                }
            }
            .right{
                font-size: 14px;
                font-weight: 500;
                color: var(--primary-color);
            }
        }
        .bottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: rgb(237, 239, 238);
            border-radius: 10px;
            margin: 8px 15px;
            padding: 8px 6px;
            .left{
                font-size: 15px;
                font-weight: 520;
            }
            .right{
                color: var(--primary-color);
                margin-right: 8px;
            }
        }
    }
}
</style>

<template>
  <div class="comment">
    <title-cmp>热门评论</title-cmp>
    <div class="top">
      <div class="left">
        <div class="overall">{{ commentData?.overall }}</div>
        <div class="review">
          <div class="scoreTitle">{{ commentData?.scoreTitle }}</div>
          <div class="totalCount">{{ commentData?.totalCount }}条评论</div>
          <van-rate
            readonly
            allow-half
            v-model="score"
            :size="10"
            color="#ff9854"
          />
        </div>
      </div>
      <div class="right">
        <template v-for="(item, index) in commentData?.subScores">
          <span class="text">{{ item }}</span>
        </template>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <template v-for="(item, index) in commentData?.commentTagVo">
          <span
            class="text"
            :style="{
              color: item.color,
              backgroundColor: item.backgroundColor,
            }"
            >{{ item.text }}</span
          >
        </template>
      </div>
    </div>
    <div class="bottom">
      <div class="people">
        <div class="img">
          <img :src="commentData?.comment?.userAvatars" alt="" />
        </div>
        <div class="text">
          <div class="userName">{{ commentData?.comment?.userName }}</div>
          <div class="time">{{ commentData?.comment?.checkInDate }}</div>
        </div>
      </div>
      <span class="text">
        {{ commentData?.comment?.commentDetail }}
      </span>
    </div>
    <click-view>查看全部{{commentData?.totalCount}}条评论</click-view>
  </div>
</template>

<script setup>
import clickView from '@/components/click-view/click-view.vue';
import titleCmp from '@/components/title-cmp/title-cmp.vue'
import { ref } from 'vue';
const props = defineProps({
  commentData: {
    type: Object,
    default: () => {},
  },
});
const score = ref(props?.commentData?.overall);
</script>

<style lang="less" scoped>
.comment {
  .top {
    display: flex;
    align-items: center;

    .left {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .overall {
        font-size: 40px;
        font-weight: 700;
        margin-left: 10px;
      }
      .review {
        width: 100px;
        margin-left: 10px;
        .totalCount {
          color: #9b9b9b;
          margin-top: 3px;
        }
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      .text {
        margin: 1px 10px;
        font-weight: 300;
        font-size: 12px;
        padding: 3px;
      }
    }
  }
  .content {
    .item {
      display: flex;
      flex-wrap: wrap;
      margin-left: 10px;
      margin-top: 15px;
      .text {
        margin: 2px;
        padding: 5px;
        border-radius: 15px;
      }
    }
  }
  .bottom {
    background-color: rgb(245, 247, 249);
    border-radius: 15px;
    margin: 5px 15px 0;
    padding: 10px;
    .people {
      display: flex;
      margin-bottom: 5px;
      img {
        width: 32px;
        border-radius: 50%;
      }
      .text {
        margin-left: 5px;
        .time {
          color: #9b9b9b;
          margin-top: 2px;
        }
      }
    }
    .text {
        line-height: 18px;
        color: #615d5d;
    }
  }
}
</style>

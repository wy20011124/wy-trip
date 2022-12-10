<template>
  <div class="home-content">
    <div class="content">
      <img :src="contentData.image.url" alt="" />
      <div class="info">
        <div class="location">
            <img src="@/assets/image/home/location.png" alt="" />
            <span>{{contentData.location}}</span>
        </div>
        <div class="name">
          {{ contentData.houseName }}
        </div>
        <div class="summary">
          {{ contentData.summaryText }}
        </div>
        <div class="price">
          <div class="new">{{'￥'+ contentData.finalPrice }}</div>
          <div class="old">{{'￥'+contentData.productPrice}}</div>
          <div class="tip">{{contentData?.priceTipBadge?.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  contentData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.home-content {
  width: 50%;
  margin: 6px 0;
  img {
    width: 99%;
    border-radius: 10px;
  }
  .info {
    width: 160px;
    color: rgb(13, 12, 12);
    font-size: 14px;
    margin-top: 10px;
    .location{
        width: 100%;
        padding-left: 5px;
       span{
        font-size: 13px;
        color:rgb(117, 108, 108);
       }
       img{
        width: 15px;
       }
    }
    .summary {
      margin-bottom: 3px;
      margin-left: 3px;
    }
    .name {
      margin-left: 5px;
      overflow: hidden;
      line-height: 18px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; // 超出多少行
      -webkit-box-orient: vertical;
    }
    .price {
      display: flex;
      align-items: center;
      margin: 0 4px;
      .new{
        color: var(--primary-color);
        font-size: 17px;
      }
      .old{
        margin-top: -5px;
        margin-left: 4px;
        font-size: 10px;
        text-decoration: line-through;//设置横线
        vertical-align: text-top;
      }
      .tip{
        background-color: rgb(250, 172, 185);
        color: #fff;
        border-radius: 6px;
        margin-left: 4px;
      }
    }
  }
}
</style>

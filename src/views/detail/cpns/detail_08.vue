<template>
    <div class="price">
        <h3 class="title">{{priceData?.title}}</h3>
        <div class="content">
        <span class="text">
            {{priceData?.introduction}}
        </span>
    </div>
    </div>
</template>

<script setup>
defineProps({
    priceData:{
        type:Object,
        default:()=>{}
    }
})
</script>

<style lang="less" scoped>
.price{
    margin-top: 30px;
    .title {
    margin: 0 10px;
    border-bottom: 1px solid beige;
    padding-bottom: 10px;
  }
  .content{
    padding: 10px;
    .text{
      color: #666666;
      font-size: 12px;
      line-height: 15px;
    }
  }
}
</style>
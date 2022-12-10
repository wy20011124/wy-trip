<template>
  <div class="rules">
    <div class="title">
      <h2>预定须知</h2>
    </div>
    <div class="content">
      <template v-for="(item, index) in rulesData">
        <div class="item">
          <div class="bar">
            {{ item?.title }}
          </div>
          <div class="introduction">
            {{ item?.introduction }}
          </div>
        </div>
      </template>
      <div class="find">查看说明</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rulesData: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="less" scoped>
.rules {
  .title {
    margin: 0 10px;
    border-bottom: 1px solid beige;
    padding-bottom: 10px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    position: relative;
    .item {
      display: flex;
      font-size: 13px;
      margin: 8px 15px;
      .bar{
        color: rgb(109, 97, 97);
       width: 60px;
      }
      .introduction{
          margin-left: 5px;
          color: #D32E2E;
      }
    }
    .find{
       position: absolute;
       right: 10px;
       top: 37px;
    }
  }
}
</style>

<template>
  <div class="facility">
    <!-- 注释的是未封装组件的写法 -->
    <!-- <div class="title">
      <h2>房屋设施</h2>
    </div> -->
    <title-cmp>房屋设施</title-cmp>
    <div class="groupNames">
      <template v-for="(item, index) in hoteTagesData" :key="index">
        <div
          class="content"
          v-if="
            item?.groupId === 2 || item?.groupId === 3 || item.groupId === 6
          "
        >
          <div class="groupName">
            <img :src="item.icon" alt="" />
            {{ item?.groupName }}
          </div>
          <div class="names">
            <template v-for="(ite, index) in item?.facilitys" :key="index">
              <div
                class="name"
                v-if="index === 0 || index === 1 || index === 2 || index === 3"
              >
                <van-icon name="passed" color="#ff5894" />
                {{ ite?.name }}
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
    <!-- <div class="bottom">
        <span class="text">
            查看全部设施
            <van-icon name="arrow" color="#ff5894" />
        </span>
    </div> -->
    <click-view>查看全部设施</click-view>
  </div>
</template>

<script setup>
import clickView from '@/components/click-view/click-view.vue'
import titleCmp from '@/components/title-cmp/title-cmp.vue'
defineProps({
  hoteTagesData: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="less" scoped>
.facility {
  border-top: 18px solid rgb(242, 241, 241);
  border-bottom: 8px solid rgb(242, 241, 241);
  border-radius: 10px;
  margin-top: 25px;
  // .title {
  //   margin: 20px;
  //   font-weight: 700;
  //   border-bottom: 1px solid rgb(242, 241, 241);
  //   padding-bottom: 8px;
  // }
  .groupNames {
    background-color: rgb(248, 247, 247);
    border-radius: 15px;
    margin: 0 15px;
    .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    .groupName {
      display: flex;
      flex-direction: column;
      width: 130px;
      justify-content: center;
      align-items: center;
      margin: 10px 20px;
      img {
        width: 20px;
        margin-bottom: 5px;
      }
    }
    .names {
      display: flex;
      flex-wrap: wrap;
      .name {
        width: 110px;
        margin: 3px;
        font-weight: 350;
      }
    }
  }
  }
  // .bottom{
  //   display: flex;
  //   justify-content: end;
  //   margin: 10px 20px;
  //   .text{
  //       font-size: 15px;
  //       color: var(--primary-color);
  //   }
  // }
}
</style>

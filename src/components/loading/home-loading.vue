<template>
    <div class="loading" v-if="mainStore.isLoading" @click="isShow">
         <div class="bg">
            <img src="@/assets/image/home/full-screen-loading.gif" alt="">
         </div>
    </div>
</template>

<script setup>
import useMain from '@/stores/modules/main';

const mainStore=useMain()
function isShow(){
    mainStore.isLoading=false
}
</script>

<style lang="less" scoped>
.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0,0.2);
    .bg{
        display: flex;
        width: 104px;
        height: 104px;
        justify-content: center;
        align-items: center;
        background: url(@/assets/image/home/loading-bg.png) 0 0 / 100% 100%;
        img{
            width: 70px;
            height: 70px;
            margin-bottom: 8px;
        }
    }
}
</style>
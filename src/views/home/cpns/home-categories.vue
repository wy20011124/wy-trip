<template>
    <div class="home-categories">
         <template v-for="(item,index) in categories" :key="item.id">
            <div class="item">
                <img :src="item.pictureUrl" alt="">
                <div class="text">{{item.title}}</div>
            </div>
         </template>
    </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore=useHomeStore()
const {categories} =storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.home-categories{
    display: flex;
    justify-content: start;
    overflow-x: auto;
    height: 70px;
    margin-top: 15px;
    &::-webkit-scrollbar{
        display: none;
    }
    .item{
        text-align: center;
        width: 70px;
        flex-shrink: 0;
        margin-left: 5px;
        img{
            width: 32px;
        }
        .text{
            margin-top: 7px;
        }
    }
}
</style>
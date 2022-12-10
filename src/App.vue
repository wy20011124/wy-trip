<template>
  <div class="app">
    <router-view v-slot="props">
   <keep-alive include="home">
   <component :is="props.Component"></component>
   </keep-alive>
    </router-view>
    <tab-bar v-show="!route.meta.hideTabBar"></tab-bar>
    <home-loading></home-loading>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TabBar from './components/tab-bar/tabbar.vue';
import homeLoading from '@/components/loading/home-loading.vue'
const route=useRoute()
</script>

<style lang="scss" scoped>

</style>

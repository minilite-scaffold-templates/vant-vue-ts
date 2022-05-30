<template>
  <div class="container">
    <router-view />
  </div>
  <van-tabbar route>
    <template v-for="item in tabBarList" :key="item.name">
      <van-tabbar-item :to="item.path" :icon="item.meta?.icon">{{ item.meta?.title }} </van-tabbar-item>
    </template>
  </van-tabbar>
</template>

<script lang="ts" setup>
  import { main } from '@/router/main'
  import { computed, onMounted, ref } from 'vue'

  const tabBarList = ref<any[]>([])
  onMounted(async () => {
    tabBarList.value = (await main?.length) > 4 ? main.slice(0, 4) : main
  })
</script>

<style></style>

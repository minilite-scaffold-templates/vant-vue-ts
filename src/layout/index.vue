<template>
  <TabBar :tab-bar-set="tabBarParam" :tab-bar-array="main" />
</template>

<script lang="ts" setup>
  import { main } from '@/router/main'
  import { ref } from 'vue'
  import TabBar from '@/components/tabBar'

  const tabBarParam = ref<any>({
    inActiveColor: '#000000',
    activeColor: 'red',
    tabBarHeight: '60px',
    suspendBtn: true,
  })
</script>

<template>
  <TabBar :tab-bar-set="tabBarParam" :tab-bar-array="main" />
</template>

<script lang="ts" setup>
  import { main } from '@/router/main'
  import { ref } from 'vue'
  import TabBar from '@/components/tabBar'
  import { ITabBarSetType } from '@/components/tabBar/type'

  const tabBarParam = ref<ITabBarSetType>({
    inActiveColor: '#000000',
    activeColor: 'red',
    tabBarHeight: 'middle',
    tabBarPosition: 'bottom',
    // showTemplate: {
    //   position: 'right',
    //   width: '30%',
    // },

    // tabBarIcon: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
  })
</script>

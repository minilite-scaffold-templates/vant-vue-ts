<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view></router-view>
  </van-config-provider>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import theme from '@/style/theme.module.less'

  const themeVars = { ...theme }
  console.log('theme', themeVars, { ...theme })

  //  const themeVars = {
  //       rateIconFullColor: '#07c160',
  //       sliderBarHeight: '4px',
  //       sliderButtonWidth: '20px',
  //       sliderButtonHeight: '20px',
  //       sliderActiveBackgroundColor: '#07c160',
  //       buttonPrimaryBorderColor: '#07c160',
  //       buttonPrimaryBackgroundColor: '#07c160',
  //     };
  // onMounted(async () => {
  //   // （设置默认主题色）
  //   document.getElementById('app').setAttribute('class', 'theme_1')
  // })
</script>

<style></style>

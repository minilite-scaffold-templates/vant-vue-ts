<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
  import { onMounted, ref, defineProps } from 'vue'

  onMounted(async () => {
    // （设置默认主题色）
    document.getElementById('app').setAttribute('class', 'theme_1')
  })
</script>

<style></style>

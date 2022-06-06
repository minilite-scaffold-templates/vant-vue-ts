<template>
  <div class="app-container">
    <div class="layout-footer"> 这是首页 </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    prefix: { type: String, default: 'icon' },
  })
</script>

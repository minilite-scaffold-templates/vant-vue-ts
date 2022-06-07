<template>
  <div class="topSearch">
    <div style="width: 70%">
      <van-field left-icon="search" placeholder="请输入" />
    </div>

    <van-icon name="scan" size="32" color="#000" />
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'

  onMounted(() => {})
  // 数据在下面定义

  // 函数写在这下面
</script>

<style lang="less" scoped>
  .topSearch {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
  }
</style>

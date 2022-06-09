<template>
  <div class="rotation">
    <van-swipe :autoplay="3000" class="my-swipe" lazy-render>
      <van-swipe-item v-for="image in rotationImages" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'

  // 数据在下面定义
  defineProps<{
    rotationImages: []
  }>()

  // 函数写在这下面
</script>

<style lang="less" scoped>
  .rotation {
    margin-bottom: 10px;
  }
  .my-swipe {
    border-radius: 20px;
  }
  .my-swipe .van-swipe-item {
    width: 100%;
    height: 200px;
  }
  .my-swipe .van-swipe-item img {
    width: 100%;
    height: 100%;
  }
</style>

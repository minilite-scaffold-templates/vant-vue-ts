<template>
  <div class="rotation">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'

  onMounted(() => {})
  // 数据在下面定义

  // 函数写在这下面
</script>

<style lang="less" scoped>
  .rotation {
    margin-bottom: 10px;
  }

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 200px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>

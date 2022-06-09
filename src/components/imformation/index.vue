<template>
  <div class="information">
    <div v-for="(item, index) in imformationList" :key="index" class="informationList">
      <div class="picture">
        <img :src="item.img" alt="" />
      </div>
      <div>
        <h4>{{ item.title }}</h4>
        <span>{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'

  // 数据在下面定义
  defineProps<{
    imformationList: {
      img: string
      title: string
      content: string
    }[]
  }>()

  // 函数写在这下面
</script>

<style lang="less" scoped>
  .information {
    margin: 0 auto 80px;
    width: 94%;
  }

  .informationList {
    width: 100%;
    height: 120px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  .picture {
    width: 100px;
    height: 100px;
  }
  .picture img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
</style>

<template>
  <div class="classfication">
    <div v-for="(item, index) in ficationList" :key="index" class="smallBlock">
      <div class="ficationIcon">
        <van-icon :name="item.icon" :color="item.color" />
      </div>
      <div class="ficationLabel">{{ item.lable }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'

  defineProps<{
    ficationList: {
      icon: string
      lable: string
      color: string
    }[]
  }>()
  // 数据在下面定义

  // 函数写在这下面
</script>

<style lang="less" scoped>
  .classfication {
    display: flex;
    flex-wrap: wrap;
  }
  .smallBlock {
    width: 20%;
    height: 60px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .ficationIcon {
    font-size: 40px;
  }
</style>

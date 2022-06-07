<template>
  <div class="classfication">
    <div v-for="(item, index) in arr" :key="index" class="smallBlock">{{ item }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'

  onMounted(() => {})
  // 数据在下面定义
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]

  // 函数写在这下面
</script>

<style lang="less" scoped>
  .classfication {
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 5px;
  }
  .smallBlock {
    width: 60px;
    height: 60px;
    margin: 5px 15px 5px 0;
    background-color: cornflowerblue;
    &:nth-child(5n) {
      margin-right: 0px;
    }
  }
</style>

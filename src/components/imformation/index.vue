<template>
  <div class="information">
    <div v-for="(item, index) in arr" :key="index" class="informationList">
      <div class="picture">
        <img src="" alt="" />
      </div>
      <div>
        <h3>{{ item.title }}</h3>
        <span>{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'

  onMounted(() => {})
  // 数据在下面定义
  const arr = [
    {
      title: '111',
      content: '111',
    },
    {
      title: '222',
      content: '222',
    },
    {
      title: '333',
      content: '333',
    },
    {
      title: '444',
      content: '444',
    },
    {
      title: '555',
      content: '555',
    },
    {
      title: '666',
      content: '666',
    },
    {
      title: '777',
      content: '777',
    },
  ]

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
    background-color: aliceblue;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  .picture {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
  }
</style>

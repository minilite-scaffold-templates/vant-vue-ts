<template>
  <div class="information">
    <div v-for="(item, index) in arr" :key="index" class="informationList">
      <div class="picture">
        <img :src="item.img" alt="" />
      </div>
      <div>
        <h3>{{ item.title }}</h3>
        <span>{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { getInformationList } from '@/api/home/informationList'

  // 数据在下面定义
  const arr = ref([] as any)

  // 函数写在这下面
  const getNews = async () => {
    const res = await getInformationList()
    arr.value = res.list
  }

  onMounted(() => {
    getNews()
  })
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
  }
</style>

<template>
  <div class="container">
    <!-- 搜索 & 扫描二维码 -->
    <SearchAndQRcode />
    <!-- 轮播图  -->

    <Rotation :rotation-images="rotationImages" />
    <!-- 分类 -->
    <p>更多功能</p>
    <Classfication :fication-list="ficationList" />
    <!-- 咨讯 -->
    <p>更多资讯</p>
    <Imformation :imformation-list="imformationList" />
  </div>
</template>

<script lang="ts" setup>
  import SearchAndQRcode from '@/components/searchAndQrcode'
  import Rotation from '@/components/rotation'
  import Classfication from '@/components/classfication'
  import Imformation from '@/components/imformation'
  import { useHomeStore } from '@/store/home'
  import { computed, onMounted } from 'vue'

  const useHome = useHomeStore()

  const rotationImages = computed(() => useHome.rotationImages)
  const ficationList = computed(() => useHome.ficationList)
  const imformationList = computed(() => useHome.imformationList)

  // 获取轮播图数据
  const getRotation = async () => {
    await useHome.selRotationImages()
  }

  // 获取功能数据
  const getMenus = async () => {
    await useHome.getFicationMenusData()
  }

  // 获取资讯数据
  const getNews = async () => {
    await useHome.getInformationData()
  }

  onMounted(() => {
    getRotation()
    getMenus()
    getNews()
  })
</script>

<style scoped>
  .container {
    padding: 30px 20px;
  }
</style>

<template>
  <div class="container">
    <!-- 搜索 & 扫描二维码 -->
    <SearchAndQRcode />
    <!-- 轮播图  -->

    <Rotation />
    <!-- 分类 -->
    <p>更多功能</p>
    <Classfication />
    <!-- 咨讯 -->
    <p>更多资讯</p>
    <Imformation />
  </div>
</template>

<script lang="ts" setup>
  import SearchAndQRcode from '@/components/searchAndQrcode'
  import Rotation from '@/components/rotation'
  import Classfication from '@/components/classfication'
  import Imformation from '@/components/imformation'
</script>

<style scoped>
  .container {
    padding: 30px 20px;
  }
</style>

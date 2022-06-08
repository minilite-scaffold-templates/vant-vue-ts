<template>
  <div class="app-container">
    <!-- 搜索 & 扫描二维码 -->
    <SearchAndQRcode />
    <!-- 轮播图  -->
    <Rotation />
    <!-- 分类 -->
    <Classfication />
    <!-- 咨讯 -->
    <Imformation />
  </div>
</template>

<script lang="ts" setup>
  import SearchAndQRcode from '@/components/searchAndQrcode'
  import Rotation from '@/components/rotation'
  import Classfication from '@/components/classfication'
  import Imformation from '@/components/imformation'
</script>

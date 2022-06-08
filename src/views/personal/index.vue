<template>
  <div class="container">
    <Header />
    <MyBusiness />
  </div>

  <!-- 个人资料 我的订单 常用工具 -->
</template>

<script lang="ts" setup>
  import Header from './components/header/index'
  import MyBusiness from './components/myBusiness/index'
  // import { List } from './components/myBusiness/businessList'
</script>

<style scoped>
  .container {
    padding: 30px 20px;
  }
</style>

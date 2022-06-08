<template>
  <div v-for="(item, index) in List" :key="index" class="content">
    <div className="title">{{ item.title }}</div>
    <div class="businessList">
      <div v-for="(i, index) in item.bussinessList" :key="index" class="item">
        <van-icon :name="i.icon" :color="item.color" size="40" />
        <div> {{ i.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { List } from './businessList'
</script>

<style scoped lang="less">
  .content {
    padding: 16px 0px;
  }
  .title {
    margin-bottom: 10px;
    height: 41px;
    color: #333;
    font-size: 18px;
    line-height: 41px;
    font-weight: 500;
  }
  .businessList {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .item {
    text-align: center;
    width: calc(100% / 4);
    justify-content: center;
    align-items: center;
    div {
      line-height: 38px;
    }
  }
</style>

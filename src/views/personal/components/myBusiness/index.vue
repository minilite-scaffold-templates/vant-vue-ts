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
  import { onMounted, ref, defineProps } from 'vue'
  import { List } from './businessList'

  // 自定义图标、颜色、高度、模板
  const props = defineProps<{
    // List: any
  }>()
  // onMounted(async () => {
  //   // （设置默认主题色）
  //   document.getElementById('app').setAttribute('class', 'theme_1')
  // })
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

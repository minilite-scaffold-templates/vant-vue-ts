<template>
  <div class="classfication">
    <div v-for="(item, index) in arr" :key="index" class="smallBlock">
      <div class="ficationIcon">
        <van-icon :name="item.icon" :color="item.color" />
      </div>
      <div class="ficationLabel">{{ item.lable }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { getFicationMenus } from '@/api/home/menus'

  // 数据在下面定义
  const arr = ref([] as any)

  // 函数写在这下面
  const getMenus = async () => {
    const res = await getFicationMenus()
    arr.value = res.list
  }

  onMounted(() => {
    getMenus()
  })
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
    &:nth-child(5n) {
      margin-right: 0px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .ficationIcon {
    font-size: 40px;
  }
</style>

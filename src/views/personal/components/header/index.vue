<template>
  <div class="header">
    <div class="avater">
      <div>
        <van-image round width="80px" height="80px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      </div>
      <div class="phone">15281353924 </div>
    </div>
    <div class="userInfo"> 用户信息 </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  // const defaultAvatar = require('@/assets/default_avatar.png');

  // onMounted(async () => {
  //   // （设置默认主题色）
  //   document.getElementById('app').setAttribute('class', 'theme_1')
  // })
</script>

<style scoped lang="less">
  .header {
    width: 100%;
    // height: 226px;
  }
  .avater {
    width: 100%;
    // height: 226px;
    display: flex;
    align-items: center;
  }
  .phone {
    padding-left: 20px;
    font-weight: 500;
    font-size: 20px;
  }
  .userInfo {
    margin-top: 20px;
    display: flex;
    align-items: center;
    background: #599f7d;
    height: 75px;
    border-radius: 7px;
    color: #fff;
    padding-left: 15px;
  }
</style>

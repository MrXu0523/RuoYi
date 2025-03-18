<template>
  <div>
    <h1>我是two组价</h1>
    <div>{{ data }}</div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'

export default defineComponent({
  // 方法一、
  // setup() {
  //   // 模拟ajax请求
  //   return axios.get('https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js', {}).then((res) => {
  //     console.log(res);
  //     return {
  //       data: res.data
  //     }
  //   })
  // }

  // 方法二、
  async setup() {
    const data = await axios.get('https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js', {})
    return {
      data
    }
  }
})
</script>

<style scoped></style>
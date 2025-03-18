<template>
  <div>
    <h1>26keep-alive组件缓存</h1>
    <h1 @click="handleSroll">keep-alive</h1>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { defineOptions, onActivated, onDeactivated, onMounted } from 'vue'
defineOptions({
  name: 'keep-alive'
})
const handleSroll = () => {
  axios({
    url: 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js',
    method: 'get',
    params: {},
    headers: {},
  }).then((res) => {
    console.log(res);

  })
}
// 组件缓存生命周期
onActivated(() => {
  console.log('onActivated----进入组件')
})
onDeactivated(() => {
  console.log('onDeactivated----离开组件')
})
onMounted(() => {
  handleSroll()
  console.log('keep-alive')
})


</script>

<style scoped lang="scss"></style>
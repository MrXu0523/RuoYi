<template>
  <div>
    <h1>watch监听基本数据类型</h1>
    <p>姓名操作</p>
    姓名: <input type="text" v-model="userName">
    性别: <input type="text" v-model="sex">
  </div>
</template>

<script setup lang="ts">
import { ref, warn, watch, watchEffect } from 'vue'
let userName = ref('小明')
let sex = ref('男')
// 一、监听属性
// 监听一个ref响应式数据语法：wacth(变量,(新数据,旧数据)=>{})
// 监听多个ref响应式数据语法，watch([变量1,变量2],(新数据,旧数据)=>{})

// watch(userName, (newVal, oldVal) => {
//   console.log(newVal, oldVal, 'watch监听属性');
// })
watch([userName, sex], (newVal, oldVal) => {
  console.log(newVal, oldVal, 'watch监听属性');
})
// 二、watchEffect监听属性，默认执行一次跟 immediate 差不多
// 语法: watchEffect(() => {})
// 相当于默认开启了immediate:true的状态
watchEffect(() => {
  console.log(userName.value, sex.value, 'watchEffect监听属性');
})


</script>

<style scoped></style>
<template>
  <div>
    <h1>这是13ref获取dom页面部分</h1>
    <input type="text" ref="dom">
    <button @click="handleClick">获取dom</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, resolveDirective } from 'vue';

let dom = ref()
// 定义dom类型要么是null，要么是dom节点类型
// let dom = ref<HTMLElement | null>
// 因为setup处于vue实例创建前和vue实例创建后的生命周期中，dom还没有加载完成
// dom获取不到
console.log(dom.value, '获取的dom');

const handleClick = () => {
  console.log(dom.value)
}
onMounted(() => {
  // focus()获取焦点
  // 必须dom为真，并且给dom添加获取焦点事件
  dom.value && dom.value.focus()
})


</script>

<style scoped></style>
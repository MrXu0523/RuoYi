<template>
  <div class="yy">
    <h1>我是爷爷</h1>
    <p>{{ color }}</p>
    <div>
      <button @click="color = 'red'">红色</button>
      <button @click="color = 'green'">绿色</button>
      <button @click="color = 'blue'">蓝色</button>
    </div>
    <one></one>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import one from './one.vue';
// provide('想要传递的属性名',传递的值)
const color = ref('red');
console.log(color, 'color');

provide('color', color);

// 监听 color 变化，打印新值
watch(color, (newVal, oldVal) => {
  console.log('color 变化了:', newVal, '旧值：' + oldVal);
});

</script>

<style scoped>
.yy {
  background-color: skyblue;
  padding: 30px;
}
</style>
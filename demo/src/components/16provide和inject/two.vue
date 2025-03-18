<template>
  <div class="sz">
    <h1 :style="{ color: msg }">我是儿子</h1>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';

const msg = inject('color')
console.log(msg, '接收的数据');


</script>

<style scoped>
.sz {
  background-color: pink;
  padding: 20px;
}
</style>
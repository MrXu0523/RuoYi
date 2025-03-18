<template>
  <div>
    <h1>21响应式数据判断</h1>
  </div>
</template>

<script setup lang="ts">
import { isReactive, isReadonly, isRef, reactive, readonly, ref, isProxy } from 'vue';

// isRef:检查一个值是否是一个ref对象，如果是就返回true，否则返回false
console.log(isRef(ref(1)));
// isReactive:检查一个值是否是一个Reactive对象，如果是就返回true，否则返回false
console.log(isReactive(reactive({})));
// isReadonly:检查一个值是不是isReadonly对象，如果是就返回true，否则返回false
console.log(isReadonly(readonly({})));
// isProxy:检查一个值是不是代理对象，如果是就返回true，否则返回false
console.log(isProxy(ref({}))); // false
console.log(isProxy(reactive({}))); // true



</script>

<style scoped></style>
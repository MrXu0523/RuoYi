<template>
  <div>
    <!-- 在加载异步组件或者异步数据之前有一段请求时间，那么页面是空白的，所以想在请求数据之前加一个动画，来弥补那段空白 -->
    <h1>24Suspense组件</h1>
    <Suspense>
      <!-- v-slot/#default 相当于v-if，判断这个组件异步请求成功了吗，如果成功就显示这个组件 -->
      <template v-slot>
        <one></one>
      </template>
      <template v-slot:fallback>
        正在加载中
      </template>
      <!-- v-slot:fallback 相当于v-else，如果没有加载成功就显示加载中 -->
    </Suspense>
    <Suspense>
      <template v-slot>
        <two></two>
      </template>
      <template v-slot:fallback>
        正在调用组件
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import one from './one.vue'
import two from './two.vue';

</script>

<style scoped></style>
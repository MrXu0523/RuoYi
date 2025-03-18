<template>
  <div class="father">
    <h1>生命周期</h1>
    <button @click="handleClick">这是一个点击按钮</button>
    <!-- 使用Son -->
    <Son v-if="isShow"></Son>
  </div>
</template>

<script setup lang="ts">
// 引入
import { ref } from 'vue';
import Son from './child.vue'
let isShow = ref(true)
let handleClick = () => {
  isShow.value = !isShow.value
}

</script>

<style scoped lang="scss">
.father {
  background-color: bisque;
  padding: 20px;
}
</style>
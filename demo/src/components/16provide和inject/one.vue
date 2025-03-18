<template>
  <div class="son">
    <h1>我是儿子</h1>
    <two></two>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import two from './two.vue';
</script>

<style scoped>
.son {
  background-color: yellow;
  padding: 20px;
}
</style>
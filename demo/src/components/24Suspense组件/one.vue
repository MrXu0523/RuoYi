<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    // 模拟ajax请求
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: '我是儿子组件'
        })
      }, 2000)
    })
  }
})
</script>

<style scoped></style>
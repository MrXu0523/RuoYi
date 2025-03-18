<template>
  <div>
    <h1>20customRef</h1>
    <input type="text" v-model="keyWords">
    <p>{{ keyWords }}</p>
    <i class="ri-search-2-line"></i>
  </div>
</template>

<script setup lang="ts">
import { customRef } from 'vue';

// let keyWords = ref('默认值')
// 我想实现在input输入结束之后把最后一次输入的内容渲染到页面上-----老年帕金森(只执行最后一次)

// 必须有一个函数，函数你传入输入的内容，延时时间
// 定义一个防抖函数
function Stabilization<T>(value: T, delay = 200) {
  let timer: any;
  return customRef((track, trigger) => {
    return {
      // 获取数据
      get() {
        // 告诉vue继续追踪
        track();
        return value;
      },
      // 设置数据
      set(newVal: T) {
        // 每次设置数据前，先清空延时器
        clearInterval(timer)
        timer = setTimeout(() => {
          // 将新数据赋值给value
          value = newVal
          // 告诉vue更新视图
          trigger()
        }, delay)
      }
    }
  })
}

let keyWords = Stabilization<string>('abc', 1000)


</script>

<style scoped></style>
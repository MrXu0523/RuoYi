<template>
  <!-- vue2.0中只能有一个根标签 -->
  <!-- vue3.0可以没有根标签 -->
  <div>
    Hello Setup
  </div>
  <h1>{{ str }}</h1>
  <input type="text" v-model="str">
  <button @click="handleClick">点击</button>
</template>

<script lang="ts">
// defineComponent函数的目的是定义一个组件，内部传入配置对象
import { defineComponent } from 'vue';
// 使用 setup 语法糖，不需要额外的导出语句
export default defineComponent({
  // 给组件起个名字，主要用来缓存组件，
  name: 'Setup',
  // setup函数是组合式api的入口(组合式api就是vue中一个一个的功能模块)，只在初始化的时候执行一次
  // 2.setup是处于beforeCreate和create两个生命周期之间的函数，所以子啊setup中无法使用data，无法使用this
  // 3.在setup中定义的变量和函数必须return出去，否则无法使用
  setup() {
    let str = '今天周五儿'
    let handleClick = () => {
      console.log(123);
    }
    return {
      str,
      handleClick
    }
  }
})
</script>

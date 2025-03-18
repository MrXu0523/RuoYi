<template>
  <div>
    <h1>toRefs</h1>
    <p>姓名:<input type="text" v-model="name">{{ name }}</p>
    <p>年龄:<input type="text" v-model="age">{{ age }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';

let obj = {
  name: '张三',
  age: 18
}
// reactive定义的是复杂数据类型，
// 注意reactive定义的复杂数据类型，结构出来之后不是一个响应式数据
// 将一个reactive响应式数据通过toRefs结构出来的数据就是一个响应式数据
let state = reactive(obj)
let { name, age } = toRefs(state)

// toRefs可以把一个reactive的代理对象中的每一个属性，变成ref对象
console.log(state, 'state');
console.log(toRefs(state), 'state');
// setInterval(() => {
//   // 因为结构出来的数据是一个ref对象，所以需要加上value
//   age.value++
// }, 2000)

</script>

<style scoped></style>
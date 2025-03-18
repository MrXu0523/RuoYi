<template>
  <div>
    <h1>18shallowReadonly和readonly</h1>
    <h2>reactive:{{ obj }}</h2>
    <h2>readonly:{{ state1 }}</h2>
    <h2>shallowReadonly:{{ state2 }}</h2>
    <button @click="changeData">更改数据</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReadonly } from 'vue';

const obj = reactive({
  name: '张三 && 李四',
  age: 18,
  car: {
    title: '步行'
  }
})
// readonly只读
const state1 = readonly(obj)
const state2 = shallowReadonly(obj)

let changeData = () => {
  // obj.name = '王五'
  // obj.car.title = '步行'

  // readonly只读数据
  // state1.name = '王五'
  // state1.car.title = '王五'
  // console.log(obj)

  // shallowReadonly浅只读，限制第一层
  // state2.name = '王五'
  state2.car.title = '王五'
}





</script>

<style scoped></style>
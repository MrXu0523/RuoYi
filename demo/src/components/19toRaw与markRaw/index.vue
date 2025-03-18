<template>
  <div>
    <h1>19toRaw与markRaw</h1>
    <h2>{{ obj }}</h2>
    <button @click="handleToRaw">测试toRaw</button>
    <button @click="handleRaw">测试Raw</button>
  </div>
</template>

<script setup lang="ts">
import { markRaw, reactive, toRaw } from 'vue';
// 定义接口
interface ICar {
  name: string,
  car: object,
  // 可选数字类型的数据
  arr?: any
}

const obj: ICar = reactive({
  name: '张三',
  age: 18,
  car: {
    title: '步行'
  }
})

let handleToRaw = () => {
  // toRaw是一个代理对象，转成普通对象，代理对象虽然发生了改变了，但是视图没有渲染，断开链接了，并没有丧失响应式
  const user = toRaw(obj)
  user.name = '抄'
  console.log(obj.name, user.name, 'asdasdsadad');
}

let handleRaw = () => {
  // console.log('测试2');
  // 给响应式添加一个属性，因为在定义对象的时候，类型了，所以再往里面添加新的属性会报没有定义的类型
  let arr = [1, 2, 3, 4, 5, 6]
  // obj.arr = arr
  // markRaw：包裹的数据不再是代理对象，不是响应式
  obj.arr = markRaw(arr)
  //  要求：将arr添加到obj中，并且让arr不是一个响应式的属性
  setInterval(() => {
    obj.arr[0]++
    // obj.name += '1'
    console.log('定时器触发', obj.arr[0]);
  }, 1000)


}

</script>

<style scoped></style>
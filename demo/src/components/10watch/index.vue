<template>
  <div>
    <h1>这是watch监听复杂数据类型</h1>
    <p>姓名操作</p>
    ref姓名:<input type="text" v-model="objRef.name"><br>
    reactive姓名:<input type="text" v-model="Obj.name"><br>
    reactive学校:<input type="text" v-model="Obj.stu.title">

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
// ref定义复杂的数据类型，内部湖自动转为reactive代理对象
let objRef = ref({
  name: '张三',
  age: 18
})
let Obj = reactive({
  name: '这是一个姓名',
  age: 18,
  stu: {
    title: '临沂大学'
  }
})

// 语法：
// watch(对象, (newVal) => {

// },
// {
//      默认初始化
//      immediate: true,
//      是否开启深度监听
//      deep: true
// })

// 1.监听ref复杂的响应是数据
// watch(objRef.value, (newVal) => {
//   console.log(newVal, '新的值');
// }, {
//   immediate: true,
//   deep: true
// })
// 2.监听reactive复杂响应数据
// watch(Obj, (newVal) => {
//   console.log(newVal, '新的值');
// }, {
//   // 默认执行监听一次
//   immediate: true,
//   deep: true
// })
// 3.监听对象的属性
// watch([
//   () => 对象.属性值1,
//   () => 对象.属性值2,
// ], (newVal) => { },
//   {
//     immediate: true,
//     deep: true
//   })

watch([
  () => Obj.name,
  () => Obj.stu.title,
  () => objRef.value.name
], (newVal) => {
  console.log(newVal, '新的值');
},
  {
    // 开启深度监听
    deep: true,
    // 默认开启监听一次
    immediate: true
  }
)




</script>

<style scoped></style>
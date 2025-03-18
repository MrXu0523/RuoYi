<template>
  <div>
    <!-- vue2 -->
    <h1>{{ num }}</h1>
    <input type="text" v-model="num">
    <button @click="handleVue2">(这是vue2)点击</button>
    <!-- vue3.0 -->
    <h1>{{ str }}</h1>
    <input type="text" v-model="str">
    <button @click="handleVue3">(这是vue3)点击</button>
    <h1>{{ obj.name }}---{{ obj.age }}</h1>
    <h1>{{ xuAge }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, unref, isRef } from 'vue'

export default defineComponent({
  // vue3.0可以使用vue2.0部分语法
  // vue2.0语法实现
  data() {
    return {
      num: 1
    }
  },
  methods: {
    handleVue2() {
      // 双向绑定原理是可以进行使用的
      this.num++
      console.log('这是vue2.0语法的点击事件');
    }
  },
  setup() {
    // 直接定义变量，不是响应式数据
    // ref是一个函数是vue组合是api中的一个方法，ref的作用是定义一个响应式数据

    let str = ref('今天周五儿')
    let obj = ref({
      name: '张三',
      age: 18
    })
    let xuAge = ref(21)
    let handleVue3 = () => {
      console.log(xuAge.value, '改变之前的值');

      console.log('这是vue3.0语法的点击事件');
      // ref类型的对象，但凡被ref包裹着的数据，取赋值必须加上  变量.value
      // 改变对象的是使用obj.value.你需要改变的名字
      // 改变值的时候是使用  需要改变的值.value
      obj.value.age++
      let val = unref(obj)
      // 省去了.value这个值
      // unref包裹的数据可以直接获取value的值
      console.log(val, 'val');
      console.log(obj.value, 'obj');
      // isRef判断对象是不是一个ref对象，是不是ref定义的数据
      // 如果是的话,将变量,将变量.value赋值给val,如果不是则不能赋值
      let a = '你好'
      let b = ref('你也好')
      console.log(isRef(a), 'isRef');
      console.log(isRef(b), 'isRef(b)');

    }
    return {
      str,
      handleVue3,
      obj,
      xuAge
    }
  }
})
</script>

<style scoped lang="ts">


</style>
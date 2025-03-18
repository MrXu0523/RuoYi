<template>
  <div>
    <h1>这是distinguish</h1>
    <h3>05ref和reactive</h3>
    <h5>m1:{{ m1 }}</h5>
    <h5>m2:{{ m2 }}</h5>
    <h5>m3:{{ m3 }}</h5>
    <h5>m4:{{ m4 }}</h5>
    <h5>m5:{{ m5 }}</h5>
    <button @click="handleClick">不是哥们</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    // 通过ref方式定义基本数据类型
    let m1 = ref('我是m1')
    // 通过ref方式定义复杂数据类型
    let m2 = ref({
      name: '我是m2里面的name属性值',
      wifi: {
        title: '不要连我wifi'
      }
    })
    let m3 = reactive({
      name: '我是m3里面的name属性值',
      wifi: {
        title: '我叫m3'
      }
    })

    let m4 = reactive({
      obj: {}
    })
    let m5: any = reactive([])
    let handleClick = () => {
      // 只要是通过ref定义的基本数据，修改或者获取数据的时候，必须加上.value
      m1.value = '嘎嘎嘎嘎'
      // 只要是通过ref定义的复杂数据,内部都会自动将响应式数据转成reactive代理对象的形式
      m2.value.name += '嘎~'
      // console.log(m1.value, 'm1');
      // console.log(m2.value, 'm2');
      m2.value.wifi.title += '嘎~'
      // 只要是reactive定义的复杂数据类型，获取或者修改的时候，不需要加上.value
      m3.name += '嘎~'
      // 对象赋值必须在里面定义对象，不能直接在里面直接赋值给m4,直接赋值会丢失响应式
      m4.obj = {
        a: 1
      }
      let arr = [2, 3, 4, 5]
      // 不要直接赋值m5 = arr
      // 使用value访问ref数组
      // 第一中方式
      // arr.forEach(item => {
      //   m5.push(item)
      // })
      // 第二种
      Object.assign(m5, arr)
      // 或者直接赋值也可以，但要使用.value
      // m5.value = arr
    }
    return {
      m1,
      m2,
      m3,
      m4,
      m5,
      handleClick
    }
  }
})

/* 
  ref与reactive是vue3.0组合式api中最终要的响应式api

  ref是用来处理基本数据类型，reactive是用来处理复杂数据类型的(深度响应式)
  如果是用ref来处理复杂的数据类型，那么颞部会自动将复杂的数据类型转为reactive的代理对象

  ref内部：通过value属性添加getter，setter来实现数据的劫持
  reactive内部，通过es6中的proxy来实现所有数据的劫持

  注意：ref定义的数据在模板渲染不需要加vaue，在js中修改数据需要加上value，reactive则不需要


*/
</script>

<style scoped></style>
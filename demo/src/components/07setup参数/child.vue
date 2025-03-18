<template>
  <div>
    <h1>我是子组件</h1>
    <p>接收父组件：{{ msg }}</p>
    <button @click="setData">给父组件传递数据</button>
    <!-- 具名插槽 -->
    <slot name="abc" :obj="obj"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    // 接收的是父组件自定义的名字，并不是接收的值
    msg: {
      type: String
    }
  },
  /* 
    setup(props,context):
      参数1：是个对象，这个对象中存着父组件向子组件传递的数据
      参数2：是一个对象，里边有三个常见方法
        1.attrs(相当于vue2.0中的this.$attrs获取父组件中给子组件绑定的自定义属性，注意与props冲突  有他没我)：
        2.emit相当于vue2.0中的this.$emit
        3.slots(插槽传参)：相当于vue2.0中的this.$slots
  */
  setup({ msg }, { attrs, emit, slots }) {
    console.log(msg, 'msg');
    console.log(attrs.msg2, 'msg');
    let son = ref('子组件向组件中传递的数据')
    // 把儿子传给父组件
    let setData = () => {
      // 因为上方定义的是ref，所以需要使用.value
      emit('getSon', son.value)
    }
    let obj = ref({
      name: '张三',
      age: 18
    })

    return {
      son,
      obj,
      setData
    }
  }
})
</script>

<style scoped></style>

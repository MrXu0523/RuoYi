<template>
  <div class="son">
    <h1>我是子组件</h1>
    <!-- <div>{{ list }}</div> -->
  </div>
  <slot name="main" son="son"></slot>
</template>

<script setup lang="ts">
import { useAttrs, defineProps, ref } from 'vue';

// 引入组合式api
// defineProps相当于setup中的第一个函数  props
// useAttrs相当于setup中第二个参数context.attrs
// defineEmits相当于setup中的第二个参数context.emit
// defineExpose将组件中的变量或者方法导出去，然后通过ref获取组件的实例或者方法
// defineSlots
// defineOptions方法里面可以使用vue2的写法

defineOptions({
  data() {
    return {
      list: [1, 2, 3, 4]
    }
  },
  mounted() {
    console.log('dom加载完成之后');
  }
})

const props = defineProps({
  msg1: {
    type: String
  }
})
console.log(props.msg1, '让爹给他儿子');
// 获取父组件传递过来的值
const attrs = useAttrs()
// 直接使用attrs.msg2
console.log(attrs.msg2, 'attrs.msg2');

// 开始子传父
const son1 = ref('不是哥们(son1)')
const son2 = ref('我是子组件中的son2')

// 发送数据
const emit = defineEmits(['getSon1', 'getSon2'])
emit('getSon1', son1.value)
emit('getSon2', son2.value)

let handle = () => {
  console.log('我是子组件方法');
}

// defineExpose将儿子里面的方法和变量暴露出去，通过dom俩获取暴露出去的方法或者变量
defineExpose({
  son1,
  son2,
  handle
})

// defineSlots中的main就是我们定义的插槽名称，props就是插槽参数，any就是我们定义的插槽返回值
// 这里我们限制了插槽名称为main，并且插槽的参数为msg,son，返回值为any
let slots = defineSlots<{
  main: (props: {
    son: any,
    msg?: string
  }) => any
}>()

console.log(slots, 'slots');



</script>

<style scoped lang="scss">
.son {
  background: yellow;
  padding: 30px;
}
</style>
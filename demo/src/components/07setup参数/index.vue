<template>
  <div>
    <h1>这个是07setup参数</h1>
    <h3>我是父组件</h3>
    <div>
      <button @click="handleUp">更新数据</button>
      <p>父组件中的msg1:{{ msg1 }}</p>
      <!-- 3.使用子组件 -->
      <Child :msg="msg1" :msg2="msg2" @getSon="getson">
        <!-- 使用插槽传参 -->
        <!-- v-slot:起的名字="要传递的参数" -->
        <template v-slot:abc="prop">
          <p>我是作用域插槽------{{ prop.obj }}</p>
        </template>
      </Child>
    </div>
  </div>
</template>

<script lang="ts">
// 1.引入子组件
import Child from './child.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  // 2.注册子组件
  components: {
    Child
  },
  setup() {
    let msg1 = ref('我是父组件中的msg1')
    let msg2 = ref('我是父组件中的msg2')
    var handleUp = () => {
      console.log('更新数据')
    }
    // 获取子组件数据
    let getson = (val: String) => {
      console.log(val, '子组件传过来的数据')
    }
    return {
      msg1,
      msg2,
      handleUp,
      getson
    }
  }
})
</script>

<style scoped></style>

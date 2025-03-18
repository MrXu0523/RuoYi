<template>
  <div>
    <h1>这是03setup细节合并问题部分</h1>
    <p>vue3.0----msg:{{ msg }}</p>
    <p>vue2.0----str:{{ str }}</p>
    <button @click="getVue3">这是一个点击事件</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  data() {
    return {
      str: '我是vue2'
    }
  },
  methods: {
    getVue2() {
      console.log('我是Vue2');
    }
  },
  mounted() {
    // setup与data定义的变量和函数合并了，可以在vue2.0生命周期可以访问vue3.0定义的变量和函数
    this.getVue2()
    this.getVue3()
    console.log(this.msg);

  },
  setup() {
    let msg = ref('我是vue3')
    let getVue3 = () => {
      console.log('我是Vue3');
    }
    return {
      msg,
      getVue3
    }
  }
})
</script>

<style scoped></style>
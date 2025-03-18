<template>
  <div class="son">
    <h1>子组件</h1>
    <p>{{ msg }}</p>
    <button @click="add">更新数据</button>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, defineOptions } from 'vue';
let msg = ref(0)
let add = () => {
  msg.value++
}

// vue生命周期有六个，为什么有六个？因为vue3.0将beforeCreate和create合并到setup中了


// vue3生命周期开始
onBeforeMount(() => {
  console.log('vue3.0-onBeforeMount  Dom加载完成之前');
})
onMounted(() => {
  console.log('vue3.0-onMounted  Dom加载完成');
})
onBeforeUpdate(() => {
  console.log('vue3.0-onBeforeUpdate  数据更新之前');
})
onUpdated(() => {
  console.log('vue3.0-onUpdated  数据更新');
})
onBeforeUnmount(() => {
  console.log('vue3.0-onBeforeUnmount  vue实例销毁之前');
})
onUnmounted(() => {
  console.log('vue3.0-onBeforeUnmount  vue实例销毁之后');
})
// 生命周期结束


// vue2生命周期开始
// vue2生命周期结束
defineOptions({
  beforeCreate() {
    console.log('beforeCreate----vue实例创建前');
  },
  created() {
    console.log('created---vue实例创建后');
  },
  beforeMount() {
    console.log('beforeount-----dom加载前');
  },
  mounted() {
    console.log('Mounted-----dom加载后');
  },
  beforeUpdate() {
    console.log('beforeUpdate-----数据更新前');
  },
  updated() {
    console.log('update-----数据更新后');
  },
  // 在vue3中使用vue2.0声明周期会有一个问题
  // vue实例销毁前后已经改名了,原来的方法不能再去用了
  // beforeDestroy更名为 beforeUnmount
  // destroyed更名为 Unmounted
  beforeUnmount() {
    console.log('beforeDestroy-----实例销毁前');
  },
  unmounted() {
    console.log('unmounted-----实例销毁后');
  }
})
</script>

<style scoped lang="scss">
.son {
  background-color: aqua;
  padding: 20px;
}
</style>
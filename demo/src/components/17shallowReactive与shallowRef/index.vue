<template>
  <div>
    <h1>17shallowReactive与shallowRef</h1>
    <i class="ri-shut-down-line"></i>
    <h2>reactive:{{ m1 }}</h2>
    <h2>shallowReactive:{{ m2 }}</h2>
    <h2>reactive:{{ m3 }}</h2>
    <h2>shallowRef:{{ m4 }}</h2>
    <h2>shallowRef(简单数据类型):{{ m5 }}</h2>
    <button @click="changeData">更新数据</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, shallowReactive, shallowRef } from 'vue';

const m1 = reactive({
  name: '张三',
  age: 18,
  car: {
    title: '北京'
  }
})
const m2 = shallowReactive({
  name: '李四',
  age: 28,
  car: {
    title: '青岛'
  }
})
const m3 = ref({
  name: '李四',
  age: 28,
  car: {
    title: '青岛'
  }
})
const m4 = shallowRef({
  name: '王五',
  age: 23,
  car: {
    title: '菏泽'
  }
})
const m5 = shallowRef(1)

let changeData = () => {
  // console.log('更新shuju');
  // reactive----深度响应式
  // m1.name += '王五'
  // m1.car.title +='不是'

  // shallowReactive----深度响应式
  // m2.name += '王五'
  // 注意：如果发生改变是上方影响到他
  // m2.car.title += '不是'

  // ref----深度响应
  // m3.value.name += '王五'
  // m3.value.car.title += '不是'

  // shallowRef----浅响应式
  // 注意：都不发生更改的原因shallowRef包裹的是复杂数据类型，他不认，不是响应式数据
  // shallowRef只能定义基本数据类型才能发生改变
  // m4.value.name += '王五';
  // m4.value.car.title += '不是'
  m5.value += 1
}

</script>

<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.ri-shut-down-line {
  color: #409EFF;
  font-size: 24px;
}

h1 {
  color: #303133;
  margin-bottom: 20px;
}

h2 {
  color: #606266;
  background: #f5f7fa;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
}

button {
  background-color: #409EFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background-color: #66b1ff;
  transform: translateY(-2px);
}

div {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
<template>
  <div class="box">
    <h1>父组件</h1>
    <p>msg1:{{ msg1 }}</p>
    <button @click="handleClick">点击</button>
    <button @click="gethandleRef">获取子组件</button>
    <!-- 2.使用子组件 -->
    <Son :msg1="msg1" :msg2="msg2" @getSon1="getSon1" @getSon2="getSon2" ref="dom">
      <!-- v-slot:或者#起的名字="传递的参数" -->
      <template #main="props">
        <div>
          我是插槽作用域---{{ props.son }}
        </div>
      </template>
    </Son>
  </div>
</template>
<!-- setup语法糖  帮我们自动return -->
<script setup lang="ts">
// 引入组合式api
import { ref } from 'vue';
// 1.引入子组件
import Son from './son.vue'

let msg1 = ref('我是2408B的班级')
let msg2 = ref('寒夜的漫天雪花')
// 不需要return但是有一个前提是必须要是使用setup
let handleClick = () => {
  msg1.value += '嘎！'
}
// 获取子组件传来的数据
let getSon1 = (val: String) => {
  console.log(val, '儿子孝敬爹');
}
let getSon2 = (cel: String) => {
  console.log(cel, '这是getSon2的cel');
}
// 不需要return
let dom: any = ref()
// 绑定在标签上获取的是标签，绑定在组件树上获取的是组件实例
// 获取不到dom，因为setup是介于实例创建之前和实例创建之后，所以dom还没创建，不能直接获取dom
console.log(dom.value, 'dom');
let gethandleRef = () => {
  // 父组件之中直接调用子组件中被暴露出俩的变量和方法
  console.log(dom.value.son1, 'dom.value');

}




</script>

<style scoped lang="scss">
.box {
  height: auto;
  min-height: 200px;
  background-color: #fff5f7;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  margin: 24px;

  h1 {
    color: #2c3e50;
    margin-bottom: 24px;
    font-size: 32px;
    border-bottom: 3px solid #ff8fa3;
    padding-bottom: 12px;
    font-weight: 600;
  }

  p {
    font-size: 18px;
    color: #4a5568;
    line-height: 1.8;
    margin: 20px 0;
    letter-spacing: 0.5px;
  }

  button {
    background-color: #ff8fa3;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(255, 143, 163, 0.3);

    &:hover {
      background-color: #ff7088;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 143, 163, 0.4);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
}
</style>

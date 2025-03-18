<template>
  <div>
    <h1>这是路由跳转</h1>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        姓名:{{ item.name }} ---- 年龄: {{ item.age }} ---- <button @click="getItem(item)">详情</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 引入路由实例
// import router from '@/router';

// useRoute:路由参数，里面存放了当前路由信息及传递参数
// useRouter:路由实例，里面存了很多路由方法
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

let arr = ref([
  {
    name: 'vue3',
    age: 0,
    id: 1
  },
  {
    name: 'vue2',
    age: 18,
    id: 2
  },
  {
    name: 'vue',
    age: 20,
    id: 3
  },
])

// 跳转
let router = useRouter();
const getItem = (val: any) => {
  console.log(val);
  router.push({
    path: 'details',
    query: {
      name: val.name,
      age: val.age,
      id: val.id
    }
  })
}


</script>

<style scoped></style>
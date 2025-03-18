<template>
  <div>
    <h1>详情页面</h1>
    <p>
      姓名；{{ obj.name }}---年龄{{ obj.age }}---id:{{ obj.id }}
    </p>
    <button @click="router.back()">返回</button>
  </div>
</template>

<script setup lang="ts">
// 引入路由实例
// import router from '@/router';

// useRoute:路由参数，里面存放了当前路由信息及传递参数
// useRouter:路由实例，里面存了很多路由方法
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
let router = useRouter();
let route = useRoute();
console.log(route.query, 'route');
let obj = reactive(route.query)
console.log(obj, 'obj');
console.log(router,'router');



</script>

<style scoped></style>
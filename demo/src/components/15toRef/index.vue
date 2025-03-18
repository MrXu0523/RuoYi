<template>
  <div>
    <h1>toRef</h1>
    <p>{{ obj }}</p>
    <p>姓名:{{ userName }}</p>
    <p>年龄:{{ age }}</p>
    <p>
      年龄：<input type="text" v-model="age">
    </p>
    <p>
      姓名：<input type="text" v-model="userName">
    </p>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRef, toRefs } from 'vue';

const obj = reactive({
  userName: '张三',
  age: 18
});
// toRef(对象,对象中的哪个属性)
// toRef是将一个对象中某个属性变成了ref对象
// toRefs是将一个对象中所有属性变成了ref对象
console.log(obj, 'obj');
// ref是将reactive响应式对象中的userName属性变成了ref对象
// ref是将响应式代理对象中的某个属性深拷贝了一份，与obj原来的响应式代理对象的属性是没有关系的

const userName = ref(obj.userName)

const age = toRef(obj, 'age')
// 可以设置指定的值
console.log(age.value, 'age');

const handleClick = () => {
  userName.value = 'sbbbbb阿克苏记得哈'
  age.value++
}

// ref, toRef, toRefs
// toRef是将一个对象中某个属性变成了ref对象
// toRefs是将一个对象中的所有属性变成了ref对象
// ref是将reactive响应式中的某一个属性深拷贝了一份，比原来的reactive响应式代理对象的属性没有关系

</script>

<style scoped></style>
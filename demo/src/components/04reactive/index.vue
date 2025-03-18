<template>
  <div>
    <h1>reactive</h1>
    <ul>
      <li>姓名：{{ user.userName }}</li>
      <li>年龄：{{ user.age }}---{{ obj.age }}</li>
      <li>学校姓名：{{ user.stu.stuName }}</li>
      <li>性别:{{ user.sex }}</li>
    </ul>
    <input type="text" v-model="user.userName">
    <button @click="changeName">更新数据</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    // 普通对象
    let obj = {
      userName: '抄四十遍',
      age: 18,
      stu: {
        stuName: '明天50遍',
        arr: [1, 2, 3]
      }
    }
    // reactive
    // reactive定义多个数据响应式，返回的是一个proxy代理对象，被代理者极速对象
    // reactive 内部是通过es6 的proxy 实现的 通过代理对象将目标对象转为响应式数据
    let user: any = reactive(obj)
    console.log(user, 'user');
    let changeName = () => {
      // 错误:改变目标对象视图不会发生改变,因为目标对象不是响应式数据
      // obj.age++
      // console.log('点击事件');
      // 改变代理对象视图会发生改变，因为代理对象是响应式数据
      // user.age++
      user.sex = '男'
      // obj.sex = '男'

      // 删除对象的属性
      delete user.stu.arr
      console.log(user, 'user');
      // 综上所述，想要实现数据的响应式，必须在代理对象上面操作

    }
    return {
      obj,
      user,
      changeName
    }
  }
})
</script>

<style scoped></style>
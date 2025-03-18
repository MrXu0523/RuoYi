<template>
  <div>
    <h1>这是09计算属性部分页面</h1>
    <fieldset>
      <legend>姓名操作</legend>
      姓氏：<input type="text" placeholder="请输出姓氏" v-model="user.firstName">
      <br>
      名字：<input type="text" placeholder="请输出名字" v-model="user.lastName">
    </fieldset>
    <fieldset>
      <legend>计算属性演示</legend>
      get姓名：<input type="text" v-model="fullName"><br>
      set姓名：<input type="text" v-model="setName">
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';

let user = reactive({
  firstName: '李',
  lastName: '小明'
})

// 现在修改fullName上面的input并不会跟着变化，证明了只有get，并没有set
// 只能实现单向获取，当依赖数据发生改变的时候，结果也会发生改变，但是结果发生改变的时候依赖变不了
// 单向联动，计算属性中如果只传一个值，默认是get获取
let fullName = computed(() => {
  return user.firstName + '-' + user.lastName
})

const setName = computed({
  get() {
    return user.firstName + '-' + user.lastName
  },
  set(newVal) {
    console.log(newVal, 'set');
    // 当我修改姓名的时候，将姓氏和名字赋值给表单
    user.firstName = newVal.split('-')[0]
    user.lastName = newVal.split('-')[1]
  }
})

</script>

<style scoped lang="scss"></style>
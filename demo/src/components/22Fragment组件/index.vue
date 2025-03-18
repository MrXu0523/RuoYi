<template>
  <div>
    <h1>22Fragment组件</h1>
    <!-- Fragment不需要自己使用，其实自动使用了 -->
    <!-- 
        在vue2.0中template必须只能有一个根节点
        在vue3.0中template可以没有根节点，内部会有多个标签放到了叫做Fragment虚拟元素中
        好处：减少标签层级，减少内存占用
     -->
    <!-- vue2.0 -->
    <div>
      <h1>测试</h1>
      <h1>测试</h1>
    </div>
    <!-- vue3.0 -->
    <h1>测试</h1>
    <h1>测试</h1>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
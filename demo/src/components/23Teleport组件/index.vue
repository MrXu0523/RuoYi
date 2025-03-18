<template>
  <div>
    <!-- 
            在vue2.0中elementUI中命名在组件的内部添加的组件元素
            但是到了终端控制中发现组件的层级顺序变了，与id为app的div同级
         -->
    <!-- vue3.0瞬移就是提供了一种干净的方法，让组件的html在父组件外部特定的标签下面插入 -->
    <h1>23Teleport组件---瞬移</h1>

    <button @click="show = true">打开模态框</button>
    <!-- to='标签/选择器' -->

    <teleport to=".xuSir">
      <div class="teleport" v-if="show">
        <div>
          这是一个模态框
          <button @click="show = false">关闭模态框</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let show = ref(false)


</script>

<style scoped lang="scss">
.teleport {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.teleport div {
  padding: 100px;
  background-color: #fff;
}
</style>
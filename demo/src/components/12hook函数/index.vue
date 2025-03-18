<template>
  <div>
    <h1>hook函数</h1>
    <div>
      <i class="ri-arrow-right-s-line"></i>
      <i class="ri-service-fill"></i>
    </div>
    <h2 @click="handle">自定义</h2>
    <h2>x：{{ x }},Y:{{ y }}</h2>
    <button @click="getData">请求数据</button>
    <h3 v-if="loading">加载中</h3>
    <h3 v-else-if="err">{{ err }}</h3>
    <ul v-else>
      <li>数据内容：{{ data }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 第四步：引入ts
// import { ref } from 'vue';
// 引入axios
// import axios from 'axios';
import position from './hook/position';
import request from './hook/request';
// 第五步：使用解构出return的结果
const { x, y, handle } = position();
const { data, loading, err, getData } = request(
  'https://geoapi.qweather.com/v2/city/lookup',
  'get', {
  key: '76b562ea30ea49e08f75c9c32cd0c7a5',
  location: '青岛'
}, {});

</script>


<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
}

h1 i {
  color: #42b883;
  margin-right: 10px;
}

p {
  margin: 12px 0;
  display: block;
  /* 确保段落是块级元素 */
}

.btn {
  display: block;
  /* 改为块级元素 */
  width: 100%;
  padding: 12px 24px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  font-size: 16px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  /* 添加盒模型设置 */
}

.btn i {
  margin-right: 10px;
  font-size: 18px;
}

.btn:hover {
  background-color: #3aa776;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn:hover i {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

i.ri-arrow-right-s-line {
  font-size: 24px;
  color: #42b883;
}
</style>
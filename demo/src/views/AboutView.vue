<template>
  <div class="about">
    <h1><i class="fas fa-home"></i> 默认导航页面</h1>
    <p>
      <router-link to="/setup" class="btn">
        <i class="fas fa-wrench"></i> 01setup
      </router-link>
    </p>
    <p>
      <router-link to="/ref" class="btn">
        <i class="fas fa-tag"></i> 02ref
      </router-link>
    </p>
    <p>
      <router-link to="/merge" class="btn">
        <i class="fas fa-object-group"></i> 03setup细节合并问题
      </router-link>
    </p>
    <p>
      <router-link to="/reactive" class="btn">
        <i class="fas fa-atom"></i> 04reactive
      </router-link>
    </p>
    <p>
      <router-link to="/distinguish" class="btn">
        <i class="fas fa-balance-scale"></i> 05distinguish
      </router-link>
    </p>
    <p>
      <router-link to="/parameter" class="btn">
        <i class="fas fa-cogs"></i> 07setup参数
      </router-link>
    </p>
    <p>
      <router-link to="/SyntacticSugar" class="btn">
        <i class="fas fa-magic"></i> 08语法糖及组件通讯
      </router-link>
    </p>
    <p>
      <router-link to="/Compute" class="btn">
        <i class="fas fa-calculator"></i> 09计算属性
      </router-link>
    </p>
    <p>
      <router-link to="/watch" class="btn">
        <i class="fas fa-eye"></i> 10watch监听器
      </router-link>
    </p>
    <p>
      <router-link to="/cycle" class="btn">
        <i class="fas fa-sync"></i> 11生命周期
      </router-link>
    </p>
    <p>
      <router-link to="/hook" class="btn">
        <i class="fas fa-plug"></i> 12hook函数
      </router-link>
    </p>
    <p>
      <router-link to="/fetch" class="btn">
        <i class="fas fa-mouse-pointer"></i> 13ref获取dom
      </router-link>
    </p>
    <p>
      <router-link to="/toRefs" class="btn">
        <i class="fas fa-copy"></i> 14toRefs
      </router-link>
    </p>
    <p>
      <router-link to="/toRef" class="btn">
        <i class="fas fa-link"></i> 15toRef
      </router-link>
    </p>
    <p>
      <router-link to="/provide" class="btn">
        <i class="fas fa-share-alt"></i> 16provide与inject
      </router-link>
    </p>
    <p>
      <router-link to="/shallowReactive" class="btn">
        <i class="fas fa-layer-group"></i> 17shallowReactive与shallowRef
      </router-link>
    </p>
    <p>
      <router-link to="/shallowReadonly" class="btn">
        <i class="fas fa-lock"></i> 18shallowReadonly和readonly
      </router-link>
    </p>
    <p>
      <router-link to="/toRawOrmarkRaw" class="btn">
        <i class="fas fa-code"></i> 19toRaw与markRaw
      </router-link>
    </p>
    <p>
      <router-link to="/customRef" class="btn">
        <i class="fas fa-wrench"></i> 20customRef
      </router-link>
    </p>
    <p>
      <router-link to="/judgment" class="btn">
        <i class="fas fa-wrench"></i> 21响应式数据判断
      </router-link>
    </p>
    <p>
      <router-link to="/Fragment" class="btn">
        <i class="fas fa-wrench"></i> 22Fragment组件
      </router-link>
    </p>
    <p>
      <router-link to="/Teleport" class="btn">
        <i class="fas fa-wrench"></i> 23Teleport组件
      </router-link>
    </p>
    <p>
      <router-link to="/Suspense" class="btn">
        <i class="fas fa-wrench"></i> 24Suspense组件
      </router-link>
    </p>
    <p>
      <router-link to="/router" class="btn">
        <i class="fas fa-wrench"></i> 25路由跳转
      </router-link>
    </p>
    <p>
      <router-link to="/keep-alive" class="btn">
        <i class="fas fa-wrench"></i> 26keep-alive
      </router-link>
    </p>
  </div>
</template>

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
</style>

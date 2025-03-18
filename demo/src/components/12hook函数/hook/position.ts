// 第一步：必须引入用到的组合式api
import { onMounted, ref } from 'vue';
// 第二步：复制代码，将代码暴露出去
// 第三步：return出去

// 暴露出去是一个函数，返回结果是一个对象
export default () => {
  const x = ref(0)
  const y = ref(0)
  let handle = (e: any) => {
    x.value = e.clientX.toString()
    y.value = e.clientY.toString()
  }
  onMounted(() => {
    // 给页面文档绑定鼠标事件，当我鼠标点击的时候触发handle
    document.addEventListener('click', handle)
  })
  return {
    x,
    y,
    handle
  }
}
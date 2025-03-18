import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/setup',
    name: 'setup',
    component: () => import('@/components/01setup/index.vue')
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('@/components/02setup与ref/index.vue')
  },
  {
    path: '/merge',
    name: 'merge',
    component: () => import('@/components/03setup细节合并问题/index.vue')
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import('@/components/04reactive/index.vue')
  },
  {
    path: '/distinguish',
    name: 'distinguish',
    component: () => import('@/components/05ref和reactive/index.vue')
  },
  {
    path: '/parameter',
    name: 'parameter',
    component: () => import('@/components/07setup参数/index.vue')
  },
  {
    path: '/SyntacticSugar',
    name: 'SyntacticSugar',
    component: () => import('@/components/08语法糖及组件通讯/index.vue')
  },
  {
    path: '/Compute',
    name: 'Compute',
    component: () => import('@/components/09计算属性/index.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('@/components/10watch/index.vue')
  },
  {
    path: '/cycle',
    name: 'cycle',
    component: () => import('@/components/11生命周期/index.vue')
  },
  {
    path: '/hook',
    name: 'hook',
    component: () => import('@/components/12hook函数/index.vue')
  },
  {
    path: '/fetch',
    name: 'fetch',
    component: () => import('@/components/13ref获取dom/index.vue')
  },
  {
    path: '/toRefs',
    name: 'toRefs',
    component: () => import('@/components/14toRefs/index.vue')
  },
  {
    path: '/toRef',
    name: 'toRef',
    component: () => import('@/components/15toRef/index.vue')
  },
  {
    path: '/provide',
    name: 'provide',
    component: () => import('@/components/16provide和inject/index.vue')
  },
  {
    path: '/shallowReactive',
    name: 'shallowReactive',
    component: () => import('@/components/17shallowReactive与shallowRef/index.vue')
  },
  {
    path: '/shallowReadonly',
    name: 'shallowReadonly',
    component: () => import('@/components/18shallowReadonly和readonly/index.vue')
  },
  {
    path: '/toRawOrmarkRaw',
    name: 'toRawOrmarkRaw',
    component: () => import('@/components/19toRaw与markRaw/index.vue')
  },
  {
    path: '/customRef',
    name: 'customRef',
    component: () => import('@/components/20customRef/index.vue')
  },
  {
    path: '/judgment',
    name: 'judgment',
    component: () => import('@/components/21响应式数据判断/index.vue')
  },
  {
    path: '/Fragment',
    name: 'Fragment',
    component: () => import('@/components/22Fragment组件/index.vue')
  },
  {
    path: '/Teleport',
    name: 'Teleport',
    component: () => import('@/components/23Teleport组件/index.vue')
  },
  {
    path: '/Suspense',
    name: 'Suspense',
    component: () => import('@/components/24Suspense组件/index.vue')
  },
  {
    path: '/router',
    name: 'router',
    component: () => import('@/components/25路由跳转/index.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('@/components/25路由跳转/detail.vue')
  },
  {
    path: '/keep-alive',
    name: 'keep-alive',
    component: () => import('@/components/26keep-alive/index.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

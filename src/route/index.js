import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '/@/layout/index.vue'
import Login from '/@/views/Login/index.vue'
import HomePage from '/@/views/HomePage/index.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    hidden: true
  },
  {
    path: '/',
    name: '首页',
    redirect: '/homepage',
    leaf: true,
    component: Layout,
    children: [
      {
        path: '/homepage',
        name: '首页',
        iconCls: 'el-icon-s-help',
        component: HomePage
      }
    ]
  },
  {
    path: '/',
    name: '图表',
    leaf: false,
    iconCls: 'el-icon-s-data',
    component: Layout,
    children: [
      {
        path: '/table',
        name: '表格',
        component: () => import('/@/views/GraphTable/index.vue')
      }
    ]
  }
]

// 构建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('password')
  }
  let name = sessionStorage.getItem('name') // name区分是否登录
  if (!name && to.path !== '/login') {
    next({path: '/login'})
  } else {
    next()
  }
})

export default router
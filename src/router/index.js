/* eslint-disable no-undef */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@views/Index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@views/AboutView.vue'),
    meta: {
      title: '横向菜单滚动居中',
    },
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@views/HomeView.vue'),
    meta: {
      title: '竖向菜单滚动居中',
    },
  },
  {
    path: '/chinaMap',
    name: 'chinaMap',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@views/ChinaMap/ChinaMap.vue'),
    meta: {
      title: '中国地图',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
    return next()
  } else {
    return next()
  }
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import state from './state'
import Home from './components/HelloWorld.vue'
import About from './views/About.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const route = to.name?.toString() || ''
  state.counter[route] = state.counter[route] ? state.counter[route] + 1 : 1
  next()
})
export default router

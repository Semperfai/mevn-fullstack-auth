import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../pages/auth/SignUp.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../pages/auth/SignIn.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../pages/auth/UserPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

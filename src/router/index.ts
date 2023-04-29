import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/:subdir',
    component: () => import ('@/views/FolderPage.vue')
  }
  ,
  {
    path: '/:subdir/:id',
    component: () => import ('@/views/FolderPage.vue')
  },
  {
    path: '/order/:id',
    component: () => import('@/views/FoodPage.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

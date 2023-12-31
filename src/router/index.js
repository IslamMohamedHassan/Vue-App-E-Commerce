import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:category',
      name: 'category-page',
      component:() => import('../views/ProductCategory.vue')
    },
    {
      path: '/product/:id',
      name: 'product-details',
      component:() => import('../views/ProductDetails.vue')
    },
  ],
  scrollBehavior(){
    return{top : 0}
  }
})

export default router

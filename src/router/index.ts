import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import haveRoleGuard from './role-guards';



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    beforeEnter: [haveRoleGuard],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    
    beforeEnter: [haveRoleGuard],
    component: () => import(/* webpackChunkName: "detail" */ '../views/DetailView.vue'),
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '../views/HelloWorld.vue'
import Prop from '../views/Prop.vue'
import Method from '../views/Method.vue'
import TodoV1 from '../views/TodoV1.vue'
import LifeCycle from '../views/LifeCycle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/prop',
      name: 'prop',
      component: Prop
    },
    {
      path: '/method',
      name: 'method',
      component: Method
    },
    {
      path: '/todov1',
      name: 'todov1',
      component: TodoV1
    },
    {
      path: '/life-cycle',
      name: 'lifeCycle',
      component: LifeCycle
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

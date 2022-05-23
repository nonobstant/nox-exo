import { createRouter, createWebHistory } from 'vue-router'
//Views
import Home from '@/views/home.vue'
// import lab from '@/views/lab.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/lab',
  //   name: 'lab',
  //   component: lab
  // }
]

// init router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
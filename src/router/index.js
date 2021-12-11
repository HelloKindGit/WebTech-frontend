import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rezept from '../views/Rezepte'
import About from '../views/About'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/rezepte',
    name: 'Rezepte',
    component: Rezept
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
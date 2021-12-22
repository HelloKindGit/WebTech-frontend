import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rezepte from '../views/Rezepte'
import About from '../views/About'
import RezeptPage from '../views/RezeptPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/rezepte',
    name: 'Rezepte',
    component: Rezepte
  },
  {
    path: '/rezept',
    name: 'RezeptPage',
    component: RezeptPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router

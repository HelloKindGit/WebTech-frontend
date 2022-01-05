import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rezepte from '../views/Rezepte'
import About from '../views/About'
import RezeptPage from '../views/RezeptPage'
import CreateRezept from '../views/CreateRezept'
import BearbeiteRezept from '@/views/BearbeiteRezept'

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
    path: '/rezept/:id',
    name: 'RezeptPage',
    component: RezeptPage
  },
  {
    path: '/createRezept',
    name: 'CreateRezept',
    component: CreateRezept
  },
  {
    path: '/bearbeiteRezept/:id',
    name: 'BearbeiteRezept',
    component: BearbeiteRezept
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router

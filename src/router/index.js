import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rezepte from '../views/Rezepte'
import About from '../views/About'
import RezeptPage from '../views/RezeptPage'
import CreateRezept from '../views/CreateRezept'
import BearbeiteRezept from '@/views/BearbeiteRezept'
import ProfileComponent from '@/components/ProfileComponent'
import Login from '@/components/Login'
import { LoginCallback, navigationGuard } from '@okta/okta-vue'
import { BACKEND_BASE_URL } from '@/config'

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
    component: Rezepte,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/rezept/:id',
    name: 'RezeptPage',
    component: RezeptPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/createRezept',
    name: 'CreateRezept',
    component: CreateRezept,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/bearbeiteRezept/:id',
    name: 'BearbeiteRezept',
    component: BearbeiteRezept,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/profile',
    name: ProfileComponent,
    component: ProfileComponent,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(BACKEND_BASE_URL),
  routes
})

router.beforeEach(navigationGuard)

export default router

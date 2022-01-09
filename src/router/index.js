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
  history: createWebHistory(),
  routes
})

router.beforeEach(navigationGuard)

export default router

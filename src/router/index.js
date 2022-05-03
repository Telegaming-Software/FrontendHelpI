import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',          name: 'home',     component: Home, meta: {title: 'Home'} },
  { path: '/about',     name: 'about',    component: () => import('../views/about.vue'), meta: {title: 'About Us'}},
  { path: '/games/:id', name: 'game',     component: () => import('../views/game'), meta: {title: 'Game Menu'}},
  { path: '/login',     name: 'login',    component: () => import('../views/login'), meta: {title: 'Login'}},
  { path: '/register',  name: 'register', component: () => import('../views/register'), meta: {title: 'Register'}},
  { path: '/profile',   name: 'profile',  component: () => import('../views/profile'), meta: {title: 'Profile'}},
  { path: '/games/:id/experts',   name: 'experts',  component: () => import('../views/experts'), meta: {title: 'Experts'}},
  { path: '/games/:id/materials',   name: 'materials',  component: () => import('../views/materials'), meta: {title: 'Materials'}},
  { path: '/profile/application',   name: 'application',  component: () => import('../views/application'), meta: {title: 'Application'}},
  { path: '/profile/:id/applications',   name: 'applications',  component: () => import('../views/applications'), meta: {title: 'Applications'}},
  { path: '/profile/:id/material',   name: 'material',  component: () => import('../views/material'), meta: {title: 'Material'}},
  { path: '/games/:id/experts/:expertId',   name: 'expert',  component: () => import('../views/expert'), meta: {title: 'Expert'}}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

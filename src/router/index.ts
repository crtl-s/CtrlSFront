import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/index-item.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login-register-prompt',
      name: 'login-register-prompt',
      component: () => import('../views/LoginRegisterPrompt/index-item.vue')
    },
    {
      path: '/register-method',
      name: 'register-method',
      component: () => import('../views/RegisterMethod/index-item.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/RegistrationView/RegistrationView.vue')
    },
    {
      path: '/areas',
      name: 'areas',
      component: () => import('../views/Areas/AreasView.vue')
    },
    {
      path: '/topics',
      name: 'topics',
      component: () => import('../views/Topics/TopicsView.vue')
    }
  ]
})

export default router

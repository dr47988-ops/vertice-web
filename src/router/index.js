
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const siteTitle =
  'Vértice Web | Diseño Web y Desarrollo de Software en Costa Rica'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: siteTitle,
    },
  },
  {
    path: '/babybloom/privacidad',
    name: 'babybloom-privacidad',
    component: () => import('../views/BabyBloomPrivacidadView.vue'),
    meta: {
      title: 'Política de Privacidad | BabyBloom',
    },
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  // Desplazamiento automático a las secciones
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { top: 0 }
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches
          ? 'auto'
          : 'smooth',
      }
    }

    if (to.path !== from.path) {
      return { top: 0 }
    }

    return false
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || siteTitle
})

export default router

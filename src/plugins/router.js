import {createRouter} from 'vue-router'

export function createAppRouter(history) {
  return createRouter({
    strict: true,
    sensitive: true,
    history,
    routes: [
      {
        path: '/',
        component: () => import('../pages/Index.vue'),
      },
      {
        name: 'NotFound',
        path: '/:path(.*)*',
        component: () => import('../pages/NotFound.vue'),
      },
    ],
  })
}
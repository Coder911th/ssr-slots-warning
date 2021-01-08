import {createApp} from 'vue'
import {createWebHistory} from 'vue-router'
import {createAppRouter} from './plugins/router'

import Root from './components/Root.vue'

(async function() {
  const app = createApp(Root)

  const router = createAppRouter(createWebHistory())
  app.use(router)
  await router.isReady()

  app.mount('#root')
}())

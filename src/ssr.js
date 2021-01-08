import express from 'express'
import path from 'path'

import {createSSRApp} from 'vue'
import {createMemoryHistory} from 'vue-router'
import {renderToString} from '@vue/server-renderer'

import {createAppRouter} from './plugins/router'

import Root from './components/Root.vue'
import pageTemplate from './page.template.hbs'

const PORT = 3333

async function renderApp(req) {
  const app = createSSRApp(Root)

  const router = createAppRouter(createMemoryHistory())
  router.push({path: req.path})
  app.use(router)
  await router.isReady()

  const appMarkup = await renderToString(app)

  return {
    status: router.currentRoute.value.name === 'NotFound' ? 404 : 200,
    appMarkup,
  }
}

express()
  .use(express.static(path.resolve(__dirname, '..', 'static')))
  .get('*', async(req, res) => {
    console.log(`GET ${req.path}`)

    try {
      const {status, appMarkup} = await renderApp(req)
      res.status(status).send(pageTemplate({appMarkup}))
    } catch (err) {
      console.error(err)
      res.sendStatus(500)
    }
  })
  .listen(PORT, () =>
    console.log(`SSR is running on port ${PORT}`))
  .on('error', err =>
    console.log(`Failed to start SSR on port ${PORT}.\r\n${err}`))

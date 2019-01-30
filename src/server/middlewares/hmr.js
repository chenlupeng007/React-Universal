import path from 'path'
import staticMidleware from 'koa-static'
import Router from 'koa-router'
import koaWebpack from 'koa-webpack'
import config from '@webpack'
import serverRender from '@server/render/serverRender'
const isProduction = process.env.NODE_ENV === 'production';

export default (app) => {
  if (!isProduction) {
    (async () => {
      const middleware = await koaWebpack({ config })
      app.use(middleware)
      const router = new Router();
      router.get('/*', serverRender())
      app.use(router.routes()).use(router.allowedMethods())
    })()
  } else {
    app.use(staticMidleware(
      path.join(__dirname, '../../public')
    ))
    const router = new Router();
    router.get('/*', serverRender())
    app.use(router.routes()).use(router.allowedMethods())
  }
}
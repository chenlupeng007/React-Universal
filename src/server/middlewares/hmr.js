import path from 'path'
import staticMidleware from 'koa-static'
import Router from 'koa-router'
import webpack from 'webpack';
import koaWebpack from 'koa-webpack'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'

import config from '@webpack'
// import serverRender from '@serverRender'

const isProduction = process.env.NODE_ENV === 'production';

export default (app) => {
  if (!isProduction) {
    (async () => {
      const multiCompilers = webpack(config);
      const middleware = await koaWebpack({
        compiler: multiCompilers,
        devMiddleware: { publicPath: '/', serverSideRender: true }
      })

      app.use(middleware)
      app.use(webpackHotServerMiddleware(multiCompilers, {
        createHandler: webpackHotServerMiddleware.createKoaHandler
      }))
    })()
  } else {
    app.use(staticMidleware(
      path.join(__dirname, '../../../public/')
    ))
    const serverRender = require('@serverRender').default
    const router = new Router();
    router.get('/*', serverRender())
    app.use(router.routes()).use(router.allowedMethods())
  }
}
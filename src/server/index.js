import Koa from 'koa'
import hmrMiddleware from '@server/middlewares/hmr.js'
import todoList from '@server/middlewares/api'

const app = new Koa()

app.use(todoList.routes()).use(todoList.allowedMethods())
hmrMiddleware(app)

app.listen(3000)
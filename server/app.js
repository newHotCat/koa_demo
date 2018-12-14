const Koa = require('koa')

const config = require('./../config')
const middleware = require('./middleware')
const routers = require('./routers')


const app = new Koa()

app.use(middleware.session())
app.use(middleware.convert())
app.use(middleware.bodyParser())
app.use(middleware.static())
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.port)
console.log(`the server is start at port ${config.port}`)

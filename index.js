const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    await next()
    ctx.type = 'text/html'
    ctx.body = '<h1>hello koa</h1>'
})
app.listen(3000)
console.log('koa starting...')
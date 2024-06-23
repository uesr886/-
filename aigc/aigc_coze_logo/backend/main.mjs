import Koa from 'koa'
// web 服务就是一个app
const app = new Koa()

// use 挂载一个服务
// 函数 ctx 是一个对象，里面有 request 和 response
// HTTP是基于请求响应的简单协议
app.use((ctx) => {
    // ctx.response.body  响应体是hello world
    ctx.body = 'hello world'
})
// http 协议的提供 
app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})
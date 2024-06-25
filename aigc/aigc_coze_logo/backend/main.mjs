import koa from 'koa'//后端极简框架
import Router from 'koa-router'//路由
import { bodyParser } from '@koa/bodyparser'
import OpenAI from "openai";
import cors from '@koa/cors';
//web 服务就是一个app
const app = new koa()
const router = new Router()//路由实例
const client = new OpenAI({
  apiKey: 'sk-wpw49pKFIXuQ8bHJL1wJzUCHME30WCo3a56GF2IkSfESzqXh',
  //gptsapi会帮我们做apenai的请求转发
  baseURL: 'https://api.302.ai/v1'
})
//use挂载一个服务
//函数ctx是一个对象，里面有request和response
//HTTP就是基于请求相应的简单协议
app.use(bodyParser())
app.use(cors())
router.post('/logo', async (ctx) => {
  let { title, desc } = ctx.request.body
  // console.log(ctx.request.body,'////');
  const prompt = `
    你是一位资深设计师,
        请为标题为${title},功能为${desc}的移动app应用设计一款logo,
        要求如下:
        1. 拥有现代风
        2. 具有现代审美
        
`
  try {
    const response = await client.images.generate({
      model: 'dall-e-3',
      prompt,
      n: 1,
    })
    ctx.body = {
      status: 200,
      url: response.data[0].url
    }
  } catch (error) {
    ctx.body = {
      status: 500,
      error: error.message
    }
  }
})
router.get('/', ctx => {
  ctx.body = '首页'
})
app.use(router.routes())
// app.use((ctx)=>{
//     //ctx.response.body 响应体是hello world
//     ctx.body='hello world'
// })
//http 协议的提供
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
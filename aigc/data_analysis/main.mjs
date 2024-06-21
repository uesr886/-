//main.mjs代替main.js成为主入口
// mjs使用的模块化方案为es5 module
import OpenAI from "openai";
import {add,getSaleReport} from './common.mjs'
// console.log(add(1,2));
const client=new OpenAI({
    apiKey:'sk-wpw49pKFIXuQ8bHJL1wJzUCHME30WCo3a56GF2IkSfESzqXh',
    //gptsapi会帮我们做apenai的请求转发
    baseURL:'https://api.302.ai/v1'
})
//python csv 格式·数据分析
//,逗号隔开
const saleData=`
    销售数据：
    日期，产品，销售，单价，总收入
    2023-01-01,iPone 13,100,6000,600000
    2023-01-01,iPone 14,50,8000,400000
    2023-01-02,iPone 13,80,6000,480000
    2023-01-02,iPone 14,60,8000,480000
    2023-01-03,iPone 13,120,5800,696000
    2023-01-03,iPone 14,80,7800,624000
`
//功能封装
// const getSaleReport=async(data,query)=>{
//     const prompt=`
//     You are a professional data ananlyst.
//     Here is the sale data\n ${data}
//     Please generate a report to answer the following question:\n
//     ${query}
//     `;
//     //openai的接口很简单
//     //AIGC -> AGI OPENAI 生成（完成）
//     let response=await client.completions.create({
//         //chat gpt-3.5-turbo
//         model:'gpt-3.5-turbo-instruct',
//         prompt,
//         //llm 的自由度 数据分析 严格
//         temperature:0,
//         n:1,
//         //控制花销的 openai账单 靠token
//         max_tokens:1000,
        
//     })
//     return response.choices[0].text
// }
// const res=await getSaleReport(saleData,'根据上述销售数据，计算iPhone 13和iphone 14的总销量各是多少')
// console.log(res);
const res=await getSaleReport(client,saleData,'根据上述销售数据，计算iPhone 13和iphone 14的总销售额各是多少')
console.log(res);
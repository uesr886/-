/**
 * @param openai client
 * @func 销售数据分析
 * @param {csv} data
 * @param {string} query 问题
 * @returns 数据分析的结果
 * @author tjj 2024-6-21
 */

export const getSaleReport=async(client,data,query)=>{
    const prompt=`
    You are a professional data ananlyst.
    Here is the sale data\n ${data}
    Please generate a report to answer the following question:\n
    ${query}
    `;
    //openai的接口很简单
    //AIGC -> AGI OPENAI 生成（完成）
    let response=await client.completions.create({
        //chat gpt-3.5-turbo
        model:'gpt-3.5-turbo-instruct',
        prompt,
        //llm 的自由度 数据分析 严格
        temperature:0,
        n:1,
        //控制花销的 openai账单 靠token
        max_tokens:1000,
        
    })
    return response.choices[0].text
}

/**
 * @func 多数相加
 * @param {...number} args
 * @returns 多数之和
 */
export const add=(...args)=>args.reduce((prev,cur)=>prev+cur,0)


const url = require('url')
const writeList = require('../../config/writeList.js')
module.exports = options =>{
    return async (ctx,next)=>{
        let nowUrl =url.parse(ctx.url).pathname;
        if(writeList.includes(nowUrl)){
            await next()
            return
        }
        let urlArr = options.map(item =>item.url)
        if(urlArr.includes(nowUrl)){
            const {role} = ctx.info
            let res = await ctx.app.mysql.select('opr',{where:{role}})
            let nowOpr = null
            options.forEach(item =>{
                if(item.url === nowUrl){
                    nowOpr = item.type
                }
            })
            if(res.some(item =>item.opr === nowOpr)){
                await next()
                return
            }
            ctx.body={code:400,msg:"无权操作"}
            return
        }
        await next()
    }
}
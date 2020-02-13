const url = require('url')
const verifyFunc = require('../until/verifyType.js')
module.exports = options =>{
    return async (ctx,next) =>{
        
        if(options.includes(url.parse(ctx.url).pathname)){
            await next()
            return
        }
        const token = ctx.get('authorToken');
        if(!token){
            ctx.body={code:1,msg:"无权访问,请登录"}
            return
        }
        let info
        try{
            info = await verifyFunc(token,ctx.app.config.keys)
        }catch(error){
            ctx.body={code:1,msg:"权限失效，请重新登陆"}
        }
        ctx.info = info
        await next()
    }
}
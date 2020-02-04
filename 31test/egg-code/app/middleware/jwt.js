const url = require ('url')
const jwt = require ('jsonwebtoken')
function verifyFunc(token,ctx){
    return new Promise(res=>{
        jwt.verify(token,ctx.app.config.keys,(error,result)=>{
            if(error) throw error
            res(result)
        })
    })
}
module.exports = options =>{
  
    return async (ctx,next)=>{
        //白名单不需要验证
        if(options.includes(url.parse(ctx.url).pathname)){
            await next()
            return
        }
        //是否有token
        let token = ctx.get('authorToken')
        if(!token){
            ctx.body={code:400,msg:"没有访问权限"}
            return
        }
        //token值是否有效
        let info 
        try{
            info = await verifyFunc(token,ctx)
        }catch(error){
            ctx.body={code:400,msg:"权限无效，请登录"}
            return
        }
        ctx.info = info
        await next()
    }
}
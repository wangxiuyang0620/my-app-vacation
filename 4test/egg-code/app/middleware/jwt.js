const jwt = require('jsonwebtoken')
const url = require('url')
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
        console.log(options)
        if(options.includes(url.parse(ctx.url).pathname)){
            await next()
            return
        }
      
   
    let token = ctx.get('authorToken')
    if(!token){
        ctx.body={code:400,msg:"没有权限访问"}
        return
    }
    let info
    try{
        info = await verifyFunc(token,ctx)
    }catch(error){
        ctx.body={code:400,msg:'权限无效，请重新登录'}
        return
    }
    ctx.info = info
    await next()
}
}
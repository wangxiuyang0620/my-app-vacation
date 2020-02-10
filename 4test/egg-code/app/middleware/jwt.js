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
module.exports=options =>{
    return async (ctx,next)=>{
        if(options.includes(url.parse(ctx.url).pathname)){
            await next()
            return
        }
        let token = ctx.get('authorToken')
        if(!token){
            ctx.body={code:400,msg:"无权访问"}
            return
        }

        let info
        try{
            info = await verifyFunc(token,ctx)
          
        }catch(error){
            console.log(info)
            ctx.body={code:400,msg:"权限无效，重新登陆"}
            return
        }
        let {signTime} = info;
        let nowTime  = new Date().getTime();
        let time    = (nowTime-signTime)/1000/60/60;
        if( time >= 6){
            ctx.body ={code:400,msg:"登录超时，请重新登录"} 
            return
        }
        ctx.info =info
        await next()
    }
}
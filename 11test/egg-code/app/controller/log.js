'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
class LogController extends Controller {
  async login() {
    const { ctx } = this;
   const {user,pwd} = ctx.request.body;
   if(user === ''){
       ctx.body={code:0,msg:'用户名不能为空'}
       return
   }
   if(pwd === ''){
       ctx.body={code:0,msg:"密码不能为空"}
       return
   }
   let res = await this.service.user.find(user)
   if(res.length === 0){
       ctx.body={code:0,msg:"用户不存在"}
       return
   }
   if(res[0].pwd !== pwd){
       ctx.body={code:0,msg:"密码不正确"}
       return
   }
   let subData ={
       ...res[0],
       signTime : new Date().getTime()
   }
   let token = jwt.sign(subData,ctx.app.config.keys)
   ctx.body={code:1,msg:"登录成功",data:{token}}
  }
  
}

module.exports = LogController;
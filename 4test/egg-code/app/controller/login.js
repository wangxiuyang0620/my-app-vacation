'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
class LoginController extends Controller {
  async login() {
    const { ctx ,app} = this;
    const {username,password} = ctx.request.body
    const result = await this.service.user.login(username)
    if(result.length === 0){
        ctx.body={code:400,msg:'用户不存在'}
        return
    }
    if(password !== result[0].password){
        ctx.body={code:400,msg:'密码错误'}
        return
    }
    let token = jwt.sign({...result[0]},app.config.keys)
    ctx.body={code:200,msg:"登陆成功",data:{token}}
  }
}

module.exports = LoginController;
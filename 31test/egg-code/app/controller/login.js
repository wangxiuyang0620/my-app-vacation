'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
class LoginController extends Controller {
  async login() {
    const { ctx,app } = this;
    let { username, password } = ctx.request.body
    if (username === '') {
      ctx.body = { code: 400, msg: "用户名不能为空" }
      return
    }
    if (password === '') {
      ctx.body = { code: 400, msg: "密码不能为空" }
      return
    }
    const result = await this.service.user.login(username)
    if(result.length === 0){
      ctx.body={code:400,msg:'用户未注册'}
      return
    }
    if(result[0].password!== password){
      ctx.body={code:400,msg:'密码错误'}
      return
    }
    let token = jwt.sign({...result[0]},app.config.keys)
    ctx.body={code:200,msg:'登录成功',data:{token}}
  }

}

module.exports = LoginController;
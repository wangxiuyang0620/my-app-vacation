'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
class LogController extends Controller {
    async login() {
        const { ctx,app } = this;
        const { user, pwd } = ctx.request.body
        if (user.trim() === '') {
            ctx.body = { code: 400, msg: "用户名不能为空" }
            return
        }
        if (pwd.trim() === '') {
            ctx.body = { code: 40, msg: '密码不能为空' }
            return
        }
        let res = await this.service.user.find(user)
        if (res.length === 0) {
            ctx.body = { code: 400, msg: "用户未注册" }
            return
        }
        if (pwd !== res[0].pwd) {
            ctx.body = { code: 400, msg: '密码错误' }
            return
        }
        let token = jwt.sign({ ...res[0] }, app.config.keys)
        ctx.body = { code: 200, msg: "登录成功", data: { token } }
    }
    async register(){
        const { ctx } = this;
        const { user, pwd } = ctx.request.body
        if (user.trim() === '') {
            ctx.body = { code: 400, msg: "用户名不能为空" }
            return
        }
        if (pwd.trim() === '') {
            ctx.body = { code: 40, msg: '密码不能为空' }
            return
        }
        let res = await this.service.user.find(user)
        if(res.length > 0){
            ctx.body={code:400,msg:'用户已存在'}
            return
        }
        let resgisterres = await this.service.user.registeruser(user,pwd)
        if(resgisterres.affectedRows === 1){
            ctx.body={code:202,msg:"注册成功"}
            return
        }
    }
}

module.exports = LogController;
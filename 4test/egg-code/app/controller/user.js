'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    const { ctx } = this;
    let list = await this.service.user.list()
    if (list.length === 0) {
      ctx.body = { code: 400, msg: "暂无数据" }
      return
    }
    ctx.body = { code: 200, data: [...list] }
  }
  async detele() {
    const { ctx } = this;
    let { id } = ctx.request.body
    let list = await this.service.user.detele(id)
    if (list.affectedRows === 1) {
      ctx.body = { code: 200, msg: "删除成功" }
      return
    }
    ctx.body = { code: 400, msg: "删除失败" }
  }
  async add() {
    const { ctx } = this;
    let { id, user, pwd, role } = ctx.request.body
    // let list = await this.service.user.find(user)
    // if (list[0].user === user) {
    //   ctx.body = { code: 400, msg: "用户已存在" }
    //   return
    // }
    let res = await this.service.user.add({ id, user, pwd, role })
    if (res.affectedRows === 1) {
      ctx.body = { code: 200, msg: "添加成功" }
      return
    }
    ctx.body = { code: 400, msg: "添加失败" }
  }
  async edit() {
    const { ctx } = this;
    console.log(ctx.request.body)
    let { id, user, pwd, role } = ctx.request.body
    console.log(ctx.request.body)
    let res = await this.service.user.edit({ id, user, pwd, role })
    if (res.affectedRows === 1) {
      ctx.body = { code: 200, msg: '修改成功' }
      return
    }
    ctx.body = { code: 400, msg: "修改失败" }
  }
}

module.exports = UserController;
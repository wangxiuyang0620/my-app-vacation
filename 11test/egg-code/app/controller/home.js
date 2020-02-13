'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let res = await this.service.list.list()
    ctx.body = { code: 1, data: res }
  }
  async add() {
    const { ctx } = this;
    let { anonymous, isRadio, title, description, deadline ,option} = ctx.request.body;
    let name = ctx.info.user;
    let qqnumber = ctx.info.qqnumber;
    let res = await this.service.list.add(anonymous, isRadio, title, description, deadline, name, qqnumber)
    if (res.affectedRows === 1) {
      let ticket_id = res.insertId;
      console.log(ticket_id)
      option.forEach(async item=>await this.service.option.insert({id:null,ticket_id,option_id:item.id,option_name:item.value,count:0}))
      ctx.body = { code: 1, msg: "添加成功" }
      return
    }
    ctx.body = { code: 0, msg: "添加失败" }
  }
}

module.exports = HomeController;

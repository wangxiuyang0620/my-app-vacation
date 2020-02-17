'use strict';

const Controller = require('egg').Controller;

class ChartController extends Controller {
  async index() {
    const { ctx} = this;
    const {id} = ctx.request.body;
    let listRes = await ctx.service.isticket.list(id)
    console.log(listRes.length)
    ctx.body = {code:0,data:{list:listRes.length}}
  }
}

module.exports = ChartController;
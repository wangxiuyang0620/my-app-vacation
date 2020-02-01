'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async index() {
    const { ctx } = this;
   let res = await ctx.service.newslist.newslist()
   let data = res.map(item=>item.class)
   data = [...new Set(data)]
   ctx.body={code:200,msg:"",data}
  }
}

module.exports = ListController;
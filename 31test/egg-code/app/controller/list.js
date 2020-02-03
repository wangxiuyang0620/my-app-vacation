'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async index() {
    const { ctx } = this;
    let res = await ctx.service.newslist.newslist()
    let data = []
    res.forEach(item => {
      if (data.some(jtem => item.class === jtem.class)) return
      data.push(item)
    })
    ctx.body = { code: 200, msg: "", data }
  }
  async itemlist(){
    const {ctx} = this
    const {key} = ctx.request.body
    console.log(key)
    let data = await ctx.service.newslist.itemlist(key)
    ctx.body ={code:200,msg:'',data} 
  }
}

module.exports = ListController;
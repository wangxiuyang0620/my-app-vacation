'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let res = await this.service.list.list()
    ctx.body={code:1,data:res}
  }
  async add(){
    const {ctx} = this;
    let {anonymous,isRadio,title,description, deadline} = ctx.request.body;
    let res = await this.service.list.add(anonymous,isRadio,title,description,deadline)
    if(res.affectedRows === 1){
      ctx.body={code:1,msg:"添加成功"}
      return
    }
    ctx.body={code:0,msg:"添加失败"}
  }
}

module.exports = HomeController;

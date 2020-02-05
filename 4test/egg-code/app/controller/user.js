'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    const { ctx } = this;
    let list = await ctx.service.user.list()
    if(list.length>0){
        ctx.body = {code:200,data:{list}}
        return
    }
    ctx.body = {code:400,msg:"暂无数据",data:{list}}
    
  }
  async delete(){
    const { ctx } = this;
    const { id }      = ctx.request.body
    let res = await ctx.service.user.delete(id)
    if(res.affectedRows === 1){
        ctx.body = {code:200,msg:"删除成功"}
        return
    }
    ctx.body = {code:400,msg:"删除失败"}
  }

  async add(){
    const { ctx } = this;
    const { id,user,pwd,role}      = ctx.request.body
    let res = await ctx.service.user.add({ id,user,pwd,role })
    if(res.affectedRows === 1){
        ctx.body ={code:200,msg:"添加成功"}
        return
    }
    ctx.body = {code:400,msg:"添加失败"}
  }
  
  async edit(){
    const { ctx } = this;
    const { id,user,pwd,role }      = ctx.request.body
    let res = await ctx.service.user.edit({ id,user,pwd,role })
    if(res.affectedRows === 1){
        ctx.body = {code:200,msg:"编辑成功"}
        return
    }
    ctx.body ={code:400,msg:"编辑失败"}
  }
}

module.exports = UserController;
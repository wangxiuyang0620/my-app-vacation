'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async list() {
    const { ctx } = this;
    let resdata = await this.service.role.role()
    ctx.body={code:200,data:resdata}
  }
  async delete(){
    const {ctx} = this;
    let {id} = ctx.request.body
    let userRes = await this.service.user.list()
         userRes = userRes.map(item=>item.role)
      console.log(userRes)
    let roleName   = await this.service.role.searchId(id)
    if(userRes.includes(roleName)){
      ctx.body={code:400,msg:"当前用户角色被使用,不能被删除"}
      return
    } 
    let res = await this.service.role.delete(id)
    if(res.affectedRows === 1){
      ctx.body={code:200,msg:"删除成功"}
      return
    }  
    ctx.body={code:400,msg:"删除失败"}  
  }
  async add(){
    const {ctx} = this;
    const {rolename,menu,opr} = ctx.request.body;

    let rolelist = await this.service.role.role();
    if(rolelist.some(item=>item.role === rolename)){
      ctx.body={code:400,msg:"已有该角色，不能重复添加"}
      return
    }
    let res = await this.service.role.insert(rolename)
    if(res.affectedRows === 1){
      opr.forEach(async item =>await this.service.opr.insert(rolename,item))
      ctx.body={code:200,msg:"添加成功"}
    }

  }
}

module.exports = RoleController;
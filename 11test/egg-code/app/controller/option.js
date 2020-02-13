'use strict';

const Controller = require('egg').Controller;
class OptionController extends Controller{
 async list(){
     const {ctx} = this;
     const {id} = ctx.request.body;
     let res = await this.service.option.list(id)
    ctx.body={code:1,data:res}
 }
 async sub(){
     const {ctx} = this;
     ctx.body={code:1,msg:"提交成功"}
 }
}
module.exports=OptionController
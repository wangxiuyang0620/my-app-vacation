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
     const {submitData} = ctx.request.body;
     let successArr = 0;
     submitData.forEach(async item=>{
         let res = await this.service.option.update(item)
         if(res.affectedRows !== 1){
            ++successArr
            console.log(successArr)
         }
         if(successArr>0){
            ctx.body = {code:1,msg:"系统故障"}
            return
          }
          ctx.body={code:0,msg:"投票成功"}
     })
 }
}
module.exports=OptionController
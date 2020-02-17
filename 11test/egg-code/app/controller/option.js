'use strict';

const Controller = require('egg').Controller;
class OptionController extends Controller{
 async list(){
     const {ctx} = this;
     const {id} = ctx.request.body;
     let res = await this.service.option.list(id)
     let isres = await this.service.isticket.index(id,ctx.info.id);
     let issubmit = isres.length === 0 ? 'yes' : 'no';
    ctx.body={code:0,data:{res,issubmit}}
 }
 async sub(){
     const {ctx} = this;
     const {submitData,id} = ctx.request.body;
     let successArr = 0;
     submitData.forEach(async item=>{
         let res = await this.service.option.update(item)
         if(res.affectedRows !== 1){
            ++successArr
         }
         
     })
     let insertRes = await this.service.isticket.insert(id,ctx.info.id)
     if(insertRes.affectedRows !==1  ||   successArr>0){
        ctx.body = {code:1,msg:"系统故障"}
        return
      }
      ctx.body={code:0,msg:"投票成功"}
 }
}
module.exports=OptionController
'use strict';

const Controller = require('egg').Controller;
const Menu = require('../../config/menu');
class HomeController extends Controller {
  async list() {
    const { ctx } = this;
   const {role} = ctx.info;
   let res = await this.service.menu.index(role)
       res=res.map(item=>item.menu)
    let list = Menu.filter(item=>res.includes(JSON.stringify(item.key)))
    console.log(list)
    let menulist =[]
    list.forEach(item=>{
      let index = menulist.findIndex(jtem =>jtem.belong === item.belong)
      if(index !== -1){
        menulist[index].sub.push({
          name:item.name,
          key:item.key,
          to:item.to
        })
        return
      }
      menulist.push({
        belong:item.belong,
        icon:item.icon,
        sub:[
          {
            name:item.name,
            key:item.key,
            to:item.to
          }
        ]
      })
    }) 
    console.log(menulist)
    ctx.body={code:200,data:menulist}  
  }
  async echarts(){
    const {ctx} = this;
    let roleArr = await this.service.role.role()
    roleArr = roleArr.map(item=>item.role)
    let roleValue = []
    roleArr.forEach (item=>roleValue.push({value:0,name:item}))
    let userArr = await this.service.user.list()
    console.log(userArr)
   roleValue.forEach((item,index)=>userArr.forEach(v=>{
     if(item.name === v.role){
       ++roleValue[index].value
     }
   }))
ctx.body={code:200,data:{legend:roleArr,series:roleValue}}
  }
}

module.exports = HomeController;


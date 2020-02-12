const Service = require('egg').Service
class ListService extends Service{
    async list(){
      return await this.app.mysql.select('ticket_list')
    }
    async add(anonymous,isRadio,title,description, deadline,name="www",qqnumber="11111111"){
      return await this.app.mysql.insert('ticket_list',{id:null,anonymous,isRadio,title,description, deadline,name,qqnumber})
    }
}
module.exports = ListService
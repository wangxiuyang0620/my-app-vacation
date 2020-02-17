const Service = require ('egg').Service;
class IsticketService extends Service{
    async index(ticket_id,user_id){
        return await this.app.mysql.select('user_ticket',{where:{ticket_id,user_id}})
    }
    async list(ticket_id) {
        return await this.app.mysql.select('user_ticket',{where:{ticket_id}});
      }
      async insert(ticket_id,user_id) {
        return await this.app.mysql.insert('user_ticket',{id:null,user_id,ticket_id});
      }
}
module.exports=IsticketService
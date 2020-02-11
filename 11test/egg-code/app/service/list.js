const Service = require('egg').Service
class ListService extends Service{
    async list(){
      return await this.app.mysql.select('ticket_list')
    }
}
module.exports = ListService
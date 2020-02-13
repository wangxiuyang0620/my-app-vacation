const Service = require('egg').Service;

class OptionService extends Service {

  async insert(obj){
    return await this.app.mysql.insert('option',obj);
  }
  async list(id){
    return await this.app.mysql.select('option',{where:{ticket_id:id}})
  }
}

module.exports = OptionService;
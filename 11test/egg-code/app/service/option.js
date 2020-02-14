const Service = require('egg').Service;

class OptionService extends Service {

  async insert(obj){
    return await this.app.mysql.insert('option',obj);
  }
  async list(id){
    return await this.app.mysql.select('option',{where:{ticket_id:id}})
  }
  async update(id){
    let data = await this.app.mysql.select('option',{where:{option_id:id}})
    let count = data[0].count+1;
    return await this.app.mysql.update('option',{count},{where:{option_id:id}})
  }
}

module.exports = OptionService;
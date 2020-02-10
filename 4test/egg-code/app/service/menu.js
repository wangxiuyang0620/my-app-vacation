const Service = require('egg').Service;

class MenuService extends Service {

  async index(role) {
    return await this.app.mysql.select('menu',{where:{role}});
  }
  async insert(role,menu) {
    return await this.app.mysql.insert('menu',{id:null,role,menu});
  }
}

module.exports = MenuService;
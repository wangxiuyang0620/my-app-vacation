const Service = require('egg').Service;

class OprService extends Service {
  async insert(role,opr) {
    return await this.app.mysql.insert('opr',{id:null,role,opr});
  }
}

module.exports = OprService;
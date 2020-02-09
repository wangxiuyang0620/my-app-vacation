const Service = require('egg').Service;

class UserService extends Service {
  async login(user) {
    const login = await this.app.mysql.select('user',{where:{user}})
    return login
  }
  async registeruser(user,pwd,role='访客'){
    return await this.app.mysql.insert ('user',{id:null,user,pwd,role})
  }
}

module.exports = UserService;
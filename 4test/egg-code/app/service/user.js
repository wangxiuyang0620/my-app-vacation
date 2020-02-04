const Service = require('egg').Service;

class UserService extends Service {
  async login(username) {
    const login = await this.app.mysql.select('user',{where:{username}})
    return login
  }
  async registeruser(username,password,role='访客'){
    return await this.app.mysql.insert ('user',{id:null,username,password,role})
  }
}

module.exports = UserService;
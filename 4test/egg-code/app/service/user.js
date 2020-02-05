const Service = require('egg').Service;

class UserService extends Service {
  async login(username) {
    const login = await this.app.mysql.select('user',{where:{username}})
    return login
  }
  async list() {
    return await this.app.mysql.select('user');
  }
  async delete(id) {
    return await this.app.mysql.delete('user',{id});
  }
  async add(userObj){
    return await this.app.mysql.insert('user',userObj);
  }
  async edit(userObj){
    return await this.app.mysql.update('user',userObj);
  }
}

module.exports = UserService;
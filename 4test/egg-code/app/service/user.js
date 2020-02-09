const Service = require('egg').Service;
class UserService extends Service {
    async find(user) {
     return  await this.app.mysql.select('user',{where:{user}} );
      
    }
    async registeruser(user,pwd,role='student'){
      return  await this.app.mysql.insert('user',{id:null,user,pwd,role})
    }
    async list(){
      return await this.app.mysql.select('user')
    }
    async detele(id){
      return await this.app.mysql.delete('user',{id})
    }
    async add(userObj){
      return await this.app.mysql.insert('user',userObj)
    }
    async edit(userObj){
      return await this.app.mysql.update('user',userObj)
    }
  }
 module.exports= UserService
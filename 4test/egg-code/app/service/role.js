const Service = require('egg').Service;
class RoleService extends Service {
    async role() {
   return await this.app.mysql.select('role')
    }
    async searchId(id) {
        let res = await this.app.mysql.select('role',{where:{id}});
        return res[0].role
      }
    async delete(id){
        return await this.app.mysql.delete('role',{id})
    }
    async insert(role){
        return await this.app.mysql.insert('role',{id:null,role});
      }
}
module.exports = RoleService
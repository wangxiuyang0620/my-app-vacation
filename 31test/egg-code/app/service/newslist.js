const Service = require('egg').Service;

class NewslistService extends Service {
  async newslist() {
   return await this.app.mysql.select('newslist')
     
  }
  async itemlist(key) {
    return await this.app.mysql.select('newslist',{where:{class:key}})
      
   }
 
}

module.exports = NewslistService;
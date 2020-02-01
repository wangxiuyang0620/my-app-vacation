const Service = require('egg').Service;

class NewslistService extends Service {
  async newslist() {
   return await this.app.mysql.select('newslist')
     
  }
 
}

module.exports = NewslistService;
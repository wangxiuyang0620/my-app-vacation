'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let res = await this.service.list.list()
    ctx.body={code:1,data:res}
  }
}

module.exports = HomeController;

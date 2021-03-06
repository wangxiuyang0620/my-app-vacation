'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.login.login);
  router.post('/register', controller.register.register);
  router.get('/list',controller.list.index)
  router.post('/itemlist',controller.list.itemlist)
};

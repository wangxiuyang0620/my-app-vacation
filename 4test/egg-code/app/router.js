'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login',controller.login.login);
  router.get('/user/list', controller.user.list);
  router.delete('/user/delete', controller.user.delete);
  router.post('/user/add', controller.user.add);
  router.post('/user/edit', controller.user.edit);
};

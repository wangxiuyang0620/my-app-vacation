'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.log.login);
  router.post('/register', controller.log.register);

  router.get('/menu/list', controller.home.list);
  router.get('/work/echarts',controller.home.echarts)
  
  //用户管理
  router.get('/user/list',controller.user.list)
  router.delete('/user/delete',controller.user.detele)
  router.post('/user/add',controller.user.add)
  router.post('/user/edit',controller.user.edit)
  //角色管理
  router.get('/role/list',controller.role.list)
  router.delete('/role/delete',controller.role.delete)
  router.post('/role/add',controller.role.add)
};

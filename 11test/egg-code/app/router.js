'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login',controller.log.login)

  router.get('/allVote',controller.home.index)
  router.post('/add',controller.home.add)
  router.post('/list',controller.option.list)
  router.post('/detail/update',controller.option.sub)
  router.post('/chart/user',controller.chart.index)
};

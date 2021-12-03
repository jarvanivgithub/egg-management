'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/api')(app);
  // const { router, controller } = app;
  // const { user } = controller;
  // router.post('user', '/api/user/login', user.login);
};

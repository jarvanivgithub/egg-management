module.exports = app => {
  const apiRouter = app.router.namespace('/api');
  const { controller } = app;
  const { user } = controller;

  /**
   * 用户相关接口
   */
  apiRouter.post('/user/login', user.login);
  apiRouter.get('/user/currentUser', user.currentUser);

  const localStrategy = app.passport.authenticate('local', { successRedirect: '/node-api/user/loginCallback', failureRedirect: '/node-api/user/loginCallback' });
  apiRouter.post('/passport/local', localStrategy);
  apiRouter.get('/user/loginCallback', user.loginCallback);
};

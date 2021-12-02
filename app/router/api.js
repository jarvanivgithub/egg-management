module.exports = app => {
  const apiRouter = app.router.namespace('/api');
  const { controller } = app;
  const { user } = controller;

  apiRouter.post('/user/login', user.login);

  const localStrategy = app.passport.authenticate('local', { successRedirect: '/api/loginCallback', failureRedirect: '/api/loginCallback' });
  apiRouter.post('/passport/local', localStrategy);
  apiRouter.get('/loginCallback', user.loginCallback);
};

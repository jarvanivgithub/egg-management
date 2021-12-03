const { Controller } = require('egg');

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: '登陆成功',
    };
  }

  async loginCallback() {
    const { ctx } = this;
    console.log(ctx.isAuthenticated());
    console.log(ctx.user);
    if (ctx.isAuthenticated()) {
      ctx.body = {
        status: 'ok',
      };
    } else {
      ctx.session.returnTo = ctx.path;
      await ctx.redirect('/user/login');
    }
  }

  async currentUser() {
    const { ctx } = this;
    const user = await ctx.service.user.getUserByUsername(ctx.user.username);
    ctx.body = {
      data: user,
      status: 'ok',
    };
  }
}

module.exports = UserController;

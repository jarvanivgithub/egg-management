const { Service } = require('egg');

class UserService extends Service {
  async saveUser(username, password) {
    const user = new this.ctx.model.User();

    user.username = username;
    user.password = password;

    return user.save();
  }
}

module.exports = UserService;

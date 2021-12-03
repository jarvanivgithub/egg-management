const { Service } = require('egg');

class UserService extends Service {
  async saveUser(username, password) {
    const user = new this.ctx.model.User();

    user.username = username;
    user.password = password;

    return user.save();
  }

  async getUserByUsername(username) {
    return this.ctx.model.User.findOne({ username }).exec();
  }
}

module.exports = UserService;

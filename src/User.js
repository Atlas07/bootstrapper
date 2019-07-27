class User {
  constructor() {
    this.users = {};
  }

  // eslint-disable-next-line
  addUser(user) {
    if (!user.walletAddress || !user.ip || !user.port) {
      throw new Error('Provide all necessary data');
    }

    this.users[user.walletAddress] = { ...user };
  }

  getUsers() {
    return this.users;
  }
}

module.exports = User;

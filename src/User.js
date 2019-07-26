class User {
  constructor() {
    this.users = {};
  }

  // eslint-disable-next-line
  add(user) {
    if (!user.walletAddress || !user.ip || user.port) {
      return new Error('Provide all necessary data');
    }
    const { walletAddress } = user;

    this.users[walletAddress] = user;
  }

  get() {
    return this.users;
  }
}

module.exports = User;

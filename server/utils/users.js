class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    const user = { id, name, room };
    this.users.push(user)
    return user;
  }

  removeUser(id) {
    let user = this.getUser(id);
    if (user) {
      this.users = this.users.filter(user => user.id !== id)
    }

    return user;
  }

  getUser(id) {
    return this.users.filter(user => user.id === id)[0];
  }

  getUserList(room) {
    let users = this.users.filter((user) => user.room === room );
    let names = users.map((user) => user.name );
    return names;
  }

  isUserJoined(room, username) {
    const userNames = this.getUserList(room);
    let results = userNames.filter(name => name.toLowerCase() === username.toLowerCase())
    if (results.length > 0) {
      return true;
    }
  }
}

module.exports = { Users };

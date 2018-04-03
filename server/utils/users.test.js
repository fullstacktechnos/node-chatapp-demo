const expect = require("expect");

const { Users } = require("./users.js");

describe("Users", () => {
  let myUsers;

  beforeEach(() => {
    myUsers = new Users();
    myUsers.users = [
      {
        id: 1,
        name: 'Raja',
        room: 'Java'
      },
      {
        id: 2,
        name: 'Sachin',
        room: 'Ruby'
      },
      {
        id: 3,
        name: 'Amit',
        room: 'Java'
      }
    ];
  });

  it("Should add a user", () => {
    const myUsers = new Users();
    const user = {
      id: '123',
      name: 'Raja',
      room: 'Cricket'
    }
    const response = myUsers.addUser(user.id, user.name, user.room);

    expect(myUsers.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const usersSize = myUsers.users.length;
    const userid    = myUsers.users[0].id;
    const user      = myUsers.removeUser(userid);

    expect(user.id).toBe(userid);
    expect(myUsers.users.length).toBe(usersSize - 1);
  })

  it('should not removethe user', () => {
    const usersSize = myUsers.users.length
    const userid = 999;
    const user = myUsers.removeUser(userid);

    expect(user).toBeFalsy();
    expect(myUsers.users.length).toBe(usersSize);
  })

  it('should find user', () => {
    const userid = myUsers.users[0].id;
    const user = myUsers.getUser(userid);

    expect(user.id).toBe(userid);
    expect(user.name).toBe(myUsers.users[0].name);
    expect(user.room).toBe(myUsers.users[0].room);
  })

  it('should not find user', () => {
    const id = 999;
    const user = myUsers.getUser(id);

    expect(user).toBeFalsy();
  })

  it("Should return names for Java course", () => {
    const userList = myUsers.getUserList('Java');
    expect(userList).toEqual(['Raja', 'Amit']);
    
  });

  it("Should return names for Ruby course", () => {
    const userList = myUsers.getUserList('Ruby');
    expect(userList).toEqual(['Sachin']);
    
  });

  it('Should return true if user already joined the room', () => {
    const isUserJoined = myUsers.isUserJoined(myUsers.users[0].room, myUsers.users[0].name );
    expect(isUserJoined).toBeTruthy();
  });

  it('Should return true if user already joined the room', () => {
    const isUserJoined = myUsers.isUserJoined(myUsers.users[0].room, 'Newname');
    expect(isUserJoined).toBeFalsy();
  });
});

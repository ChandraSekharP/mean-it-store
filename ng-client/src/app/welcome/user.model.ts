/* class User {
  _id:string;
  user: string;
  password: string;
  date: Date;

  constructor() {
      this.user = ""
      this.password = ""
      this.date = new Date()
    }
}
export default User; */

class User {
    _id: string;
    username: string;
    loginName: string;
    password: string;
    passwordRetype: string;

    constructor() {
      this.username = ""
      this.loginName = ""
      this.password = ""
      this.passwordRetype = ""
  }
}

/* export class UserPassword {
  password: string;
  passwordRetype: string;
  constructor() {
    this.password = ""
    this.passwordRetype = ""
  }
} */
export default User;

/* export class User {
  _id: string;
  username: string;
  loginName: string;
  userPassword: {
    password: string;
    passwordRetype: string;
  };
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
} */

{
  // typeof

  type StrNum = string | number;

  const add = (param1: StrNum, param2: StrNum): StrNum => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  console.log(add(1, 2));

  interface Admin {
    name: string;
    role: string;
  }

  interface User {
    name: string;
  }

  const admin: Admin = {
    name: 'John',
    role: 'admin',
  };

  const user: User = {
    name: 'Jane',
  };

  const logUser = (user: User | Admin) => {
    if ('role' in user) {
      console.log(user.name, user.role);
    } else {
      console.log(user.name);
    }
  };

  logUser(admin);
  logUser(user);
}

{
  interface User1 {
    name: string;
    age: number;
    role: string;
  }

  type User2 = {
    id: number;
  };

  type TypeUser = User1 & User2;

  const typeUser: TypeUser = {
    id: 1,
    name: 'John',
    age: 30,
    role: 'admin',
  };

  interface InterfaceUser extends User1, User2 {}
  const interfaceUser: InterfaceUser = {
    id: 1,
    name: 'John',
    age: 30,
    role: 'admin',
  };

  type TypeArr = number[];

  const myArr: TypeArr = [1, 2, 3, 4, 5];

  interface InArr {
    [key: number]: number;
  }

  const numArr: InArr = [1, 2, 3, 4, 5];

  type Add = (num1: number, num2: number) => number;

  interface InAdd {
    (num1: number, num2: number): number;
  }

  const myAdd: Add = (num1, num2) => num1 + num2;
  const myAdd2: InAdd = (num1, num2) => num1 + num2;
}

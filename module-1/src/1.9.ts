{
  // type aliases

  type User = {
    name: string;
    age: number;
    address: {
      city: string;
      country: string;
    };
  };

  const user: User = {
    name: `John`,
    age: 23,
    address: {
      city: `London`,
      country: `UK`,
    },
  };

  // type Add = (num1: number, num2: number) => number;

  // function add(num1: number, num2: number): Add {
  //   return num1 + num2;
  // }

  // add(10, 20);
}

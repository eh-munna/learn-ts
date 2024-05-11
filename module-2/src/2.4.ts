{
  // 2-4: Generic With Interface

  interface User<T, U = null> {
    name: string;
    age: number;
    role: T;
    address?: U;
  }

  type Address = {
    city: string;
    country: string;
  };

  const user: User<string> = {
    name: 'John',
    age: 30,
    role: 'admin',
  };

  const player: User<string, Address> = {
    name: 'John',
    age: 30,
    role: 'admin',
    address: {
      city: 'London',
      country: 'UK',
    },
  };
}

{
  const user1: {
    name: string;
    age: number;
  } = {
    name: `John`,
    age: 23,
  };

  const user2: {
    name: string;
    age: number;
  } = {
    name: `Jane`,
    age: 25,
  };

  const users = {
    ...user1,
    ...user2,
  };
}

{
  // 2-6: Constraints In Typescript

  type User = {
    id: number;
    name: string;
    age: number;
  };

  const user1 = {
    id: 1,
    name: 'John',
    age: 30,
    role: 'admin',
  };

  const createUser = <T extends User>(userDetails: T) => {
    //   const createUser = <T>(userDetails: T) => {
    const hasId = true;
    return {
      ...userDetails,
      hasId,
    };
  };
  const newUser = createUser(user1);
  // const newUser = createUser<User>(user1);
  console.log(newUser);
}

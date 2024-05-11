{
  // 2-5 Function With Generics

  const createArr = (str: string): string[] => {
    return [str];
  };

  const arr = createArr('hello');
  console.log(arr);

  const arrWithGen = <T>(params: T): T[] => {
    return [params];
  };

  const strGenArr = arrWithGen<string>('hello');
  console.log(strGenArr);
  const numGenArr = arrWithGen<number>(123);
  console.log(numGenArr);
  const boolGenArr = arrWithGen<boolean>(true);
  console.log(boolGenArr);

  //   tuple generic

  const createGenTuple = <T, U>(param1: T, param2: U): [T, U] => {
    return [param1, param2];
  };

  const numStrGenTuple = createGenTuple<number, string>(123, 'hello');
  console.log(numStrGenTuple);

  //   tuple with object generic

  type User = {
    name: string;
  };

  const user = {
    name: 'John',
  };

  const objStrGenTuple = createGenTuple<number, User>(123, user);
  console.log(objStrGenTuple);

  const createUser = <T>(userDetails: T) => {
    const role = 'student';

    return {
      ...userDetails,
      role,
    };
  };

  const newUser = createUser<User>(user);
  //   const newUser = createUser(user);
  console.log(newUser);
}

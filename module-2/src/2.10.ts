{
  // return array of even numbers

  const nums: number[] = [23, 56, 64, 12, 67, 34, 87, 63];

  const getEven = (nums: number[]): number[] => {
    return nums.filter((n) => n % 2 === 0);
  };
  const result = getEven(nums);
  console.log(result);

  //   return array of string values

  const stringValues = (nums: number[]): string[] => {
    return nums.map((n) => n.toString());
  };
  const result2 = stringValues(nums);
  console.log(result2);

  // mapped types

  type LockedUser = {
    id: number;
    name: string;
  };

  type UnlockedUser = {
    [key in keyof LockedUser]: number;
  };

  type CustomUnlockedUser<Type> = {
    [key in keyof Type]: Type[key];
  };

  const customUnlockedUser: CustomUnlockedUser<{ id: number; name: string }> = {
    id: 1,
    name: 'John',
  };

  const customUnlockedUser2: CustomUnlockedUser<{ id: string; name: number }> =
    {
      id: 'John',
      name: 1,
    };
}

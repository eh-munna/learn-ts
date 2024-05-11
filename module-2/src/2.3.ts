{
  // 2-3: Introduction To Generics

  type MyArrGeneric<T> = Array<T>;

  const numArr: MyArrGeneric<number> = [1, 2, 3, 4, 5];
  const strArr: MyArrGeneric<string> = [''];

  const objArr: MyArrGeneric<{
    name: string;
    age: number;
  }> = [
    {
      name: 'John',
      age: 30,
    },
    {
      name: 'Jane',
      age: 20,
    },
  ];

  //   Generic Tuple

  type MyTupleGeneric<X, Y> = [X, Y];

  const student: MyTupleGeneric<string, number> = ['id', 123];
  const teacher: MyTupleGeneric<
    string,
    {
      name: string;
      phone: number;
    }
  > = [
    'Math Teacher',
    {
      name: 'John',
      phone: 1234567890,
    },
  ];
}

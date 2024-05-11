{
  // 2-7 Constraint Using Key Of

  interface Car {
    name: string;
    model: string;
    year: number;
  }

  type Toyota = keyof Car;

  const carName: Toyota = 'name';
  const carModel: Toyota = 'model';
  const carYear: Toyota = 'year';

  const car: Car = {
    name: 'Toyota',
    model: 'Corolla',
    year: 2020,
  };

  const getObjValue = <O, K extends keyof O>(obj: O, key: K) => {
    return obj[key];
  };

  const result = getObjValue(car, 'name');
  //   const result = getObjValue(car, carName);
  console.log(result);
}

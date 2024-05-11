{
  let myVariable: any;
  myVariable = 10;

  (myVariable as number).toString();

  const kgToGm = (value: number | string): string | number => {
    if (typeof value === 'string') {
      return `${parseFloat(value) * 1000} gm`;
    } else {
      return value * 1000;
    }
  };

  const resultInString = kgToGm('1000') as string;
  console.log(resultInString);
}

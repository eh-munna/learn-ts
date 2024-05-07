{
  function addNumbers(num1: number, num2: number = 10): number {
    return num1 + num2;
  }

  addNumbers(20);

  const calcBalance = {
    name: `John`,
    currentBalance: 1000,

    totalBalance(deposit: number): string {
      return `New balance is ${this.currentBalance + deposit}`;
    },
  };
}

{
  // ? access modifiers getter and setter

  class BankAccount {
    readonly accountNumber: number;
    userName: string;
    private _balance: number;

    constructor(accountNumber: number, userName: string, balance: number) {
      this.accountNumber = accountNumber;
      this.userName = userName;
      this._balance = balance;
    }

    set addBalance(balance: number) {
      this._balance += balance;
    }

    get showBalance(): unknown {
      return this._balance;
    }
  }

  const studentUser = new BankAccount(1234, 'Student', 200);
  studentUser.addBalance = 100;
  const showBalance = studentUser.showBalance;
  console.log(showBalance);
}

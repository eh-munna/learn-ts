{
  // ? access modifiers

  class BankAccount {
    readonly accountNumber: number;
    userName: string;
    private _balance: number;

    constructor(accountNumber: number, userName: string, balance: number) {
      this.accountNumber = accountNumber;
      this.userName = userName;
      this._balance = balance;
    }

    addBalance(balance: number): number {
      this._balance += balance;
      return this._balance;
    }

    showBalance(): void {
      console.log(this._balance);
    }
  }

  const studentUser = new BankAccount(1234, 'Student', 200);
  studentUser.addBalance(100);
  studentUser.showBalance();

  class Animal {
    protected _name: string;

    constructor(name: string) {
      this._name = name;
    }
    addStr(greet: string) {
      return `${greet} ${this._name}`;
    }
  }

  class Cat extends Animal {
    greet(greet: string): string {
      return (this._name = greet);
    }
  }

  const cat = new Cat('Cat');
  console.log(cat.greet(`Hi`));
}

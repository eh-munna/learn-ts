"use strict";
{
    // ? access modifiers
    class BankAccount {
        constructor(accountNumber, userName, balance) {
            this.accountNumber = accountNumber;
            this.userName = userName;
            this._balance = balance;
        }
        addBalance(balance) {
            this._balance += balance;
            return this._balance;
        }
        showBalance() {
            console.log(this._balance);
        }
    }
    const studentUser = new BankAccount(1234, 'Student', 200);
    studentUser.addBalance(100);
    studentUser.showBalance();
    class Animal {
        constructor(name) {
            this._name = name;
        }
        addStr(greet) {
            return `${greet} ${this._name}`;
        }
    }
    class Cat extends Animal {
        greet(greet) {
            return (this._name = greet);
        }
    }
    const cat = new Cat('Cat');
    console.log(cat.greet(`Hi`));
}

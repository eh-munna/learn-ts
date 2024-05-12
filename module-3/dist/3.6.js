"use strict";
{
    // ? access modifiers getter and setter
    class BankAccount {
        constructor(accountNumber, userName, balance) {
            this.accountNumber = accountNumber;
            this.userName = userName;
            this._balance = balance;
        }
        set addBalance(balance) {
            this._balance += balance;
        }
        get showBalance() {
            return this._balance;
        }
    }
    const studentUser = new BankAccount(1234, 'Student', 200);
    studentUser.addBalance = 100;
    const showBalance = studentUser.showBalance;
    console.log(showBalance);
}

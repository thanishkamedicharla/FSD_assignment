"use strict";
class BankAccount {
    accountHolder;
    balance;
    pin;
    rewardPoints = 0;
    constructor(name, initialBalance, accountPin) {
        this.accountHolder = name;
        this.balance = initialBalance;
        this.pin = accountPin;
    }
    withdraw(amount, enteredPin) {
        if (this.verifyPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`₹${amount} withdrawn successfully.`);
                console.log(`Remaining Balance: ₹${this.balance}`);
            }
            else {
                console.log("Insufficient Balance!");
            }
        }
        else {
            console.log("Incorrect PIN!");
        }
    }
    verifyPin(pin) {
        return this.pin === pin;
    }
}
class PremiumAccount extends BankAccount {
    addRewardPoints() {
        this.rewardPoints += 100;
        console.log(`Reward Points: ${this.rewardPoints}`);
    }
}
const myAccount = new BankAccount("Rahul", 10000, 1234);
console.log(`Account Holder: ${myAccount.accountHolder}`);
myAccount.withdraw(2000, 1234);
const premium = new PremiumAccount("Anjali", 20000, 5678);
premium.addRewardPoints();

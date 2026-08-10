class BankAccount {
    accountHolder: string;
    accountNumber: number;
    balance: number;

    constructor(accountHolder: string, accountNumber: number, initialBalance: number) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ₹${amount}`);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: ₹${amount}`);
        } else {
            console.log("Insufficient balance or invalid amount");
        }
    }

    displayBalance(): void {
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Current Balance: ₹${this.balance}`);
    }
}


const account = new BankAccount("John", 123456, 5000);

account.deposit(2000);
account.withdraw(1500);

account.displayBalance();
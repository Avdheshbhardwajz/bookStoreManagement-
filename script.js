// Task: Implement a bank account management system using JavaScript objects and functions.
// Instructions:
// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.
// Inside the constructor, initialize the properties of the bank account object.
// Add the following methods to the BankAccount prototype:
// deposit(amount) - Deposits the specified amount into the account.
// withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
// checkBalance() - Prints the account's balance.
// isActive() - Checks and returns whether the account is active.
// Create multiple BankAccount objects representing different accounts.

// Perform a series of deposit, withdrawal, and balance check operations on these accounts.

// Test the isActive method to check if the accounts are active.

// Implement a function getTotalBalance that calculates and returns the total balance of all active accounts.

// Test the getTotalBalance function to display the total balance of all active accounts.

function BankAccount(accountNumber, name, type, balance) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.active = true;
  this.type = type;
  this.deposit = function (amount) {
    this.balance += amount;
    return console.log(
      `Amount deposited ${amount}.. Current Amount is ${this.balance}`
    );
  };
  this.withdraw = function (amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return console.log(
        `amount withdrawn ${amount}.. Current Amount is ${this.balance}`
      );
    } else {
      console.log("Not Enough Amount to perform the action");
    }
  };
  this.checkBalance = function () {
    console.log(`Balance: ${this.balance}`);
  };
  this.isActive = function () {
    return console.log(
      `Current Status of Your Account ${this.active ? "Active" : "Inactive"}`
    );
  };
}
let ayush = new BankAccount(1, "avdhesh", "active", 5000);
let parul = new BankAccount(2, "parulbh", "active", 9000);
let chutki = new BankAccount(3, "jagratibh", "active", 7000);
let papa = new BankAccount(4, "nirbhaybh", "active", 2000);
let mummy = new BankAccount(5, "manjubh", "active", 1000);

ayush.deposit(10000);
ayush.withdraw(5999);
ayush.checkBalance();

parul.deposit(10000);
parul.withdraw(5999);
parul.checkBalance();

chutki.deposit(10000);
chutki.withdraw(5999);
chutki.checkBalance();

papa.deposit(10000);
papa.withdraw(5999);
papa.checkBalance();

mummy.deposit(10000);
mummy.withdraw(5999);
mummy.checkBalance();

let Accountsss = [ayush, parul, chutki, papa, mummy];
function calculateAmount(Accounts) {
  let amount = 0;
  Accounts.forEach(function (account) {
    amount += account.balance;
  });
  console.log(`total amount of all account is ${amount}`);
}

calculateAmount(Accountsss);

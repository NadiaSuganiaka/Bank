class BankAccount {
    constructor (accountHolder) {
    this.accountHolder=accountHolder;
    this.balance = 0;
    }

    getBalance() {
        alert ('Your balanse is ' + this.balance);
    }

    deposit(amount) {
        if (amount >= 0){
            this.balance += Number(amount);
            alert ('The operation is successful. You topped up your account by ' + amount + ' Your balance is  ' + this.balance);   
        } else {
            alert ("You can't enter a negative amount");
        }
    }

    withdraw(amount) {
        if(amount >= 0 && this.balance >= amount){
            this.balance -= Number(amount);
            alert ('The operation is successful. You withdrew ' + amount + ' Your balance is  ' + this.balance);
        } else{
            alert ('Insufficient funds for withdrawal.');
        }
    }
}

const nadia = new BankAccount ('Nadia');

let amountDeposit = prompt('Enter your deposit: ');
nadia.deposit(amountDeposit);

let amountWithdraw = prompt('Enter your withdraw: ');
nadia.withdraw(amountWithdraw);

nadia.getBalance();

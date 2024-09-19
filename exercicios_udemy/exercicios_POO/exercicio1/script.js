class BankAcount {
    constructor(balance){
        this.balance = balance;
    }
    deposit = function(valueDeposit){
        this.balance += valueDeposit;
    }
    whithdraw = function(valueWhip){
        if(valueWhip <= this.balance){
            this.balance -=valueWhip;
        }else{
            console.log("Saldo insuficiente. ");
        }
    }
}
const myAcount = new BankAcount(500);

myAcount.deposit(100);
myAcount.whithdraw(3010);
console.log(myAcount.balance);
myAcount.whithdraw(300);
console.log(myAcount.balance);


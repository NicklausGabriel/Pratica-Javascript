class ContaBancaria{
    constructor(numeroConta, saldo){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    
    depositar(valor){
        this.saldo += valor;
    }
    
    sacar(valor){
        if (this.saldo >= valor) {
            this.saldo = this.saldo - valor;
            console.log(this.saldo);  
        } else {
            console.log("Saldo insuficiente;" + this.saldo);
        }
       
    }
    consultarSaldo(){
        return console.log(this.saldo);
    }
    
    
}

let conta1 = new ContaBancaria(123,1000)
conta1.consultarSaldo();
conta1.depositar(1000);
conta1.consultarSaldo();
conta1.sacar(500);
conta1.consultarSaldo();

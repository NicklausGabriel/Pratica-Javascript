class ContaBancaria{

    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        this.saldoPoupanca = saldoPoupanca;
        this.saldoCorrente = saldoCorrente;
        this.jurosPoupanca = jurosPoupanca;
    }

    aplicarJuros() {
        this.saldoPoupanca += this.saldoPoupanca * (this.jurosPoupanca / 100);
    }

    deposito(valorDeposito){
        this.saldoCorrente += valorDeposito;
    }

    saque(valorSaque){
        if(this.saldoCorrente >= valorSaque){
            this.saldoCorrente -= valorSaque;
            console.log(`Valor de saque ${valorSaque}, saldo atual em conta ${this.saldoCorrente}`);
        }
    }

    retirarPoupaca(ValorRetirar){
        if(this.saldoPoupanca >= ValorRetirar){
            this.saldoCorrente += ValorRetirar;
            this.saldoPoupanca -= ValorRetirar;
            console.log(`valor transferido com sucesso, saldo na conta corrente: ${this.saldoCorrente}, valor atual na poupança: ${this.saldoPoupanca}`);
        }
    }
}
class ContaEspecial extends ContaBancaria{

    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        super(saldoCorrente,saldoPoupanca,jurosPoupanca * 2)
    }

}

contaTeste = new ContaBancaria(1000,1000,7);
contaTeste.saque(100);
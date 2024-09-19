class carro{

    constructor(marca, cor, gasolinaRestante){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
    }

    dirigirCarro(aceleracao, direcao){
        this.aceleracao = aceleracao;
        this.direcao = direcao;

        if(aceleracao > 0 && this.gasolinaRestante > 0){
            for(let i = this.gasolinaRestante; i >= 0; i--){
                console.log("acelerando veiculo");
                this.gasolinaRestante = i;
                if(this.gasolinaRestante <= 0){
                    console.log("sem gasolina");
                }
            }  
        }else{
            console.log("Veiculo sem combustivel!");
        }
    }

    abastecerVeiculo(litrosCombustivel){
        this.gasolinaRestante = litrosCombustivel;
        console.log("veiculo abastecido");
    }

}
const jetta = new carro("Volkswagen", "Cinza", 2.0)
jetta.dirigirCarro(10.00, 1);
jetta.abastecerVeiculo(3.0);
jetta.dirigirCarro(10.00, 1);

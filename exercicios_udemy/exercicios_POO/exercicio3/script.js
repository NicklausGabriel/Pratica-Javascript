class EnderecoCliente {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;         
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    atualizarRua(novaRua) {
        this.rua = novaRua;
    }
    atualizarBairro(novoBairro){
        this.bairro = novoBairro;
    }
    atualizaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    atualizarEstado(novoEstado){
        this.estado = novoEstado;
    }
    exibirEndereco(){
        console.log(`Endereço cadastrado: \n rua: ${this.rua} \n bairro: ${this.bairro}\n cidade: ${this.cidade}\n estado: ${this.estado}`)
    }
}


const enderecoTeste = new EnderecoCliente("avilho de malhas","morro reto","interna process","MG")
enderecoTeste.exibirEndereco();

enderecoTeste.atualizarRua("Pieces");
enderecoTeste.atualizarBairro("Avaion");
enderecoTeste.atualizaCidade("Party");
enderecoTeste.atualizarEstado("MG")

enderecoTeste.exibirEndereco()


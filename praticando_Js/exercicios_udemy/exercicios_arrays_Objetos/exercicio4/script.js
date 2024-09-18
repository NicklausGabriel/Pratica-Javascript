let lista = ["Gabriel", "Luan", "Luna", "Nicolas"];

function verificaExistenciaNome(arg){

    if(lista.indexOf(arg)>-1){
        return `${lista[lista.indexOf(arg)]} Seja bem vindo!`;
    }else{
        return `${arg} seu nome não esta na lista `;
    }

}
console.log(verificaExistenciaNome("Gabriel"));
console.log(verificaExistenciaNome("Jony"));
console.log(verificaExistenciaNome("Luan"));

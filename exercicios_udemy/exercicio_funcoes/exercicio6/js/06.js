function tipoDados(arg){
    if(typeof(arg) == "string"){
        return `${arg} Dado passado do tipo texto`;
    }else if(typeof(arg) == "boolean"){
        return `${arg} Dado passado do tipo boleano`;
    }else{
        return `${arg} Dado passado do tipo numerico`;
    }
}

console.log(tipoDados(12));
console.log(tipoDados(true));
console.log(tipoDados("Ola amigo"));
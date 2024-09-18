function faixaEtaria(idade){
    if(idade < 12){
        return "criança";
    }else if(idade >= 12 && idade <= 24 ){
        return "jovem";
    }else{
        return "adulto";
    }
}
let crianca = faixaEtaria(11);
let adulto = faixaEtaria(25);
console.log(crianca);
console.log(adulto);
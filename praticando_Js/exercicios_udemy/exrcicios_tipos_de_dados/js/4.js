/* 
Escreva três comparações com operadores logicos, and or e not 
*/

let valor1;
let valor2;
let valor3;


if(31 > 30 && 30 > 29){
    valor1 = "31 maior que 30 e 30 maior que 29";
}else{
    valor1 = "31 menor que 30 e 30 menor que 29";
}
console.log(valor1)

if( valor1 == "31 maior que 30 e 30 maior que 29" || 311 < 40 ){
    console.log("Certo");
}else{
    console.log("Errado");
}

if(31 != 30){
    console.log("Rodadndo");
}else{
    console.log("Não rodou");
}
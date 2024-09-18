/* 
Faça uma estrutudra if/else para verificar se um usuario pode dirigir
armazenar variaveis idade e se tem CNH
Se a idade for maior que 18 e não possuir CNH, exxiba uma mensagem;
Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
Se não tiver menos de 18 anos e não possuir CNH, exiba outra mensagem;
*/

let idade = prompt("Qual sua idade?");
let possuiCNH = prompt("Possui CNH S para sim, N para não");
if(possuiCNH == "s"){
    possuiCNH = true;
}else if( possuiCNH == "n"){
    possuiCNH = false;
}
if(idade >= 18 && possuiCNH){
    console.log("Espero que esteja bem, tenha um bom dia!");
}else if( idade >= 18 && !possuiCNH){
    console.log("Você não pode dirigir pois não possui CNH!");
}else if(idade <= 18 && !possuiCNH){
    console.log("Você não pode dirigir, pois é menor de idade e não possui CNH");
}


/*Receber o nome e a idade digitada no prompt e verificar com um condicional se é maior de 18 anos e pode entrar.*/

let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");

if(idade >= 18){
    console.log(`${nome}, Pode entrar!`);
}else{
    console.log(`${nome} Não é permitido a entrada de menores!`);
}

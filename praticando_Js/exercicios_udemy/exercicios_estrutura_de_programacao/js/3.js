/* Criar uma constante com seu nome como valor, depois uma estrutura if que verifia se meu nome esta na constante, se estiver, emitir uma mensagem de saudação. */

const nome = "Gabriel";
let nomerecebido = prompt("Qual seu nome?");
if(nome == nomerecebido){
    console.log(`Ola ${nome}, tudo bem?`);
}else{
    console.log(`Ola ${nomerecebido}, não tem permição de estar aqui! `)
}
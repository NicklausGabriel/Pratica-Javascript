/*  
Armazenar a velociade de um carro em um variavel, com o valor que desejar
Faça uma estrutura if/else que verifica se ele está acima da velocidade 
80 velocidade maxima permitida
se estiver abaixo ou acima da velocidade permitida exibir a mensagem com console.log 
*/

const velociadeMaxima = 80;
let velocidadeVeiculo = prompt("Qual a velocidade do veiculo? ")


if(velocidadeVeiculo > ((7/100) * velociadeMaxima)+ velociadeMaxima){

    console.log("Veiculo acima da velocidade permitida, reduza a velocidade.");

}else if(velocidadeVeiculo < (velociadeMaxima- (7/100)* velociadeMaxima)){

    console.log("Veiculo abaixo da velocidade permitida, reduza a velocidade.");

}else{

    console.log("Dentro da velocidade permitida.");
    
}
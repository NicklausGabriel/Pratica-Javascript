/* 
Escreva um loop for ou while que exiba qual numero é ar e qual é impar
O contados deve iniciar em 0 e ir até 50.
*/

for(let numero = 0; numero <= 50; numero++ ){
    if(numero%2 == 0){
        console.log(`${numero} par`);
    }else{
        console.log(`${numero} impar`)
    }
}
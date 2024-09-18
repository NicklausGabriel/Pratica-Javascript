/* A função Math.pow() exibe a potencia de um numero;
testar a função com console.log() e as seguintes bases 2,3,18 com o expoente 2. recebe dois arguntos base e expoente */

for(let i = 2; i < 19; i++){
    if(i == 2 ){
        console.log(Math.pow(i,2));
    }
    if(i == 3){
        console.log(Math.pow(i,2));
        i = i + 15;
    }
    if(i == 18 ){
        console.log(Math.pow(i,2));
    }
}
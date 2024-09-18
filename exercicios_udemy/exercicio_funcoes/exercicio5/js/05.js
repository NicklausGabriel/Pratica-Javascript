function autorizadoAutoescola(nome, idade){
    if(idade < 18){
        return `${nome} você é menor de idade, sendo assim ainda não pode dirigir!`;
    }else{
        return `${nome} você é maior de idade, sendo assim pode dirigir!`;

    }
}
console.log(autorizadoAutoescola("Gabriel", 15));
console.log(autorizadoAutoescola("Luan", 32));
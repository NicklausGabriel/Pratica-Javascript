function LengthString(arg){
    if(arg.length <= 10){
        return "Texto dentro do limite.";
    }else{
        return "Texto muito longo";
    }
}

console.log(LengthString("ola amigo, tudo bem?"));
console.log(LengthString("bem e voce?"));
console.log(LengthString("bem tbm"));
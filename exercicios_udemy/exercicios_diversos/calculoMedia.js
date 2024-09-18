function calculateAverage(numeros){
    if (numeros.length === 0) {
        return 0;
    }

    const soma = numeros.reduce((acumulador, valorAtual) => acumulador+valorAtual,0);
    const media = soma / numeros.length;

    return media;
}
console.log(calculateAverage([10, 20, 30])); 
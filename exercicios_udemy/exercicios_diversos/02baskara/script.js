function calcularBhaskara(coef1, coef2, coef3) {
    let delta = (coef2 * coef2) - (4 * coef1 * coef3);

    if (delta < 0) {
        console.log("Não possui raízes reais.");
    } else {
        let raiz1 = (-coef2 + Math.sqrt(delta)) / (2 * coef1);
        let reiz2 = (-coef2 - Math.sqrt(delta)) / (2 * coef1);

        document.getElementById("raiz1").innerHTML = `raiz1 = ${raiz1}`;
        document.getElementById("raiz2").innerHTML = `raiz2 = ${reiz2}`;
    }
}
let coef1 = parseFloat(prompt("Digite o valor do primeiro coeficiente:"));
let coef2 = parseFloat(prompt("Digite o valor do segundo coeficiente:"));
let coef3 = parseFloat(prompt("Digite o valor do terceiro coeficiente:"));

calcularBhaskara(coef1, coef2, coef3);

function calcularNotaFinal(nota1, nota2) {
    let notaFinal = (nota1 + nota2) / 2;
    console.log(`Nota final: ${notaFinal.toFixed(1)}`);
    if (notaFinal < 60.0) {
        document.getElementById("resultado").innerHTML = "Aluno reprovado";
    }else{
        document.getElementById("resultado").innerHTML = "Aluno aprovado"
    }
}

let notaPrimeiroSemestre = parseFloat(prompt("Digite a nota do primeiro semestre:"));
let notaSegundoSemestre = parseFloat(prompt("Digite a nota do segundo semestre:"));

calcularNotaFinal(notaPrimeiroSemestre, notaSegundoSemestre);



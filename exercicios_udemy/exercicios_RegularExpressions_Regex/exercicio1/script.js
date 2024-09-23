const regexMaiusculas = /[A-Z]/;

const texto1 = "Este Texto Tem Letras Maiusculas";
const texto2 = "este texto não tem";

console.log(regexMaiusculas.test(texto1));
console.log(regexMaiusculas.test(texto2));
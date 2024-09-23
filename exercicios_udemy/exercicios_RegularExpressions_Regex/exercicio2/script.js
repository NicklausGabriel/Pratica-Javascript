const regexID = /ID$/;

const texto1 = "MeuDocumentoID";
const texto2 = "MeuDocumento";
const texto3 = "ID";

console.log(regexID.test(texto1)); 
console.log(regexID.test(texto2));
console.log(regexID.test(texto3)); 

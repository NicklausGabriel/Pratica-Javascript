const regexMarca = /^Marca:\s?(nike|adidas|puma|asics)$/i;

const texto1 = "Marca: nike";
const texto2 = "Marca: adidas";
const texto3 = "Marca: puma";
const texto4 = "Marca: asics";
const texto5 = "Marca: reebok"; 
const texto6 = "marca: nike";   

console.log(regexMarca.test(texto1)); 
console.log(regexMarca.test(texto2)); 
console.log(regexMarca.test(texto3)); 
console.log(regexMarca.test(texto4)); 
console.log(regexMarca.test(texto5)); 
console.log(regexMarca.test(texto6)); 

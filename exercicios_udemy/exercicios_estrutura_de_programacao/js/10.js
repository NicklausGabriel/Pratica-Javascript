/* 
Verifique se o numero é primo!
numero primo só é divisivel por ele mesmo ou 1*/

function ePrimo(num) {
    if (num <= 1) {
        return false;
    }
    
    if (num <= 3) {
        return true;
    }

    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

console.log(ePrimo(prompt("Digite um valor para veriricar se é primo")))
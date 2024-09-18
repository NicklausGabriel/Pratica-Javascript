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

function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, não encontrado
  console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
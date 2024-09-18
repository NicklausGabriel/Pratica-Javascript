function isPalindrome(palavra){
    const palavraNormalizada = palavra.toLowerCase();
    const palavraInvertida = palavraNormalizada.split('').reverse().join('');
    return palavraNormalizada === palavraInvertida;
}
console.log(isPalindrome('radar'));
console.log(isPalindrome('rada'));
let arr1 = ["ola", "oi", "ei", "hello", "hi"];
let arr2 = ["Até logo", "tchau", "bye"];

function verifyLengthArray(arr){
    if(arr.length < 5){
        console.log("Poucos elementos");
    }else{
        console.log("Muitos elementos");
    }
}
verifyLengthArray(arr1);
verifyLengthArray(arr2);
verifyLengthArray("Ola amigo!");
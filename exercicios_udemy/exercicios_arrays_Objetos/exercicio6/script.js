let arr = ["terra", "agua", "fogo", "ar", "vazio"];

function interactingArray(arr){
    arr.forEach(interaction => {
        console.log(`Elemento: ` + interaction)
    });
}
interactingArray(arr)
arr.length()
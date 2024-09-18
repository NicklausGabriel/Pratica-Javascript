function imprimirPares(arg) {
    let pares = [];

    for (let i = arg; i > 0; i--) {
        if (i % 2 == 0) {
            pares.push(i);
        }
    }
    console.log(pares.join());
}

imprimirPares(22);

// Ejercicio 9 Arrays

function pideYComprueba() {
    let n = 0;
    const arr = [];

    while (n != 'x') {
        n = prompt("Introduce un número o x para terminar");

        if (n == 'x') {
            continue;
        }

        try {
            n = parseInt(n);
            arr.push(n);
        }
        catch (err) {
            alert("Valor no válido");
        }
    }

    return arr;
}

console.log(pideYComprueba());

function mitad(arr) {
    for (i in arr) {
        arr[i] /= 2;
    }

    return arr;
}

function porLaMitad(arr) {
    const arrCopia = [];
    
    for (i in arr) {
        arrCopia[i] = arr[i];
        arrCopia[i] /= 2;
    }

    return arrCopia;
}
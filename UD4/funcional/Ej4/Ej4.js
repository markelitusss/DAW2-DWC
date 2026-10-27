// Ejercicio 4 Programación funcional

const array = [ 95, 95, 14, 83, 58, 33, 65, 52, 7, 72, 13, 46,
19, 31, 27, 36, 30, 86, 88, 88, 68, 16, 5, 14, 41, 56, 89, 11,
6, 29, 72, 11, 69, 36, 16, 11, 82, 84, 32, 84, 95, 98, 76, 99,
100, 12, 89, 1, 92, 27, 66, 48, 38, 49, 30, 40, 87, 19, 31, 37,
5, 32, 9, 33, 98, 94, 5, 15, 4, 88, 47, 34, 83, 8, 31, 4, 2, 72,
31, 39, 15, 10, 46, 78, 11, 21, 92, 22, 83, 3, 6, 71, 39, 54,
50, 77, 13, 85, 7, 36 ];

function arrayOrdenado() {
    const newArr = array.map(i => i);
    newArr.sort((a, b) => a - b);
    return newArr;
}

function impares() {
    const newArr = array.filter(i => i % 2 === 1)
    newArr.sort((a, b) => a - b);
    return newArr;
}

function imparesGrandes() {
    const newArr = array.filter(i => i % 2 === 1 && i > 9);
    return newArr;
}

function frecuencias() {
    // 1. crea un array vacío
    // 2. bucle del 0 al 100. i es el número que hay que contar
    // 3. añade al array vacío el contador del número de i encontrados
    // 4. repetir hasta el número 100
    const newArr = [];
    for (let i = 0; i < 101; i++) {
        newArr.push(array.reduce((count, j) => {
            if (j === i) count++;
            return count;
        }, 0))
    }

    return newArr;
}

console.log(arrayOrdenado());
console.log(impares());
console.log(imparesGrandes());
console.log(frecuencias());
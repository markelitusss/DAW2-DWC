// Ejercicio 4 Arrays

const arr = ["Dragonborn", "Skyrim", "Dovahkiin", "Dragon", "Fire", "Game"];

function mostrar(array) {
    for (i in array) {
        console.log(array[i]);
    }

    console.log(array.length);
}

mostrar(arr);
const element = arr.pop();

mostrar(arr);
console.log("Elemento eliminado: " + element);
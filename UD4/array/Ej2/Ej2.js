// Ejercicio 2 Arrays

const arr = ["Dragonborn", "Skyrim", "Dovahkiin", "Dragon", "Fire", "Game"];

function mostrar(array) {
    for (i in array) {
        console.log(array[i]);
    }

    console.log(array.length);
}

mostrar(arr);
arr.push("Videojuego");
arr.push("Dragones");

mostrar(arr);
const input = prompt("Introduce una cadena de texto:");
arr.push(input);

mostrar(arr);
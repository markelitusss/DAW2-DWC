// Ejercicio 7 Arrays

const arr = ["Dragonborn", "Skyrim", "Dovahkiin", "Dragon", "Fire", "Game"];

function mostrar(array) {
    for (i in array) {
        console.log(array[i]);
    }

    console.log(array.length);
}

mostrar(arr);
const caracter = prompt("Introduce un caracter que actuará como separador de elementos");

const str = arr.join(caracter);
alert("Array unido en una cadena: " + str);
mostrar(arr);
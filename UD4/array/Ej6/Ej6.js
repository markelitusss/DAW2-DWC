// Ejercicio 6 Arrays

const arr = ["Dragonborn", "Skyrim", "Dovahkiin", "Dragon", "Fire", "Game"];

let mensaje = "";

for (i in arr) {
    mensaje += (i + ": " + arr[i] + "\n");
}

alert(mensaje);
alert("Número de elementos en el array: " + arr.length);

const firstIndex = prompt("Introduce el índice del primer elemento del nuevo array");
const lastIndex = prompt("Introduce el índice del último elemento del nuevo array");

const nuevoArr = [arr[firstIndex], arr[lastIndex]];
console.log(nuevoArr);
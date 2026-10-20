// Ejercicio 1 Arrays

const nombres = ["Juan", "Pedro", "Luis", "María", "Julia"];

function mostrar(arr) {
    for (nombre of nombres) {
        console.log(nombre);
    }
}

function buscarItem(arr, nombre) {
    for (i in nombres) {
        if (nombres[i] == nombre) {
            return i;
        }
    }

    return -1;
}

const input = prompt("Introduce un nombre");
if (buscarItem(nombres, input) > 0) {
    alert("Nombre '" + input + "' encontrado")
}
else {
    alert("Nombre no encontrado")
} 

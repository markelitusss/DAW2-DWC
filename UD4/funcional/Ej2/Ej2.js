// Ejercicio 2 Programación funcional

const ciudades = [
    {nombre: 'Alicante', poblacion: 3792621},
    {nombre: 'Elche', poblacion: 8175133},
    {nombre: 'Torrevieja', poblacion: 2695598},
    {nombre: 'Orihuela', poblacion: 2099451},
    {nombre: 'Callosa', poblacion: 1526006}
];

input = parseInt(prompt("Introduce un número"));
output = "";

ciudades.forEach(ciudad => {
    if (ciudad.poblacion > input) return output += ciudad.nombre + "\n";
})

alert("Ciudades con más de " + input + " habitantes:\n" + output);
// Ejercicio 5 Programación funcional

// array notas y outputs utilizados para formato
let notas = [];
let notasIntroducidas = "";
let notasValidas = "";
let notasAprobados = "";
let notasFinales = "";

// bucle de input
while (true) {
    
    let input = prompt("Introduce una nota o varias separadas por comas");
    notasIntroducidas += input + ", ";

    // cuando se hace click en "cancelar"
    if (input === null) {
        notasIntroducidas = notasIntroducidas.slice(0, notasIntroducidas.length - 8);
        break;
    }
    else {
        addItems(notas, input);
    }
    
}

// validamos el array
notas = clearItems(notas);

// outputs
console.log("Notas introducidas: " + notasIntroducidas);

notas.forEach(nota => {notasValidas += nota + ", ";});
console.log("Notas válidas: " + notasValidas.slice(0, notasValidas.length - 2));
console.log("El primer suspenso es " + primerSuspenso(notas));

aprobados(notas).forEach(nota => {notasAprobados += nota + ", ";});
console.log("Hay " + aprobados(notas).length + " aprobados: " + notasAprobados.slice(0, notasAprobados.length - 2));

console.log("La nota media es " + notaMedia(notas));
cambiaNotas(notas, 10).forEach(nota => {
    notasFinales += Math.round(nota) + ", ";
});
console.log("Las notas finales son " + notasFinales.slice(0, notasFinales.length -  2));
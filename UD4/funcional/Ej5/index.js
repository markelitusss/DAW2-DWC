// Ejercicio 5 Programación funcional

const notas = [];
let notasIntroducidas = "";

while (true) {
    
    let input = prompt("Introduce una nota o varias separadas por comas");
    notasIntroducidas += input + ", ";

    if (input === null) {
        notasIntroducidas = notasIntroducidas.slice(0, notasIntroducidas.length - 8);
        break;
    }
    else {
        addItems(notas, input);
    }
    
}

clearItems(notas);

console.log("Notas introducidas: " + notasIntroducidas);
console.log("Notas válidas: " + notas);
// Ejercicio 10 Arrays

const sueldos = new Array(5);

function cargar(arr) {
    for (let i = 0; i < 5; i++) {
        arr[i] = parseInt(prompt("Introduce un número entero"));
    }
}

function calcularGastos(arr) {
    sum = 0;
    
    for (i of arr) {
        document.write(i + " €<br>");
        sum += i;
    }

    document.write("Suma: " + sum + " €");
}

cargar(sueldos);
calcularGastos(sueldos);
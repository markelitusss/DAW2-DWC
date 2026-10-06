function actividad1(nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3) / 3).toFixed(2);
}

function actividad3(num) {
    // los decimales siempre tienen un resto entre 1 distinto de 0
    if (num % 1 == 0) {
        return num ** 3;
    }
    else {
        alert("Ha ocurrido un error: el número no es entero o no es un número")
        return false;
    }
}

function actividad4() {
    let input = NaN;
    
    while (isNaN(input)) {
        input = parseInt(prompt("Introduce algo"));
    }

}

function actividad5(str) {
    let sum = 0;

    // comprueba los caracteres que son números y los suma al total
    for (car of str) {
        if (!(isNaN(parseInt(car)))) {
            sum += parseInt(car);
        }
    }

    return sum;
}

function actividad6(min, max) {
    // no hay otra forma de hacerlo que con Math.random()
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
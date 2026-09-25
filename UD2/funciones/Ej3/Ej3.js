// Funciones Estructuras de Control

// actividad 1
function actividad1() {
    let num = prompt("Introduce un número entero:");

    if (num < 0) {
        alert("El número introducido es negativo");
    }
    else if (num > 0) {
        alert("El número introducido es positivo");
    }
    else {
        alert("El número introducido es 0");
    }

}

// actividad 2
function actividad2() {
    let edad = prompt("Introduce tu edad:");
    if (edad >= 65) {
        alert("Eres una persona anciana");
    }
    else if (edad >= 18) {
        alert("Eres una persona adulta");
    }
    else if (edad > 0) {
        alert("Eres menor de edad");
    }
    else {
        alert("Número inválido");
    }
}

// actividad 3
function actividad3() {
    let num1 = prompt("Introduce el primer número");
    let num2 = prompt("Introduce el segundo número");

    if (num1 > num2) {
        alert("Número mayor: " + num1);
    }
    else if (num2 > num1) {
        alert("Número mayor: " + num2);
    }
    else {
        alert("Ambos números son iguales");
    }
}

// actividad 4
function actividad4() {
    let nota1 = parseInt(prompt("Introduzca la primera nota:"));
    let nota2 = parseInt(prompt("Introduzca la segunda nota:"));
    let nota3 = parseInt(prompt("Introduzca la tercera nota:"));
    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 5) {
        alert("Estas aprobado");
    }
    else {
        alert("Estas suspenso");
    }
}

// actividad 6
function actividad6() {
    let mes = parseInt(prompt("Introduce un número del 1 al 12:"));
    let mesTexto = "";

    switch (mes) {
        case 1:
            mesTexto = "Enero";
            break;
        case 2:
            mesTexto = "Febrero";
            break;
        case 3:
            mesTexto = "Marzo";
            break;
        case 4:
            mesTexto = "Abril";
            break;
        case 5:
            mesTexto = "Mayo";
            break;
        case 6:
            mesTexto = "Junio";
            break;
        case 7:
            mesTexto = "Julio";
            break;
        case 8:
            mesTexto = "Agosto";
            break;
        case 9:
            mesTexto = "Septiembre";
            break;
        case 10:
            mesTexto = "Octubre";
            break;
        case 11:
            mesTexto = "Noviembre";
            break;
        case 12:
            mesTexto = "Diciembre";
            break;
        default:
            mesTexto = "Ese número no está entre 1 y 12";
    }

    alert(mesTexto);
}

// actividad 7
function actividad7() {
    let pedido = prompt("Introduzca su pedido (carne, pescado o verdura):");
    // para que sea case-insensitive
    pedido.toLowerCase();

    switch (pedido) {
        case "carne":
            alert("Bebida recomendada: Vino tinto");
            break;
        case "pescado":
            alert("Bebida recomendada: Vino blanco");
            break;
        case "verdura":
            alert("Bebida recomendada: Agua");
            break;
        default:
            alert("Escriba carne, pescado o verdura");
    }
}

// actividad 8
function actividad8() {
    for (let i = 2; i <= 30; i += 2) {
        if (i % 3 != 0) {
            console.log(i);
        }
    }
}

// actividad 9
function actividad9() {
    // i es el resultado de las potencias
    // division es la variable que utilizamos para comprobar si i es potencia de 2 o no
    for (let i = 5; i <= 300; i++) {
        let division = i;

        // divide entre 2 hasta que division sea 1 o menor que 1
        while (division != 1 && division > 1) {
            division /= 2;
        }

        // si es uno es potencia de 2
        if (division == 1) {
            console.log(i);
        }
    }
}

// actividad 10
function actividad10() {
    let num = parseInt(prompt("Introduce un número para calcular su factorial"));
    let factoral = num;

    // calcula el factorial utilizando un contador regresivo
    for (let i = num - 1; i >= 1; i--) {
        factoral *= i;
    }

    alert(num + "! = " + factoral);
}

// actividad 11
function actividad11() {
    let patron = "";

    // bucle exterior -> número de filas
    // bucle interior -> columnas
    for (let i = 1; i <= 13; i++) {
        for (let j = 1; j <= i; j++) {
            patron += "*";
        }

        patron += "\n";
    }

    console.log(patron);
}

// actividad 12
function actividad12() {
    // definimos i antes del bucle
    let patron = "";
    let i = 1
    let car = prompt("Introduce un caracter:");

    // bucle exterior -> número de filas
    // bucle interior -> columnas
    while (i <= 13) {
        // definimos j antes del bucle
        // cada vez que el programa vuelva aquí el valor de j volverá a ser 1
        let j = 1;

        while (j <= i) {
            patron += car;
            j++;
        }

        patron += "\n";
        i++;
    }

    console.log(patron);
}

// aactividad 13
function actividad13() {
    // definimos i antes del bucle
    let patron = "";
    let i = 1
    let car = prompt("Introduce un caracter:");
    let lineas = parseInt(prompt("Introduce la cantidad de lineas para imprimir:"));

    // bucle exterior -> número de filas
    // bucle interior -> columnas
    // al ser do...while se ejecuta mínimo 1 vez
    do {
        // definimos j antes del bucle
        // cada vez que el programa vuelva aquí el valor de j volverá a ser 1
        let j = 1;

        do {
            patron += car;
            j++;
        }
        while (j <= i);

        patron += "\n";
        i++;
    }
    while (i <= lineas);

    console.log(patron);
}

// actividad 14
function actividad14() {
    let numero = 13;
    let respuesta = "";

    do {
        respuesta = parseInt(prompt("Introduce un número"));
        if (respuesta == numero) {
            alert("El numero introducido es correcto!");
        }
        // cuando se hace click en cancelar -> valor de respuesta es null
        else if (!respuesta) {
            alert("Juego cancelado");
            respuesta = 13;
        }
        else {
            if (respuesta > numero) {
                alert("El número oculto es menor que el número introducido. Vuelve a intentarlo");
            }
            else {
                alert("El número oculto es mayor que el número introducido. Vuelve a intentarlo");
            }
        }
    }
    while (respuesta != numero);
}
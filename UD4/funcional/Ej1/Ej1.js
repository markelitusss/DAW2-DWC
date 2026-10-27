// Ejercicio 1 Programación Funcional

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// días que empiezan por M
console.log(dias.filter(dia => {
    if (dia.charAt(0) === "M") return dia;
}));

// primer día que empieza con M
console.log(dias.find(dia => {
    if (dia.charAt(0) === "M") return dia;
}));

// posición del primer día que empieza por M
console.log(dias.findIndex(dia => {
    if (dia.charAt(0) === "M") return dia;
}));

// si algun día empieza por S
console.log(dias.some(dia => dia.charAt(0) === "S"));

// si todos los días acaban por S
console.log(dias.every(dia => dia.charAt(dia.length) === "S"));

// dias en mayúsculas
console.log(dias.map(dia => dia.toUpperCase()));

// si algún día es el "Martes"
console.log(dias.some(dia => dia === "Martes"));
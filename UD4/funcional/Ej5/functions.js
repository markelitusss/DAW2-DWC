// Ejercicio 5 Programación funcional

function addItems(notas, item) {
    if (item.includes(",")) {
        let arr = item.split(", ");
        
        for (let i = 0; i < arr.length; i++) {
            notas.push(arr[i]);
        }
    }
    else {
        notas.push(parseFloat(item));
    }
}

function clearItems(notas) {
    let notasLimpio = notas.map(i => parseFloat(i));
    notasLimpio = notasLimpio.filter(i => !(isNaN(i)));
    return notasLimpio;
}

function primerSuspenso(notas) {
    return notas.find(nota => nota < 5);
}

function aprobados(notas) {
    return notas.filter(nota => nota >= 5);
}

function notaMedia(notas) {
    return notas.reduce((sum, nota) => sum += nota) / notas.length;
}

function cambiaNotas(notas, incremento) {
    return notas.forEach(nota => {
        nota *= 1 + incremento / 100;
        nota.toFixed(2);
    });
}
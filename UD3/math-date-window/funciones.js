// Actividad 1
function actividad1(fecha) {
    const d = new Date(fecha);
    return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
}

// Actividad 2
function actividad2(fecha) {
    const d = new Date(fecha);
    let dia =  "";

    switch(d.getDay()) {
        case 0:
            dia = "Domingo";
            break;
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
    }

    return dia;
}

// Actividad 3
function actividad3(fecha) {
    const d = new Date(fecha);
    const dActual = new Date();

    return dActual.getFullYear() - d.getFullYear();
}

// Actividad 4
function actividad4() {
    const dActual = new Date();

    if (dActual.getHours() >= 6 && dActual.getHours() < 12) {
        return "Buenos días";
    }
    else if (dActual.getHours() > 12 && dActual.getHours() < 20) {
        return "Buenas tardes";
    }
    else {
        return "Buenas noches";
    }
}

// Actividad 5
function actividad5(fecha1, fecha2) {
    const d1 = new Date(fecha1);
    const d2 = new Date(fecha2);
    // diferencia de milisegundos entre ambas fechas
    const diff = Math.abs(d2 - d1);
    // convertimos a dias
    const diffDias = Math.floor(diff / (1000 * 60 * 60 * 24));
    return diffDias;
}

// Actividad 6
function actividad6(hora1, hora2) {
    const h1 = new Date("01-01-1970 " + hora1);
    const h2 = new Date("01-01-1970 " + hora2);

    if (Math.sign(h1 - h2) == 1) {
        return "La segunda hora es menor que la primera";
    }
    else {
        return "La primera hora es menor que la segunda";
    }
}

// Actividad 7
function actividad7() {
    const d = new Date();
    alert(d.toLocaleString());
}

// Actividad 8
// vamos a mejorar las actividades 1, 2, 3 y 5 de este archivo
function actividad1Mejorada(fecha) {
    try {
        if (isNaN(Date.parse(fecha))) {
            throw new TypeError;
        }
        const d = new Date(fecha);
        return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    }
    catch (error) {
        console.error("La fecha introducida no es válida");
        return "Error, ver consola";
    }
}

function actividad2Mejorada(fecha) {
    try {
        if (isNaN(Date.parse(fecha))) {
            throw new TypeError;
        }

        const d = new Date(fecha);
        let dia =  "";

        switch(d.getDay()) {
            case 0:
                dia = "Domingo";
                break;
            case 1:
                dia = "Lunes";
                break;
            case 2:
                dia = "Martes";
                break;
            case 3:
                dia = "Miércoles";
                break;
            case 4:
                dia = "Jueves";
                break;
            case 5:
                dia = "Viernes";
                break;
            case 6:
                dia = "Sábado";
                break;
        }

        return dia;
    }
    catch (error) {
        console.error("La fecha introducida no es válida");
        return "Error, ver consola";
    }
}

function actividad3Mejorada(fecha) {
    try {
        if (isNaN(Date.parse(fecha))) {
            throw new TypeError;
        }

        const d = new Date(fecha);
        const dActual = new Date();

        return dActual.getFullYear() - d.getFullYear();
    }
    catch (error) {
        console.error("La fecha introducida no es válida");
        return "Error, ver consola";
    }
}

function actividad5Mejorada(fecha1, fecha2) {
    try {
        if (isNaN(Date.parse(fecha1)) || isNaN(Date.parse(fecha2))) {
            throw new TypeError;
        }

        const d1 = new Date(fecha1);
        const d2 = new Date(fecha2);
        // diferencia de milisegundos entre ambas fechas
        const diff = Math.abs(d2 - d1);
        // convertimos a dias
        const diffDias = Math.floor(diff / (1000 * 60 * 60 * 24));
        return diffDias;
    }
    catch (error) {
        console.error("Las fechas introducidas no son válidas");
        return "Error, ver consola";
    }
}
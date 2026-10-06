// Actividad 3
function actividad3(str) {
  // he estado 3 horas intentado hacer esto sin éxito
  // la solución no es mía, lo siento!
  // utiliza una expresión regular para sacar la primera letra de todas las palabras
  return str.replace(
    /(^\w|\s\w)(\S*)/g,
    (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase(),
  );
}

// Actividad 4
function actividad4(codigo) {
    // empezamos con un string vacío al que le vamos añadiendo las 3 partes
    result = "";

    // parte 1: CP o CE
    pt1 = codigo.slice(0, 2);
    if (pt1 == "CP") {
        result += "Cliente particular";
    }
    else if (pt1 == "CE") {
        result += "Empresa";
    }
    else {
        result = "Error: la primera parte del código no es válida";
        return result;
    }

    // parte 2: 10, 11, 12 o 20
    pt2 = codigo.slice(3, 5);
    if (pt2 == "10") {
        result += " local";
    }
    else if (pt2 == "11") {
        result += " autonómico";
    }
    else if (pt2 == "12") {
        result += " nacional";
    }
    else if (pt2 == "20") {
        result += " internacional";
    }
    else {
        result = "Error: la segunda parte del código no es válida";
        return result;
    }

    // parte 3: años de antigüedad
    pt3 = codigo.slice(6);
    result += " con " + pt3 + " años de antigüedad";

    return result;
}

// Actividad 5
function actividad5(str1, str2) {
    // se transforman ambas cadenas a las mismas condiciones
    str1 = str1.trim();
    str1 = str1.toLowerCase();
    str2 = str2.trim();
    str2 = str2.toLowerCase();

    result = "";

    // bucle de la función
    for (car of str1) {
        // si el caracter de una cadena está en la otra
        // añadimos el caracter a result
        if (str2.match(car)) {
            result += car;
            
            // reemplazamos todas las ocurrencias de ese caracter por un espacio vacío
            // para evitar repeticiones
            str2 = str2.replaceAll(car, '');
        } 
    }

    return result;
}

// Actividad 6
function actividad6(str) {
    // de nuevo expresiones regulares :(
    // buscamos uno o mas caracteres de espacio (/ +) que precedan a otro espacio (?= )
    // por todo el string (/g) para reemplazarlos por vacío ("")
    return str.replace(/ +(?= )/g, "").trim();
}

console.log(actividad3("te estas pasando juanan"));
console.log(actividad4("CP-12-3"));
console.log(actividad5("Ciudad", "Cuando"));
console.log(actividad6("JavaScript   es    muy   fácil"));
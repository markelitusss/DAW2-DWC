// Funciones usadas para consultar datos de data-artistas.js

// Función 1
function artistasSolistas(artistas) {
    return artistas.filter(artista => artista.solista == true);
}

// Función 2
function artistasPorEdad(artistas, edad) {
    return artistas.filter(artista => artista.edad == edad);
}

// Función 3
function cantidadDeArtistasPorIntstrumento(artistas) {
    const setInstrumentos = new Set(artistas.map(artista => artista.instrumento));
    const instrumentos = [...setInstrumentos];
    const sumas = [];

    for (const i in instrumentos) {
        sumas[i] = artistas.reduce((suma, artista) => {
            if (artista.instrumento === instrumentos[i]) {
                suma++;
            }
            return suma;
        }, 0);
    }

    const cantidadInstrumento = [];

    for (const i of Object.keys(instrumentos)) {
        const key = instrumentos[i];
        const value = sumas[i];
        cantidadInstrumento.push([key, value]);
    }

    return Object.fromEntries(cantidadInstrumento);
}

// Función 4
function cantidadDeArtistasPorGenero(artistas) {
    const setGeneros = new Set(artistas.map(artista => artista.genero));
    const generos = [...setGeneros];
    const sumas = [];

    for (const i in generos) {
        sumas[i] = artistas.reduce((suma, artista) => {
            if (artista.genero === generos[i]) {
                suma++;
            }
            return suma;
        }, 0);
    }

    const cantidadGenero = [];

    for (const i of Object.keys(generos)) {
        const key = generos[i];
        const value = sumas[i];
        cantidadGenero.push([key, value]);
    }

    return Object.fromEntries(cantidadGenero);
}

// Función 5
function artistasConMasDiscosQue(artistas, cantidadDeDiscos) {
    return artistas.filter(artista => artista.discos.length > cantidadDeDiscos).sort((a, b) => b.discos.length - a.discos.length);
}

// Ejercicio 6
function artistaConMasEntradasVendidas(artistas) {
    masEntradas = 0;
    
    artistas.forEach(artista => {
        if (artista.ultimoRecital.entradasVendidas > masEntradas) {
            masEntradas = artista.ultimoRecital.entradasVendidas;
        }
    });

    return artistas.find(artista => artista.ultimoRecital.entradasVendidas === masEntradas);
}

// Ejercicio 7
function artistaConMayorRecaudacion(artistas) {
    let masRecaudacion = 0;

    artistas.forEach(artista => {
        if (artista.ultimoRecital.entradasVendidas * artista.ultimoRecital.costoEntradas > masRecaudacion) {
            masRecaudacion = artista.ultimoRecital.entradasVendidas * artista.ultimoRecital.costoEntradas;
        }
    });

    return artistas.find(artista => artista.ultimoRecital.entradasVendidas * artista.ultimoRecital.costoEntradas === masRecaudacion);
}

// Ejercicio 8
function artistasConDiscoEnAnyo(artistas, anyo) {
    const output = [];

    artistas.forEach(artista => {
        artista.discos.forEach(disco => {
            if (disco.anioLanzamiento === anyo) {
                output.push(artista);
            }
        });
    });

    return output;
}

// Ejercicio 9
function artistasConMasCopias(artistas) {
    let masCopias = 0;

    artistas.forEach(artista => {
        if (artista.discos.reduce((suma, disco) => suma + disco.copiasVendidas, 0) > masCopias) {
            masCopias = artista.discos.reduce((suma, disco) => suma + disco.copiasVendidas, 0);
        }
    });

    return artistas.find(artista => artista.discos.reduce((suma, disco) => suma + disco.copiasVendidas, 0) === masCopias);
}

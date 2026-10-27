let personas=[
  ["Adrián",47, "Profesor"],
  ["Luisa",60, "Profesor"],
  ["Ana",20, "Estudiante"],
  ["Blas",36, "Estudiante"],
  ["Agustín",50, "Profesor"],
  ["Felipe",25, "Estudiante"],
  ["Pedro",19, "Estudiante"],
  ["Zoraida",36, "Estudiante"],
  ["Juan",36, "Administrativo"],
  ["Toñi",48, "Administrativo"],
  ["Juan",16, "Estudiante"],
  ["Miriam",15, "Estudiante"],
  ["Rosa",75, "Estudiante"],
  ["Pepe",31, "Estudiante"],
  ["Fermín",64, "Estudiante"],
  ["Jose",47, "Profesor"]
];

// diccionario
const ordenCargos = {
  "Profesor": 1,
  "Administrativo": 2,
  "Estudiante": 3
};

personas.sort((a, b) => {
  // ordenar por cargo
  if (ordenCargos[a[2]] != ordenCargos[b[2]]) {
    return ordenCargos[a[2]] - ordenCargos[b[2]];
  }
  
  // ordenar por edad descendente
  if (b[1] != a[1]) {
    return b[1] - a[1];
  }
  
  // ordenar por nombre ascendente
  return a[0].localeCompare(b[0]);
});

console.log(personas);
console.log(personas[0][0] + " de " + personas[0][1] + " años es " + personas[0][2]);
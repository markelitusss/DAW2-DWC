// Ejercicio 3 Programación funcional

const personas = [
    {name: "María", age: 20},
    {name: "Bernardo", age: 28},
    {name: "Pancracio", age: 22},
    {name: "Andrea", age: 19},
    {name: "Sara", age: 29},
    {name: "Jorge", age: 32},
    {name: "Yurena", age: 38},
    {name: "Ayoze", age: 18}
];

const input = parseInt(prompt("Introduce una edad"));
let output = "";

const persona = personas.find(p => p.age === input);

if (persona !== undefined) {
    output += "Primera peronsa con " + input + " años: " + persona.name;
}

console.log(personas.reduce((sum, p) => sum + p.age, 0) / personas.length);
alert(output);
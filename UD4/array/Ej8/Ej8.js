// Ejercicio 8 Arrays

const str = "Jose:García Canales:653101799:example@gmail.com:03181";
const arr = str.split(":");

const arrEmail = arr[3].split("@");

alert("Código postal: " + arr[4] + "\nApellidos: " + arr[1] + 
    "\nEmail: " + arr[3] + "\nServidor: " + arrEmail[1]);

// Escribir un programa que pregunte al usuario su nombre, edad, dirección y teléfono y
// lo guarde en un diccionario. Después debe mostrar por pantalla el mensaje <nombre>
// tiene <edad> años, vive en <dirección> y su número de teléfono es <teléfono>.

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let direccion = prompt("Ingrese su direccion");
let telefono = prompt("Ingrese su telefono");

let datos = {};

datos.nombre = nombre;
datos.edad = edad;
datos.direccion = direccion;
datos.telefono = telefono;

console.log(datos.nombre + " tiene " + datos.edad + " años, vive en " + datos.direccion + " y su numero de telefono es " + datos.telefono);
// Escribir un programa que guarde en un diccionario los precios de las frutas de la tabla, pregunte al usuario por una fruta, un número de kilos y muestre por pantalla el precio de ese número de kilos de fruta. Si la fruta no está en el diccionario debe mostrar un mensaje informando de ello

let frutas = {
    'Platano': 1.35,
    'Manzana': 0.80,
    'Pera': 0.85,
    'Naranja': 0.70
};

let fruta = prompt('Introduce una fruta: ');
let kilos = prompt('Introduce el número de kilos: ');

if (fruta in frutas) {
    console.log(`${kilos} kilos de ${fruta} valen ${frutas[fruta] * kilos}$`);
} else {
    alert(`La fruta ${fruta} no está disponible`);
}
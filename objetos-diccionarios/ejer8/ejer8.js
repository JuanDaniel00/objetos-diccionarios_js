// Diseñar un algoritmo con el siguiente menu:
// 1. Añadir al final: Esta opción debe pedir un número añadirlo al final de la lista.
// 2. Añadir X: Esta opción debe pedir un número y una posición, y si la posición existe en 
// la lista lo añade a ella (la posición se pide a partir de 1). Ej.
// 3. Tamaño: muestra cuantos elementos tiene la lista.
// 4. Eliminar el final: Muestra por pantalla el número final de la lista y lo elimina.
// 5. Eliminar X: Pide una posición, y si la posición existe en la lista lo borra de ella (la 
// posición se pide a partir de 1).
// 6. Contar: deben pedir un número y decir cuántas veces está en la lista.
// 7. Listar: Muestra por pantalla los elementos de la lista
// 8. Salir

let lista = [];
let opcion = 0;
let numero = 0;

while (true) {
    opcion = parseInt(prompt('Introduce una opción'));
    if (opcion === 8) {
        break;
    }
    switch (opcion) {
        case 1:
            numero = parseInt(prompt('Introduce un número'));
            lista.push(numero);
            break;
        case 2:
            numero = parseInt(prompt('Introduce un número'));
            let posicion = parseInt(prompt('Introduce una posición'));
            lista.splice(posicion - 1, 0, numero);
            break;
        case 3:
            console.log('Tamaño: ' + lista.length);
            break;
        case 4:
            console.log('Eliminado: ' + lista.pop());
            break;
        case 5:
            posicion = parseInt(prompt('Introduce una posición'));
            lista.splice(posicion - 1, 1);
            break;
        case 6:
            numero = parseInt(prompt('Introduce un número'));
            let contador = 0;
            for (let i = 0; i < lista.length; i++) {
                if (lista[i] === numero) {
                    contador++;
                }
            }
            console.log('El número ' + numero + ' aparece ' + contador + ' veces');
            break;
        case 7:
            console.log(lista);
            break;
        default:
            console.log('Opción no válida');
            break;
    }
}

console.log('Fin del programa');
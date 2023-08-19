// 5. Escribir un programa que cree un diccionario simulando una cesta de la compra. El programa debe preguntar el artículo y su precio y añadir el par al diccionario, hasta que el usuario decida terminar. Después se debe mostrar por pantalla la lista de la compra y el coste total, con el siguiente formato
// Lista de la compra
// Artículo 1  -  Precio	
// Artículo 2  -  Precio
// Artículo 3  -  Precio
// Total - Coste

let cesta = {};
let articulo = '';
let precio = 0;
let total = 0;

while (true) {
    articulo = prompt('Introduce el artículo 0 para salir');
    if (articulo == 0){
        break;
    }
    precio = parseFloat(prompt('Introduce el precio'));
    cesta[articulo] = precio;
}
console.log('Lista de la compra');
for (let key in cesta) {
    console.log(`${key} - ${cesta[key]}`);
    total += cesta[key];
}
console.log(`Total - ${total}`);


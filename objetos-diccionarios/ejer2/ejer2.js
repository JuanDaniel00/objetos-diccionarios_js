// Escribir un programa que guarde en una variable el diccionario {'Euro':'€', 'Dollar':'$','Yen':'¥'}, pregunte al usuario por una divisa y muestre su símbolo o un mensaje de aviso si la divisa no está en el diccionario.

const divisas = {'Euro':'€', 'Dollar':'$','Yen':'¥'}

let divisa = prompt("Introduce una divisa: ")

if (divisas[divisa] != undefined) {
    alert(divisas[divisa])
} else {
    alert("La divisa no está en el diccionario")
}


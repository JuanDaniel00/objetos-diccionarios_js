// Vamos a almacenar las materias de un grupo (por ejemplo Matemáticas, Física, Química, 
//     Historia y español) en un diccionario y a la vez en una lista, preguntaremos al usuario la 
//     nota que ha sacado en cada una de las materias. Recibiremos materias hasta que el 
//     valor para materia sea “final”.
//     Al final nuestra lista podría verse así: 
//          materias=[
//                  {"matematicas":5.5},
//                  {"fisica":7.8},
//                  {"quimica":9.5},
//              ]
//     Sobre la lista final
//      Elimine de la lista las asignaturas aprobadas. 
//      mostrar por pantalla las asignaturas que el usuario tiene que repetir

let materias = [];
let materia = '';
let nota = 0;
let aprobadas = [];
let reprobadas = [];


while (true) {
    materia = prompt('Introduce la materia o final para salir');
    if (materia === 'final') {
        break;
    }
    nota = parseFloat(prompt('Introduce la nota'));
    materias.push({ [materia]: nota });
}

console.log('Materias');
console.log(materias);

for (let materia in materias) {
    if (materias[materia] >= 5) {
        aprobadas.push(materia);
    } else {
        reprobadas.push(materia);
    }
}

console.log('Aprobadas');
console.log(aprobadas);

console.log('Reprobadas');
console.log(reprobadas);
// # Técnicas tratadas:
// # – Bucle while controlado por centinela
// # – Uso de diccionarios como estructura de datos flexible.
// # – Comprobación de si una clave determinada figura en un diccionario
// # – Modificación de los valores de un diccionario
// # – Iteración sobre todos los elementos (claves – valores) de un diccionario

// # Para entender el problema a resolver, deja que te ponga primero en antecedentes:

// # En determinadas ocasiones, si el profesor debía abandonar la clase para atender alguna gestión externa, encargaba a algún
// # alumno para que se ocupase de mantener el silencio en el aula. En uno de esos días dejó
// # un claro mensaje: «a quien abra la boca lo apuntas en la pizarra».

// # Eran tiempos en los que algunos profesores ejercían y demostraban su autoridad a base de tortazos. Todos sabíamos que aquellos
// # cuyos nombres figurasen en la pizarra recibirían una o varias bofetadas, dependiendo de la magnitud de su falta.

// # Aunque, por lo general, la dureza de los castigos lograba que se mantuvieran callados, siempre había valientes que desafiaban
// # a la autoridad.

// # Ese día quise provocar al pelotilla que vigilaba la clase y abrí la boca. Simplemente la abrí, de ella no salió ningún sonido.
// # Pero el muy tonto me apuntó en la pizarra, tomándose al pie de la letra las instrucciones del profesor.

// # Naturalmente, cuando regresó el maestro recibí la bofetada de rigor. De nada me sirvió alegar que no habia pronunciado ni pío.

// # Ahí estaba mi nombre en la pizarra, injustamente entre los temerarios valientes: (Javier)

// # Diego | | | |
// # Luis | |
// # Javier |

// # Cada barra vertical indicaba el número de veces que el alumno había infringido la regla. Si a mí me dolió, imagínate cómo le
// # quedó la cara a Diego.

// # Si trasladamos esa escena unas cuantas décadas más adelante, quizás el pelota de turno tuviese delante un ordenador portátil o un
// # Smartphone con Python instalado y podría improvisar unas sencillas líneas de código para acometer la tarea impuesta en vez
// # de utilizar la tiza y la pizarra.

// # Estudiemos cómo podríamos resolver el problema…

// # Nos haría falta algún tipo de registro en el que anotar la misma información que escribiríamos en la pizarra: un nombre y el número
// # de faltas cometidas.

// # Son dos campos de naturaleza distinta íntimamente asociados. Podemos pensar en un diccionario, con clave (única e irrepetible)
// # el nombre del osado que se atreve a hablar y como valor el número de veces que lo hace.

// # 1--> Vamos a crear, entonces, un diccionario vacío que iremos rellenando conforme alguien hable.
// # 2--> El programa nos pregunta, por primera vez, quién ha hablado:
// # 3--> Esto lo volverá a preguntar, una y otra vez, hasta que el profesor regrese. Necesitamos un modo de indicar al programa
// #      cuando ha ocurrido esa situación y hemos decidido que sea mediante la introducción de un 0.  Es decir El ciclo se repetirá mientras
// #      la variable empleada para registrar el nombre de quien abra la boca, tenga un valor distinto de '0'. Escribo el cero entre comillas,
// #      pues la función input() devuelve strings aunque aparentemente estemos introduciendo números.

// # Este tipo de bucles se denominan controlados por centinela. Se procesa todan las entradas hasta que llega ese valor especial,
// # el centinela, que indica el final del ciclo.

// # El funcionamiento del bucle es sencillo: comenzamos comprobando si el alumno ya ha incurrido en falta, en cuyo caso incrementamos
// # en una unidad su número. Si no tenía antecedentes previos, creamos la clave en el diccionario con valor inicial uno.

// # Finalmente, una vez ha sido fichado el infractor, el bucle vuelve a preguntar de nuevo por el siguiente charlatán. Y así sucesivamente
// # hasta que el profesor regrese a la clase (momento en el cual se introducirá un cero en vez del nombre de una alumno real).

// # Llegado este punto, el encargado está a punto de mostrar satisfecho al profesor el resultado de su vigilancia:

// # 4--> Muestra e

let pizarron = {};

while (true) {
    let nombre = prompt("Ingrese el nombre del alumno que hablo o 0 para salir").toUpperCase();

    if (nombre == 0) {
        break;
    }

    if (nombre in pizarron) {
        pizarron[nombre] += 1;
    } else {
        pizarron[nombre] = 1;
    }
}

console.log(pizarron);

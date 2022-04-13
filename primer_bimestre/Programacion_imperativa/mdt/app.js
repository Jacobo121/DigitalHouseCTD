const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

//A
/* let doctor = {
    especialidad: function(array) {
       array.map(function (objeto) {
           console.log(objeto.nombre + " - " + objeto.especialidad) 
        })
    },
    
    incrementarHonorario: function(array) {
        array.map(obj => {

        })
    }
}

console.log(doctor.especialidad(arrayProfesionales));
 */




/* A. Utilizar un método de array que retorne los primeros 5 profesionales del
arrayProfesionales. No debe modificar el array original. Guardar el
resultado de este método en una variable primerosCincoProfesionales,
luego hacer la impresión de la misma. */

let primerosCincoProfesionales = arrayProfesionales.slice(0,5)
/* console.log(primerosCincoProfesionales) */


/* B. Utilizar un método de array que permita reemplazar el profesional con ID 14
por un nuevoProfesional. Es decir, se modificará el arrayProfesionales.
Luego, imprimirlo para verificar el cambio. */

const nuevoProfesional = {
    identificador: 250,
    estaHabilitado: true,
    honorarioConsulta: 8000,
    edad: 52,
    nombre: 'Linus Torvalds',
    especialidad: 'Junior Developer',
    cantidadConsultas: 48,
    puntuacion: 50
}

arrayProfesionales.splice(14,1, nuevoProfesional);

/* C. Ahora, necesitamos un método para ordenar el arrayProfesionales según
la propiedad honorarioConsulta de menor a mayor. Mostrar el array
ordenado. */

arrayProfesionales.sort((a,b) => {
    if(a.honorarioConsulta == b.honorarioConsulta) {
      return 0; 
    }
    if(a.honorarioConsulta < b.honorarioConsulta) {
      return -1;
    }
    return 1;
});

/* console.log(arrayProfesionales) */


/* D. Utilizar un método para realizar una búsqueda sobre el arrayProfesionales
del profesional con ID 15. Es decir, que retorne solo un profesional. Asignar
este resultado a una variable, luego realizar la impresión de la misma. */

let unProfesional = arrayProfesionales.find(item => item.identificador == 15);

console.log(unProfesional)



/* Ahora, podemos crear funciones para poder reutilizar todos los métodos que
desarrollamos en estas dos mesas. También, crear una función que, utilizando el
módulo lecturaEscritura, logre hacer la persistencia en el archivo JSON cada vez
que modifiquemos el arrayProfesionales. */
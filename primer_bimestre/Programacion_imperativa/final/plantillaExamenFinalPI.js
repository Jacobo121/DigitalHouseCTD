// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Jacobo Arcila Wagner";
const { json } = require("stream/consumers");
/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const jsonHelper = require("./jsonHelper");

let restaurante = {

// B
    recetas: jsonHelper.leerJson("recetas"),

// C
    buscarPorNombre: function(nombre) {
        return this.recetas.find(obj => obj.nombre == nombre)
    },
// D
    filtrarPorTiempo: function(tiempo) {
        return this.recetas.filter(obj => obj.tiempo < tiempo)
    }, 
// E
    ordenarPorDificultad: function() {
        return this.recetas.sort((a, b) => b.dificultad - a.dificultad)
    }, 

// F
    duracionPromedio: function() {
        let sum = this.recetas.reduce((acum, obj) => acum + obj.tiempo, 0)
        return `La duración promedio de todas las recetas es de ${(sum / this.recetas.length).toFixed(2)} minutos`
    },
// G
    incrementarPrecio: function(nombre, precioNuevo) {
        let receta = this.buscarPorNombre(nombre)
        if(receta) {
            receta.precio += precioNuevo;
            jsonHelper.escribirJson("recetas", this.recetas);
            return receta
        }
    }

}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log("---------- ↧ .C. Buscar ↧ ----------");
console.log(restaurante.buscarPorNombre("Hojaldre de espárragos trigueros"))
console.log("---------- ↥ ---------- ↥ ----------");

console.log("---------- ↧ .D. Filtrar ↧ ----------");
console.log(restaurante.filtrarPorTiempo(40))
console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .E. Ordenar ↧ ----------");
console.log(restaurante.ordenarPorDificultad())
console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .F. Total ↧ ----------");
console.log(restaurante.duracionPromedio())
console.log("---------- ↥ ----------- ↥ ----------");

console.log("---------- ↧ .G. Modificar ↧ ----------");
console.log(restaurante.incrementarPrecio("Pastel de remolacha salado", 91))
console.log("---------- ↥ --------- ↥ ----------");


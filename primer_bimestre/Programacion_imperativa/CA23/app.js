const jsonHelper = require("./jsonHelper");

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A
let carreraBici = {
  // B
  bicicletas: jsonHelper.leerJson("bicicletas"),

  // C
  /* Agregar una propiedad llamada "bicicletasPorTanda" que contenga el valor 4. Este valor representará la cantidad máxima de bicicletas por tanda. */

  bicicletasPorTanda: 4,

  // D
  /* Agregar un método "ciclistasHabilitados" que devuelva una lista donde los ciclistas tengan un dopaje negativo.
	Este método no recibirá ningún parámetro.
	Este método devolverá un array con los ciclistas que estén habilitados para correr. */
  ciclistasHabilitados: function () {
    return this.bicicletas.filter((bicicleta) => bicicleta.dopaje === false);
  },
  // E
  /* Agregar un método buscarPorId que permita buscar un ciclista en función de su id.
	Este método recibirá por parámetro un number que represente el id a buscar
	En caso de encontrar un ciclista con el id buscado, devolverá el objeto literal que lo representa.
	En caso contrario devolverá undefined */

  buscarPorId: function (id) {
    return this.bicicletas.find((bicicleta) => bicicleta.id === id);
  },

  // F
  /* Agregar un método filtrarPorPeso que permita filtrar los ciclistas habilitados, siempre y cuando su peso sea menor o igual al enviado como argumento. */

  filtrarPorPeso: function(peso) {
    return this.ciclistasHabilitados().filter((bicicleta) => bicicleta.peso <= peso)
  },



  // G
  /* Agregar un método ordenarPorRodado que ordene todas las bicicletas de menor a mayor según su rodado. */

  ordenarPorRodado: function() {
      return this.bicicletas.sort((a, b) => a.rodado - b.rodado)
  },

  // H
  /* Agregar un método largoPromedio que permita saber el largo promedio de todas las bicicletas. */

  largoPromedio: function() {
      let Jacobo = this.bicicletas.reduce((acum, bicicletas) => acum + bicicletas.largo, 0);
      let JacoboPromedio = Jacobo / this.bicicletas.length;
      return JacoboPromedio;
  },
  // I
  /* Agregar un método aumentarPeso, el cual deberá aumentar el peso de una bicicleta y guardar los cambios en la base de datos.
	El método recibirá por parámetro un número indicando la cantidad a aumentar (en kg) y un id, y debe reutilizar el método buscarPorId.
	en caso de encontrar una bicicleta con dicho id deberá:
	Aumentar su peso (sumar la cantidad indicada a la existente)
	Guardar los datos en el archivo JSON. */

  aumentarPeso: function (kg, id) {
    let ciclista = this.buscarPorId(id);
    ciclista.peso += kg;
    // ciclista.peso = ciclista.peso + kg
    jsonHelper.escribirJson("bicicletas", this.bicicletas);
    return ciclista;
  },
  // J

  // K
}; // FIN Objeto

/******************************/
/* Ejecución de las consignas */
/******************************/

console.log("---------- ↧ .D. ↧ ----------");
console.table(carreraBici.ciclistasHabilitados());
console.log("---------- ↥ ---------- ↥ ----------");

console.log("---------- ↧ .E.  ↧ ----------");
console.table(carreraBici.buscarPorId(1));
console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .F. ↧ ----------");

console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .G. ↧ ----------");
// Ejecución aquí:
console.log("---------- ↥ ----------- ↥ ----------");

console.log("---------- ↧ .H.  ↧ ----------");
// Ejecución aquí:
console.log("---------- ↥ --------- ↥ ----------");

console.log("---------- ↧ .I.  ↧ ----------");
console.table(carreraBici.aumentarPeso(8.5, 1));
console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .J.  ↧ ----------");
// Ejecución aquí:
console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .K.  ↧ ----------");
// Ejecución aquí:
console.log("---------- ↥ ------------- ↥ ----------");

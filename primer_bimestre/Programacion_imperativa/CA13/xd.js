
const inmobiliaria = {
    departamentos: [
      {
        id: 1,
        propietarios: "Luis Perez",
        cantidadHabitacion: 2,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 2,
        precioAlquiler: 2395.8,
      },
      {
        id: 2,
        propietarios: "Luis Perez y María Martinez",
        cantidadHabitacion: 1,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 2,
        precioAlquiler: 1765,
      },
      {
        id: 3,
        propietarios: "Laura García",
        cantidadHabitacion: 2,
        disponible: false,
        aceptaMascotas: false,
        cantidadPersonas: 4,
        precioAlquiler: 3993,
      },
      {
        id: 4,
        propietarios: "Julieta Tols",
        cantidadHabitacion: 1,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 1,
        precioAlquiler: 1996.5,
      },
      {
        id: 5,
        propietarios: "Julieta Tols y Pablo Groming",
        cantidadHabitacion: 1,
        disponible: false,
        aceptaMascotas: false,
        cantidadPersonas: 1,
        precioAlquiler: 11979,
      },
      {
        id: 6,
        propietarios: "Pablo Groming",
        cantidadHabitacion: 2,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 3,
        precioAlquiler: 4658.5,
      },
      {
        id: 7,
        propietarios: "Luis Perez",
        cantidadHabitacion: 2,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 3,
        precioAlquiler: 3327.5,
      },
      {
        id: 8,
        propietarios: "Julieta Tols",
        cantidadHabitacion: 3,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986,
      },
      {
        id: 9,
        propietarios: "Julieta Tols y Laura García",
        cantidadHabitacion: 3,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986,
      },
      {
        id: 10,
        propietarios: "Julieta Tols y Laura García",
        cantidadHabitacion: 3,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986,
      },
      {
        id: 11,
        propietarios: "Luis Perez",
        cantidadHabitacion: 3,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986,
      },
      {
        id: 12,
        propietarios: "Juan Pablo Martinez",
        cantidadHabitacion: 3,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986,
      },
      {
        id: 13,
        propietarios: "Juan Pablo Martinez",
        cantidadHabitacion: 2,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 2,
        precioAlquiler: 4059.55,
      },
      {
        id: 14,
        propietarios: "Juan Pablo Martinez",
        cantidadHabitacion: 1,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 2,
        precioAlquiler: 3993,
      },
      {
        id: 15,
        propietarios: "Martín Gutierrez y José Torres",
        cantidadHabitacion: 0,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 1,
        precioAlquiler: 798.6,
      },
      {
        id: 16,
        propietarios: "Martín Gutierrez y José Torres",
        cantidadHabitacion: 0,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 1,
        precioAlquiler: 798.6,
      },
      {
        id: 17,
        propietarios: "Martín Gutierrez y José Torres",
        cantidadHabitacion: 0,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 1,
        precioAlquiler: 665.5,
      },
    ],
      departamentosDisponibles: function(){
          let libres = []
          for(let i=0;i<this.departamentos.length;i++){
              if(this.departamentos[i].disponible == true)  {
                  libres.push(this.departamentos[i])
              }
          }
          return libres
      },
      buscarPorId: function(identificador){
      for (let i = 0; i < this.departamentos.length ; i++){
        if (identificador === this.departamentos[i].id){
          return this.departamentos[i];
        }
      }
      },
      buscarPorPrecio: function (Precio) {
        let listado = [ ]
        for (let i = 0; i < this.departamentosDisponibles().length; i++) {
           
          if ( this.departamentosDisponibles()[i].precioAlquiler <= Precio ) {
            listado.push(this.departamentosDisponibles()[i])
          }
        }

        return listado
      }


  } // fin obj inmobiliaria
  
  /***********************************/
  /*   ↧ Ejecución de consignas ↧    */
  /***********************************/
  /* console.log("---------- ↧ Punto A ↧ ----------"); */
 /*  let resultadoDeptosDisponibles = inmobiliaria.departamentosDisponibles()
  console.log(resultadoDeptosDisponibles) */
  
  /* console.log("---------------------------------");
  console.log(inmobiliaria.buscarPorPrecio(1000)) */
  
  /* console.log("---------- ↧ Punto B ↧ ----------");
  let resultadoID = inmobiliaria.buscarPorId(7);
  console.log(resultadoID) */
  /* function tablaDeMultiplicar(numero) {
  for (let index = 0; index <= 10; index++) {
    return index
  }
} */
for (let index = 0; index < 10; index++) {
  console.log(index)
}
/* console.log(tablaDeMultiplicar(8)) */
// Te proveemos la siguiente plantilla que tiene tres partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados, el cual parte de un obj. literal creado con una prop libros que contiene nuestra base de datos.
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados.
/***********************************/
/* ↧ Desarrollo de las consignas ↧ */
/***********************************/
const bookstore = {
  libros: [
    {
      titulo: "Los Dias del Venado",
      autor: "Liliana Bodoc",
      editorial: "Debolsillo",
      fechaPublicacion: 2018,
      stock: 76,
      precio: 1399,
    },
    {
      titulo: "Los Dias de la Sombra",
      autor: "Liliana Bodoc",
      editorial: "Debolsillo",
      fechaPublicacion: 2018,
      stock: 29,
      precio: 1399,
    },
    {
      titulo: "Los Dias del Fuego",
      autor: "Liliana Bodoc",
      editorial: "Debolsillo",
      fechaPublicacion: 2018,
      stock: 65,
      precio: 1650,
    },
    {
      titulo: "El Silmarillion",
      autor: "J.r.r. Tolkien",
      editorial: "Minotauro",
      fechaPublicacion: 2010,
      stock: 7,
      precio: 2550,
    },
    {
      titulo: "Trilogia El Señor De Los Anillos",
      autor: "J.r.r. Tolkien",
      editorial: "Minotauro",
      fechaPublicacion: 2002,
      stock: 10,
      precio: 7770,
    },
    {
      titulo: "El Resplandor",
      autor: "Stephen King",
      editorial: "Debolsillo",
      fechaPublicacion: 2012,
      stock: 51,
      precio: 2599,
    },
    {
      titulo: "Doctor Sueño",
      autor: "Stephen King",
      editorial: "Debolsillo",
      fechaPublicacion: 2016,
      stock: 42,
      precio: 2599,
    },
    {
      titulo: "La Sombra",
      autor: "John Katzenbach",
      editorial: "Ediciones B",
      fechaPublicacion: 1995,
      stock: 85,
      precio: 2149,
    },
    {
      titulo: "Primera Persona Del Singular",
      autor: "Haruki Murakami",
      editorial: "Tusquets",
      fechaPublicacion: 2021,
      stock: 60,
      precio: 1790,
    },
    {
      titulo: "Fuego y Sangre",
      autor: "George r.r. Martin",
      editorial: "Plaza & Janes",
      fechaPublicacion: 2018,
      stock: 78,
      precio: 4449,
    },
  ],
  buscarPorTitulo: function(titulo) {
      let libro;
      for(let i = 0; i < this.libros.length; i++) {
            if(titulo === this.libros[i].titulo) {
            return libro = this.libros[i]
          }
      }
      return libro
  },
  buscarPorAutor: function(autor) {
      let libros_autor = []
      for (let i = 0; i < this.libros.length; i++) {
        if(autor == this.libros[i].autor) {
            libros_autor.push(this.libros[i])
        } else {
          return "No no hay"
        }
      }
      return libros_autor
  },
  filtrarPorPrecio: function(precio) {
      let libros_precio = [];
      for (let i = 0; i < this.libros.length; i++) {
          if( this.libros[i].precio <= precio) {
            libros_precio.push(this.libros[i])
          }
      }
      return libros_precio
  },
  modificarStock: function(titulo, stock) {
        let libro_titulo = this.buscarPorTitulo(titulo)
        libro_titulo.stock = stock 
        return libro_titulo
  },

    precioPromedio: function() {
        let suma = 0;
        for (let i = 0; i < this.libros.length; i++) {
            suma = suma + this.libros[i].precio
        }
        console.log(suma)
        let division = suma / this.libros.length;
        return `El precio promedio de cada libro es de: ${division}`
    }
};

/***********************************/
/*   ↧ Ejecución de consignas ↧    */
/***********************************/
console.log("---------- ↧ Punto A ↧ ----------");
console.log(bookstore.buscarPorTitulo("Primera Persona Del Singular"))

console.log("---------------------------------");

console.log("---------- ↧ Punto B ↧ ----------");
console.log(bookstore.buscarPorAutor("J.r.r. Tolkien"))

console.log("---------------------------------");

console.log("---------- ↧ Punto C ↧ ----------");
console.log(bookstore.filtrarPorPrecio(1399))
// Ejecución aquí ↧

console.log("---------------------------------");

console.log("---------- ↧ Punto D ↧ ----------");
console.log(bookstore.modificarStock("Fuego y Sangre", 20))

console.log("---------------------------------");

console.log("---------- ↧ Punto E ↧ ----------");
console.log(bookstore.precioPromedio())

console.log("---------------------------------");
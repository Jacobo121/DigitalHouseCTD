/* function dominio(string = "digitalhouse.com.ar") {
    return "https://www." + string
}

console.log(dominio()) */

/* let texto = "hola"
console.log(texto.length); */

/* function reemplazoFastFast(texto, palabra_reemplazar, palabra) {
    return texto.replace(palabra_reemplazar, palabra)
}

console.log(reemplazoFastFast("Hola como estas", "Hola", "Buenos Dias")) */

/* function menciona(texto, palabra) {
    let respuesta = texto.indexOf(palabra);
    return respuesta == -1 ? false : true
}

console.log(menciona("hola, me gusta programar", "gusta")); */

/* let fra = "¡Hola!, soy Carli"
let licenciada = frase.slice(12)
console.log(licenciada) */

/* let str = "un string cualquiera";
let arrayAleatorio = ["Digital", "House", true, "string", "123","false", 54, str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1]) */

/* let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];



function upper(array) {
    console.log(array[0].toUpperCase())
    array[1].toUpperCase()
    array[2].toUpperCase()
    
    return array[4].toUpperCase() 
}

console.log(upper(peliculas)) */
/* let peliculas = [ "star wars", "totoro", "pulp fiction", "la vida es bella" ]

let peliculas2 = ['toy story', 'finding nemo', 'kung-fu panda', 'wally', 'fortnite']


function sumUpper (array1, array2) {
  array1 = array1.concat(array2)
  array1[0] = array1[0].toUpperCase()
  array1[1] = array1[1].toUpperCase()
  array1[2] = array1[2].toUpperCase()
  array1[3] = array1[3].toUpperCase()
  array1[4] = array1[4].toUpperCase()
  array1[5] = array1[5].toUpperCase()
  array1[6] = array1[6].toUpperCase()
  array1[7] = array1[7].toUpperCase()
  array1[8] = array1[8].toUpperCase()
  return array1 = array1
}

sumUpper(peliculas, peliculas2)
console.log(peliculas)
 */
/* function convertiAMayusculas(array) {

    for(let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase()
    }

    return array
}

console.log(convertiAMayusculas(peliculas))  */

/* let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

let peliculas_animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]



function pasajeDeElementos(array1, array2) {

    for(let i = 0; i < array1.length; i++) {
        array1.push(array2)
    }
    return array1
}

console.log(pasajeDeElementos(peliculas, peliculas_animadas)) */

/* let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
];

let fraseNueva = arrayFrase.join(" ");

console.log(fraseNueva) */

let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
];

let mariana = {
    nombre: "Mariana",
    promedio: 9,
    curso: "Full Stack"
}

let francisco = {
    nombre: "Francisco",
    promedio: 2,
    curso: "Android"
}

estudiantes.unshift(mariana)
estudiantes.unshift(francisco)
console.log(estudiantes)
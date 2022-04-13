// Crear una función que convierta pulgadas en centímetros.
// Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

let convertirACM = (pulgadas) => pulgadas * 2.54;
console.log(convertirACM(1));

// Crear una función que recibe un string y lo convierte en una una URL. 
// ej: “pepito” es devuelto como “http://www.pepito.com”

let convertirAURL = (dominio) => "https://www." + dominio + ".com";
console.log(convertirAURL("NoEntiendoNada"));


/* 3. Crear una función que recibe un string y devuelve la misma frase pero con
admiración. */

let convertirConAdmiracion = (string) => "¡" + string + "!";
console.log(convertirConAdmiracion("Hola"))

/* 4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos. */

let edadPerros = edad => edad * 7;
console.log(edadPerros(4))

/* 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro. */

let calcularHoraTrabajo = sueldo => sueldo / 40;
console.log(calcularHoraTrabajo(50000)) 

/* 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el imc de una persona. Luego, ejecutar la función
probando diferentes valores. */

let calculadorIMC = (peso, altura) => peso / (altura * altura);
console.log(calculadorIMC(70, 1.72));

/* 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne. */

let convertirMayus = string => string.toUpperCase();
console.log(convertirMayus("Hola"))

/* 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro. */

let tipoDeDato = dato => typeof dato;
console.log(tipoDeDato(3));

/* 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia */

let radioCirculo = (radio) => {
    let resultado = 2 * Math.PI * radio;
    return resultado.toFixed(2) + " cm2"
}
console.log(radioCirculo(30));








const nombres = ['Martin','Homero','Cosme','Steven','Adam'];

let h = obj => {
    obj.forEach(i => {
        console.log(i + "Hola")
    })
}

h(nombres)

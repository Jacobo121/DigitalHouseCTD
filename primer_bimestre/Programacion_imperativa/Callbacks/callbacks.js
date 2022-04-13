const nombres = ['Martin','Homero','Cosme','Steven','Adam'];
function buscarNombre(nombre, callback){
    let apodo = ""
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i] == nombre) {
            apodo = nombre
        } 
    }
    callback(apodo)
}

function mostrarResultado(res) {
    if(res == "") {
        console.log(`No se encontró el nombre`)
    } else {
        console.log("El nombre fue encontrado")
    }
}

//Ejemplo de invocacion
console.log(buscarNombre('', mostrarResultado)); //El nombre Martin fue encontrado
 

/* 
let procesar = (array, callback) => {
    let web = [];
    for (let i = 0; i < array.length; i++) {
        web.push(callback(array[i]))
    }
    return web
}

let agregarHttp = (url) => `http://${url}`;

let largoString = (url) => url.length;



let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]

let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
console.log(largoDeElmentos); // imprime [ 14, 13 ] */

/* function suma(num1, num2) {
 return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2
}

function multiplicacion(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1 / num2
}

function calculadora(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calculadora(1,1,suma)) */

/* function agregarHttp(url) {
    return "http://" + url 
}

function procesar(array, callback){
   array2 = []
   for( i = 0; i < array.length; i++){
       array2.push(callback(array[i]))
   }
   return array2
}


console.log(procesar(["www.google.com/","www.yahoo.com"], agregarHttp)) */

/* function doble(num1) {
    return num1 * 2
}

function triple(num1) {
    return num1 * 3
}

function aplicarCallback(num1, callback) {
    return callback(num1)
};

console.log(aplicarCallback(2, doble)) */